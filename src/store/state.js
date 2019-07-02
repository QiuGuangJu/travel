let defaultCity = '成都'

let defaultSearchhisotry = []

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch(e){}

try {
  if (localStorage.searchHistory) {
    defaultSearchhisotry = localStorage.searchHistory.split(",")
  }
}catch(e) {}

export default {
        city: defaultCity,
        searchHistory: defaultSearchhisotry
}