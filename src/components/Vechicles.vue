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
				v-if="
					items.data !== undefined &&
					Object.keys(items.data).length === 0 &&
					!isLoading
				"
				class="vehicles__service-info"
			>
				The list of cars is empty...
			</p>
		</div>
		<p
			class="vehicles__service-info"
			v-if="isLoading"
		>
			Loading...
		</p>
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
				@switchByPagination="switchByPagination"
			/>
		</div>
	</div>
</template>
<script setup>
	import { computed, ref, reactive, onMounted, watch } from "vue";
	import axios from "axios";
	import { useStore } from "vuex";
	import Card from "./Card.vue";
	import Pagination from "./UI/Pagination.vue";
	import SearchPanel from "./UI/SearchPanel.vue";
	const store = useStore();
	const items = ref([]);
	const perPages = ref([]);
	const currentPage = ref([]);
	const totalCards = ref();
	const seen = ref();
	const searchData = ref("");
	const isLoading = ref(false);
	const urls = reactive({});
	const currentUrl = "https://api.caiman-app.de/api/cars-test?&page=1";

	const onChangeSearchInput = (data) => {
		searchData.value = data;
		let searchUrl = null;
		if (searchData.value.length === 0) {
			searchUrl = currentUrl;
		} else {
			searchUrl = `https://api.caiman-app.de/api/cars-test?search=${data}`;
		}
		fetchItems(searchUrl, store.getters.quantityCardsOnPage);
	};

	const switchByPagination = (url) => {
		if (searchData.value.length !== 0) {
			url = currentUrl + `?search=${searchData.value}`;
		}
		fetchItems(url, store.getters.quantityCardsOnPage);
	};

	const fetchItems = async (currentUrl, quantityCards = 9) => {
		try {
			isLoading.value = true;
			await axios
				.get(currentUrl + "&per_page=" + quantityCards)
				.then((response) => {
					items.value = response.data;
					perPages.value = response.data.meta.last_page;
					currentPage.value = response.data.meta.current_page;
					totalCards.value = response.data.meta.total;
					console.log(totalCards.value);
					store.commit("setTotalCards", totalCards.value);
					seen.value = response.data.meta.to;
					// Адреса для пагинации
					urls.next = response.data.links.next;
					urls.prev = response.data.links.prev;
				})
				.then(() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				});
		} catch (error) {
			console.log(error);
		} finally {
			isLoading.value = false;
		}
	};

	const numberOfCardsChanged = computed(
		() => store.getters.quantityCardsOnPage
	);

	watch(numberOfCardsChanged, (newValue) => {
		if (searchData.value.length === 0) {
			fetchItems(currentUrl, newValue);
		} else {
			onChangeSearchInput(searchData.value);
		}
	});

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
	.vehicles__service-info {
		font-size: 32px;
		line-height: 1;
		font-weight: 700;
		color: #293148;
		margin-top: 70px;
		margin-left: 30px;
	}
	.vehicles__pagination {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
	}
</style>
