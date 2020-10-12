<template>
    <div class="user-admin">
        <b-form>
            <input type="hidden" id="user-id" v-model="user.id" />
            <b-form-group label="Nome:" label-for="user-nome">
                <b-form-input id="user-id" type="text"
                    v-model="user.name" required
                    placeholder="Informe o nome do Usuário"></b-form-input>
            </b-form-group>
            <b-form-group label="E-mail:" label-for="user-email">
                <b-form-input id="user-email" type="text"
                    v-model="user.email" required
                    placeholder="Informe o E-mail do Usuário"></b-form-input>
            </b-form-group>
            <b-form-group label="Senha:" label-for="user-password">
                <b-form-input id="user-password" type="password"
                    v-model="user.password" required
                    placeholder="Informe a Senha do Usuário"></b-form-input>
            </b-form-group>
            <b-form-group label="Confirmação de Senha:" label-for="user-confirm-password">
                <b-form-input id="user-confirm-password" type="password"
                    v-model="user.confirmPassword" required
                    placeholder="Confirme a Senha do Usuário"></b-form-input>
            </b-form-group>
            <b-form-checkbox id="user-admin"
                v-model="user.admin">Administrador?</b-form-checkbox>
        </b-form>
        <b-button variant='primary' class="mt-2" 
            @click="save">Salvar</b-button>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            user: {}
        }
    },
    methods: {
        save() {
            const url = `${baseApiUrl}/users`
            axios.post(url, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                })
                .catch(showError)
        }
    }
}
</script>

<style>

</style>
