<template>
    <div
        class="gauge-case"
        :class="{ 'gauge-case--vertical': vertical }"    
    >
        <ol class="gauge-markers"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>
        <div
            class="gauge"
            :style="gaugeStyle"
        ></div>
        <div class="gauge-sheen"></div>
    </div>
</template>

<script>
export default {
    props: {
        horizontal: { type: Boolean, default: true },
        vertical: { type: Boolean, default: false },
        value: { type: Number, default: 0 }
    },
    computed: {
        gaugeStyle() {
            return {
                ...this.gaugeSize(),
                ...this.gaugeColour()
            }
        }
    },
    methods: {
        gaugeSize() {
            const maxSize = 96;
            const size = (this.value / 100) * maxSize;
            return this.vertical ? {
                height: `${size}%`
            } : {
                width: `${size}%`
            };
        },
        gaugeColour() {
            const red = { r: 244, g: 1, b: 0 };
            const amber = { r: 253, g: 249, b: 5 };
            const green = { r: 0, g: 239, b: 1 };
            function blendNumbersByRatio(num1, num2, ratio) {
                if (num1 < num2) {
                    return num1 + Math.abs(num1 - num2) * ratio;
                } else {
                    return num1 - Math.abs(num1 - num2) * ratio;
                }
            }
            function blendColours(col1, col2, ratio) {
                return `rgb(
                    ${blendNumbersByRatio(col1.r, col2.r, ratio)},
                    ${blendNumbersByRatio(col1.g, col2.g, ratio)},
                    ${blendNumbersByRatio(col1.b, col2.b, ratio)}
                )`;
            }
            return {
                backgroundColor: this.value <= 50 ? blendColours(green, amber, this.value / 50) : blendColours(amber, red, (this.value - 50) / 50)
            };
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/css-config.scss";

.gauge-case {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 10%;
    border-radius: 999em;
    border: solid 1px grey;

    &--vertical {
        width: 100%;
        padding-bottom: 1000%;

        .gauge {
            top: auto;
            bottom: 1%;
            left: 10%;
            width: 80%;
            height: 98%;
        }

        .gauge-markers {
            li {
                bottom: auto;
                right: 0;
                width: 20%;
                height: 1px;
                transform: translateY(-50%);

                @for $i from 1 through 9 {
                    &:nth-child(#{$i}) {
                        left: auto;
                        top: $i * 10%;
                    }
                }
            }
        }

        .gauge-sheen {
            top: 2%;
            left: 20%;
            width: 60%;
            height: 96%;
        }
    }
}

.gauge {
    position: absolute;
    top: 10%;
    left: 1%;
    width: 98%;
    height: 80%;
    border-radius: 999em;
    background-color: $trafficGreen;
    transition: width 300ms, height 300ms, background-color 300ms;
}

.gauge-markers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;

    li {
        position: absolute;
        background-color: grey;

        bottom: 0;
        width: 1px;
        height: 20%;
        transform: translateX(-50%);

        @for $i from 1 through 9 {
            &:nth-child(#{$i}) {
                left: $i * 10%;
            }
        }
    }
}

.gauge-sheen {
    position: absolute;
    top: 20%;
    left: 2%;
    width: 96%;
    height: 60%;
    border-radius: 999em;
    background: rgba($white, .1);
}
</style>
