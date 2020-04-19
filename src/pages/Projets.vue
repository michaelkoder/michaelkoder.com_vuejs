<template>
   <main role="main">
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
      </div> 
      <div class="col-10 text-center mt-4 mb-4">
        <h1 class="mb-4 mt-2">PROJETS</h1>
        <h4>Voici quelques projets réalisés ces dernières années regroupés par types</h4>
      </div>
      <div class="col-1">
      </div>
    </div>

    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-12 col-md-10">
        
  


  <div v-for="(projectGroup,z) in projectsList" v-bind:key="projectGroup.id">
          <h5>{{projectGroup.title}} {{z}}</h5>
          <div class="row row-cols-1 row-cols-md-3 mt-3">

            <div v-for="(project,i) in projectGroup.projects" v-bind:key="project.id" class="col mb-4">
              
                   <div class="card h-100">
                
                <div v-bind:id="'project'+z+i" class="text-right mt-n3 mr-n3 cursor-pointer" data-toggle="modal" data-target=".bd-example-modal-lg" >
                    <i class="fas fa-info-circle fa-2x"></i>
                </div>
                
                  <a v-bind:href="'project.url'" target="_BLANK"> 
                    <img :src="require(`./../assets/images/projects/${project.logo}`)" class="card-img-top" :alt="project.name">
                    <!-- -->
                    <div class="card-body">
                      <h5 class="card-title">
                          {{project.name}}
                      </h5>
                      <p class="card-text">{{project.description}}</p>
                    </div>
                   
                  </a>
              </div>
          </div>
        </div>

      </div>
    </div>
    <div class="col-1">
    </div>
  </div>
  </div>
</main> 

</template>

<script>
import axios from 'axios'

export default {  
    data() {
        return {
            projectsList: null
        }
    },
    methodes:{
        getImage : function(path){
            return require(path)
        }
    },
    mounted() {
        axios
        .get('https://michaelkoder.com/assets/data/projects_fr.json',{ useCredentails: true })
        .then(response => (this.projectsList = response.data.projectsList))
    }

}
</script>