<template>
  <div class="home">
    <!-- You write html here. All content must be inside one tag.  -->
    <br />
    <h1>Recent job posts</h1>
    <div class="wrapper">
      <div class="item">
        <h2>{{ titles[0] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[0] }}</p>
      </div>
      <div class="item">
        <h2>{{ titles[1] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[1] }}</p>
      </div>
      <div class="item">
        <h2>{{ titles[2] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[2] }}</p>
      </div>
      <div class="item">
        <h2>{{ titles[3] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[3] }}</p>
      </div>
      <div class="item">
        <h2>{{ titles[4] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[4] }}</p>
      </div>
      <div class="item">
        <h2>{{ titles[5] }}</h2>
        <p>Description: Help wanted!<br />Needs:<br />{{ salary[5] }}</p>
      </div>
    </div>
    <footer id="footer">
      <h5>Need help? Contact:</h5>
      <ul class="contact">
        dfghj@gmail.com
      </ul>
      <ul class="contact">
        ghj@gmail.com
      </ul>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  //data is where you store the data
  data() {
    return {
      titles: [
        "Job Post Sample 1",
        "Job Post Sample 2",
        "Job Post Sample 3",
        "Job Post Sample 4",
        "Job Post Sample 5",
        "Job Post Sample 6",
      ],
      salary: ["¥10000", "¥15000", "¥20000", "¥10000", "¥12000", "¥30000"],
    };
  },

  //methods are where you write the functions
  methods: {
    poo() {
      //console.log("POOOOOOOOO!!!!!!!!");
    },
  },

  //components
  components: {
    //none
  },
};
</script>

<style>
.wrapper {
  width: 90%;
  justify-content: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-gap: 30px;
}
.item {
  border: 2px solid grey;
  opacity: 95%;
}
h1 {
  justify-content: center;
  margin: 18px;
  padding: 10px;
}
h2 {
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}
#footer {
  padding: 30px;
  font-size: 15px;
}
</style>
