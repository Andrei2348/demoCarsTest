<template>
	<div
		class="custom-select"
		@click="isOpen = !isOpen"
	>
		<div class="selected">{{ selected }}</div>
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
    console.log(selected.value)
	};
</script>

<style scoped>
	.custom-select {
		position: relative;
		width: 200px;
	}

	.selected,
	.option {
		padding: 10px;
		cursor: pointer;
	}

	.options {
		position: absolute;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}

	.options .option:hover {
		background-color: #ddd;
	}
</style>