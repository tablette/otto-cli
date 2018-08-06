<template>
        <div class="topnav">
            <nav class="main-nav"> <!-- "scoping" using regular css -->
                <a class="active" href="#home">otto</a>  
                <a href="#signin">Sign In</a>
                <a href="#signup">Sign Up</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
                <a href="#about">About</a>
            </nav>
        </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
nav.main-nav { /* "scoping" using regular css */
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>


