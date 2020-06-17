---
title: "浅谈 Java String 类参数传递"
date: "2018-09-02"
description: "大一完全不懂编译原理时写的水文，当时可真是 naive =="
---

观察以下代码：

```java
public class HelloWorld {
    public static void main(String[] args) {
        String a = "Hello";
        String b = "Hello";
        String a1 = new String ("Hello");
        String b1 = new String ("Hello");
        String c = a + "World";
        String d = a + "World";
        String e = "Hello" + "World";
        String f = "Hello" + "World";
        System.out.println(a == b);
        System.out.println(a1 == b1);
        System.out.println(c == d);
        System.out.println(e == f);
    }
}
```

很显然 `a1 == b1` 的结果应该是 `false`，由于是使用 `new` 创建的 `String`，a 和 b 是的地址是指向堆（*heap*）中对常量池（*constant pool*）的对象 "Hello" 的不同的拷贝对象地址。`a == b` 则应该是 `true`，因为它们是直接指向常量池中的同一个地址的（JVM 对于 String 的存储采用了常量池的机制，在这里不过多介绍）。

有趣的地方在于 `c == d` 和 `e == f`，他们的结果应该是什么，是否相同呢？其实 `c == d` 是 `false` 相对来说也算显然，毕竟 a 并不是一个常数，因此编译器无法判断 `a + "world"` 是否在常量池里面，只能在堆中直接创建 c 和 d 应该指向的地址，所以是不同的。但 `e == f` 结果却是 `true`，说明 "HelloWorld" 是在常量池里面的，并且 e 和 f 都指向其地址。但我们在之前并没有直接创建值为 "HelloWorld" 的 `String`，为什么 "HelloWorld" 会在常量池里面？这里就必须引入 *constant folding* 的概念，出于自己对编译原理知之甚少，直接搬运 [*Wikeapedia*](https://en.wikipedia.org/wiki/Constant_folding?oldformat=true) 的介绍：

> **Constant folding** is the process of recognizing and evaluating constant expressions at compile time rather than computing them at runtime. Terms in constant expressions are typically simple literals, such as the integer literal 2, but they may also be variables whose values are known at compile time. 

大部分编译器并不会产生运算的指令并等到 run time 在计算出结果，而是采用一种叫做 constant folding 的优化方法，在 compile time 的时候就分辨出语句结构，计算出结果。JVM 编译器也采用了 constant folding，在 compile time 的时候就把 `"Hello" + "World"` 处理成了 "HelloWorld"，所以 e 和 f 都指向了常量池中的 "HelloWorld" 而并没有在堆中新建对象。JVM 编译器实际上还采用了另外一个优化方法 *constant propagation*：

> **Constant propagation** is the process of substituting the values of known constants in expressions at compile time. Such constants include those defined above, as well as intrinsic functions applied to constant values. 

理论上来说，因为 constant propagation 会处理变量，`a + "world"` 的结果也可以在 compile time 的时候计算出来。但对编译器而言，优化的程度和效率通常是不能兼顾的，而 JVM 编译器并没有在 String 相加的时候进行 constant propagation 的优化。

出于好奇，我又在 Python 上进行了一次实验：

```python
a = "Hello"
b = "Hello"
c = a + "World"
d = a + "World"
e = "Hello" + "World"
f = "Hello" + "World"
print(a == b)
print(c == d)
print(e == f)
```

`a == b` 显然正确，不多提。`e == f` 也是正确的，看来 Python 编译器也使用了 `constant folding` 进行优化。然而奇怪的是，`c == d` 居然也是正确的？难道 Python 对于 String 的储存机制有什么特别之处？但我在运行 `id(c)` 和 `id(d)` 之后发现 c 和 d 的地址并不相同。原来 Python 中对于 String 的 `==`  其实是比较两个 String 的值是否相同，相当于 Java 的 `.equals()`，实在是坑爹。在运行 `print(c is d)` 之后，果然得到了 `false` 的结果。

这个文章可以说是非常 trivial 了，权当茶余饭后巩固知识的小科普一篇。