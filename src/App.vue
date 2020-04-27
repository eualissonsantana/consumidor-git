<template>
  <div id="app">
    <Navbar />

    <div class="container justify-content-center">
      <div class="card card-body">
        <h2>Pesquisar repositórios GIT</h2>
        <h6 class="lead">Digite aqui para encontrar repositórios</h6>
        <input
          @keyup="getRepo"
          id="search"
          type="text"
          class="form-control"
          required
        />
      </div>
    </div>

    <div class="repos" v-if="repos.length !== 0">
      <Repo v-for="(repo, index) in repos" :key="index" :repo="repo" />
    </div>
  </div>
</template>

<style>
.repos {
  margin-top: 20px;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Repo from "./components/Repo.vue";
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      github: {
        url: "https://api.github.com/search/repositories?q=",
        urlBranch: "https://api.github.com/repos",
      },
      repos: [],
      branches: [],
    };
  },
  components: {
    Navbar,
    Repo,
  },
  methods: {
    getRepo(e) {
      const busca = e.target.value;
      const { url } = this.github;
      axios
        .get(`${url}${busca}`)
        .then(({ data }) => (this.repos = data.items))
        .catch((error) => console.log(error));
    },

    getBranch(e) {
      const buscaBranch = e.target.value;
      const { urlBranch } = this.github;
      const user = this.data.items.name;
      const repo = this.data.items.full_name;
      axios
        .get(`${url}/${user}/${repo}/branches`)
        .then(({ data }) => (this.branches = data))
        .catch((error) => console.log(error));
    },
  },
};
</script>
