<script>
  import { onMount } from "svelte";

  let host;

  onMount(() => {
    let disposed = false;
    let renderer;
    let observer;
    let frame = 0;
    let scene;
    let globe;
    let resize;

    (async () => {
      const THREE = await import("three");
      if (disposed || !host) return;

      scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 5.15);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.18;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.className = "globe-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x55545a, 2.0));
      const key = new THREE.DirectionalLight(0xffffff, 4.2);
      key.position.set(-3.5, 4.5, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xc7d0dc, 2.0);
      fill.position.set(4, 1, 2);
      scene.add(fill);
      const rim = new THREE.DirectionalLight(0xffffff, 3.2);
      rim.position.set(1.5, -2.5, -4);
      scene.add(rim);

      const textureCanvas = document.createElement("canvas");
      textureCanvas.width = 2048;
      textureCanvas.height = 1024;
      const ctx = textureCanvas.getContext("2d");
      ctx.fillStyle = "#c9cbcd";
      ctx.fillRect(0, 0, 2048, 1024);

      // Equirectangular land silhouettes; deliberately subtle, like engraved metal.
      const land = [
        [[.08,.20],[.12,.13],[.18,.12],[.22,.18],[.25,.25],[.23,.31],[.27,.36],[.24,.43],[.20,.45],[.18,.53],[.14,.49],[.12,.42],[.09,.39],[.07,.30]],
        [[.27,.48],[.31,.43],[.35,.46],[.37,.54],[.35,.62],[.33,.72],[.30,.81],[.28,.75],[.27,.65],[.25,.57]],
        [[.43,.20],[.48,.13],[.55,.12],[.60,.17],[.64,.15],[.70,.20],[.73,.28],[.69,.33],[.65,.31],[.61,.37],[.56,.34],[.52,.39],[.47,.34],[.44,.28]],
        [[.48,.40],[.54,.39],[.59,.44],[.61,.53],[.58,.63],[.55,.73],[.51,.80],[.48,.72],[.46,.62],[.44,.52]],
        [[.72,.45],[.77,.41],[.82,.44],[.86,.51],[.84,.60],[.80,.63],[.76,.57]],
        [[.87,.18],[.91,.20],[.94,.27],[.92,.33],[.89,.29]]
      ];
      ctx.fillStyle = "#aeb1b4";
      ctx.strokeStyle = "rgba(255,255,255,.42)";
      ctx.lineWidth = 3;
      for (const polygon of land) {
        ctx.beginPath();
        polygon.forEach(([x,y], i) => i ? ctx.lineTo(x*2048,y*1024) : ctx.moveTo(x*2048,y*1024));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      // Fine, directional grain gives the surface a brushed-metal finish.
      ctx.globalAlpha = .09;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      for (let y=0; y<1024; y+=5) {
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(2048,y+2); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      const surfaceTexture = new THREE.CanvasTexture(textureCanvas);
      surfaceTexture.colorSpace = THREE.SRGBColorSpace;
      surfaceTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const group = new THREE.Group();
      scene.add(group);
      const sphereGeometry = new THREE.SphereGeometry(1.52, 160, 160);
      const sphereMaterial = new THREE.MeshPhysicalMaterial({
        map: surfaceTexture,
        color: 0xe7e8e9,
        metalness: .72,
        roughness: .29,
        clearcoat: .85,
        clearcoatRoughness: .2
      });
      globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
      group.add(globe);

      // Latitude and longitude are real curved 3D lines, not a flat overlay.
      const lineMaterial = new THREE.MeshStandardMaterial({
        color: 0x62676d, metalness: .62, roughness: .36,
        transparent: true, opacity: .62
      });
      const addCurve = (points, radius = .009) => {
        const curve = new THREE.CatmullRomCurve3(points);
        const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 180, radius, 6, false), lineMaterial);
        group.add(mesh);
      };
      const r = 1.526;
      for (let lat=-60; lat<=60; lat+=30) {
        const phi = THREE.MathUtils.degToRad(lat);
        const ring = [];
        for (let i=0; i<=180; i++) {
          const theta = (i/180)*Math.PI*2;
          ring.push(new THREE.Vector3(r*Math.cos(phi)*Math.sin(theta), r*Math.sin(phi), r*Math.cos(phi)*Math.cos(theta)));
        }
        addCurve(ring, lat===0 ? .010 : .0065);
      }
      for (let lon=0; lon<180; lon+=30) {
        const theta = THREE.MathUtils.degToRad(lon);
        const meridian = [];
        for (let i=0; i<=180; i++) {
          const phi = (i/180)*Math.PI*2;
          meridian.push(new THREE.Vector3(r*Math.sin(phi)*Math.sin(theta), r*Math.cos(phi), r*Math.sin(phi)*Math.cos(theta)));
        }
        addCurve(meridian, .0065);
      }

      // A thin polished edge catches the rim light without looking like an icon outline.
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.545, 96, 96),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .055, side: THREE.BackSide })
      );
      group.add(atmosphere);

      resize = () => {
        if (!host || !renderer) return;
        const width = Math.max(1, host.clientWidth);
        const height = Math.max(1, host.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      observer = new ResizeObserver(resize);
      observer.observe(host);
      resize();

      const clock = new THREE.Clock();
      const animate = () => {
        if (disposed) return;
        const t = clock.getElapsedTime();
        group.rotation.y = -0.34 + Math.sin(t * .22) * .22 + t * .055;
        group.rotation.x = -0.10 + Math.sin(t * .17) * .035;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      animate();
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
      scene?.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
    };
  });
</script>

<div class="hero-globe" bind:this={host} role="img" aria-label="A slowly rotating, three-dimensional brushed-silver globe with raised curved latitude and longitude lines"></div>

<style>
  .hero-globe { width: 100%; height: 100%; }
</style>
