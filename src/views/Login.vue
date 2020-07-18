<template>
  <div class="students">
    <h1>Hi Connie</h1>
    <div>
      Testing Vuex.
      <div class="users">
        <div class="user" v-for="user in currentUsers.users" :key="user.id">
          {{ user.username }}
        </div>

        <!-- {{ allUsers }} -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      user: "tao",
    };
  },

  methods: {
    test() {
      console.log();
    },

    // ...mapActions(["fetchTodos"])
  },

  computed: {
    // ...mapGetters(["allUsers"]),
    // // allUsers() {
    //   return this.$store.getters.allUsers;
    // },
    currentUsers() {
      return this.$store.state.userdata;
    },
  },

  created() {
    this.test();

    // this.fetchTodos();
  },
};
</script>

<style lang="scss" scoped></style>
