<template>
    <form>
        <label
            for="refactorHours"
            class="label"
        >
            Refactor hours
        </label>
        <input
            name="refactorHours"
            class="input"
            type="number"
            v-model="refactorHours"
            @input="updateScore"
        />

        <label
            for="developerCost"
            class="label"
        >
            Developer cost (per hour)
        </label>
        <input
            name="developerCost"
            class="input"
            type="number"
            v-model="developerCost"
            @input="updateScore"
        />

        <label
            for="percentageTimeOnBugs"
            class="label"
        >
            Percentage of development time spent on bugs
        </label>
        <input
            name="percentageTimeOnBugs"
            class="input"
            type="number"
            v-model="percentageTimeOnBugs"
            @input="updateScore"
        />

        <label
            for="developerCostAfterRefactor"
            class="label"
        >
            Developer cost for new developers after refactor (per hour)
        </label>
        <input
            name="developerCostAfterRefactor"
            class="input"
            type="number"
            v-model="developerCostAfterRefactor"
            @input="updateScore"
        />
    </form>
</template>

<script>
export default {
    data() {
        return {
            refactorHours: 0,
            developerCost: 0,
            percentageTimeOnBugs: 0,
            developerCostAfterRefactor: 0
        }
    },
    methods: {
        updateScore() {
            const newScore = this.refactorAlgorithm(
                this.refactorHours,
                this.developerCost,
                this.percentageTimeOnBugs,
                this.developerCostAfterRefactor
            );
            this.$emit('update', newScore);
        },
        refactorAlgorithm(refactorHours, developerCost, percentageTimeOnBugs, developerCostAfterRefactor) {
            const PROJECT_LIFE = 365 * 7 * 10;
            const DEVELOPER_DURATION = 365;
            const GOOD_BUG_PERCENTAGE = .1;

            const totalRefactorCost = refactorHours * developerCost;

            const totalDeveloperCostWithoutRefactor = developerCost * PROJECT_LIFE;
            const totalDeveloperCostWithRefactor = PROJECT_LIFE > DEVELOPER_DURATION ? (developerCost * DEVELOPER_DURATION) + (developerCostAfterRefactor * (PROJECT_LIFE - DEVELOPER_DURATION)) : totalDeveloperCostWithoutRefactor;
            
            const totalCostWithoutRefactor = totalDeveloperCostWithoutRefactor * (percentageTimeOnBugs / 100);
            const totalCostWithRefactor = (totalRefactorCost + totalDeveloperCostWithRefactor) * (GOOD_BUG_PERCENTAGE / 100);
            
            const avg = (totalCostWithoutRefactor + totalCostWithRefactor) / 2;

            return avg / totalCostWithRefactor;
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    font-size: 1em;
    padding: 12px 24px;
    border: solid 1px grey;
    border-radius: 999em;
}
</style>
