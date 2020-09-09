import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCovidData: {},
    historicalCovidData: {},
    allStateDailyData: [],

  },
  getters: {
    allData: (state) => {
      return state.currentCovidData
    },

    positiveIncreaseData: (state) => {
      let array = Object.values(state.historicalCovidData).map(x => {
        return [moment(x.date, "YYYYMMDD").format("MMM Do"), x.positiveIncrease]
      })
      return array.reverse()
    },
    deathTotalData: (state) => {
      let array = Object.values(state.historicalCovidData).map(x => {
        return [moment(x.date, "YYYYMMDD").format("MM DD YYYY"), x.death]
      })
      return array.reverse()
    },
    allStateNewCasesData: (state) => {
      let array = Object.values(state.allStateDailyData).map(x => {
        return [x.state, x.positiveIncrease]
      })
      return array
    },
    allStateTotalDeathData: (state) => {
      let array = Object.values(state.allStateDailyData).map(x => {
        return [x.state, x.death]
      })
      return array
    },
    allStateTotalCaseData: (state) => {
      let array = Object.values(state.allStateDailyData).map(x => {
        return [x.state, x.total]
      })
      return array
    },
  },
  mutations: {
    ADD_DATA_CURRENT(state, payload) {
      state.currentCovidData = payload
    },
    ADD_DATA_HISTORICAL(state, payload) {
      console.log(payload)
      state.historicalCovidData = payload
    },
    ADD_DATA_ALL_STATES(state, payload) {
      state.allStateDailyData = payload
    },

  },
  actions: {
    // Get current State data
    makeAxiosRequest({ commit }, state) {
      axios
        .get(
          `https://api.covidtracking.com/v1/states/${state}/current.json`
        )
        .then((response) => {
          commit('ADD_DATA_CURRENT', response.data)
        })
      // Get Daily State Data
      axios
        .get(
          `https://api.covidtracking.com/v1/states/${state}/daily.json`
        )
        .then((response) => {
          commit('ADD_DATA_HISTORICAL', response.data)
        })
    },
    // Get all state's data
    makeAxiosRequestAllStateData({ commit }) {
      axios
        .get(
          ` https://api.covidtracking.com/v1/states/current.json`
        )
        .then((response) => {
          console.log(response.data)
          commit('ADD_DATA_ALL_STATES', response.data)
        })
    },

  }
})
