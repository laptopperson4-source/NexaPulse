<script lang="ts">
  export let size = 36;
</script>

<svg class="nexapulse-mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
  <path d="M10 36V12L36 36V12" />
  <path class="signal" d="M5 25H15L19 17L24 33L29 23H42" />
</svg>

<style>
  .nexapulse-mark{display:block;flex:none;overflow:visible}
  .nexapulse-mark path{fill:none;stroke:var(--ink,#292529);stroke-width:2.7;stroke-linecap:square;stroke-linejoin:round}
  .nexapulse-mark .signal{stroke:var(--accent,#741d31);stroke-linecap:round;stroke-linejoin:round}
</style>
