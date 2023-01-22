<template>
<div>
  <table class="table w-50 m-auto">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">fecha</th>
      <th scope="col">hora</th>
      <th scope="col">cantidad</th>
      <th scope="col">costo</th>
      <th scope="col">tiempo</th>
      <th  scope="col">Botones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in datos" :key="index">
      <th>{{ item._id }}</th>
      <td>{{ item.fecha }}</td>
      <td>{{ item.hora }}</td>
      <td>{{ item.cantidad }}</td>
      <td>{{ item.costo }}</td>
      <td>{{ item.tiempo }}</td>
      <td><button @click="eliminardatos(item._id) " class="btn btn-danger">Restaurar</button></td>
    </tr>

  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      datos: []
    }
  },
  created(){
    this.mostrardatos();
  },
  methods:{
    mostrardatos(){
      axios.get('http://localhost:3000/api/reciclaje')
      .then(res =>{
        this.datos = res.data
      })
    },
    eliminardatos(_id){
      axios.delete(`http://localhost:3000/api/reciclaje/${_id}`)
      .then(res =>{
        const index  = this.datos.findIndex(i => i._id === res.data._id)
              this.datos.splice(index, 1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
