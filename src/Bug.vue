<template>
    <div class="bug">
        <div class="title" contenteditable="true" placeholder="Bug name...">
            {{ name }}
        </div>
        <div class="progress-area">
            <input class="progress-range" :style="{ background: backgroundString }" type="range" :value="progress" min="1" max="100"
                @input="updateSlider">
            <div class="progress-number">{{ progress | percent }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "Bug #" + Math.floor((Math.random() *(10000 - 1000) + 1000)),
                progress: Math.floor((Math.random() *(80 - 30) + 30)),
                backgroundString: "-webkit-linear-gradient(left, #1985A1 0%, #1985A1 " + this.progress + "%, #C5C3C6 " + this.progress + "%)"
            }
        },

        filters: {
            percent: function (value) {
                if (!value) return '';

                value = value.toString();
                return value + '%';
            }
        },

        methods: {
            updateSlider: function (input) {
                this.progress = input.target.valueAsNumber;
                this.backgroundString = "-webkit-linear-gradient(left, #1985A1 0%, #1985A1 " + this.progress + "%, #C5C3C6 " + this.progress + "%)";
            }
        },

        mounted: function () {
            this.backgroundString = "-webkit-linear-gradient(left, #1985A1 0%, #1985A1 " + this.progress + "%, #C5C3C6 " + this.progress + "%)";
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

.bug .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    margin-bottom: 8px;
}

.progress-area {
    display: flex;
}

.progress-range {
    -webkit-appearance: none;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    margin-top: 7px;
    width: 100%;
    height: 10px;
}

.progress-number {
    height: 20px;
    border-radius: 2px;
    background: #4c5c68;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    padding: 2px;
    margin-left: 8px;
    width: 55px;
    text-align: center;
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

[contenteditable=true]:empty:before{
  content: attr(placeholder);
  display: block;
  color: #889;
}
</style>