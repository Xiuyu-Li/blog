---
title: 论文笔记：MoCo
date: 2019-12-25 03:53:27
tags:
- Computer Vision
- Machine Learning
- Paper Review
- Representation Learning
categories: Computer Science
mathjax: true
---

**Update:** MoCo 代码已开源， 发布于 [https://github.com/facebookresearch/moco](https://github.com/facebookresearch/moco).

---

上个月 Kaiming He 发了一篇关于无监督表示学习的文章 [Momentum Contrast for Unsupervised Visual Representation Learning](https://arxiv.org/abs/1911.05722)，提出的方法在多个 detection/segmentation 的下游任务上取得了非常好的结果，用文章的原话说甚至是 "the gap between unsupervised and supervised representation learning has been largely closed"。我在 11.23 于 CUVL 的 reading group 上 present 了这篇论文，在此贴上当时做的 slide 并简单分享下核心思想。<!--more-->

此文继承了 Kaiming 一贯方法简单却能取得非常好的结果、令人意想不到的风格。其实这篇论文非常的工业界，就是对之前 instance discrimination unsupervised representation learning 方法的一些不足之处作出了改进，可以说是站在了巨人的肩膀上。相关论文可以看看 CVPR 2018 的 [Unsupervised Feature Learning via Non-Parametric Instance-level Discrimination](https://arxiv.org/abs/1805.01978) 和 CVPR 2019 的 [Unsupervised Embedding Learning via Invariant and Spreading Instance Feature](https://arxiv.org/abs/1904.03436)。尽管该工作的 novelty 可能是比较有限，更像是发明了几个trick，但必须指出这不能否认他的 contribution 是巨大的，称得上是 unsupervised learning 这个方向的一个突破。

所谓 instance discrimination learning，就是把每个 instance 当成一个单独的 class 进行学习，所采用的方法通常是维护一个字典并通过 contrastive loss 来训练编码器：

<center>$\mathcal{L}_q = -log\frac{exp(q \cdot k_{+}/\tau)}{\sum_{i=0}^K exp(q \cdot k_i / \tau)}$</center>

此处 $q$ 是一个 instance 通过编码器后的 query 表示，$k_{+}$ 表示相匹配的 key，通常是另一个具有相同语义的 instance 的编码（此处可以是同一张图片不同的 data augmentation），而分母中的 $k_i$ 均是不匹配的 key。该损失函数在不同 instance 编码后差异越大，相同 instance 编码后差异越小时函数值越小。这样预训练好的编码器可以提取图片的 representations，通过微调迁移到 detection/segmentation 等各种下游任务上。

本文主要贡献即是对于字典的更新提出了 MoCo 这一方法，通过 momentum 的机制平滑更新生成字典的编码器，既避免了 end-to-end 方法受制于显存大小在作 contrastive training 时无法 scale 影响 performance，也解决了 memory bank 线下字典过时的劣势，很好地平衡了字典大小和质量的 trade off。正是此方法使在超大数据集上做这样的预训练成为了可能，而 Kaiming 团队也对 MoCo 预训练模型提取的表征针对多个下游任务作了迁移学习相关实验，取得非常好的结果。具体细节参见 paper 和我演讲的 slide。

本人对 representation learning 了解不多，也就不再此更深入地分析了。除了以上提到的文献，大家如有兴趣也可以参考这个[知乎问题](https://www.zhihu.com/question/355779873)，最上面的几个回答都质量挺高，有一定 insight。总而言之此文的贡献还是非常有突破性的，为 CV 任务也能像 NLP 的 BERT 一样采用一套通用的 backbone 提取特征并运用到所有下游任务上迈出了重要的一步。不过正如某个[知乎回答](https://www.zhihu.com/question/355779873/answer/895625711)提到一样，我也认为负样本选取的随机性使得仅仅增大数据集的量级所带来的信息增益有限，如何更好地选取信息量大的样本可以是一个将来的研究方向，或许能结合聚类、active learning 中的方法着手。

### Presentation Slide
{% pdf https://lxywizard.github.io/files/CUVL_Reading_Group_11_23.pdf %}
