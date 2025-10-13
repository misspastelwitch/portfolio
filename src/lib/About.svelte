<section class="aboutme" id="aboutme">
	<div class="container">
		<h2 class="subtitle">About me</h2>
		<p class="text">
			Hey there! I'm Stella, a 23 year old (aspiring) frontend designer based in the Netherlands.
			I've always been interested in design and aesthetics, and routinely find myself wishing
			websites were designed better. I hope that I can one day make people's experiences on the
			internet a little smoother, easier and prettier. You can check out all of my latest work via
			the projects below.
		</p>
	</div>
</section>

<style>
	.aboutme {
		background-color: #ffe8e8;
		padding: 5rem;
		margin-top: -5rem;
	}

	.container {
		margin: auto;
		padding: 0 1rem;
		max-width: 71.25rem;
		width: 100%;
	}

	.subtitle {
		font-size: 2rem;
		margin: 0 0 1rem 0;
	}

	.text {
		font-size: 1rem;
		line-height: 1.6;
	}

	@media (max-width: 48rem) {
		.aboutme {
			padding: 2rem 1.5rem;
			margin-top: -2rem;
		}

		.subtitle {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 375px) {
		.aboutme {
			padding: 1.5rem 1rem;
		}

		.subtitle {
			font-size: 1.3rem;
		}

		.text {
			font-size: 0.95rem;
		}
	}
</style>