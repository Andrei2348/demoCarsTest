import { createStore } from "vuex";

const store = createStore({
	state: {
		quantityCardsOnPage: 9,
		totalCards: 0,
	},
	getters: {
		quantityCardsOnPage: (state) => {
			return state.quantityCardsOnPage;
		},
		totalCards: (state) => {
			return state.totalCards;
		},
	},
	mutations: {
		setQuantity(state, payload) {
			state.quantityCardsOnPage = payload;
		},
		setTotalCards(state, payload) {
			state.totalCards = payload;
		},
	},
});

export default store;
