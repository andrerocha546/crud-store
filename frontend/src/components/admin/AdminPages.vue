<template>
    <div class="admin-pages">
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produtos" active>
                        <ProductAdmin />
                    </b-tab>
                    <b-tab title="Categorias">
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Usuários">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import ProductAdmin from './ProductAdmin'
import UserAdmin from './UserAdmin'
import CategoryAdmin from './CategoryAdmin'

export default {
    name: 'AdminPages',
    components: { ProductAdmin, UserAdmin, CategoryAdmin }
}
</script>

<style>
    .admin-pages {
        width: 80%;
        margin: auto;
    }
</style>
