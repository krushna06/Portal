<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import TopBar from '$components/TopBar.svelte';
	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page, navigating } from '$app/stores';
	import { Modals, closeModal } from 'svelte-modals';
	import cookie from 'cookie';
	import ms from 'ms';
	import { openModal } from 'svelte-modals';
	import WelcomeModal from '$components/WelcomeModal.svelte';

	const { client, user } = data;
	setContext('user', user);
	let mounted = false;
	let cookies = {};
	let theme = data.theme;
	onMount(() => {
		if (theme === undefined) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			document.cookie = cookie.serialize('theme', theme, {
				maxAge: ms('1y') / 1000,
				path: '/',
				sameSite: 'lax'
			});
		}
		cookies = cookie.parse(document.cookie || '');
		if (!cookies.welcomed) openModal(WelcomeModal, { client });
		mounted = true;
	});

	const dismissCookies = () => {
		document.cookie = cookie.serialize('dismissedCookies', 'true', {
			maxAge: ms('1y') / 1000,
			path: '/',
			sameSite: 'lax'
		});
		cookies.dismissedCookies = true;
	};

	const links = [
		{
			icon: 'fab fa-discord',
			name: 'Support',
			url: 'https://discord.gg/pphu3r49U3'
		}
	];
</script>

<svelte:head>
	<title>ByteBridge Limited</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class={theme}>
	<div class="bg-gray-200 dark:bg-slate-900 min-h-screen h-max w-full absolute">
		<Modals>
			<div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
			<div slot="loading">
				<div class="spinner">
					<div class="cube1" />
					<div class="cube2" />
				</div>
			</div>
		</Modals>
		{#if mounted && client.public && !cookies.dismissedCookies}
			<div
				class="bg-blurple text-white font-medium m-0 p-1 sm:px-8 flex flex-row justify-center gap-8 w-full"
			>
				<p>Cookies are being used to store credentials and preferences.</p>
				<p>
					<i
						class="fa-sharp fa-solid fa-circle-xmark justify-self-end hover:cursor-pointer"
						title="Dismiss"
						on:click={dismissCookies}
					/>
				</p>
			</div>
		{/if}
		<div class="m-2 sm:m-6 lg:m-12 ">
			<div class="max-w-7xl mx-auto">
				<div class="text-gray-800 dark:text-slate-300">
					{#if $navigating || !mounted}
						<div class="spinner">
							<div class="cube1" />
							<div class="cube2" />
						</div>
					{:else}
						<TopBar {user} isDark={theme === 'dark'} />
						<slot />
						<footer class="text-center my-16">
							<div class="text-sm p-2 mb-6">
								<a
									href="/"
									class="text-gray-500 dark:text-slate-400 hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"
								>
									<i class="fa-solid fa-arrow-left" />
									Back to the portal
								</a>
							</div>
							{#if $page.route.id !== '/settings'}
								<div class="my-4 flex gap-3 justify-center">
									{#each links as link}
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											class="bg-gray-50/75 dark:bg-slate-800/75 p-0.5 px-2 rounded-3xl shadow-sm text-gray-500 dark:text-slate-400 font-medium link"
										>
											<i class={link.icon} />
											{link.name}
										</a>
									{/each}
								</div>
							{/if}
							<p>
								<a
									href="/"
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"
									>ByteBridge Limited</a
								>
								by
								<a
									href="https://n0step.xyz/"
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"
									>n0step_&trade;</a
								>
							</p>
							<!-- <p class="my-4">
								<a
									href="/"
									target="_blank"
									class="hover:text-blurple text-lg transition duration-300"
								>
									<i class="fab fa-discord" />
								</a>
							</p> -->
							<p class="text-xs my-4">
								ByteBridge Limited Tickets
								<br />
								Owned by ByteBridge Limited.
							</p>
						</footer>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
