<template>
	<div class="flex fle-row justify-center p-0">
		<div class="navbar bg-base-100 container">
			<div class="flex-1">
				<routerLink to="/" class="btn btn-ghost text-xl p-0">Aldas</routerLink>
			</div>
			<div class="flex-none gap-2">
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img alt="Tailwind CSS Navbar component" src="/img/Avatar.jpg" />
						</div>
					</div>
					<ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<routerLink to="/blog" class="justify-between">
								Blog
								<span class="badge">New</span>
							</routerLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
