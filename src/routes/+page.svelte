
<script>
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import About from '$lib/About.svelte';
	import Gallery from '$lib/Gallery.svelte';
	import ScrollButtons from '$lib/ScrollButtons.svelte';
	import Footer from '$lib/Footer.svelte';

	let bgColor = 'rgb(254, 247, 247)';

	onMount(() => {
		const handleScroll = () => {
			const scrollPercentage = Math.min(
				window.scrollY / (document.body.scrollHeight - window.innerHeight),
				1
			);

			const startColor = { r: 254, g: 247, b: 247 };
			const cornflowerBlue = { r: 195, g: 214, b: 248 };

			const r = Math.round(
				startColor.r + (cornflowerBlue.r - startColor.r) * scrollPercentage
			);
			const g = Math.round(
				startColor.g + (cornflowerBlue.g - startColor.g) * scrollPercentage
			);
			const b = Math.round(
				startColor.b + (cornflowerBlue.b - startColor.b) * scrollPercentage
			);

			bgColor = `rgb(${r}, ${g}, ${b})`;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Stella Clough - Portfolio</title>
</svelte:head>

<div style="background-color: {bgColor}; transition: background-color 0.1s ease-out;">
	<a href="#main-content" class="skip-link">Skip to main content</a>

	<Header />
	<Hero />

	<main id="main-content">
		<About />
		<Gallery />
	</main>

	<ScrollButtons />
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Space Mono', monospace;
		line-height: 1.5;
		color: #d64545;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	div {
		min-height: 100vh;
	}

	.skip-link {
		position: absolute;
		top: -40px;
		left: 0;
		background: #d64545;
		color: #fef7f7;
		padding: 8px 16px;
		text-decoration: none;
		z-index: 100;
		font-weight: 700;
	}

	.skip-link:focus {
		top: 0;
	}

	:global(a) {
		color: #616161;
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: all 0.2s ease;
	}

	:global(a:hover),
	:global(a:focus) {
		color: #d64545;
		text-decoration-color: currentColor;
		outline: none;
	}

	:global(a:focus-visible) {
		outline: 3px solid #d64545;
		outline-offset: 2px;
		border-radius: 2px;
	}

	:global(*:focus-visible) {
		outline: 3px solid #d64545;
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	@media (prefers-contrast: high) {
		:global(a) {
			text-decoration: underline;
		}
	}
</style>