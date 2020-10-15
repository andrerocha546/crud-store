<template>
    <div class="page-login">
        <div class="card-login"></div>
    </div>
</template>

<script>
export default {
    name: 'PageLogin'
}
</script>

<style>
    .page-login {
        width: 100%;
        height: 100%;
    }

    .card-login{
        z-index: 10;
        position: fixed;
        right: 50vw;
        transform: translate(60%, 50%);
        width: 300px;
        height: 300px;
        border-radius: 9px;
        box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.2);
        background-color: white;
    }
</style>
