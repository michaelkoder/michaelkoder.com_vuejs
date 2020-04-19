<template>
    <!-- Modal -->
<div id="myModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
  aria-hidden="true" >
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >{{title}}</h5> 
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="ml-4 mr-4 mb-5">
          <img width="100%" :src="require(`./../assets/images/projects/${imgSrc}`)" />
          <div class="text-center mb-3">
            {{content}}
          </div>
          <div class="text-center mt-4 mb-n3">
            <a :href="popinLink" class="btn btn-success whiteTxt">OUVRIR LE PROJET</a> 
          </div>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
export default {
      props: ['title','content','popinLink','imgSrc']
};
</script>