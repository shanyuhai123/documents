<template>
  <div class="friends">
    <div class="wrapper-board">
      <section class="friend" v-for="(friend, index) in friends" :key="index">
        <div class="friend__info">
          <div class="avatar">
            <img class="img" src="https://gravatar.loli.net/avatar/d41d8cd98f00b204e9800998ecf8427e?d=retro&v=1.3.4" alt="avatar">
          </div>
          <div class="infos">
            <span class="info__name">
              {{friend.name}}
            </span>
            <span class="info__des">
              {{friend.des}}
            </span>
          </div>
        </div>
        <div class="friend__time">
          <div class="time"> <span class="clock"></span> {{friend.date}}</div>
          <span class="link"><a :href="friend.link">GO</a></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          name: "飞跃高山与大洋的鱼",
          des: "喜欢前端，努力成为一个切图仔",
          date: "2019-03-09",
          link: "https://docs.shanyuhai.top"
        },
        {
          name: "comehope",
          des: "前端大佬，跟着他学会的 CSS",
          date: "2019-03-09",
          link: "http://www.zhang-ou.com/"
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
*
  margin 0
  padding 0
  box-sizing border-box

.friends
  display flex
  align-items flex-end
  width 100%
  height 100%

.wrapper-board
  width 80%
  height 80%
  border-radius 10px
  margin-left 10px
  margin-top 40px
  background #2980B9
  background linear-gradient(-5deg, #108dc7, #ef8e38)

.friend
  display flex
  flex-direction column
  height 100px
  width 100%
  border-radius 4px 12px
  background #e2e1e4
  background linear-gradient(5deg, #e2e1e4 75%, #35333c)
  transform translate(45px, -35px)
  margin-bottom 20px
  &__info
    display flex
    height 70px
    border-bottom 1px red
    .avatar
      display flex
      width 70px
      height 70px
      overflow hidden
      align-items center
      justify-content center
      .img
        width 40px
        height 40px
        border-radius 100%
    .infos
      color #000
      padding-left 10px
      display flex
      flex-direction column
      justify-content center
      .info__name
        font-size 16px
        font-weight 600
      .info__des
        font-size 14px
  &__time
    height 30px
    padding 0 15px
    display flex
    align-items center
    justify-content space-between
    .time
      display flex
      align-items center
      font-size 12px
      .clock
        position relative
        display inline-block
        width 14px
        height 14px
        border-radius 100%
        background-color #000
        margin-right 5px
        overflow hidden
        &::before
          position absolute
          left calc(50% - 1px)
          content ""
          width 2px
          height 50%
          background-color #fff
        &::after
          position absolute
          top calc(50% - 1px)
          left calc(50% - 1px)
          content ""
          height 2px
          width 50%
          background-color #fff
    .link
      font-size 18px
      letter-spacing 2px
      color: tomato;
      filter: saturate(60%);
      animation: twinkling steps(100) 1s 1s infinite;
      text-shadow: 0 0 10px orangered, 0 0 20px firebrick, 0 0 40px maroon, 0 0 80px darkred;
      a 
        text-decoration none
        color inherit 

@keyframes twinkling {
  50% {
    color: white;
    filter: saturate(200%) hue-rotate(20deg);
  }
}
</style>
