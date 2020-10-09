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
    mounted() {
        const url = `${baseApiUrl}/categories`
        axios.get(url).then(res => this.categories = res.data)
    }
}


</script>

<style>
    .menu {
        grid-area: menu;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-left: 40px;
        justify-content: center;
    }

    .menu ul {
        list-style: none;
        padding: 0;
    }
</style>
