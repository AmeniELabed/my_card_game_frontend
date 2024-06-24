<template>
    <div class="row">
        <div class="col-md-7 color-order-container">
            <span>Choose color's order (try to drag and drop) :</span>
            <draggable v-model="localColorOrder" class="color-order" tag="ul" ghost-class="ghost" @end="updateColorOrder">
                <template #item="{ element }">
                    <li>{{ element }}</li>
                </template>
            </draggable>
        </div>
        <div class="col-md-5 sort-order-container">
            <span>Choose values order:</span>
            <b-button @click="toggleSortOrder" class="sort-order-button">{{ sortOrder }}</b-button>
        </div>
    </div>

</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        name: 'SortControls',
        components: {
            draggable,
        },
        props: {
            colorOrder: Array,
            sortOrder: String,
        },
        data() {
            return {
                localColorOrder: [...this.colorOrder],
            };
        },
        watch: {
            colorOrder(newOrder) {
                this.localColorOrder = [...newOrder];
            },
        },
        methods: {
            updateColorOrder() {
                this.$emit('update:colorOrder', this.localColorOrder);
            },
            toggleSortOrder() {
                const newOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
                this.$emit('update:sortOrder', newOrder);
            },
        },
    };
</script>

<style scoped >
    .color-order-container {
        display: flex;
        align-items: center;
        justify-content: left;
        margin-bottom: 10px;
    }
    .sort-order-container {
        justify-content: right;
    }
    .color-order {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0 10px;
    }
    .color-order li {
        margin: 0 10px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        cursor: move;
        transition: background-color 0.3s ease;
    }
    .color-order li:hover {
        background-color: #f0f0f0;
    }
    .ghost {
        opacity: 0.5;
    }
    .sort-order-button {
        margin-left: 10px;
        background-color: #6c757d;
        border-color: #6c757d;
        color: white;
    }

</style>
