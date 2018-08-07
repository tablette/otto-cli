<template>
    <div id="all-categories">
        <h2>*from component* All Categories</h2>
        <!-- cycle through cateogries -->
        <div v-for="(cat, index) in categories" :key="index">
            <!-- and render to browser -->
            <span class="chip cat">{{ cat }}
                <!-- edit -->
                <!-- not working right now - revisit lesson 21 -->
                <span class="editbtn" v-on:click="categories.splice(index, 1, editItem())">&#10000;</span>
                <!-- delete -->
                <!-- not working right now - revisit lesson 21 -->
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
            // nothing right now
        }
    }
}
</script>

<style>

/* nothing to see here */

</style>