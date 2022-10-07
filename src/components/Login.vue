<template>
    <div class="grid place-items-center h-screen">
        <div class="w-1/3 h-2/3 bg-white rounded-lg text-center" v-if="form">
            <h2 class="text-center font-bold text-4xl py-10">Iniciar sesión</h2>
            <form action="" class="flex flex-col px-10" @submit.prevent="login">
                <label for="" class="text-center py-2 font-medium">Correo</label>
                <input type="text" class="bg-gray-300 rounded p-2">
                <label for="" class="text-center py-2 font-medium">Contraseña</label>
                <input type="password" name="" id="" class="bg-gray-300 rounded p-2">
                <button class="bg-green-600 mt-10 py-2 rounded text-white font-semibold">Ingresar</button>
            </form>
            <div class="px-10">
                <button @click="change_form" class="bg-green-600 mt-5 py-2 rounded text-white font-semibold w-full">Registrarse</button>
            </div>
        </div>
        <!--sing up-->
        <div class="w-1/3 h-2/3 bg-white rounded-lg text-center" v-else>
            <h2 class="text-center font-bold text-4xl py-10">Crear cuenta</h2>
            <form action="" class="flex flex-col px-10" @submit.prevent="create_account">
                <label for="" class="text-center py-2 font-medium">Correo</label>
                <input type="text" class="bg-gray-300 rounded p-2">
                <label for="" class="text-center py-2 font-medium">Contraseña</label>
                <input type="password" name="" id="" class="bg-gray-300 rounded p-2">
                <button class="bg-green-600 mt-10 py-2 rounded text-white font-semibold">Registrar</button>
            </form>
            <div class="px-10">
                <button @click="change_form" class="bg-green-600 mt-5 py-2 rounded text-white font-semibold w-full">Iniciar sesión</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Login',
    data() {
        return{
            form : true
        }
    },
    methods : {
        create_account : function () {
            console.log('ceunta creada')
        },
        login : function () {
            console.log('usuario ingresado')
        },
        change_form : function () {
            this.form = !this.form
        }
    }
}
</script>

<style>

</style>