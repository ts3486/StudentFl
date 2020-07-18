<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",

  data() {
    return {
      user: "connie",
    };
  },

  methods: {
    test() {
      console.log();
    },
  },

  computed: mapGetters(["allUsers"]),

  created: function() {
    this.test();
  },
};
</script>

<style lang="scss" scoped></style>
