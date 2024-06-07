<template>
	<div class="header__wrapper">
		<div class="header__info">
			<h1 class="header__title">Vechicles</h1>
			<span class="header__count">256</span>
		</div>
		<div class="header__person-menu">
			<a
				href="#"
				class="header__add-button"
				><svg
					width="42"
					height="42"
					viewBox="0 0 42 42"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="0.5"
						y="0.5"
						width="41"
						height="41"
						rx="5.5"
						stroke="#E86E84"
						stroke-linejoin="round"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M21 13C21.5523 13 22 13.4477 22 14V28C22 28.5523 21.5523 29 21 29C20.4477 29 20 28.5523 20 28V14C20 13.4477 20.4477 13 21 13Z"
						fill="#E86E84"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M13 21C13 20.4477 13.4477 20 14 20H28C28.5523 20 29 20.4477 29 21C29 21.5523 28.5523 22 28 22H14C13.4477 22 13 21.5523 13 21Z"
						fill="#E86E84"
					/>
				</svg>
			</a>
			<div class="person__info-wrapper">
				<img
					class="person__image"
					src="/images/user/Photo.png"
					alt="User image"
				/>
				<p class="person__name">John Doe</p>
			</div>
			<div class="header__language-selector">EN</div>
		</div>
	</div>
</template>

<script setup></script>

<style scopedd>
	.header__wrapper {
		position: fixed;
		top: 0;
		left: 256px;
		right: 0;
		background-color: #fff;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e4e4e4;
		padding: 30px 30px 30px 24px;
	}
	.header__info,
	.header__person-menu {
		display: flex;
		align-items: center;
	}
	.header__title {
		font-size: 32px;
		line-height: 38px;
		font-weight: 700;
		color: #293148;
		margin-right: 18px;
	}
	.header__count {
		background-color: #f3f6f8;
		font-size: 15px;
		font-weight: 700;
		color: #293148cc;
		padding: 8px 14px;
		border-radius: 4px;
	}
	.header__add-button {
		height: 44px;
		width: 44px;
	}
	.person__info-wrapper {
		display: flex;
		align-items: center;
		margin-right: 32px;
		margin-left: 40px;
	}
	.person__image {
		height: 46px;
		width: 46px;
		margin-right: 14px;
	}
	.person__name,
	.header__language-selector {
		font-size: 15px;
		font-weight: 500;
		line-height: 22px;
		color: #293148;
	}
</style>
