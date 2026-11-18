<script lang="ts">
  import { page } from '$app/state';
  import BrandMark from '$lib/BrandMark.svelte';
  let menuOpen = false;
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Contact', href: '/contact' }
  ];
</script>

<header class="site-header">
  <a class="brand" href="/" aria-label="NexaPulse home">
    <BrandMark size={36} />
    <span>NexaPulse</span>
  </a>
  <button class="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onclick={() => menuOpen = !menuOpen}>
    <span></span><span></span>
  </button>
  <nav class:mobile-open={menuOpen} aria-label="Main navigation">
    {#each links as link}
      <a class:active={page.url.pathname === link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined} href={link.href} onclick={() => menuOpen = false}>{link.label}</a>
    {/each}
  </nav>
</header>
