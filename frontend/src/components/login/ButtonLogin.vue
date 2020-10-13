<template>
    <div class="button-login">
        <b-button pill variant='primary'>Login
            <b-icon-person-plus-fill class="icon"></b-icon-person-plus-fill>
        </b-button>
    </div>
</template>

<script>
export default {
    name: 'ButtonLogin'
}
</script>

<style>
    .button-login {
        position: fixed;
        right: 0;
        top: 20px;
        margin-right: 25px;
    }

    .button-login .icon {
        margin-left: 10px;
    }
</style>
