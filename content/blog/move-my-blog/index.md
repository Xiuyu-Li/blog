---
title: "迁移了博客"
date: "2020-06-29"
description: "用了两年 Hexo 之后，还是决定把博客迁移到别的平台。"
---

用了两年 [Hexo](https://hexo.io/) 之后，还是决定转战别的平台。折腾了一个星期，终于把之前的博客内容全部迁移到了现在这个 [Gatsby](https://www.gatsbyjs.org/) 上。

### Why not Hexo?
Hexo 作为一个 static site generator 做得还是不错的，原本选用的 [next 主题](https://github.com/theme-next/hexo-theme-next)也集成了很多功能，基本上改改配置就能专心写文章了。不过多次迭代后发展到今天 Hexo / next 已经变得有些臃肿，很多 dependencies 也不再维护。next 时不时的更新导致旧的配置文件格式不兼容、过慢的加载速度、和看起来总觉得不太顺眼的 ui 让我下定决心重新设计整个博客的架构。

### Why Gatsby?
在选择新的方案的时候也算下了不少功夫调研。一开始最中意的是 [Jekyll](https://jekyllrb.com/) 的 [whiteglass](https://github.com/yous/whiteglass) 主题 （看到 [Lequn Chen 大神的博客](https://abcdabcd987.com/index.html)发现还挺喜欢这种极简风格的哈哈）。后来无意中发现了 Gatsby 和 [Saber](https://github.com/saberland/saber) 这种基于 React、Vue 等现代主流前端技术的组件式系统，感觉比起 Hexo 和 Jekyll 之类的旧方案在易用性不降低的同时能有更高的自由度，整体更加干净。更多细节可以看看[这篇文章](https://www.h404bi.com/blog/2019/04/recent-changes-of-my-site/)，总结得非常好，我还是很认同里面的观点的。考虑到没有找到让 Saber 支持数学公式的插件，Gatsby 的社区也更加成熟，于是最后选择了 Gatsby。

### Main Changes
- 之前 Hexo 整的那些花里胡哨的 features 基本都删了，还是专注于写作。不过倒是作为前端练手添加了一个夜间模式，参考了 [https://www.himself65.com/](https://www.himself65.com/) 的方案。
- 总算换掉了万网域名，出于国内访问 GitHub Pages 速度不佳这次也选用了自带 CDN 的 [Netlify](https://www.netlify.com/) 来 host。现在这个网址的一级目录也将会是我的个人主页。

主要变化就是这两点，具体架构参见 [https://github.com/Xiuyu-Li/blog/#readme](https://github.com/Xiuyu-Li/blog)。

到这里基本上算是迁移完成了，之后还是要多写一些高质量的文章。