import { toggleMarketLike } from 'api/index'

// initial state
const state = {
  filterList: {
    price: {
      included: false,
      title: 'По Цене',
      name: 'price',
      type: 'range',
      from: 0,
      to: 1000000,
      filters: []
    },
    hit: {
      included: true,
      name: 'hit',
      type: 'check',
      title: 'Хит',
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
    if (state.filterList.price.included) {
      filterData.cost_min = state.filterList.price.from
      filterData.cost_max = state.filterList.price.to
    }
    filterData.best = state.filterList.hit.included
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
