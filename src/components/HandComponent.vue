<template>
    <div class="hand-container">
        <div v-for="card in cards" :key="`${card.color}-${card.value}`" class="card">
            <img :src="getCardImage(card)" :alt="`${card.color} ${card.value}`" class="card-image" />
        </div>
    </div>
</template>

<script>
    import { getCardImage } from '@/utils/cardImages';

    export default {
        name: 'HandComponent',
        props: {
            cards: {
                type: Array,
                required: true
            }
        },
        methods: {
            getCardImage(card) {
                return getCardImage(card.color, card.value);
            }
        }
    };
</script>

<style scoped>
    .hand-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        margin: 10px;
        text-align: center;
    }
    .card-image {
        width: 100px;
        height: 140px;
    }
</style>
