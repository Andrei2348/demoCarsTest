<template>
	<div class="pagination__wrapper">
		<p class="pagination__info">
			Showing {{ seen }} out of {{ totalCards }}
		</p>
		<div class="pagination__navigation-wrapper">
			<div
				class="pagination__button-back"
				@click="() => emit('fetchItems', urls.prev)"
        :disabled="currentPage === null"
			>
				<svg
					width="6"
					height="10"
					viewBox="0 0 6 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 9L1 5L5 1"
						stroke="#293148"
						stroke-opacity="0.45"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<span class="pagination__info-current active">{{ currentPage }}</span>
			<p class="pagination__info-prefix">of</p>
			<span class="pagination__info-current">{{ perPages }}</span>
			<div
				class="pagination__button-next"
				@click="() => emit('fetchItems', urls.next)"
        :disabled="currentPage === perPages"
			>
				<svg
					width="6"
					height="10"
					viewBox="0 0 6 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 9L5 5L1 1"
						stroke="#293148"
						stroke-opacity="0.45"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		perPages: Number,
		currentPage: Number,
		totalCards: Number,
    seen: Number,
		urls: Object,
	});

	const emit = defineEmits(["fetchItems"]);
</script>

<style scoped>
	.pagination__wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 36px 30px 50px;
	}
	.pagination__info {
		color: #293148cc;
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
	}
	.pagination__info-current {
		border: 1px solid #e4e4e4;
		font-size: 15px;
		font-weight: 400;
		line-height: 22px;
		color: #29314873;
		padding: 5px 6px;
		border-radius: 6px;
		min-width: 32px;
		text-align: center;
		margin: 0 22px;
	}
	.pagination__info-current.active {
		color: #293148cc;
	}
	.pagination__navigation-wrapper {
		display: flex;
		align-items: center;
	}
	.pagination__button-back,
	.pagination__button-next {
		cursor: pointer;
	}
</style>
