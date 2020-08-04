<template>
  <div class="repo mb-3 row container">
    <div class="mt-1">
      <svg height="20" style="color: #6a737d" class="octicon octicon-repo" viewBox="0 0 17 17" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
    </div>

    <div class="col">
        <a class="title"> {{repo.owner.login}}/<strong>{{repo.name}}</strong> </a>
        <p> {{repo.description}} </p>
        <div class="row container botton-info">
            <svg aria-label="star" class="my-1 mr-1" viewBox="0 0 17 17" version="1.1" width="17" height="17" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
            <p class="mr-4">{{starsCount}}</p>
            <span v-bind:class="currentLanguage" class="circle"></span><p class="ml-1"> {{repo.language}} </p>
            <p class="ml-4"> {{repo.license.name}} </p>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: ['repo'],
    data() {
        return {
            stars: '',
            language: this.repo.language,
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
        },

        currentLanguage() {
            if(this.language == 'JavaScript') {
                return 'javascript'
            }else if(this.language == 'PHP'){
                return 'php'
            }else if(this.language == 'C#'){
                return 'c-sharp'
            }else if(this.language == 'HTML'){
                return 'html'
            }else if(this.language == 'TypeScript'){
                return 'typescript'
            }else if(this.language == 'Python'){
                return 'python'
            }

        }
    },
    watch: {
       
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
        font-size: 20px;
        color: #24292e
    }

    .repo p {
        font-size: 18px;
    }

    .title {
        color: #0366d6;
    }

    .botton-info p {
        font-size: 16px;
    }

    .circle {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: red;
        margin: 6px 6px 0;
    }

    .javascript {
        background-color: #f1e05a;
    }

    .typescript {
        background-color: #2b7489;
    }

    .html {
        background-color: #e34c26;
    }

    .c-sharp {
        background-color: #178600;
    }

    .php {
        background-color: #4F5D95;
    }

    .python {
        background-color: #3572A5;
    }

</style>