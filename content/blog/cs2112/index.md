---
title: "Cornell CS 2112 Review"
date: "2018-12-27"
description: "CS 2112: Object-Oriented Design and Data Structures - Honors 是我在康村上的第一门 CS 课"
---

**CS 2112: Object-Oriented Design and Data Structures - Honors** 是我在康村上的第一门 CS 课。此课工作量很大，每个 project 大概要花 **10-30 小时**的时间写代码，是我这学期无（chi）法（xu）睡（tuo）觉（fa）的罪魁祸首。有一本推荐教材 *Data Structures and Problem Solving Using Java, 3rd edition*，但从来没有用过 :P 主要是看 [course notes](http://www.cs.cornell.edu/courses/cs2112/2018fa/lectures/index.html)，个人觉得写的还不错。

这门课虽然名字叫面向对象和数据结构，但其实内容涉及了计算机科学的方方面面，从 Java 基础讲起，再到哈希表、二叉树、排序查找等经典数据结构和算法，之后就开始走偏（?），依次讲了语法分析、设计模式、GUI 设计、并发和同步等内容，最后回归到图论和平衡二叉树。除了平时的 lectures 之外，每周还有由 TA 主持的 recitations 和 labs 帮助我们巩固和拓展知识并动手实践。recitations 和 labs 的质量时好时坏，坏的时候几乎是对 lectures 的重复，令人昏昏欲睡；好的时候内容还是比较有趣，比如 recitations 有讲过有限状态机、3SAT、最小生成树，labs 有让我们练习过正则表达式。

注重广度固然是个优点，但必然也会导致课堂深度的缺失。然而，2112 的精髓——作业——却“弥补”了这一点。举个例子，九月份的某次作业要求在禁止使用 java.util 的情况下实现诸如哈希表、prefix tree 等数据结构，并且其中有要自己实现队列来实现十一月份才讲的 BFS。后来还有几乎零基础手撸的某个 course 自创语言的 parser，GUI 和 client-server。最后四次作业是一个大 project，总共写了约10000行代码。**可以说是作业才让这门课够得上 “honor” 的名头**。

总得来说比起很多其他学校的 CS 入门课注重打好坚实的基础，2112 则是浅尝辄止地在课堂上讲一大堆东西给你，并在作业把只会理论的你往“水”里一丢，让你自己学会游泳。好处是除了数据结构之外还涉猎了很多其他 CS 领域的相关知识，同时获得了海量的实践机会。坏处是很多东西都得靠自学囫囵吞枣，为了完成作业“知其然而不知其所以然”，学得并不扎实与愉快。这门课也远远达不到 staff 所吹嘘的可以到工业界当 Java 程序员的地步，不要说诸如 ConcurrentHashMap 等较细的知识点没讲，类加载机制、垃圾回收、内存分配等每个 Java 程序员都必须要掌握的 JVM 相关知识更是一字未提。同时，这门课作业压力较大，性价比不高。这样的“软件工程”课值不值得上就见仁见智了，个人觉得如果兴趣更多偏向于理论方面其实可以选择不上，把时间省下来去上更多更深的数学课（当然大神是可以兼顾的）。

最后吹一波教授 [Dexter Kozen](http://www.cs.cornell.edu/~kozen/)，虽然本人对这门课有诸多怨言，但对 Prof Kozen 却是由衷地十分敬佩。从他第一堂课所说的 "Don't be afraid if you think you are not so smart as others. Everyone feels the same. I feel I am not smart all the time through my career. That's why I work hard. That's why we should work hard"，到时刻挂在嘴边的 "grade is not the point"，以及最后的寄语 "I hope you to use the CS you learned here to do something good"，无不体现了其之为人师表，给我的影响颇深。两三点秒回的 Piazza 与每周两次的 office hour 更是践行了“传道受业解惑”的典范。因此，为了 Prof Kozen 而选择上 CS 2112 也未尝不可。