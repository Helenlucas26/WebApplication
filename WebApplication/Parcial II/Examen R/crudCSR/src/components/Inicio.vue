<template>
   <nav class="navbar navbar-expand-lg bg-success mb-5  ">
  <div class="container-fluid  ">
    <a class="navbar-brand text-white fs-2" href="#">Crud Examen</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-5">
        <a class="nav-link" href="#"> <router-link to="/" class="list-style-none text-decoration-none fs-5 mx-2 text-white" >Inicio</router-link></a>
        <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/crud" v-if="visibilidad" >Crud</router-link></a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
    name: "Inicio",
    data() {
        return {
            visibilidad: true
        }
    },
    methods: {
        entrar() {
            router.push('/crud')
            this.visibilidad = true
        }
    }
  };    

</script>

<style scoped>

</style>