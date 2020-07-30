<template>
  <div class="p-5 container" variant="secondary">
    <b-card>
      <h1>Consumidor Git</h1>
      <b-input v-model="repoName" @keydown.enter="search" placeholder="Digite aqui o nome do repositório"></b-input>
      <b-button @click="search" variant="success" size="lg" class="mt-3">Pesquisar</b-button>
    </b-card>
    <hr>
    <RepoGrid :repos="repositories" />
  </div>
</template>

<script>
import RepoGrid from './components/RepoGrid'

export default {
  components: {RepoGrid},
  data() {
    return {
      repoName: '',
      repositories: []
    }
  },
  methods: {
    ///repos/alissongp/repo/branches todas as branches de um repositório
    search() {
      this.$http(`search/repositories?q=/${this.repoName}`)
				.then(res => {
					this.repositories = res.data.items
					console.log(this.repositories)
				})
    }
  }
}
</script>

<style>

</style>>