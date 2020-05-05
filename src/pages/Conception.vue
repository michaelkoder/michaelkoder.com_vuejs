<template>
    <div class="slidersBox">
       <h1 class="mt-4">Quelques travaux de conception</h1>
      <div id="carouselExampleControls" class="carousel slide carouselBox" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item" v-bind:class="[i==0 ? 'active' : '']" v-for="(slide,i) in slidesList" :key="`${i}-${slide.id}`">
            <img class="align-items-center w-50 mt-2 mb-2" :src="require(`./../assets/images/graphisme/${slide.url}`)" alt="First slide" />
          </div>
        </div>
        
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <font-awesome-icon class="fa-2x" :icon="leftIcon"  />
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <font-awesome-icon class="fa-2x" :icon="rightIcon"  />
        </a>
      </div>

    </div>

</template>

<script>
import axios from 'axios'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            slidesList: null        }
    }, 
  methods: {
  },
    computed: {
      leftIcon () {
        return faArrowLeft
      },
      rightIcon () {
        return faArrowRight
      }
    },
    mounted() {
        axios
        .get('https://michaelkoder.com/assets/data/conception.json',{ useCredentails: true })
        .then(response => (this.slidesList = response.data.slides))
    }
};
</script>