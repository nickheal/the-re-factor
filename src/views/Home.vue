<template>
    <main class="nu-home">
        <h1 class="nu-home__title">The Re-factor</h1>
        <h2 class="nu-home__tagline">To refactor or not to refactor?</h2>
        <p class="nu-home__subtitle">Enter the details below to see how badly your code is in need of a refactor!</p>
        <re-factor/>
    </main>
</template>

<script>
import ReFactor from '@/components/ReFactor';

export default {
    name: 'home',
    components: {
        ReFactor
    }
};
</script>

<style lang="scss" scoped>
@import "~@/css-config.scss";

.nu-home {
    &__title,
    &__tagline,
    &__subtitle {
        letter-spacing: -.025em;
        font-weight: 100;
        text-align: center;
        color: $textBlack;
    }

    &__title {
        font-size: 3em;
        line-height: 1;
        padding-top: 20px;

        @include desktop {
            font-size: 8em;
        }
    }

    &__tagline {
        font-size: 1.25em;
        line-height: 1;
        margin-bottom: 15px;
    }

    &__subtitle {
        line-height: 1.5;
        margin-bottom: 36px;
        padding: 0 1em;
    }
}
</style>
