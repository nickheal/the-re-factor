<template>
    <form>
        <input
            class="input"
            type="number"
            v-bind="devCost"
            @input="updateScore"
        />
    </form>
</template>

<script>
export default {
    data() {
        return {
            devCost: 0
        }
    },
    methods: {
        updateScore() {
            const newScore = Math.random() * 100;
            this.$emit('update', newScore);
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    border: solid 1px grey;
}
</style>
