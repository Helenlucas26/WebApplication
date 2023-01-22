<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5  ">
      <div class="container-fluid  ">
          <a class="navbar-brand text-white fs-2" href="#">Crud Examen</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-5">
                  <a class="nav-link" href="#"> <router-link to="/"
                          class="list-style-none text-decoration-none fs-5 mx-2 text-white">Inicio</router-link></a>
                  <a class="nav-link" href="#"><router-link
                          class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/login"
                          v-if="show">Login</router-link></a>
                  <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                          to="/crud" v-if="!show">Crud</router-link></a>
              </div>
          </div>
      </div>
  </nav>

  <div class="container-fluid">
      <div class="col">
          <div class="row">
              <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                  v-if="!datostutorshow">
                  <h2 class="text-center ">Ingresar Datos Receta</h2>
                  <form action="" class="" @submit.prevent="agregarTutor()">
                      <div class="mx-1 mt-3">
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Nombre</label>
                              <input type="text" class="form-control" v-model="datostutor.nombre">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Ingredientes</label>
                              <input type="text" class="form-control" v-model="datostutor.ingredientes">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Cantidades</label>
                              <input type="text" class="form-control" v-model="datostutor.cantidades">
                          </div>
                          <div class="d-flex justify-content-center">
                              <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                          </div>
                      </div>
                  </form>

              </div>
              <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                  v-if="!datostutoradoshow">
                  <h2 class="text-center ">Ingresar Datos Cocinero</h2>
                  <form action="" class="" @submit.prevent="agregarTutorado()">
                      <div class="mx-1 mt-3">
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Nombre</label>
                              <input type="text" class="form-control" v-model="datostutorados.nombre">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Sueldo</label>
                              <input type="text" class="form-control" v-model="datostutorados.sueldo">
                          </div>
                         
                          <div class="d-flex justify-content-center">
                              <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                          </div>
                      </div>
                  </form>

              </div>
            
          </div>
          <div class="row">
              <table class="table table-striped w-75 text-center">
                  <tr>
                      <th>id</th>
                      <th>Nombre</th>
                      <th>Ingredientes</th>
                      <th>Cantidades</th>
                
                  </tr>
                  <tr v-for="(item, index) in datococinero" :key="index">
                      <td>{{ item._id }}</td>
                      <td>{{ item.nombre }}</td>
                      <td>{{ item.ingredientes }}</td>
                      <td>{{ item.cantidades }}</td>
                      <td>
                     
                    
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                      
                  
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                  
                                    </button>
                                </div>

                      
                               
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editartutor(datostutor)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datostutor.nombre">

                              
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Apellido</label>
                                <input type="text" class="form-control" v-model="datostutor.ingredientes">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificacion</label>
                                <input type="text" class="form-control" v-model="datostutor.cantidades">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                            </div>

                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>





                      </td>
                  </tr>
              </table>
              <table class="table table-striped w-75">
                  <tr>
                      <th>id</th>
                      <th>Nombre</th>
                      <th>Sueldo</th>
                    
                  </tr>
                  <tr v-for="(item, index) in datoreceta" :key="index">
                      <td>{{ item._id }}</td>
                      <td>{{ item.nombre }}</td>
                      <td>{{ item.sueldo }}</td>
                      <td>
                          <!-- inicio tutorado-->
                        
               


                          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarenbaseclientes(datostutorados)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datostutorados.nombre">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Apellido</label>
                                <input type="text" class="form-control" v-model="datostutorados.sueldo">
                            </div>
                        
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>




                          <!-- end next -->
                      
                      </td>

                  </tr>
              </table>
           

          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
          datococinero: [],
          datoreceta: [],
          datostutor: {
            nombre: '',
            ingredientes: '',
            cantidades: '',

          },
          datostutorados: {
              nombre: '',
              sueldo: ''

          },
          datostutorshow: false,
          datostutoradoshow: false
      }
  },

  created() {
      this.mostrar()
  },

  methods: {

      mostrar() {
          axios.get('http://localhost:2500/v1/inventory/api/receta')
              .then(resp => {
                  this.datococinero = resp.data.recetas
                  console.log(resp)
              }).catch((error)=>{console.log(error)})
          axios.get('http://localhost:2500/v1/inventory/api/cocinero')
              .then(resp => {
                  this.datoreceta = resp.data.cocineros
                  console.log(resp)
              })
      },
      agregarTutor() {
          axios.post('http://localhost:2500/v1/inventory/api/receta', this.datostutor)
              .then(resp => {
                  this.datococinero.push(resp.data.tutor)
              })
              .catch(e => {
                  console.log(e)
              })
              .finally(f=>{
                  this.datostutorshow = true;
                  this.datostutoradoshow = false;
                  
                  this.datostutor.nombre = "";
                  this.datostutor.ingredientes = ""
                  this.datostutor.cantidades = ""
              })

      },
      agregarTutorado() {

          axios.post('http://localhost:2500/v1/inventory/api/cocinero', this.datostutorados)
              .then(resp => {
                  this.datoreceta.push(resp.data.tutorado)
              })
              .catch(e => {
                  console.log(e)
              })
          this.datostutoradoshow = false;

             
          this.datostutor.nombre = "";
          this.datostutor.sueldo = ""
       
 
      },
     
      },
      eliminardatostutor(_id){
          axios.delete(`http://localhost:2500/v1/inventory/api/receta/${ _id }`)
          .then(resp =>{
              const index = this.datococinero.findIndex(item => item._id === resp.data._id);
              this.datococinero.splice(index, 1)
          })
      },
      eliminardatostutorado(_id){
          axios.delete(`http://localhost:2500/v1/inventory/api/cocinero${ _id }`)
          .then(resp =>{
              const index = this.datoreceta.findIndex(item => item._id === resp.data._id);
              this.datoreceta.splice(index, 1)
          })
      },
      editartutor(_id){
        axios.put(`http://localhost:2500/v1/inventory/api/receta/${_id}`, this.datostutor)
         .then(resp => {
          
                 console.log(resp)
            }).catch((error)=>{console.log(error)})



        },
       editartutorado(_id){
            axios.put(`http://localhost:2500/v1/inventory/api/cocinero/${_id}`,  this.datostutorados)
            .then(resp => {
          
          console.log(resp)
     }).catch((error)=>{console.log(error)})

 },
       
  }

</script>

<style  scoped>
table { 
width: 750px; 
border-collapse: collapse; 
margin:50px auto;
}

/* Zebra striping */
tr:nth-of-type(odd) { 
background: #eee; 
}

th { 
background: #3498db; 
color: white; 
font-weight: bold; 
}

td, th { 
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

table { 
    width: 100%; 
}

/* Force table to not be like tables anymore */
table, thead, tbody, th, td, tr { 
  display: block; 
}

/* Hide table headers (but not display: none;, for accessibility) */
thead tr { 
  position: absolute;
  top: -9999px;
  left: -9999px;
}

tr { border: 1px solid #ccc; }

td { 
  /* Behave  like a "row" */
  border: none;
  border-bottom: 1px solid #eee; 
  position: relative;
  padding-left: 50%; 
}

td:before { 
  /* Now like a table header */
  position: absolute;
  /* Top/left values mimic padding */
  top: 6px;
  left: 6px;
  width: 45%; 
  padding-right: 10px; 
  white-space: nowrap;
  /* Label the data */
  content: attr(data-column);

  color: #000;
  font-weight: bold;
}

}
</style>