<script setup>
import { useStore } from 'vuex';

const store = useStore();

function mouseDown() {
    store.commit('setMouseDown', false);    
}
</script>

<template>
    <div class="title">
        <div class="title-left">
            <div class="title-icon">
                <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_543_29)">
                        <path
                            d="M14.4718 14.447L11.4683 25.0144C8.85911 23.2189 6.02003 21.7384 0 24.2881L2.93467 13.8362L2.96997 13.8196C8.96675 11.2944 11.8713 12.641 14.4718 14.447Z"
                            fill="#03A9F4" />
                        <path
                            d="M16.0443 15.4697L13.076 25.9199C15.6835 27.7302 18.5725 29.1731 24.5848 26.6242L27.4471 16.4366C21.3203 18.5847 18.6509 17.2644 16.0443 15.4697Z"
                            fill="#FFC107" />
                        <path
                            d="M14.9713 12.5447L17.9344 2.07624C15.327 0.272866 12.4354 -1.17613 6.41793 1.37887L3.45312 11.8911C5.84271 10.8822 7.73199 10.4194 9.31385 10.4334C11.7138 10.4491 13.4007 11.4641 14.9713 12.5447Z"
                            fill="#FF5722" />
                        <path
                            d="M19.4973 3.177L16.535 13.7059C19.1339 15.511 22.2778 16.9889 28.0386 14.3516L30.9991 3.863C24.9894 6.40225 22.0995 4.97688 19.4973 3.177Z"
                            fill="#7CB342" />
                    </g>
                    <defs>
                        <clipPath id="clip0_543_29">
                            <rect width="31" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div class="title-text">Mindows Live Messenger</div>
        </div>

        <div class="title-right">
            <div class="title-button title-options">
                <button @mouseover="mouseDown">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_38)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.760986 -0.124512V15.9698H16.8553V-0.124512H0.760986ZM2.3704 4.70376V14.3603H15.2458V4.70376H2.3704Z"
                                fill="#9DB1C3" />
                            <path d="M8.80814 12.7509L3.97986 8.72729H13.6364L8.80814 12.7509Z" fill="#9DB1C3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_543_38">
                                <rect width="17" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div class="title-button title-minimize">
                <button @mouseover="mouseDown">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.77783" y="12.7507" width="12.8754" height="3.21886" fill="#9DB1C3" />
                    </svg>
                </button>
            </div>

            <div class="title-button title-fullscreen">
                <button @mouseover="mouseDown">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_36)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.309814 -0.124512V15.9698H16.4041V-0.124512H0.309814ZM1.91925 4.70376V14.3603H14.7947V4.70376H1.91925Z"
                                fill="#9DB1C3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_543_36">
                                <rect width="17" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div class="title-button title-close">
                <button @mouseover="mouseDown">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_34)">
                            <path d="M2.06055 1.09424L14.936 13.9697" stroke="#9DB1C3" stroke-width="3.21886" />
                            <path d="M14.936 1.09424L2.06055 13.9697" stroke="#9DB1C3" stroke-width="3.21886" />
                        </g>
                        <defs>
                            <clipPath id="clip0_543_34">
                                <rect width="17" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
}

.title-icon {
    position: absolute;
    width: 31px;
    height: 28px;
    left: 11px;
    top: 12px;
}

.title-text {
    position: absolute;
    width: 255.9px;
    height: 16.09px;
    left: 48.28px;
    top: 17.7px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16.0943px;
    line-height: 18px;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: 0.45px;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
    text-shadow: #ddd7 0px .5px 1px;
}

.title-button > button {
    border: none;
    box-sizing: border-box;
    background: none;
    padding: 0;
    margin: 0;
    transition: 50ms ease-in-out filter;
    cursor: pointer;
}

.title-button > button:hover {
    filter: brightness(.8);
}

.title-button > button:active {
    filter: brightness(.75);
}

.title-options {
    position: absolute;
    width: 17px;
    height: 16px;
    left: 334px;
    top: 13px;
    border-right: 2px solid #9DB1C3;
    padding-right: 10px;
}

.title-minimize {
    position: absolute;
    width: 17px;
    height: 16px;
    left: 370px;
    top: 13px;
}

.title-fullscreen {
    position: absolute;
    width: 17px;
    height: 16px;
    left: 394px;
    top: 13px;
}

.title-close {
    position: absolute;
    width: 17px;
    height: 16px;
    left: 418px;
    top: 13px;
}
</style>
