<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" v-model="category.id">
            <b-form-group label="Nome" label-for="category-name">
                <b-form-input id="category-name" type="text"
                    v-model="category.name" required
                    placeholder="Informe o nome da Categoria"></b-form-input>
            </b-form-group>
            <b-form-group label="Categoria Pai (caso exista)" label-for="category-parentId">
                <b-form-select id="category-parentId" type="text"
                    :options="categories"
                    v-model="category.parentId"
                    placeholder="Informe a Categoria pai (caso tenha)"></b-form-select>
            </b-form-group>
            <b-button variant="primary"
                @click="save">Salvar</b-button>
        </b-form>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'CategoryAdmin',
    data: function() {
        return {
            category: {},
            categories: []
        }
    },
    methods: {
        loadCategories() {
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res =>  {
                this.categories = res.data.map(category => {
                    return { value: category.id, text: category.name }
                })
            })
        },
        save() {
            const url = `${baseApiUrl}/categories`
            axios.post(url, this.category)
        }
    },
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>

</style>
