<template>
    <div class="re-factor-layout">
        <re-factor-form
            class="re-factor-layout__form"
            @update="refactorUpdate"
        />
        <gauge
            class="re-factor-layout__gauge"
            :value="refactorScore"
            vertical
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
    margin: 12px auto;

    &__form {
        width: 70%;
        margin-left: 25%;
    }

    &__gauge {
        position: fixed !important;
        top: 192px;
        left: 7.5%;
        width: 10% !important;
        padding-bottom: calc(100vh - 187px - 23px) !important;
    }
}
</style>