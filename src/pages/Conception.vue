<template>
    <div>
        PAGE CONCEPTION 
        <button v-on:click="clickHandler">Toggle Message</button>

    </div>
</template>

<script>
export default {
  methods: {
    clickHandler () {
        console.log("You clicked the button!");
    }
  }
};
</script>