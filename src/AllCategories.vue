<template>
    <div id="all-categories">
        <h2>All Categories</h2>
        <!-- cycle through cateogries -->
        <div v-for="(cat, index) in categories" :key="index">
            <!-- and render to browser -->
            <span class="chip cat">
                <!-- show number (for now just prints an asterism to the DOM and the number to the console) -->
                <span @click="number(index)">&#8258;</span>
                <!-- display -->
                {{ cat }}
                <!-- edit -->
                <span class="editbtn" v-on:click="categories.splice(index, 1, editItem())">&#10000;</span>
                <!-- delete -->
                <span class="closebtn" v-on:click="categories.splice(index, 1)">&times;</span>
            </span>
        </div>
        <p class="spacer-gentop"></p>
    </div>
</template>

<script>
export default {
    name: 'AllCategories',
    props: ['categories', 'editItem'],
    data(){
        return{
            //
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