import { createStore } from 'vuex';
import CardService from '@/services/CardService';
import Card from '@/models/Card';

export default createStore({
    state: {
        hand: [],
        colorOrder: ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
        sortOrder: 'asc'
    },
    mutations: {
        setHand(state, hand) {
            state.hand = hand.map(card => new Card(card.color, card.value));
        },
        setColorOrder(state, colorOrder) {
            state.colorOrder = colorOrder;
        },
        setSortOrder(state, sortOrder) {
            state.sortOrder = sortOrder;
        }
    },
    actions: {
        async drawHand({ commit }) {
            try {
                const hand = await CardService.drawHand();
                commit('setHand', hand);
            } catch (error) {
                console.error('Error drawing hand:', error);
                throw error;
            }
        },
        async sortHand({ commit, state }) {
            try {
                const sortedHand = await CardService.sortHand(state.hand, state.colorOrder, state.sortOrder);
                commit('setHand', sortedHand);
            } catch (error) {
                console.error('Error sorting hand:', error);
                throw error;
            }
        }
    },
    modules: {}
});
