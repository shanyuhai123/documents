<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  mounted() {
    this.renderValine()
  },
  methods: {
    renderValine() {
      if (typeof window !== 'undefined') {
        this.window = window;
        window.AV = require('leancloud-storage');
      }
      const Valine = require('valine');
      new Valine({
        el: '#vcomments' ,
        appId: 'EFkQg5IG3AEUVGL3mYCepoML-gzGzoHsz',
        appKey: '9LJEfYnWXLLfhz6GMJh7KjMS',
        notify:false,
        verify:false,
        avatar:'retro',
        placeholder: '欢迎留言...' 
      });
    }
  }
}
</script>