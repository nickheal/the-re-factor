<template>
    <div class="re-factor-layout">
        <re-factor-form
            @update="refactorUpdate"
        />
        <gauge
            :value="refactorScore"
        />
    </div>
</template>

<script>
import ReFactorForm from '@/components/ReFactorForm';
import Gauge from '@/ui-components/Gauge';

export default {
    components: {
        ReFactorForm,
        Gauge
    },
    data() {
        return {
            refactorScore: 0
        }
    },
    methods: {
        refactorUpdate(newScore) {
            this.refactorScore = newScore;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/css-config.scss";

.re-factor-layout {
    display: block;
    margin: 24px auto;
    width: 90%;
}
</style>