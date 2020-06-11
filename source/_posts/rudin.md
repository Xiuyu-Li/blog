---
title: Baby Rudin Chapter 1-6 总结
date: 2019-05-23 00:37:23
tags:
- Cornell
- Analysis
- Course Review
categories: Math
mathjax: true
---

在 Spring 2019 学期我在康村上了 MATH 4130: Honors Introduction to Analysis I，虽然最后成绩差强人意，但确实是我在该学期最有意思的一门课 (相对应的是，一些我不感兴趣也没花多少时间的课成绩反而很好…)。这门课采用著名数分课本 Baby Rudin 作为教材，讲述了其 Ch1-Ch6 的内容，以下是我个人对课程脉络的一个梳理。

<!-- more -->

附录有我的课程笔记和一些在上课过程中发现的有用的资源，感兴趣的读者也可以参阅。

## Chapter 1 The Real and Complex Number Systems

### Summary

本书的第一章主要定义了一般的域和有序域，以及讨论了一系列命题及证明，内容不多。按本人比较 engineering 的粗浅理解，这一章规范化了一套最底层的定义，并提供了一些比较基础的证明 tactics，诸如 Least Upper Bound Property (**非常重要**) 和 Archimedean Property、Schwarz 不等式等为之后引申出 coutability、continuity 等更加高层的定义提供了理论基础与数学工具。

本章另外一个值得注意的地方就是讨论了从有理数到实数的扩张。附录介绍了 Dedekind Cut，通过有理数集 $\mathbb{Q}$ 找出了一个集合 $\mathbb{R}$，并论证了这个域在与有理数域的同时具有所有实数集的性质，因此完成了实数集的构建。

复数 MATH 4130 并未涉及，故此文也并不讨论。

### Selected Definitions and Theorems

- **1.7 Definition** $E$ is bounded above if there is $y \in S$ s.t $x \leq y$ for all $x \in E$. We say that $y \in S$ is an **upper bound** for $E$ if $x \leq y$ for all $S \in E$. 
- **1.8 Definition** Suppose S is an ordered set, $E \subset S$, and $E$ is bounded above. Suppose there exists an $\alpha \in S$ and $\alpha$ is the **least upper bound** if for each upper bound $y$ for $E$ we have $\alpha \leq y$ and $\alpha$ is an upper bound for $E$.
- **1.10 Definition** A linear ordered set $S$ has the **least upper bound property** if for each $E \subset S$ s.t. $E$ is bounded above and is non empty, then $E$ has a least upper bound.
- **1.11 Theorem** $S$ an ordered set with the least upper bound property. Let $B \subset S$, $B \neq \emptyset$ and bounded below. Let $L=$ all lower bounds of $B$. Then $L$ is bounded above, non empty and so $\alpha = \sup L$ exists and $\alpha$ is the greatest lower bound for $B$.
- **1.20 Theorem**
  - **Archimedean Property** If $x, y \in \mathbb{R}$, $x > 0$, then there exists a natural n s.t $nx > y$
  - **$\mathbb{Q}$ is dense in $\mathbb{R}$**  if $x, y \in \mathbb{R}$, $x < y$, then there exists $p \in \mathbb{Q}$ s.t. $x < p < y$
- **1.37 Theorem (Schwarz Inequality)** Suppose $x, y, z \in \mathbb{R}^k$, then $|x \cdot y| < |x|\cdot|y|$ 

## Chapter 2 Basic Topology

### Summary

这是我本人最喜欢的一章，主要介绍了一些基础的拓扑学概念与定理，其实严格意义上来说并不能算是数学分析。这一章从可数与不可数的定义讲起，并从2.8到2.14介绍了一系列利用相关性质的定理，比如有理数集是可数的，都比较直观，证明不难。用来证明实数集不可数的对角论证法 (Diagonal Proof) 是一个比较有趣与有用的证明 technique。

本章的第二部分介绍了**度量空间 (Metric Spaces)**。这是一个非常重要的概念，之后的一切内容都是在度量空间上定义的。接下来2.18到2.30介绍了在度量空间上的一些列定义，包括领域、limit point、interior point、开集、闭集、闭包等，以及相关定理，证明不算抽象，但也 nontrivial，证明方法值得学习。

2.30-2.37围绕**紧致性 (Compactness)**这一概念进行讨论。从这里开始本章的内容开始变得抽象了起来，这出于紧致性本就是一个杜撰出来的概念，作用相当于平面几何中的辅助线。但这个概念非常重要，他的作用相当于把有限和无限、开和闭联系了起来，通过引入这一概念能够得到一些非常好的性质，例如在度量空间 $X$ 上紧致的子集一定在 $X$ 上是闭集和一个有界的闭集一定紧致等等，在之后章节讨论映射和连续性的时候也可以反映这一点。

2.38-2.42 将集合与区间对应起来，并把本章之前的内容从 $\mathbb{R}$ 推广到了 $\mathbb{R}^k$ 上。最后关于 Perfect Set 的内容 MATH 4130 没有涉及，故不再赘述。

### Selected Definitions and Theorems

- **2.4 Definition** $J_n = {1,\ldots,n}$, $n \in \mathbb{N}$
  - $A$ finite if $A \sim J_n$ for some $n$
  - $A$ infinite if $A$ is not finite
  - $A$ countable if $A \sim \mathbb{N}$
  - $A$ at most countable if $A$ countable or finite
  - $A$ uncountable if $A$ is not at most countable
- **2.15 Definition** A metric space $(x, d)$ is a set $X$ and a function $d: X\times X \rightarrow \mathbb{R}$ s.t. 
  - $d(p, q) > 0$ if $p,q \in X$, $p \neq q$; $d(p, p) = 0$
  - $d(p,q) = d(q, p)$
  - $d(p, q) < d(p, r) + d(r, q)$, for any $r \in X$
- **2.18 Definition** Let $X$ be a metric space
  - A *neighborhood* of a point $p$ is a set $Nr(p)$ consisting of all points $q$ such that $d(p, q) < r$. The number $r$ is called the radius of $Nr(p)$
  - A point $p$ is a limit point of the set $E$ if every neighborhood of $p$ contains a point $q \neq p$ such that $q \in E$
  - $E$ is *closed* if every *limit* point of $E$ is a point of $E$
  - A point $p$ is an *interior* point of $E$ if there is a neighborhood $N$ of $p$ such that $N \subset E$
  - $E$ is *open* if every point of $E$ is an interior point of $E$ 
- **2.32 Definition** A subset $K$ of a metric space $X$ is said to be **compact** if every open cover of $K$ contains a finite subcover.

## Chapter 3 Numerical Sequences and Series 

### Summary

这一章主要讲了序列的极限和收敛性，与高数的内容有诸多重合之处，并没有太多新奇的地方。值得注意的是本章把在度量空间中集合的 limit point 与序列收敛建立了联系，每一个该集合的 limit point 都是一个该集合序列的极限。

柯西序列是本章的一个重点。柯西序列的定义非常有意思，一定要结合相关定理仔细揣摩其背后的动机。通过柯西序列引出了一系列定义和定理，诸如 diameter，complete metric space，收敛序列一定是柯西序列，紧致空间上的柯西序列一定收敛于空间内的某一点等等，都应当仔细阅读。

其他如 epsilon-delta，序列的单调性等定义都是基础中的基础，一定要熟记与掌握。子序列极限的最小上界和最小下界的定义相对本章其他内容较为抽象，但在涉及子序列的题目中会有用。一些重要的极限例如$\sqrt[n]{n}$应当记忆。

后续关于判敛和级数 MATH 4130 没有涉及，本文也不讨论。

### Selected Definitions and Theorems

- **3.2 Theorem** Let $(X, d)$ be metric space, $E \subseteq X$, $p \in X$, $p$ is a limit point of $X$ iff there is a sequence $p_n \in E$ s.t. $\lim_{n \to \infty} p_n \rightarrow  p$ and $p_n \neq p$ for all $n$.
- **3.8 Definition** A sequence {$p_n$} in a metric space $(X, d) $ is said to be a **Cauchy sequence** if for every $\epsilon > 0$ there is an integer $N$ such that $d(p_n , p_m) < \epsilon$ if $n > N$ and $m > N$.
- **3.9 Definition** For $E \subseteq X$, $(X, d)$ a metric space, {% raw %}$Diam(E) = \sup \{d(x, y)|x, y \in E\}${% endraw %}. 

## Chapter 4 Continuity

### Summary

本章开始进入连续性的讨论，这一章的内容是重中之重。本章的前半部分围绕着函数的极限进行了一系列的讨论，与序列的极限十分相似，只是把 $p_n$ 换成了 $f(x)$。虽然说不同之处在于函数的定义域不仅限于整数，但核心思想都是 $\delta-\epsilon$ 法则，很容易可以触类旁通。

4.5之后的内容则是本章的重点——连续性了。其实连续性定义的核心也是 $\delta - \epsilon$ 法则，一系列相关的性质都可以从这一点着手进行证明，比如连续函数的加减乘除和复合都是连续的。从4.5到4.12都是这些基础性质的讨论。4.13开始将连续性和紧致性联系起来，是本章的点睛之笔。其实在之前的定理4.8就已经介绍了从集合的角度如何定义连续性，从而无需涉及极限，使许多集合上诸如紧致性等一些很好的性质得以利用起来。4.13之后的一系列定理则正是这一点的具体示例，例如4.14说明定义域是紧致集的连续函数的值域也是紧致集; 4.18定义了一致连续，介绍了一个更加苛刻的连续性定义；4.19通过紧致性把连续和一致连续建立了联系，定义域是紧致集的连续函数一致连续。这一部分的内容非常精彩，应当反复研读并认真完成对应习题。

接下来对连通性和间断点的讨论结论都可以通过对之前内容的运用得到，不难理解。本章最后引入正无穷和负无穷到极限系统中，与第一章最后实数域的完备相对应，都是使整个系统更加完备。

这一章由于涉及的概念比较多，并且可以互相联系，习题相对较难，建议花费更多时间做更多练习，并且要注意总结方法。关于连续性和紧致性的概念和定理都要熟记，尤其要注意一致连续和连续的区别。

### Selected Definitions and Theorems

- **4.8 Theorem** For $f: X \rightarrow Y$, $f$ is continuous iff $f^{-1}(V)$ is open for each $V \subseteq Y$ open.
- **4.14 Theorem** For $f: X \rightarrow Y$ continuous, $X$ compact then $f(X)$ is compact. 
- **4.18 Definition** For $f: X \rightarrow Y$, we say that $f$ is **uniformly continuous** on $X$ if for every $\epsilon > 0$ there exists $\delta > 0$ s.t. $d_Y(f(p), f(q)) < \epsilon$ for all $p$, $q$ in $X$ for which $d_X(p, q) < \delta$.
- **4.19 Theorem** For $f: X \rightarrow Y$ continuous, $X$ compact then $f(X)$ is uniformly continuous.  

## Chapter 5 Differentiation

### Summary

这一章的内容基本与高数大同小异，介绍了导数的定义，可导性的判断，以及各种微分重要定理(微分中值定理，介值定理，洛必达法则，泰勒公式)。定理的证明不算抽象，但证明方法都比较有代表性，比如洛必达法则证明中的放缩和泰勒公式证明中的归纳法，值得仔细研读。

最后讨论了从一元函数拓展到了向量值函数，讨论了诸多关于一元函数中的微分定理在向量值函数的情况下未必成立，会有所不同。

### Selected Definitions and Theorems

关于导数和微分方面的知识与定理大家在之前的学习中都已经十分熟悉，就不再赘述，只简单列一个向量值函数的微分中值定理：

**5.19 Theorem** Suppose $f: [a, b] \rightarrow \mathbb{R}^k$ continuous, $f$ differentiable on $[a, b]$, then there exists $x \in [a, b]$ s.t. $|f(b) - f(a)| < (b - a) |f'(x)|$ .

## Chapter 6 The Riemann-Stieltjes Integral

### Summary

在上一章讲了微分之后，这一章自然开始讨论积分。6.1到6.7基本都围绕这黎曼积分的定义进行讨论，这个定义比较有意思，大致是把一个区间 $[a,  b]$ 分割成有限个小区间，每个小区间内取该函数的最小上界和最大下界，假设这个区间的两个端点是 $x_{i-1}$ 和 $x_i$，有一个单调递增函数$\alpha: [a,b] \rightarrow \mathbb{R}$，则各个区间函数的最小上界与 $(\alpha(x_i) - \alpha(x_{i - 1}))$ 相乘之和就是上黎曼积分，最大下界则为下黎曼积分。从所有可能分割中取上黎曼积分的最大下界和下黎曼积分的最小上界，这两个值应该都趋近于同一个常数，即 $f$ 在 $[a,b]$ 上积分的值。可以看出黎曼积分的定义中包含着一种夹逼的思想，而在6.6又回归到采用收敛来定义，有对于任意 $\epsilon > 0$，上黎曼积分与下黎曼积分之差必定小于 $\epsilon$。这使得黎曼积分的定义更加量化，便于证明很多其具有的性质。值得注意的是6.4中证明了对于给定分割的细分(refinement)，新的上黎曼积分一定不大于原分割上的上黎曼积分，新的下黎曼积分也不小于原下黎曼积分，这一定理对通过夹逼和收敛定义积分提供了依据，在之后的证明中也时常能够起到很大帮助。

6.8-6.11主要对可积性的判断进行讨论，6.12-6.19则都是关于黎曼积分性质的各种定理，但从6.8-6.19基本都是运用了黎曼积分的定义，尤其是6.4和6.6，进行证明。把这些证明弄懂对摸清本章习题的解题套路很有帮助，这些定理本身的内容也一定都要熟记。通过这一部分我们也可以发现函数的连续性和单调性(递增)对函数是否可积与黎曼积分的一些性质是否成立都相当重要，并且有些时候被积函数和积分变量可以相互转换。

有了之前的铺垫，把积分和微分联系起来就十分自然了。6.20-6.22则讨论了这一点，通过黎曼积分定义了我们所熟悉的积分并推导了微积分基本定理和分部积分法，证明不难。6.23-6.25定义并简单讨论了向量值函数上的积分，与微分时的情况不同的是，向量值函数上的积分与一般情况下没有太大不同。最后一部分从数学上定义了曲线并介绍了如何用积分求曲线长度，比较应用。

### Selected Definitions and Theorems

- **6.4 Theorem** {% raw %}If $P^*$ is a refinement of $P$, then $L(P, f, a) \leq L(P^*, f, a)$, $U(P, f, a) \geq U(P^*, f, a)$. {% endraw %}
- **6.6 Theorem** $f \in R(\alpha) $ on $[a, b]$ iff $\forall \epsilon > 0$ $\exists P$ a partition of $[a, b]$ s.t. $U(P,f,a) - L(P,f,a) < \epsilon$.
- **6.8 Theorem** If $f$ is continuous on $[a, b]$ then $f \in R(\alpha)$ on $[a, b]$.
- **6.17 Theorem** $\alpha: [a, b] \rightarrow \mathbb{R}$ monotonically increasing and differentiable, $\alpha' \in R$ on $[a, b]$, $f$ bounded on $[a,b]$. Then $f \in R(\alpha)$ iff $f\alpha' \in R$ and $\int_{a}^{b}fd\alpha = \int_{a}^{b} f(x)\alpha'(x)dx$.
- **6.21 The fundamental theorem of calculus** If $f \in R$ on $[a, b]$ and if there is a differentiable function $F$ on $[a,b]$ s.t. $F' = f$, then $\int_{a}^{b}f(x)dx = F(b) - F(a)$.

## 一点小结

到这里 MATH 4130 的内容就告一段落了。从这篇文章可以看出1至6章的内容呈一个递进的关系，每一章的定义和定理都为接下来更高层次的内容打下了铺垫，因此在学习的过程中时常会感到每一点的内容都不是割裂的， 没有哪一个定义或定理是多余的，整一个体系十分连贯。这就是数学分析的美妙之处，是离散数学与基础数理统计不具有的（🐶）。

同时这一点也说明了要学好数学分析必须做到各个定义与定理之间的融会贯通，而想做到这一点十分不易，必须花费大量的时间进行复习，思考，以及习题练习。对于像我一样资质平平的人而言，如果未能下足够功夫在数分上，即使在考试中取得了不错的成绩，也很可能并没有真正学懂数分的精髓。这也是我本学期选课的一大失误之处，学分过多导致没有足够的时间花在数分上，我是认为自己并没有学懂的，只掌握了一点皮毛。这也让我认为学校要求过于宽松的 CS + 数学双专业实际上有些毒瘤，让人分心从而哪一科都无法学精。不过这并不是本文的重点，暂且按下不表，未来如有机会可能会撰文细细讨论。

<!-- ## References

[1]:Rudin:《数学分析原理》第1～7章小结. http://blog.renren.com/share/242480694/12441429452/1. -->

## Appendix A

这是我 MATH 4130 的笔记，字迹比较潦草，除我之外的人可能较难看懂，但仍附上以供感兴趣的人参考。

[note.pdf](https://lxywizard.github.io/files/MATH4130_notes.pdf)

## Appendix B

以下我在学习过程中发现的一些可能会有帮助的资源：

Ch1:

1. [實數的構造](https://www.wikiwand.com/zh-hant/%E5%AF%A6%E6%95%B8%E7%9A%84%E6%A7%8B%E9%80%A0) 

Ch2:   

1. [如何直观地解释「紧致性」？ - 包遵信的回答 - 知乎](https://www.zhihu.com/question/31734712/answer/72390708)
2. [If $F\in \mathbb{R}$ and bounded, then sup $F \in \bar F$](https://math.stackexchange.com/questions/2659151/if-f-subset-mathbbr-and-bounded-then-sup-f-in-barf)
3. [How to prove every closed interval in $\mathbb{R} $ is compact?](https://math.stackexchange.com/questions/368108/how-to-prove-every-closed-interval-in-r-is-compact)
4. [Every bounded subset of $\mathbb{R}^k$ lies in a compact subset of $\mathbb{R}^k $](https://math.stackexchange.com/questions/456773/every-bounded-subset-of-rk-lies-in-a-compact-subset-of-rk)
5. [Show that in a discrete metric space, every subset is both open and closed.](https://math.stackexchange.com/questions/194201/show-that-in-a-discrete-metric-space-every-subset-is-both-open-and-closed)
6. [Are Singleton sets in $\mathbb{R}$ both closed and open?](https://math.stackexchange.com/questions/17649/are-singleton-sets-in-mathbbr-both-closed-and-open)

Ch4:

1. [If every real-valued continuous function is bounded on $X$ (metric space), then $X$ is compact.](https://math.stackexchange.com/questions/668905/if-every-real-valued-continuous-function-is-bounded-on-x-metric-space-then)
2. [Prove that if $f$ is bounded and nondecreasing on $[a,b]$ then $\lim f(x)$ as $x$ approaches $b$ from the left exists.](https://math.stackexchange.com/questions/716380/prove-that-if-f-is-bounded-and-nondecreasing-on-a-b-then-lim-fx-as-x)
3. [Show that exists a continuous function in $E$ that is not bounded](https://math.stackexchange.com/questions/2327671/show-that-exists-a-continuous-function-in-e-that-is-not-bounded)
4. [Prove that the number of jump discontinuities is countable for any function](https://math.stackexchange.com/questions/263606/prove-that-the-number-of-jump-discontinuities-is-countable-for-any-function)

<!-- 综合:

1. [Rudin:《数学分析原理》第1～7章小结]( http://blog.renren.com/share/242480694/12441429452) -->