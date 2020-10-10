<template>
    <div class="admin-pages">
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produtos" active>
                        <ProductAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import ProductAdmin from './ProductAdmin'

export default {
    name: 'AdminPages',
    components: { ProductAdmin }
}
</script>

<style>

</style>
