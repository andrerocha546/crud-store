<template>
    <div class="product-item">
        <div class="product-item-info">
            <img :src="product.imageUrl"
                alt="Foto do produto" class="image"
                height="90%" width="90%">
            <h3>{{ product.title }}</h3>
            <p class="price">R$: {{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product']
}
</script>

<style>
    .product-item-info {
        display: grid;
        grid-template-rows: 70% 15% 15%; 
        grid-template-areas:
            'img'
            'title'
            'price';
        justify-items: center;
        align-items: center;
        border-radius: 7px;
        box-shadow: 0 0 .5em rgba(0, 0, 0, 0.2);
        margin: 10px;
        width: 300px;
        height: 400px;
    }

    .product-item-info img {
        grid-area: img
    }

    .product-item-info h3 {
        grid-area: title;
        text-decoration: none;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 100;
        color: #8E8E8E;
    }

    .product-item-info .price {
        grid-area: price;
        font-size: 1.5rem;
        font-weight: 700;
        color: #606060;
    }
</style>
