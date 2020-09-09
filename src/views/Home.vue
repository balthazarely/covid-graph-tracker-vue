<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="4">
          <StateInfo />
        </b-col>
        <b-col cols="12" md="8">
          <b-card>
            <StateGraph />
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="4">
          <USDeathChart :stateData="allStateNewCasesData" />
        </b-col>
        <b-col cols="12" md="4">
          <USNewCasesChart :stateData="allStateTotalDeathData" />
        </b-col>
        <b-col cols="12" md="4">
          <USTotalCaseChart :stateData="allStateTotalCaseData" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import StateGraph from "@/components/StateGraph.vue";
import StateInfo from "@/components/StateInfo.vue";
import USDeathChart from "@/components/Charts/USDeathChart.vue";
import USNewCasesChart from "@/components/Charts/USNewCasesChart.vue";
import USTotalCaseChart from "@/components/Charts/USTotalCaseChart.vue";

export default {
  name: "Home",
  components: {
    StateGraph,
    USDeathChart,
    USNewCasesChart,
    USTotalCaseChart,
    StateInfo,
  },
  computed: {
    ...mapGetters([
      "allStateNewCasesData",
      "allStateTotalDeathData",
      "allStateTotalCaseData",
    ]),
  },
};
</script>
