<style lang="scss" scoped>
.cards-grid {
  margin: 30px 0 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  .card {
    height: 160px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #000;
    background: #eee;
    background-image: linear-gradient(135deg, #92FFC0 10%, #002661 100%);
    border: solid 5px transparent;
    box-shadow: inset -3px -4px 20px 6px #000, 2px 5px 6px 0px #000;
    opacity: 0.9;
    cursor: pointer;
    transform: rotate3d(0, 1, 0.3, 10deg);
    transition: 0.4s;
    text-decoration: none;
    &:hover {
      transform: rotate3d(0, 1, -0.2, 20deg);
      text-decoration: none;
    }
    .title {
      color: #fff;
      background: linear-gradient(250deg, orangered, gold, lightgreen, cyan, dodgerblue, mediumpurple, hotpink);
      background-size: 10vw;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      padding: 0;
    }
    .desc {
      color: #333;
    }
  }
}
</style>

<template>
  <nav class="cards-grid">
    <a class="card" v-for="site in sites" :key="site.name" :href="site.link" target="_blank">
      <h4 class="title">{{site.name}}</h4>
      <p class="desc">{{site.desc}}</p>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'CardsGrid',
  props: {
    sites: {
      type: Array,
      default: () => []
    }
  }
}
</script>
