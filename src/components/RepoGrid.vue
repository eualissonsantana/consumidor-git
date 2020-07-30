<template>
    <div>
        <b-card>
            <Repo v-for="repo in repos" :key="repo.id" :repo="repo"/>
        </b-card>
    </div>
</template>

<script>
import Repo from './Repo'

export default {
    components: {Repo},
    props: ['repos']
}
</script>

<style>

</style>>