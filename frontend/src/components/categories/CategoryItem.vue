<template>
    <div class="category-item">
        <div class="category-item-name">
            <h3>{{ category.name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryItem',
    props: ['category']
}
</script>

<style>
    .category-item-name h3{
        font-size: 1rem;
        font-weight: 100;
        color: #9F9F9F;
    }

</style>
