<template>
  <div class="hello">
    <div>
      <button @click="setState('ca')">California</button>
      <button @click="setState('co')">Colorado</button>
    </div>
    <column-chart
      :data="positiveIncreaseData"
      ytitle="new cases"
      :colors="['#f5881e', '#666']"
      class="q-pa-md"
      label="case increase"
      height="200px"
      :min="0"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      state: "co",
    };
  },
  beforeCreate() {
    this.$store.dispatch("makeAxiosRequestAllStateData");
  },
  computed: {
    ...mapGetters(["allData", "positiveIncreaseData", "deathTotalData"]),
  },
  methods: {
    ...mapActions(["makeAxiosRequest"]),
    renderGraph() {
      this.renderChart(data, options);
    },
    makeRequest(state) {
      this.makeAxiosRequest(state);
    },
    setState(clickedState) {
      this.state = clickedState;
      this.makeRequest(this.state);
    },
  },
};
</script>

