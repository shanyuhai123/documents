# 导航 🎉

> 整理了下浏览器书签

## 比技术更重要的

<CardsGrid :sites="life" />

## 有趣的

<CardsGrid :sites="interesting" />

## 社区

<CardsGrid :sites="communities" />

## 前端开发

+ [Can I use](https://caniuse.com/)
+ [JWT](https://jwt.io/)
+ [JSFiddle](https://jsfiddle.net/)
+ [CodeSandbox](https://codesandbox.io/)
+ [favicon](https://www.favicon.cc/?action=icon_list)

## 正则

+ [regex101](https://regex101.com/)
+ [regexr](https://regexr.com/)

## CSS

+ [背景](https://projects.verou.me/css3patterns/#)
+ [Clippy](https://bennettfeely.com/clippy/)
+ [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator)
+ [border-radius](https://9elements.github.io/fancy-border-radius/full-control.html)

## 图标

| 名称           | 网址                                                         | 描述                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 阿里巴巴图标库 | [www.iconfont.cn](https://www.iconfont.cn)                   | 多、杂                                                       |
| 字节图标库     | [iconpark.oceanengine.com](https://iconpark.oceanengine.com) | 多、统一                                                     |
| 谷歌字体       | [fonts.google.com](https://fonts.google.com/)                | 字体、图标                                                   |
| icons8         | [icons8.com](https://icons8.com/)                            | 以前用的                                                     |
| OpenGameArt    | [opengameart.org](https://opengameart.org)                   | 游戏图标，其中一款 [RPG](https://opengameart.org/content/98-pixel-art-rpg-icons) |
| Emojipedia     | [https://emojipedia.org](https://emojipedia.org)             | emoji 图标                                                   |

## 插画

| 名称       | 网址                                                       | 说明         |
| ---------- | ---------------------------------------------------------- | ------------ |
| IRA Design | [iradesign.io](https://iradesign.io)                       | 色彩风格统一 |
| unDraw     | [undraw.co/illustrations](https://undraw.co/illustrations) | 风格统一     |
| Humaaans   | [www.humaaans.com](https://www.humaaans.com/)              | 人物         |
| Pngtree    | [pngtree.com](https://pngtree.com)                         | 量大管饱     |

<script>
export default {
  data() {
    return {
      life: [
        {
          name: "裁判文书网",
          desc: "指导更好的生活",
          link: "https://wenshu.court.gov.cn"
        },
        {
          name: "12315",
          desc: "当你的合法权益受到侵犯时",
          link: "http://www.12315.cn"
        },
        {
          name: "黑猫投诉",
          desc: "配合 12315 使用",
          link: "https://tousu.sina.com.cn"
        },
      ],
      communities: [
        {
          name: "Stack Overflow",
          desc: "最好的问答网站",
          link: "https://stackoverflow.com"
        },
        {
          name: "v2ex",
          desc: "摸鱼社区",
          link: "https://www.v2ex.com"
        },
        {
          name: "掘金",
          desc: "前端社区",
          link: "https://juejin.cn"
        },
        {
          name: "思否",
          desc: "曾经用的最多的技术问答社区",
          link: "https://segmentfault.com"
        },
        {
          name: "DEV Community",
          desc: "一个不错的广告宣传地",
          link: "https://dev.to"
        },
        {
          name: "InfoQ",
          desc: "了解新技术走向",
          link: "https://www.infoq.cn"
        },
        {
          name: "知乎",
          desc: "分享你刚编的故事",
          link: "https://www.zhihu.com"
        },
      ],
      interesting: [
        {
          name: "全历史",
          desc: "全历史。画作、古籍、帝国、人物、战争、古迹",
          link: "https://www.allhistory.com"
        },
        {
          name: "The Deep Sea",
          desc: "深海物种",
          link: "https://neal.fun/deep-sea"
        },
      ]
    }
  }
}
</script>
