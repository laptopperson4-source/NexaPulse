<script lang="ts">
  import { page } from '$app/state';
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
    <svg class="brand-mark" viewBox="0 0 42 42" aria-hidden="true"><path d="M5 31V10l13 21V10M22 22h6l4-9 4 17" /></svg>
    <span>NexaPulse</span>
  </a>
  <nav aria-label="Main navigation">
    {#each links as link}
      <a class:active={page.url.pathname === link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined} href={link.href}>{link.label}</a>
    {/each}
  </nav>
  <a class="header-action" href="/projects">Explore <span aria-hidden="true">↗</span></a>
</header>
