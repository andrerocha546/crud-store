<template>
    <header class="header">
        header
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        border-bottom: solid 1px black;
        width: 100vw;
    }
</style>
