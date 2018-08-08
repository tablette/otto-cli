<template>
    <div id="all-labels">
        <h2>*from component* All Labels</h2>    
        <div v-for="(lab, index) in labels" :key="index">
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
            // nothing right now
        }
    },
    methods: {
        number(index){
            this.$emit('nbr', index) // pass up to parent
        }
    }
}
</script>

<style>

/* nothing to see here */

</style>