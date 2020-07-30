<template>
  <div class="repo mb-3">
    <a class="title" @click="teste"> {{repo.owner.login}}/<strong>{{repo.name}}</strong> </a>
    <p> {{repo.description}} </p>
    <div class="row container">
        <p>{{starsCount}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['repo'],
    data() {
        return {
            stars: ''
        }
    },
    computed: {
        starsCount() {
            const starsCurrent = this.repo.stargazers_count.toString()
           
            if(starsCurrent.length < 4){
                this.stars = starsCurrent
            }else {
                this.stars = this.getUnity(starsCurrent)
            }

            return this.stars
        }
    },
    methods: {
        getUnity(value) {
            const arr = value.split('')
            let retorno = ''

            if(value.length === 4) {
                arr.splice(1, 0, '.')
                retorno = arr.slice(0,3).join('')
            } else if(value.length === 5){
                arr.splice(2, 0, '.')
                retorno = arr.slice(0,4).join('')
            } else {
                retorno = arr.slice(0,3).join('')
            }

            return retorno + 'k'
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