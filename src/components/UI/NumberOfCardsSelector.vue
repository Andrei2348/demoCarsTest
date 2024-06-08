<template>
	<div
		class="custom-select"
		@click="isOpen = !isOpen"
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
				@click="selectOption(option)"
			>
				{{ option }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	const isOpen = ref(false);
	const selected = ref(18);
	const options = [6, 9, 12, 15, 18];

	const selectOption = (option) => {
		selected.value = option;
		console.log(selected.value);
	};
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
	}
	.selected,
	.option {
		padding: 10px;
		cursor: pointer;
	}

	.options {
		position: absolute;
		width: 100%;
		text-align: center;
		background-color: #fff;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}

	.options .option:hover {
		background-color: #ddd;
	}
</style>
