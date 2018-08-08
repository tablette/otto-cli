<template>
    <div class="reviews">
        <h2>What people are saying about OTTO:</h2>
        <div v-for="rvw in rvws" :key="rvw.id">
            <h3 class="rvw-title chip cat">{{ rvw.title }}</h3>
            <h3 class="rvw-body chip lab">{{ rvw.body }}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Reviews',
    data(){
        return {
            rvws: []
        }
    },
    // lifecycle hooks
    // beforeCreate(){
    //     console.log('beforeCreate hook')
    // },
    // created(){
    //     console.log('created hook')
    // },
    // beforeUpdate(){
    //     console.log('beforeUpdate hook')
            // fires if/when DOM updates
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/') // returns a promise
        .then(response => {
            console.log(response)
            this.rvws = response.data
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>