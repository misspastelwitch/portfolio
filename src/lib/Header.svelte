<script>
	import { onMount } from 'svelte';

	let taglines = ['I love web.', 'I create.', 'I learn.', 'I travel.', 'I bake.', 'I read.'];
	let currentTagline = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentTagline = (currentTagline + 1) % taglines.length;
		}, 4000);

		return () => clearInterval(interval);
	});
</script>

<header>
	<h1 class="title">Stella Clough</h1>
	<div class="wrapper">
		<div class="containera" role="region" aria-label="Rotating taglines">
			<div class="tagline-container">
				{#each taglines as tagline, i}
					<div class="role" class:active={i === currentTagline}>
						{tagline}
					</div>
				{/each}
			</div>
		</div>
		<nav aria-label="Page navigation">
			<a
				href="#about"
				class="go-down"
				aria-label="Scroll down to about section"
				on:click={(e) => {
					e.preventDefault();
					document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
				}}
			>
				<span class="visually-hidden">Scroll down</span>
			</a>
		</nav>
	</div>
</header>

<style>
	header {
		text-align: center;
		margin: 1em auto;
		padding-top: 8em;
	}

	.title {
		font-size: 6rem;
		margin: 0;
	}

	.wrapper {
		padding: 1em;
		width: 400px;
		margin: 0 auto;
		text-align: start;
		margin-bottom: 400px;
	}

	.containera {
		display: inline-block;
		height: 64px;
		vertical-align: middle;
		overflow: hidden;
	}

	.tagline-container {
		display: flex;
		flex-direction: column;
		transition: transform 0.5s ease-in-out;
	}

	.role {
		font-size: 40px;
		height: 70px;
		display: flex;
		align-items: center;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.role.active {
		opacity: 1;
	}

	.go-down {
		opacity: 1;
		transition: all 0.5s ease-in 3s;
		left: 50%;
		margin-top: 10em;
		margin-left: 45%;
		display: block;
		width: 32px;
		height: 32px;
		border: 2px solid #d64545;
		background-size: 14px auto;
		border-radius: 50%;
		z-index: 2;
		animation: bounce 2s infinite 2s;
		text-decoration: none;
		position: relative;
		cursor: pointer;
	}

	.go-down:hover,
	.go-down:focus {
		background-color: #d64545;
		transform: scale(1.1);
	}

	.go-down:focus-visible {
		outline: 3px solid #d64545;
		outline-offset: 4px;
	}

	.go-down::before {
		position: absolute;
		top: calc(50% - 8px);
		left: calc(50% - 6px);
		transform: rotate(-45deg);
		display: block;
		width: 12px;
		height: 12px;
		content: '';
		border: 2px solid #d64545;
		border-width: 0px 0 2px 2px;
	}

	.go-down:hover::before,
	.go-down:focus::before {
		border-color: #c3d6f8;
	}

	@keyframes bounce {
		0%,
		100%,
		20%,
		50%,
		80% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 48rem) {
		header {
			padding-top: 5em;
		}

		.title {
			font-size: 3rem;
		}

		.wrapper {
			width: 100%;
			max-width: 320px;
			margin-bottom: 200px;
			padding: 1em 1.5em;
		}


		.containera {
			height: 50px;
		}

		.go-down {
			margin-top: 5em;
			margin-left: calc(50% - 16px);
			left: 0;
		}
	}

	@media (max-width: 375px) {
		header {
			padding-top: 4em;
		}

		.title {
			font-size: 2.5rem;
		}

		.wrapper {
			max-width: 280px;
			margin-bottom: 150px;
			padding: 1em 1rem;
		}

		.role {
			font-size: 24px;
			height: 45px;
		}

		.containera {
			height: 45px;
		}
	}
</style>
