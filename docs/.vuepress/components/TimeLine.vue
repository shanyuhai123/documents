<template>
  <div class="timeline">
    <h1>文档时间线</h1>

    <div class="cards">
      <section class="card" v-for="(log, index) in changeLogs" :key="index">
        <header class="card__header">
          <div class="header__number">
            <span>{{index + 1}}</span>
          </div>
          <h2 class="header__title">
            <span class="title__date">{{log.date}}</span>
            <span class="title__sub">{{log.effect}}</span>
          </h2>
        </header>
        <article class="card__article">
          <p v-for="(des, key) in log.descriptions" :key="index">{{des}}</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeLogs:[
        {
          date: '2019-02-26',
          effect: '功能',
          descriptions: ['初步完成 VuePress 的搭建', '添加评论']
        },
        {
          date: '2019-03-09',
          effect: '功能',
          descriptions: ['添加时间线', '添加友链']
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
$screen-width = 425px

*
  margin 0
  padding 0
  box-sizing border-box
h1
  font-size 2rem
  font-weight 600
  text-align center
  margin-bottom 20px
h2
  border-bottom none 


.cards
  position relative
  display flex
  flex-direction column-reverse
  width 100%
  height 100%
  @media (min-width $screen-width)
    &::after
      z-index 9
      content ""
      position absolute
      top 0
      bottom 0
      left 50%
      border-left 1px solid rgba(200, 200, 200, 0.5)

.card
  position relative
  display flex
  flex-direction: column
  &:nth-child(4n)
    --bg-color: #10aec2
  &:nth-child(4n+1)
    --bg-color: #fbc82f
  &:nth-child(4n+2)
    --bg-color: #74759b
  &:nth-child(4n+3)
    --bg-color: #346c9c
  width 45%
  height 200px
  --bg-color: #10aec2
  &:nth-child(odd)
    align-self flex-start
    .card__header
      @media (min-width $screen-width)
        &::before
          z-index 10
          position absolute
          left calc(111.11% - 2.5px)
          content ""
          width 10px
          height 10px
          border-radius 10px
          background-color #bdbdbd
          box-shadow 0 0 2px 6px #fff
      &::after
        position absolute
        left 100%
        content ""
        width 0
        height 0
        border-style solid 
        border-width 10px 0 10px 18px
        border-color transparent transparent transparent var(--bg-color)
  &:nth-child(even)
    align-self flex-end
    .card__header
      @media (min-width $screen-width)
        &::before
          z-index 10
          position absolute
          right calc(111.11% - 5px)
          content ""
          width 10px
          height 10px
          border-radius 10px
          background-color #bdbdbd
          box-shadow 0 0 2px 6px #fff
      &::after
        position absolute
        right 100%
        content ""
        width 0
        height 0
        border-style solid 
        border-width 10px 18px 10px 0
        border-color transparent var(--bg-color) transparent transparent 
  .card__header
    display flex
    align-items center
    width 100%
    height 35%
    color #fff
    background-color var(--bg-color)
    overflow hidden
    .header__number
      display flex
      align-items center
      justify-content center
      margin 0 20px
      padding 6px 14px
      font-size 2rem
      background-color rgba(0, 0, 0, 0.17)
    .header__title
      display flex
      margin-left 10px
      flex-direction column
      font-size 0.6rem
      .title__sub
        padding-top 6px
        font-size 1.2rem
  .card__article
    width 100%
    height 65%
    background-color #fff
    border 1px solid rgba(200,200,200.0.5)
    border-top none 
    padding 10px

@media (max-width $screen-width)
  .card
    width 100%
    margin-bottom 10px
</style>

