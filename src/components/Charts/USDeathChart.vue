<template>
  <div>
    <geo-chart :data="stateData" :library="{region: 'US', resolution: 'provinces'}"></geo-chart>
    <h6>Total Deaths</h6>
  </div>
</template>

<script>
export default {
  props: ["stateData"],
};
</script>