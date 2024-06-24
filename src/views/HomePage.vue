<template>
    <b-container class="bv-example-row home-page">
        <b-row>
            <b-col v-if="showImage">
                <h1 class="title">Welcome to My Card Game Application !</h1>
                <img  src="@/assets/draw-hand.png" @click="handleImageClick" class="clickable-image mx-auto d-block" />
            </b-col>
        </b-row>
        <b-row v-if="!showImage && hand.length" class="justify-content-between align-items-center mt-4">
            <b-col>
                <h2 class="d-inline">Draw Hand Again</h2>
            </b-col>
            <b-col class="text-right">
                <b-button variant="primary" @click="drawHand" class="action-button">Draw Hand</b-button>
            </b-col>
        </b-row>
        <b-row v-if="hand.length" class="mt-2">
            <b-col>
                <HandComponent :cards="hand" />
            </b-col>
        </b-row>
        <b-row v-if="hand.length" class="justify-content-between align-items-center mt-4">
            <b-col>
                <h2 class="d-inline">Sort Your Hand</h2>
            </b-col>
            <b-col class="text-right">
                <b-button variant="success" @click="sortHand" class="action-button">Sort Hand</b-button>
            </b-col>
        </b-row>
        <b-row v-if="hand.length" class="justify-content-between align-items-center mt-2">
            <b-col>
                <SortControls
                        :colorOrder="colorOrder"
                        :sortOrder="sortOrder"
                        @update:colorOrder="updateColorOrder"
                        @update:sortOrder="updateSortOrder"
                />
            </b-col>
        </b-row>
        <b-row v-if="sortedHand.length" class="mt-4">
            <b-col>
                <HandComponent :cards="sortedHand" />
            </b-col>
        </b-row>
        <b-row v-if="error">
            <b-col>
                <b-alert show variant="danger">{{ error }}</b-alert>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import HandComponent from '@/components/HandComponent.vue';
    import SortControls from '@/components/SortControls.vue';
    import store from '@/store';

    export default {
        name: 'HomePage',
        components: {
            HandComponent,
            SortControls,
        },
        data() {
            return {
                hand: [],
                sortedHand: [],
                colorOrder: ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
                sortOrder: 'asc',
                showImage: true,
                error: null,
            };
        },
        methods: {
            async handleImageClick() {
                this.showImage = false;
                await this.drawHand();
            },
            async drawHand() {
                try {
                    await store.dispatch('drawHand');
                    this.hand = store.state.hand;
                    this.sortedHand = [];
                    this.error = null;
                } catch (error) {
                    this.error = error.message;
                }
            },
            updateColorOrder(newOrder) {
                this.colorOrder = newOrder;
            },
            updateSortOrder(newOrder) {
                this.sortOrder = newOrder;
            },
            async sortHand() {
                try {
                    store.commit('setColorOrder', this.colorOrder);
                    store.commit('setSortOrder', this.sortOrder);
                    await store.dispatch('sortHand');
                    this.sortedHand = store.state.hand;
                    this.error = null;
                } catch (error) {
                    this.error = error.message;
                }
            },
        },
    };
</script>

<style scoped>

    .home-page {
        text-align: center;
        padding: 20px;
        min-height: 100vh;
    }
    .clickable-image {
        width: 40%;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .clickable-image:hover {
        transform: scale(1.1);
    }
    .title {
        padding-bottom: 1.05rem;
    }

</style>
