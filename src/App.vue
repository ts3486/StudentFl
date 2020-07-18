<template>
  <v-app>
    <div>
      <div class="d-flex align-center">
        <h1 id="title">website name</h1>
        <v-btn to="/" text id="button"> Home </v-btn>
        <v-btn to="/about" text id="button"> About </v-btn>
        <v-btn to="/students" text id="button"> For Students </v-btn>
        <v-btn to="/clubs" text id="button"> For Clubs </v-btn>
        <v-btn to="/login" text id="button"> Login </v-btn>
      </div>
    </div>

    <v-content>
      <router-view></router-view>
      <About />
      <Students />
      <Clubs />
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import About from "@/components/About.vue";
import Students from "@/components/Students.vue";
import Clubs from "@/components/Clubs.vue";
import Login from "@/components/Login.vue";

export default {
  name: "App",

  components: {
    About,
    Students,
    Clubs,
    Login,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: Helvetica;
  font-weight: lighter;
  padding: 0;
  border: 0;
}

#title {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: rgb(53, 207, 212);
  margin: 4px;
  padding: 50px;
}

#button {
  font-size: 20px;
  text-align: center;
  color: rgb(148, 221, 39);
  margin: 4px;
}

#button:hover {
  animation-name: color_change;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@-webkit-keyframes color_change {
  from {
    color: rgb(148, 221, 39);
  }
  to {
    color: coral;
  }
}
</style>
