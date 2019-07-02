<template>
<div>
  <home-header ></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons :iconsList="iconsList"></home-icons>
  <home-weektops :weekTops="weekTops"></home-weektops>
  <home-recommand :recommandList="recommandList"></home-recommand>
  <home-weekend :weekendList="weekendList"></home-weekend>
</div>
  
</template>
<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommand from './components/Recommand'
  import HomeWeekend from './components/Weekend'
  import HomeWeektops from './components/Weektops'

  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommand,
      HomeWeekend,
      HomeWeektops
    },
    data () {
      return {
        lastCity: '',
        "swiperList": [],
        "iconsList": [],
        "recommandList": [],
        "weekendList": [],
        "weekTops": []
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index?city:' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconsList = data.iconsList
          this.recommandList = data.recommandList
          this.weekendList = data.weekendList
          this.weekTops = data.weekTops
        }
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if ( this.lastCity !== this.city ) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>
<style></style>