<template>
	<div class="search__wrapper">
		<div class="search__select-area">
			<form
				action="submit"
				class="search__form"
			>
				<input
					type="text"
					class="search__input"
					placeholder="Search VIN"
					@input="onChangeSearchInput"
				/>
				<div class="search__icon">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.95 18 14.6819 17.2298 15.9483 15.9512C16.1356 15.7621 16.3905 15.6555 16.6566 15.6549C16.9228 15.6543 17.1781 15.7598 17.3662 15.9481L21.7074 20.2932C22.0978 20.6839 22.0975 21.3171 21.7068 21.7074C21.3161 22.0978 20.6829 22.0975 20.2926 21.7068L16.6222 18.0331C15.0815 19.2744 13.1344 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2053 19.7625 13.3576 19.3309 14.4109C19.1215 14.9219 18.5374 15.1664 18.0264 14.957C17.5153 14.7476 17.2708 14.1635 17.4803 13.6525C17.815 12.8357 18 11.9407 18 11C18 7.13401 14.866 4 11 4Z"
							fill="#293148"
							fill-opacity="0.45"
						/>
					</svg>
				</div>
			</form>

			<p class="search__submenu-title">Select vehicles per page:</p>
			<NumberOfCardsSelector />
		</div>
		<div class="search__add-car--button">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
					fill="white"
				/>
			</svg>
			Add Vechicle
		</div>
	</div>
</template>

<script setup>
	import debounce from "lodash.debounce";
	import NumberOfCardsSelector from './NumberOfCardsSelector.vue'


	const emit = defineEmits(["searchEvent"]);
	const onChangeSearchInput = debounce((event) => {
		emit("onChangeSearchInput", event.target.value);
	}, 500);
</script>

<style scoped>
	.search__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 107px;
		left: 256px;
		right: 0;
		background-color: #fff;
		z-index: 100;
		padding: 36px 30px 32px;
	}
	.search__select-area {
		display: flex;
		align-items: center;
	}
	.search__form {
		position: relative;
		margin-right: 32px;
	}
	.search__icon {
		position: absolute;
		top: 9px;
		right: 16px;
	}
	.search__input {
		width: 354px;
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		color: #293148;
		border: 1px solid #e4e4e4;
		border-radius: 8px;
		padding: 9px 50px 9px 16px;
		outline: none;
	}
	.search__input::placeholder {
		color: #293148cc;
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
	}
	.search__submenu-title {
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		color: #293148;
	}
	.search__add-car--button {
		display: flex;
		align-items: center;
		background-color: #d90e32;
		border-radius: 10px;
		color: #fff;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 700;
		line-height: 2;
		padding: 9px 20px;
		cursor: pointer;
		transition: all ease 0.4s;
	}
	.search__add-car--button svg {
		margin-right: 16px;
	}
	.search__add-car--button:hover {
		background-color: #d90e32cc;
	}
</style>
