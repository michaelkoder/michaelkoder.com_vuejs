<template>
  <header>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand ml-5 mr-5 " routerLink="/home">
      <img width="250px" src="./../assets/images/michaelKoderLogo_white.svg" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-auto text-center" id="navbarNavAltMarkup">

        <ul class="navbar-nav">
          <li class="nav-item">
                <router-link to="/accueil">ACCUEIL</router-link>
                <router-link to="/projets">PROJETS</router-link>
                <router-link to="/conception">CONCEPTION</router-link>
                <router-link to="/graphisme">GRAPHISME</router-link>
                <router-link to="/contact">CONTACT</router-link>

            </li>
          </ul>
          <span class="form-inline">
          </span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav { background-color: #000000;}
  nav ul {
    margin: 12px 0 0 10px;
  }
  nav a{
    margin:0px 1.7rem 0;
    color:#FFFFFF;
  }
  nav a.router-link-active{
    text-decoration: underline;
  }
  a:hover,
  router-link,
  a{color:#FFFFFF;}
</style>
