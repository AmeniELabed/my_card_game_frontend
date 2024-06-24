import axios from 'axios';
import config from '@/config';

const apiClient = axios.create({
    baseURL: config.apiUrl,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Global error handling
apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status >= 400 && error.response.status < 500) {
            return Promise.reject(new Error(error.response.data.message || 'An error occurred while processing your request.'));
        } else {
            return Promise.reject(new Error('An unexpected error occurred. Please try again later.'));
        }
    }
);

export default {
    async drawHand() {
        const response = await apiClient.get('/draw-hand');
        return response.data;
    },
    async sortHand(hand, colorOrder, sortOrder) {
        const response = await apiClient.post('/sort-hand', {
            hand: hand.map(card => ({ color: card.color, value: card.value })),
            colorOrder: colorOrder,
            sortOrder: sortOrder
        });
        return response.data;
    }
};
