<script setup>
import Title from './Title.vue';
import { ref } from 'vue';

const drag = ref(false);

function isDrag() {
    return drag.value;
}
</script>

<template>
    <div class="panel">
        <Title @mousedown="drag = true" @mouseup="drag = false" />
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.panel {
    box-sizing: border-box;
    position: absolute;
    width: 445.81px;
    height: 975.31px;
    left: calc(100vw / 2 - 445.81px / 2);
    top: calc(100vh / 2 - 975.31px / 2);
    transform: scale(.7, .7);
    background-color: #EBF3F6;
    background-image: url('../assets/top-bg.png');
    background-repeat: repeat-x;
    background-size: 100% auto;
    border: 1.60943px solid #5B7596;
    box-shadow: inset 0px 0px 6.43771px #88898B;
    border-radius: 4.82828px;
    font-family: 'Ubuntu', sans-serif;
}
</style>
