<template>
	<div class="vehicles">
		<SearchPanel @onChangeSearchInput="onChangeSearchInput" />
		<div class="vehicles__wrapper">
			<Card
				v-if="items.data !== undefined && Object.keys(items.data).length !== 0"
				v-for="item in items.data"
				:id="item.id"
				:key="item.id"
				:vehicle_name="item.vehicle_name"
				:vin="item.vin"
				:photo="item.placeholder"
				:created_at="item.created_at"
			/>
			<p
				class="vehicles__message"
				v-else
			>
				The list of cars is empty...
			</p>
		</div>
		<div
			class="vehicles__pagination"
			v-if="items.data !== undefined && Object.keys(items.data).length !== 0"
		>
			<Pagination
				:perPages="perPages"
				:currentPage="currentPage"
				:urls="urls"
				:totalCards="totalCards"
				:seen="seen"
				@fetchItems="fetchItems"
			/>
		</div>
	</div>
</template>
<script setup>
	import { computed, ref, reactive, provide, onMounted, watch } from "vue";
	import axios from "axios";
	import Card from "./Card.vue";
	import Pagination from "./UI/Pagination.vue";
	import SearchPanel from "./UI/SearchPanel.vue";

	// https://api.caiman-app.de/api/cars-test?search=2323&per_page=9&page=1
	const items = ref([]);
	const perPages = ref([]);
	const currentPage = ref([]);
	const numberOfCards = ref(9);
	const totalCards = ref();
	const seen = ref();
	const urls = reactive({});
	const currentUrl = "http://api.caiman-app.de/api/cars-test?&page=1";

	const onChangeSearchInput = (data) => {
		const searchUrl = `https://api.caiman-app.de/api/cars-test?search=${data}&per_page=${perPages}`;
		fetchItems(searchUrl);
	};

	const fetchItems = async (currentUrl) => {
		try {
			await axios
				.get(currentUrl + "&per_page=" + numberOfCards.value)
				.then((response) => {
					items.value = response.data;
					perPages.value = response.data.meta.last_page;
					currentPage.value = response.data.meta.current_page;
					totalCards.value = response.data.meta.total;
					seen.value = response.data.meta.to;
					// Адреса для пагинации
					urls.first = response.data.links.first;
					urls.last = response.data.links.last;
					urls.next = response.data.links.next;
					urls.prev = response.data.links.prev;

					console.log(typeof items.value.data);
				})
				.then(console.log("all done"));
		} catch (error) {
			console.log(error);
		}
	};

	onMounted(async () => {
		fetchItems(currentUrl);
	});
</script>

<style scoped>
	.vehicles {
		position: relative;
		min-height: calc(100vh - 100px);
		padding-bottom: 120px;
	}
	.vehicles__wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		padding: 110px 30px 0 30px;
	}
	.vehicles__message {
		font-size: 20px;
		font-weight: 700;
		line-height: 1.2;
		color: #293148;
		margin-top: 70px;
	}
	.vehicles__pagination {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: -10;
	}
</style>
