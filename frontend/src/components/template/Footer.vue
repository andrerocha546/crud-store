<template>
    <footer class="footer">
        <p>Desenvolvido por 
            <a href="https://github.com/andrerocha546"> André Rocha</a></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F9F7FA;
        height: 70px;
    }

    .footer a {
        text-decoration: underline;
        color: black;

    }
</style>
