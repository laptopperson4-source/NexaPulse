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
  <small>© {new Date().getFullYear()} NexaPulse. All rights reserved.</small>
</footer>