<svelte:head>
  <title>Abubakar Ahmed Oine | Founder of NexaPulse</title>
  <meta name="description" content="Abubakar Ahmed Oine is the founder of NexaPulse, an independent digital software company building applications, platforms and software products." />
  <meta name="author" content="Abubakar Ahmed Oine" />
  <link rel="canonical" href="https://nexapulse.pro/founder" />
  <meta property="og:title" content="Abubakar Ahmed Oine | Founder of NexaPulse" />
  <meta property="og:description" content="Meet Abubakar Ahmed Oine, founder of NexaPulse. Read his story and approach to building independent digital software products." />
  <meta property="og:url" content="https://nexapulse.pro/founder" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Abubakar Ahmed Oine — Founder of NexaPulse",
    "url": "https://nexapulse.pro/founder",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://nexapulse.pro/founder#person",
      "name": "Abubakar Ahmed Oine",
      "jobTitle": "Founder",
      "url": "https://nexapulse.pro/founder",
      "description": "Abubakar Ahmed Oine is the founder of NexaPulse, an independent digital software company.",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://nexapulse.pro/#organization",
        "name": "NexaPulse",
        "url": "https://nexapulse.pro/"
      }
    }
  })}</script>
  <link rel="canonical" href="https://nexapulse.pro/founder" />
  <meta property="og:title" content="The Founder of NexaPulse | Company Story" />
  <meta property="og:description" content="The story, principles and long-term ambition behind NexaPulse." />
  <meta property="og:url" content="https://nexapulse.pro/founder" />
</svelte:head>

<script lang="ts">
  let nameExpanded = false;
</script>

<section class="founder-page page-shell">
  <header class="founder-hero">
    <p class="eyebrow">THE PERSON BEHIND THE COMPANY</p>
    <h1>The Founder<span>.</span></h1>
    <button class="founder-name" type="button" aria-expanded={nameExpanded} aria-label={nameExpanded ? "Show Abubakar Oine" : "Reveal full name, Abubakar Ahmed Oine"} onclick={() => nameExpanded = !nameExpanded}>
      <span class="name-first-group"><span class="name-first">Abubakar</span><span class:revealed={nameExpanded} class="name-middle" aria-hidden="true">Ahmed</span></span><span class:shifted={nameExpanded} class="name-last">Oine</span><span class:shifted={nameExpanded} class="name-line" aria-hidden="true"></span>
    </button>
    <p class="founder-lede">Building technology from the ground up, learning through experience.</p>
    <p class="founder-identity">Abubakar Ahmed Oine is the founder of NexaPulse, an independent digital software company developing applications, platforms and software systems.</p>
  </header>

  <div class="founder-content">
    <section class="founder-section">
      <p class="founder-section-index">01 / THE BEGINNING</p>
      <div class="founder-section-copy">
        <h2>Why I started NexaPulse</h2>
        <p>I started building websites and apps when I was 13. I had no training and no connection to the tech industry. I was curious, and I wanted to see what I could make.</p>
      </div>
    </section>

    <section class="founder-section">
      <p class="founder-section-index">02 / THE EARLIER ATTEMPTS</p>
      <div class="founder-section-copy">
        <h2>The earlier attempts</h2>
        <p>My first project was Afrotech. I knew very little, but it taught me how websites and apps get built.</p>
        <p>As I learned more, I moved on and started Nexasphere. That one taught me something different: ideas and products aren't enough on their own. A company needs structure and direction. Nexasphere had neither. It spread across too many things, and I hadn't built the organisation to hold them together. So I started over, this time knowing more about what to do and what to avoid.</p>
        <p>That became NexaPulse. We're now moving into production, with a growing team and projects across several areas of technology.</p>
      </div>
    </section>

    <section class="founder-section">
      <p class="founder-section-index">03 / HOW I BUILD</p>
      <div class="founder-section-copy">
        <h2>How I build</h2>
        <p>I set the foundations of each product. I work out the concept, decide the direction and build the base, then hand it to the team to refine.</p>
        <p>The team includes developers, designers and engineers. I don't expect them to keep my work exactly as I left it. I want them to question my decisions, try other approaches and improve what's there. That's why we have people with different skills. The aim is better products, not copies of my ideas.</p>
        <p>Three things guide how we build:</p>
        <ul class="founder-principles">
          <li><strong>Solve real problems.</strong> Our products should address problems people actually have.</li>
          <li><strong>Keep it usable.</strong> Technology should be easy to pick up and not harder to operate than it needs to be.</li>
          <li><strong>Hold a high standard.</strong> A product that works isn't automatically a good one. We judge it by the quality of what it delivers.</li>
        </ul>
        <p>I also don't treat technical limits as the end of an idea. If a project hits something that looks impossible, I'm willing to pause the main work and dig into that one problem. We'll either develop the missing technology or find another way to get the same result.</p>
      </div>
    </section>

    <section class="founder-section">
      <p class="founder-section-index">04 / THE LONG VIEW</p>
      <div class="founder-section-copy">
        <h2>Beyond software</h2>
        <p>I don't want NexaPulse to stop at apps and software platforms. Over time, I want it to grow into other industries, including engineering and machinery.</p>
        <p>I'm drawn to things that are possible but haven't been tried, either because nobody noticed the opportunity or nobody chose to pursue it. My hope is that what we make becomes so useful that people find it hard to imagine life without it.</p>
        <p>I don't measure that by the size of the company. I'd rather be judged by what we've actually made.</p>
        <p>As NexaPulse grows, we also plan to launch <strong>NexaPulse AI</strong>, a separate company focused on building AI products and developing them into full startups.</p>
        <p class="founder-closing">NexaPulse is where that has taken me so far, and I plan to take it a lot further.</p>
      </div>
    </section>
  </div>
</section>


<style>
  .founder-identity{max-width:620px;margin:22px 0 0;color:var(--muted);font-size:15px;line-height:1.75}
  .founder-name{display:inline-flex;align-items:center;position:relative;margin:30px 0 0;padding:8px 0;background:transparent;border:0;color:var(--ink);font:inherit;font-size:clamp(27px,4vw,43px);font-weight:400;letter-spacing:-.055em;cursor:pointer;text-align:left}
  .name-first-group{position:relative;display:inline-block}
  .name-middle{position:absolute;left:calc(100% + .24em);top:0;opacity:0;transform:translateX(-7px);transition:opacity .18s ease-out,transform .24s ease-out;white-space:nowrap;pointer-events:none}
  .name-middle.revealed{opacity:1;transform:translateX(0)}
  .name-last{display:inline-block;margin-left:.24em;transform:translateX(0);transition:transform .28s cubic-bezier(.2,.8,.2,1)}
  .name-last.shifted{transform:translateX(3.05em)}
  .name-line{display:block;position:relative;flex:0 0 1.5px;width:1.5px;height:42px;margin-left:20px;background:rgba(116,29,49,.28);opacity:.82;transform:translateX(0);transition:transform .28s cubic-bezier(.2,.8,.2,1)}
  .name-line.shifted{transform:translateX(3.05em)}
  .founder-name:focus-visible{outline:2px solid var(--accent);outline-offset:7px;border-radius:2px}
  @media(prefers-reduced-motion:reduce){.name-middle,.name-last,.name-line{transition:none}}
</style>
