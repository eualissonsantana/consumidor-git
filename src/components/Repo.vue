<template>
  <div class="repo mb-3">
    <a class="title" @click="teste"> {{repo.owner.login}}/<strong>{{repo.name}}</strong> </a>
    <p> {{repo.description}} </p>
  </div>
</template>

<script>
export default {
    props: ['repo'],
    methods: {
        teste() {
            console.log('Deus é fiel')
        }
    }
}
</script>

<style scoped>

    .repo {
        border-bottom: 1px solid #cdcdcd;
    }

    a {
        font-size: 22px;
        color: #24292e
    }

    .repo p {
        font-size: 20px;
    }

    .title {
        color: #0366d6;
    }

</style>