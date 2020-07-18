<template>
  <div class="home">
    <!-- You write html here. All content must be inside one tag.  -->
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>{{ connie }}</div>
    <div>{{ stuffedAnimals[0] }}</div>

    <button v-on:click="poo()">Pooh?</button>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  //data is where you store the data
  data() {
    return {
      connie: "Zhou",
      stuffedAnimals: ["pooh", "stitch", "toufu (goner)", "pink bear"],
    };
  },

  //methods are where you write the functions
  methods: {
    poo() {
      console.log("POOOOOOOOO!!!!!!!!");
    },
  },

  //components
  components: {
    // HelloWorld
  },
};
</script>

<style>
/* where you write CSS */
</style>
