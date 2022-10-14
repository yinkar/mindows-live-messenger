<script setup>
import { ref } from 'vue';
import Login from './components/Login.vue';

const panel = ref(null);

</script>

<template>
    <div id="workspace">
        <Login ref="panel" />
    </div>
</template>

<style>
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu'),
        url('./fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
}

#workspace {
    margin: 0;
    padding: 0;
    background-color: #004e98;
    width: 100vw;
    height: 100vh;
    background-image: url('./assets/bliss.jpg');
    background-size: cover
}

*:not(input), *:not(textarea) {
    user-select: none;
}
</style>
