import { toggleMarketLike } from 'api/index'

// initial state
const state = {
  filterList: {
    price: {
      included: true,
      title: 'По Цене',
      type: 'range',
      from: 0,
      to: 1000000,
      filters: []
    },
    hit: {
      included: true,
      title: 'Хит',
      enable: false,
      filters: []
    }
  },
  search: ''
}


// getters
const getters = {
  getFilterList: state => state.filterList,
  getSearch: state => state.search,
  getFilterForResponse: (state) => {
    let filterData = {}
    filterData.cost_min = state.filterList.price.from
    filterData.cost_max = state.filterList.price.to
    filterData.best = state.filterList.hit.enable
    filterData.filter = state.search
    return filterData
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
  setFilters (state, filterList) {
    state.filterList = filterList
  },
  setSearch (state, search) {
    state.search = search
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
