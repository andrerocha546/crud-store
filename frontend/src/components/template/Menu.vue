<template>
    <div class="menu">
        <h3>Categorias</h3>
        <ul>
            <li>
                Todos os produtos
            </li>
            <li v-for="category in categories" :key="category.id">
                <CategoryItem :category="category"></CategoryItem>
            </li>
        </ul>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import CategoryItem from '../categories/CategoryItem.vue'

export default {
    name: 'Menu',
    components: { CategoryItem },
    data: function() {
        return {
            categories: []
        }
    },
    methods: {
        getCategories() {
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res => this.categories = res.data)
        }
    },
    mounted() {
        this.getCategories()
    }
}


</script>

<style>
    .menu {
        grid-area: menu;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 40px;
    }

    .menu ul {
        list-style: none;
        padding: 0;
    }
</style>
