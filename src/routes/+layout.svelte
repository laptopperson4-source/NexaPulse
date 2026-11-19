<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';
  import BrandMark from '$lib/BrandMark.svelte';
  import '../app.css';

</script>

<svelte:head>
  <meta name="theme-color" content="#f3f1ef" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <meta property="og:site_name" content="NexaPulse" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="site-frame">
  <SiteHeader />
  <main class="site-main"><slot /></main>
  <footer class="site-footer">
    <a class="footer-brand" href="/"><BrandMark size={30} /><span class="footer-brand-name">NexaPulse</span><sup>®</sup></a>
    <p>Independent digital software company.</p>
    <nav aria-label="Footer navigation">
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <a href="/founder">Founder</a>
      <a href="/contact">Contact</a>
    </nav>
    <nav class="footer-socials" aria-label="NexaPulse social accounts">
      <a href="https://x.com/nexapulsestudio" target="_blank" rel="noopener noreferrer" aria-label="NexaPulse on X" title="X">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" fill="currentColor"/></svg>
      </a>
      <a href="https://www.instagram.com/nexapulse_studio/" target="_blank" rel="noopener noreferrer" aria-label="NexaPulse on Instagram" title="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.1A2.9 2.9 0 0 0 4.1 7v10A2.9 2.9 0 0 0 7 19.9h10a2.9 2.9 0 0 0 2.9-2.9V7A2.9 2.9 0 0 0 17 4.1H7Zm5 3.1a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2.1a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.1-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" fill="currentColor"/></svg>
      </a>
      <a href="https://www.youtube.com/@nexapulse_studio" target="_blank" rel="noopener noreferrer" aria-label="NexaPulse on YouTube" title="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" fill="currentColor"/></svg>
      </a>
      <a href="https://www.tiktok.com/@abubakaroine" target="_blank" rel="noopener noreferrer" aria-label="NexaPulse founder on TikTok" title="TikTok">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 6.2a5.4 5.4 0 0 1-3.4-4.7V1h-4.1v15.1a3.1 3.1 0 1 1-2.7-3.1v-4.2a7.3 7.3 0 1 0 6.8 7.3V8.5a9.4 9.4 0 0 0 5.5 1.8V6.2h-2.1Z" fill="currentColor"/></svg>
      </a>
      <a href="https://github.com/nexapulsestudio" target="_blank" rel="noopener noreferrer" aria-label="NexaPulse on GitHub" title="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.2 4.2 18.2 4.5 18.2 4.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" fill="currentColor"/></svg>
      </a>
    </nav>
    <small>© {new Date().getFullYear()} NexaPulse. All rights reserved.</small>
  </footer>
</div>
