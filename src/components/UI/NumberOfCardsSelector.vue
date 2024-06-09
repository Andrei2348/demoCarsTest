<template>
	<div
		class="custom-select"
		@click="isOpen = !isOpen"
		ref="menu"
	>
		<div class="selected">
			{{ selected }}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16 10L12 14L8 10"
					stroke="#293148"
					stroke-opacity="0.45"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div
			class="options"
			v-if="isOpen"
		>
			<div
				class="option"
				v-for="option in options"
				@click="selectQuantity(option)"
			>
				{{ option }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import { useStore } from "vuex";
	const store = useStore();
	const menu = ref(null);
	const selected = ref(store.getters.quantityCardsOnPage);
	const isOpen = ref(false);
	const options = [6, 9, 12, 15, 18];

	const selectQuantity = (option) => {
		selected.value = option;
		store.commit("setQuantity", selected.value);
	};

	const handleClickOutside = (event) => {
		if (menu.value && !menu.value.contains(event.target)) {
			isOpen.value = false;
		}
	};

	onMounted(() => {
		document.addEventListener("click", handleClickOutside);
	});

	onUnmounted(() => {
		document.removeEventListener("click", handleClickOutside);
	});
</script>

<style scoped>
	.custom-select {
		position: relative;
		width: 85px;
	}
	.selected {
		border: 1px solid #e4e4e4;
		border-radius: 8px;
		width: 85px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #293148;
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
		margin-left: 16px;
		transition: all ease 0.5s;
	}
	.selected:hover {
		background-color: #f0f0f0;
	}
	.selected,
	.option {
		padding: 10px;
		cursor: pointer;
	}
	.options {
		color: #293148;
		position: absolute;
		right: -16px;
		width: 70%;
		text-align: center;
		background-color: #fff;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}
	.options .option {
		transition: all ease 0.5s;
	}
	.options .option:hover {
		background-color: #f0f0f0;
	}
</style>
