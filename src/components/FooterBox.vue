<template>
 <footer class="container-fluid bg-dark">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 d-flex">
      <ul class="list-inline mx-auto justify-content-center mt-3">
        <li class="list-inline-item">
          <router-link to="/politique"> Politique de confidentialite</router-link>
          <router-link to="/mentions"> Mentions légales</router-link>
          <router-link to="/conditions"> Conditions générales de vente</router-link>
        </li>
      </ul>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row footerDown">
    <div class="col-2"></div>
    <div class="col-8 d-flex">
      <ul class="list-inline mx-auto justify-content-center">
        <li class="list-inline-item"> icons by <a target="_blank" href="https://icones8.fr">Icons8 </a></li>
      </ul>
    </div>
    <div class="col-2"></div>
  </div>
</footer>
</template>
<script>
export default {
  name: 'FooterBox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer ul li a{
    margin-right: 1.5rem;
  }
  router-link,
  a{color:#FFFFFF;}
  ul li a:hover{color:#FFFFFF;}
</style>
