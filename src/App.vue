<template>
  <div id="app">
    <div class="container justify-content-center shadom-sm">
      <div class="card card-body">
        <h2>Consumidor GIT</h2>
        <h6 class="lead">Digite aqui para encontrar repositórios</h6>
        <input @keyup.enter.prevent="getRepo" id="search" type="text" class="form-control" required />
      </div>
    </div>

    <div
      class="repos container justify-content-center"
      v-if="repos.length !== 0 && branches.length === 0"
    >
      <div class="container">
        <h3>Repositórios encontrados:</h3>
      </div>
      <Repo v-for="repo in repos" :key="repo.id" @toggle="getBranch" :rep="repo" />
    </div>
    <div class="branches justify-content-center" v-if="branches.length !== 0">
      <div class="container">
        <h3>Branches:</h3>
      </div>
      <div class="branch-space row col-10">
        <Branch v-for="branch in branches" :key="branch.id" :branch="branch" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Repo from "./components/Repo.vue";
import Branch from "./components/Branch.vue";
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      github: {
        url: "https://api.github.com/search/repositories?q=",
        urlBranch: "https://api.github.com/repos"
      },
      repos: [],
      branches: []
    };
  },
  components: {
    Navbar,
    Repo,
    Branch
  },
  methods: {
    getRepo(e) {
      const busca = e.target.value;
      const { url } = this.github;
      axios
        .get(`${url}${busca}`)
        .then(({ data }) => (this.repos = data.items))
        .catch(error => console.log(error));
      this.branches.splice(0);
    },

    getBranch(loginGit, nameRepo) {
      const { urlBranch } = this.github;
      const login = loginGit;
      const name = nameRepo;

      axios
        .get(`${urlBranch}/${login}/${name}/branches`)
        .then(({ data }) => (this.branches = data))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.repos,
.branches {
  margin-top: 20px;
}

.title-busca {
  padding-left: 10px;
}

.branch-space {
  margin: 20px 0 0 75px;
}

#app {
  padding: 30px;
}
</style>