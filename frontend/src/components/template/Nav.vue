<template>
    <nav class="nav">
        <a href="/">Início</a>
        <a href="">Sobre nós</a>
        <a href="">Contato</a>
        <div class="pipe"></div>
        <a href="">Carrinho
        </a>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>
    .nav {
        position: relative;
        display: flex; 
    }

    .nav a {
        text-decoration: none;
        padding: 0 18px;
        font-weight: 400;
        font-size: 1.2rem;
        color: #2E2E2E;
    }

    .nav .pipe {
        border-right: solid 1px #BABABA;
    }
</style>
