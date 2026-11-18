<svelte:head><title>{data.project.name} | NexaPulse Projects</title><meta name="description" content={data.project.summary}/></svelte:head>
<script lang="ts">export let data;</script>
<article class="project-detail-page"><a class="back-to-projects" href="/projects"><span aria-hidden="true">←</span> All projects</a>
<header class="project-detail-heading"><p class="eyebrow">{data.project.category}</p><h1>{data.project.name}<span>.</span></h1><p class="project-detail-summary">{data.project.summary}</p><div class="project-detail-meta"><span><small>STATUS</small>{data.project.status}</span><span><small>STARTED</small>{data.project.started}</span></div></header>
<div class="project-story">
<section class="story-section"><div class="story-number" aria-hidden="true">01</div><div class="story-copy"><p class="story-index">THE BEGINNING</p><h2>Origin</h2><p>{data.project.origin}</p></div></section>
<section class="story-section"><div class="story-number" aria-hidden="true">02</div><div class="story-copy"><p class="story-index">THE INTENTION</p><h2>Purpose</h2><p>{data.project.purpose}</p></div></section>
<section class="story-section"><div class="story-number" aria-hidden="true">03</div><div class="story-copy"><p class="story-index">THE PRESENT</p><h2>Current state</h2><p>{data.project.progress}</p></div></section>
</div><a class="next-project-link" href="/projects">Return to the project path <span aria-hidden="true">↗</span></a></article>