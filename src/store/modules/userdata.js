import axios from "axios";

const state = {
  users: [
    { id: 1, username: "tao" },

    { id: 2, username: "tao2" }
  ]
};

const getter = {
  allUsers: state => state.users
};

const action = {
  async fetchTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    console.log(response.data);
  }
};

const mutation = {};

export default {
  namespaced: true,
  state,
  getter,
  action,
  mutation,
  axios
};
