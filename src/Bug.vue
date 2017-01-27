<template>
    <div class="bug">
        <input class="progress-range" :style="{ background: backgroundString }" type="range" :value="progress" min="0" max="100" @input="updateSlider">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Bug",
            progress: 50,
            backgroundString: "-webkit-linear-gradient(left, #1985A1 0%, #1985A1 50%, #C5C3C6 50%)"
        }
    },

    methods: {
        updateSlider: function (input) {
            this.progress = input.target.valueAsNumber;
            this.backgroundString = "-webkit-linear-gradient(left, #1985A1 0%, #1985A1 "+ this.progress + "%, #C5C3C6 "+ this.progress + "%)";
        }
    }
}
</script>

<style>
.bug {
    width: 480px;
    background: #DCDCDD;
    border-radius: 5px;
    margin: 24px auto;
    padding: 16px;
}

.progress-range {
    -webkit-appearance: none;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 10px;
}

.progress-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #46494C;
    transition: background .10s ease-in-out;
    cursor: pointer;
}

.progress-range::-webkit-slider-thumb:hover {
    background: #4C5C68;
}

.progress-range:focus {
    outline: none;
}
</style>