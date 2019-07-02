export default {
    cityChange (state, city) {
      state.city = city
      try {
      localStorage.city = city
      } catch(e){}
    },
    historyChange (state, search) {
      state.searchHistory.unshift(search)
      try {
        localStorage.searchHistory = state.searchHistory
      }catch(e){}
    },
    handleClearClick (state){
      state.searchHistory = []
      try {
        localStorage.searchHistory = state.searchHistory
      }catch(e){}
    }
  }