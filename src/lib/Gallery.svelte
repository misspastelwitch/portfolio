<script>
	import { onMount } from 'svelte';

	let mouseX = 0;
	let mouseY = 0;

	const projects = [
		{
			title: 'Repositorie',
			image: './assets/repositorie.png',
			alt: 'Screenshot of Repositorie project showing project interface',
			link: 'https://misspastelwitch.github.io/repositorie/',
			category: 'Have a look'
		},
		{
			title: 'Dutch Digital Agencies',
			image: './assets/DDA.png',
			alt: 'Screenshot of Dutch Digital Agencies project showing agency listings',
			link: 'https://dutchdigitalagencies-vacatures.onrender.com',
			category: 'Have a look'
		},
		{
			title: 'Weird Cool Stuff',
			image: './assets/weirdcoolstuff.png',
			alt: 'Screenshot of Weird Cool Stuff project showing interactive website design',
			link: 'https://github.com/misspastelwitch/the-startup-responsive-interactive-website',
			category: 'Have a look'
		},
		{
			title: 'I love web',
			image: './assets/iloveweb.png',
			alt: 'Screenshot of I love web project featuring web development showcase',
			link: 'https://misspastelwitch.github.io/I-love-web/',
			category: 'Have a look',
			span: 'col-6'
		},
		{
			title: 'FDND Squadpage',
			image: './assets/squadpage.png',
			alt: 'Screenshot of FDND Squadpage project showing team page layout',
			link: 'https://github.com/julia-stevens/your-tribe-for-life-squad-page',
			category: 'Have a look',
			span: 'col-6'
		},
		{
			title: 'SRON - Nebula Explorer',
			image: './assets/nebula.png',
			alt: 'Screenshot of SRON Nebula Explorer project showing space mission interface',
			link: 'https://www.sron.nl/en/missions/in-development/missies-in-development-nebula-xplorer/',
			category: "Something's coming here soon!",
			span: 'col-6'
		},
		{
			title: 'An upcoming project',
			image: './assets/noimage.png',
			alt: 'Placeholder for upcoming project',
			link: null,
			category: "Something's coming here soon!",
			span: 'col-6'
		}
	];

	onMount(() => {
		const handleMouseMove = (e) => {
			mouseX = e.pageX;
			mouseY = e.pageY;
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<section class="gallery" aria-label="Portfolio projects">
	<div class="container">
		<h2 class="visually-hidden">Projects</h2>
		<div class="grid">
			{#each projects as project, i}
				<div class="column" class:column-md-4={!project.span} class:column-md-6={project.span}>
					<figure class="img-container">
						{#if project.link}
							<a href={project.link} aria-label={`View ${project.title} project`}>
								<img src={project.image} alt={project.alt} />
							</a>
						{:else}
							<img src={project.image} alt={project.alt} />
						{/if}
						<span
							class="img-content-hover"
							aria-hidden="true"
							style="transform: translate3d({mouseX}px, {mouseY}px, 0)"
						>
							<span class="title">{project.title}</span>
							<span class="category">{project.category}</span>
						</span>
						<figcaption class="img-content">
							<h3 class="title">{project.title}</h3>
							<p class="category">{project.category}</p>
						</figcaption>
					</figure>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.gallery {
		padding: 0 0 1em 0;
	}

	.container {
		margin: auto;
		padding: 0 1rem;
		max-width: 71.25rem;
		width: 100%;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
	}

	.column {
		grid-column: span 12;
		display: block;
		margin: 0;
	}

	.column.column-md-4 {
		grid-column: span 4;
		max-width: 80%;
	}

	.column.column-md-6 {
		grid-column: span 6;
		max-width: 80%;
	}

	.img-container {
		width: 100%;
		height: 500px;
		cursor: pointer;
		overflow: hidden;
		padding: 0;
		margin: 0 auto;
		position: relative;
	}


	img {
		width: 100%;
		height: 500px;
		object-fit: cover;
		transform: scale(1);
		transition: all 0.3s ease-in-out;
		border: 3px solid transparent;
	}

	.img-container:hover img {
		transform: scale(1.05);
	}

	img:focus {
		border-color: #d64545;
		outline: none;
	}

	a:focus img {
		border-color: #d64545;
	}

	.img-content-hover {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		white-space: nowrap;
		display: none;
		padding: 1rem;
		background: #fef7f7;
		font-weight: 400;
		margin-top: 1.25rem;
		margin-left: -2rem;
		pointer-events: none;
	}

	.img-container:hover .img-content-hover {
		display: block;
	}

	.title {
		color: #2e2e2e;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
	}

	.category {
		font-size: 1rem;
		color: #616161;
		margin: 0;
	}

	.img-content {
		display: none;
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

	@media (max-width: 62rem) {
		.column.column-md-4,
		.column.column-md-6 {
			grid-column: span 1;
			max-width: 100%;
		}

		.grid {
			grid-template-columns: 1fr;
		}

		.img-container {
			height: 300px;
			padding: 0 1rem;
			margin-bottom: 1rem;
		}

		img {
			height: 300px;
		}
	}

	@media (max-width: 48rem) {
		.container {
			padding: 0 1rem;
		}
	}

	@media (max-width: 375px) {
		.gallery {
			padding: 0 0 0.5em 0;
		}

		.img-container {
			height: 250px;
			padding: 0 0.75rem;
		}

		img {
			height: 250px;
		}

		.title {
			font-size: 1.2rem;
		}
	}
</style>