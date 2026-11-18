<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';
  import '../app.css';
</script>
<svelte:head>
  <title>NexaPulse | innovate.connect.elevate</title>
  <meta name="description" content="NexaPulse is an independent digital software company building apps, platforms and digital products." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>
<SiteHeader />
<main><slot /></main>
