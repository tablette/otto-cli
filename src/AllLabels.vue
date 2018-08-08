<template>
    <div id="all-labels">
        <h2>All Labels</h2>
        <!-- cycle through labels -->
        <span><input type="text" v-model="searchTerm"> filter </span>
        <div v-for="(lab, index) in filteredLabs" :key="index">
            <!-- and render to browser -->
            <span class="chip lab">
                <!-- show number (for now just prints a flower to the DOM and the number to the console) -->
                <span @click="number(index)">&#8277;</span>
                <!-- display -->
                {{ lab }}
                <!-- edit -->
                <span class="editbtn" v-on:click="labels.splice(index, 1, editItem())">&#10000;</span>
                <!-- delete -->
                <span class="closebtn" v-on:click="labels.splice(index, 1)">&times;</span>
            </span>
        </div>
        <p class="spacer-gentop"></p>    
    </div>
</template>

<script>
export default {
    name: 'AllLabels',
    props: ['labels', 'editItem'],
    data(){
        return{
            searchTerm: ''
        }
    },
    methods: {
        number(index){
            this.$emit('nbr', index) // pass up to parent
        }
    },
    computed: {
        filteredLabs(){
            console.log(this.labels)
            return this.labels.filter(label => {
                return label.match(this.searchTerm)
            })
        }
    }
}
</script>

<style>

/* nothing to see here */

</style>