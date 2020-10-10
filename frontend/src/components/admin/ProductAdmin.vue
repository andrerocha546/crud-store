<template>
    <div class="product-admin">
        <b-form>
            <input type="hidden" id="product-id" v-model="product.id">
            <b-form-group label="Nome:" label-for="product-name">
                <b-form-input id="product-name" type="text"
                    v-model="product.title" required
                    placeholder="Informe o Nome do produto"></b-form-input>
            </b-form-group>
            <b-form-group label="Descrição:" label-for="product-description">
                <b-form-input v-model="product.description" required
                    placeholder="Informe a descrição do produto"></b-form-input>
            </b-form-group>
            <b-form-group label="Imagem:" label-for="product-imageUrl">
                <b-form-input v-model="product.imageUrl" required
                    placeholder="Informe a imagem do produto"></b-form-input>
            </b-form-group>
            <b-form-group label="Preço:" label-for="product-price">
                <b-form-input v-model="product.price" required
                    placeholder="Informe o preço do produto"></b-form-input>
            </b-form-group>
            <b-form-group label="Quantidade:" label-for="product-quantity">
                <b-form-input v-model="product.quantity" required
                    placeholder="Informe a Quantidade do produto"></b-form-input>
            </b-form-group>
            <b-form-group label="Categoria" label-for="product-categoryId">
                <b-form-select id="product-categoryId"
                    :options="categories" v-model="product.categoryId"></b-form-select>
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
    name: 'ProductAdmin',
    data: function() {
        return {
            product: {},
            categories: [],
        }
    },
    methods: {
        save() {
            axios.post(`${baseApiUrl}/products`, this.product)
                .then(() => {
                    console.log('deu certo')
                })
                .catch(console.log('falhou'))
        },
        loadCategories() {
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res => {
                this.categories = res.data.map(category => {
                    return { value: category.id, text: category.name }
                })
            })
        }
    },
    mounted() {
        this.loadCategories()
    }
};
</script>

<style>

</style>
