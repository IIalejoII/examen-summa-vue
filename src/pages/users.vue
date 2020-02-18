<template>
    <div>
        <h1>Hola esta la página de usuarios</h1>
        <div class="form-wrapper" style="float:left;width:50%">
            <form action="" @submit.prevent @keyup.enter="addUser({name: name, lastName: lastName, email: email})">
                
                <p>
                <label for="name">Nombre</label>
                <input type="text" id="name" v-model="name">
                <pre>{{name}}</pre>
                </p>

                <p>
                <label for="lastName">Apellido</label>
                <input type="text" id="lastName" v-model="lastName">
                <pre>{{lastName}}</pre>
                </p>

                <p>
                <label for="email">Correo electrónico</label>
                <input type="text" id="email" v-model="email">
                <pre>{{email}}</pre>
                </p>
                <button @click="addUser({name: name, lastName: lastName, email: email})" type="submit">Crear usuario</button>
            </form>
        </div>
        <div class="users-wrapper" style="float:left;width:50%">
            <ul id="example-1" style="list-style:none;padding: 1em;">
                <li style="border:solid 1px #222;position:relative" v-for="(user, index) in users" :key="index">
                    <button style="position:absolute;top:10px;right:10px;cursor:pointer" @click="deleteUser(index)">X</button>
                    <p><b>Id:</b>  {{index}}</p>
                    <p><b>Nombre:</b> {{user.name}}</p>
                    <p><b>Apellido:</b> {{user.lastName}}</p>
                    <p><b>Correo electrónico:</b> {{user.email}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            name: '',
            lastName: '',
            email: ''
        }
    },
    methods: mapActions([
        'addUser',
        'deleteUser'
    ]),
    computed: {
        ...mapState(['users']),
    }
}
</script>