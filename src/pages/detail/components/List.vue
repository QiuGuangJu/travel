<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <span class="item-icon"></span>
      <div class="item-title">{{item.title}}</div>
      <div v-if="item.children" class="item-children" >
        <!-- 递归组件 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name  使用递归组建
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item
  margin .1rem .2rem
  .item-icon
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
    position relative
    top .07rem
    float left
  .item-title
    text-align left 
    height .6rem
    line-height .6rem
    font-size .35rem
    border-bottom 1px solid #eee
  .item-children
    .item-icon
      display none
    .item-title
      font-size .3rem
</style>


