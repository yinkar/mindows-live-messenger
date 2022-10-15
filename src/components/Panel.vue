<script setup>
import Title from './Title.vue';
import { ref, computed, onMounted } from 'vue';
import { watchEffect } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();

const clickedX = ref(0);
const clickedY = ref(0);

const panelX = ref(0);
const panelY = ref(0);

const drag = ref(false);

const panel = ref(null);

const isDrag = computed(() => drag.value && store.state.isMouseDown);

function mouseDown() {
    drag.value = true;
    store.commit('setMouseDown', true);

    clickedX.value = parseFloat(panel.value.style.left) - store.state.mouseX;
    clickedY.value = parseFloat(panel.value.style.top) - store.state.mouseY;
}

watchEffect(() => {
    const mouseX = store.state.mouseX;
    const mouseY = store.state.mouseY;

    if (isDrag.value && panel.value) {
        panelX.value = mouseX + clickedX.value;
        panelY.value = mouseY + clickedY.value;
    }
});

onMounted(() => {
    panelX.value = document.body.getBoundingClientRect().width / 2 - panel.value.getBoundingClientRect().width / 2;
    panelY.value = document.body.getBoundingClientRect().height / 2 - panel.value.getBoundingClientRect().height / 2;

    console.log()

    Object.assign(panel.value.style, {
        left: `${panelX.value}px`,
        top: `${panelX.value}px`,
    });
});

</script>

<template>
    <div class="panel" ref="panel" :style="{ left: panelX + 'px', top: panelY + 'px' }">
        <Title @mousedown="mouseDown" />
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
    background-color: #EBF3F6;
    background-image: url('../assets/top-bg.png');
    background-repeat: repeat-x;
    background-size: 100% auto;
    transform-origin: top left;
    border: 1.60943px solid #5B7596;
    box-shadow: inset 0px 0px 6.43771px #88898B;
    border-radius: 4.82828px;
    font-family: 'Ubuntu', sans-serif;
    transform: scale(.7, .7);
}
</style>
