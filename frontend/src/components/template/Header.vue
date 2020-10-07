<template>
    <header class="header">
        <span href="/">Store</span>
        <Nav />
    </header>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'Header',
    components: { Nav }
}
</script>

<style>
    .header {
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10%;
        border-bottom: solid 1px #BABABA;
    }
     
    .header span {
        text-decoration: none;
        color: #2E2E2E;
        font-weight: 600;
        font-size: 1.5rem;
    }
</style>
