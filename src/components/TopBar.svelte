<script>
	export let user;
	export let isDark;

	import { base } from '$app/paths';
	import cookie from 'cookie';
	import ms from 'ms';

	const toggle = () => {
		document.cookie = cookie.serialize('theme', isDark ? 'light' : 'dark', {
			maxAge: ms('1y') / 1000,
			path: '/',
			sameSite: 'lax'
		});
		window.location = window.location; // eslint-disable-line
	};
</script>

<div class="bg-white dark:bg-slate-700 my-8 p-4 rounded-xl shadow-sm">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:mx-8">
		<div>
			<a href={base + '/settings'} class="flex justify-center md:justify-start">
				<!-- <img src="/logo.png" class="h-8" alt="ByteBridge Limited"/> -->
				<img
				src="https://media.discordapp.net/attachments/890634398981042246/1248840765678030919/bytebridge_1.png?ex=66652118&is=6663cf98&hm=017345e22ba01766400f58d77d8d16b923068e741d2ec7efa55daa5a10be68fb&=&format=webp&quality=lossless&width=825&height=676"
				alt="ByteBridge Limited"
				style="border-radius: 50%; width: 64px; height: 64px;"
			/>
		</a>
		</div>
		<div>
			<div
				class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:float-right flex items-center justify-center md:justify-end"
			>
				<a
					href={`/auth/logout`}
					class="flex items-center justify-center md:justify-end hover:font-medium"
					title="Logout"
				>
					<img
						src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
						class="h-8 rounded-full"
						alt="ByteBridge Limited"
					/>
					<span class="ml-3">{user.username}</span>
				</a>
				<div class="ml-4">
					{#if isDark}
						<i
							class="fa-solid fa-moon text-lg p-1 cursor-pointer hover:text-blurple transition duration-300"
							title="Switch to light mode"
							on:click={() => toggle()}
						/>
					{:else}
						<i
							class="fa-solid fa-sun text-lg p-1 cursor-pointer hover:text-blurple transition duration-300"
							title="Switch to dark mode"
							on:click={() => toggle()}
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
