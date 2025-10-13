<script>
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const scrollDown = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	};
</script>

<nav aria-label="Back to top navigation">
	<button class="scroll-up" aria-label="Scroll back to top" on:click={scrollUp}>
		<span class="visually-hidden">Back to top</span>
	</button>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}

	.scroll-up {
		opacity: 1;
		transition: all 0.5s ease-in 3s;
		margin: 5% auto 0;
		display: block;
		width: 32px;
		height: 32px;
		border: 2px solid #d64545;
		background-color: transparent;
		border-radius: 50%;
		z-index: 2;
		animation: bounce 2s infinite 2s;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		padding: 0;
	}

	.scroll-up:hover,
	.scroll-up:focus {
		background-color: #d64545;
		transform: scale(1.1);
	}

	.scroll-up:focus-visible {
		outline: 3px solid #d64545;
		outline-offset: 4px;
	}

	.scroll-up::before {
		position: absolute;
		top: calc(70% - 8px);
		left: calc(50% - 6px);
		transform: rotate(135deg);
		display: block;
		width: 12px;
		height: 12px;
		content: '';
		border: 2px solid #d64545;
		border-width: 0px 0 2px 2px;
	}

	.scroll-up:hover::before,
	.scroll-up:focus::before {
		border-color: #fef7f7;
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

</style>
