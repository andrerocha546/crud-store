<template>
    <div class="button-login">
        <b-button pill variant='primary'
            @click="openPageLogin">Login
            <b-icon-person-plus-fill class="icon"></b-icon-person-plus-fill>
        </b-button>
        <PageLogin v-if="showPageLogin" />
    </div>
</template>

<script>
import PageLogin from './PageLogin'

export default {
    name: 'ButtonLogin',
    data: function() {
        return {
            showPageLogin: false
        }
    },
    components: { PageLogin },
    methods: {
        openPageLogin() {
            this.showPageLogin = !this.showPageLogin
        }
    }
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
