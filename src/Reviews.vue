<template>
    <div class="reviews">
        <h2>What people are saying about OTTO:</h2>
        <input type="text" v-model="searchTerm">
        <p> search reviews </p>
        <div v-for="rvw in filteredRvws" :key="rvw.id">
            <h3 class="rvw-title chip cat">{{ rvw.title }}</h3>
            <h3 class="rvw-body chip lab">{{ `${rvw.body} ${rvw.body} ${rvw.body}` | snippet }}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Reviews',
    data(){
        return {
            rvws: [],
            searchTerm: '' // empty string to model every keystroke in input field
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
    methods: {

    },
    computed: {
        filteredRvws(){
            return this.rvws.filter(rvw => {
                return rvw.body.match(this.searchTerm) || rvw.title.match(this.searchTerm)
                // where match is built in method
            })
        }
    },
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