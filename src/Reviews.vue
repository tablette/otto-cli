<template>
    <div class="reviews">
        <h2>{{ reviewTitle }}</h2>
        <p>what people are saying about OTTO</p>
    </div>
</template>

<script>
export default {
    name: 'Reviews',
    data(){
        return {
            reviewTitle: 'Reviews'
        }
    },
    // lifecycle hooks
    beforeCreate(){
        console.log('beforeCreate hook')
    },
    created(){
        console.log('created hook')
    },
    beforeUpdate(){
        console.log('beforeUpdate hook')
        // fires if/when DOM updates
    }
}
</script>