import Card from '@/models/Card';
import CardApi from '@/api/CardApi';

export default {
    async drawHand() {
        const data = await CardApi.drawHand();
        return data.map(card => new Card(card.color, card.value));
    },
    async sortHand(hand, colorOrder, sortOrder) {
        const data = await CardApi.sortHand(hand, colorOrder, sortOrder);
        return data.map(card => new Card(card.color, card.value));
    }
};
