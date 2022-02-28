<blockquote style="text-align: center;">

<% if (base) { %>
**模因探测机制确认你已暴露于此文件下至少6分钟。你已被认为处在后-3211状态下。如果你仍可看到与你记忆中相同的信息，请立即联系负责SCP-3211的研究员。**
<% } else { -%>
**你有六分钟来<span id="read">阅读</span>此文档**

<p id="timer">06:00</p>
<% } %>

</blockquote>

<img data-src="<%= fileUrl %><%= prose.imageUrl %>"
     data-caption="<%= prose.imageCaption %>">

**项目编号：**SCP-3211

**项目等级：**<%- prose.objectClass %>

**特殊收容措施：**为减少不必要的暴露，已在本文档开头添加警告信息。必需4级授权以继续。SCP-3211的一切相关信息仅向SCP-3211的研究人员开放，包括警告信息。

除非必需SCP-3211信息的紧急情况，不得有超过3名O5议会成员及/或任意站点10%的人员得知除SCP-3211存在以外的任何详细信息。

SCP-3211被收容于一间标准非人型收容间内，仅可为测试目的进入。

**描述：**<%= prose.physicalDescription %>

SCP-3211展现出一种慢速而强力的认知改变效应。在暴露于SCP-3211的前六分钟内，个体可无障碍观察及记录SCP-3211。六分钟后，个体会立即永远失去对SCP-3211相关信息的理解能力，并无法再观察到SCP-3211。<% 
if (base) { -%>此效应有效保证了仅有暴露六分钟内的人可得知SCP-3211的信息。
<% } %>

为本文件记录目的，已暴露于SCP-3211至少六分钟的个体将被称作**后-3211**，而少于六分钟的个体将被称作**前-3211**。

<% if (base) { %>

后-3211个体们坚称他们仍可完美记忆SCP-3211的本质，虽然已无法接受新的相关信息。然而之后，后-3211个体们对SCP-3211作出了明显不同的描述。部分描述依报告的时间顺序排列如下。

* ████牌微波炉
* _Homo sapiens_ ，捷克裔女性，名为'Nerozumím'
* 空瓷杯，上印有█████████特许经营的图像
* 红色立方体，绝对光滑，每条边长12cm
* _Columba livia domestica_ （普通鸽子）尸体，腐败早期
* 颜色“紫褐色”
* 黏土花瓶，应该是古代的
* 一盒“老友记”DVD光碟，缺少了第三季中的一张
* 印有数字“3211”的一个小塑料徽章

<% } else { %>

后-3211个体均可无困难回忆起SCP-3211是什么（即<%= prose.informalDescription %>）。然而，只有前-3211个体可感知到SCP-3211或记录其新信息。

<% } %>

值得注意的只有后-3211个体们会给出不同的形容。<% 
if (base) { -%>观察表明前-3211个体们可对SCP-3211的性质达成一致意见。<% 
} else { -%>所有前-3211个体一致同意SCP-3211是<%= prose.formalDescription %><% 
} -%>——然而当六分钟过后，个体们会反对此一致意见。书面记录具有相同的性质：阅读此文件的人<%= base ? "一致" : "可能" %>报告在六分钟过去<%= base ? "前" : "后" %>，文件中描述了其他某物。查看实验记录3211-B与-D以获得详细信息。

<% if (base) { %>

注意后-3211个体们并不必然会作出不同的描述——在某些事件中，相同的描述曾多次出现。

曾被暴露在SCP-3211下的人可阅读上述列表，这表明其中并没有对SCP-3211的真实描述。已就此提出了数个理论：

* 以上描述均为假，真正的SCP-3211尚未被见到。
* 以上描述均为假，真正的SCP-3211将显现给某个“应许”的人。
* 以上描述中有一为真，其余为假。
* 以上描述均为真，SCP-3211为同一概念下的多个实体。

<% } %>

SCP-3211具此效应的机制<% 
if (base) { -%>尚未明确，目前理论认为六分钟的界限过后，SCP-3211在原本的记忆上“覆盖”了一层错误的记忆。<% 
} else { -%>尚未明确。
<% } %>

记忆消除被证实对后-3211个体有效。他们会如期忘记SCP-3211，并在再次暴露时<% 
if (base) { -%>认为其为某种新事物。仅消除错误记忆的方法尚未被发现。<% 
} else { -%>有额外六分钟的时间能再次察觉到。
<% } %>

**附录3211-A：**实验记录3211-B与3211-D

<details><summary>实验记录3211-01</summary>

<blockquote>

<p align="center"><b>实验记录3211-01</b></p>

-----

此实验的目的在于得到SCP-3211的一手书面描述，并将其与另一观察者的记录比较。

D-68134拿到铅笔，写字板及一张纸。他被指示进入收容间并书面记录其内容物。

-----

**0:10 &middot;** D-68134闭眼进入收容间。

**0:00 &middot;** D-68134被指示睁眼。

**0:08 &middot;** D-68134开始记录SCP-3211。

<% if (prose.examineAction) { %>
**1:55 &middot;** <%= prose.examineAction %>
<% } %>

**6:04 &middot;** D-68134对其无法再感知到SCP-3211感到惊讶。其因无法阅读刚刚所写的内容而愤怒。

**6:25 &middot;** D-68134被指示离开收容间。

-----

D-68134所作的记录被保留为文档3211-01。

</blockquote>

</details>

<details><summary>实验记录3211-02</summary>

<blockquote>

<p align="center"><b>实验记录3211-02</b></p>

-----

本次试验的目的为以其他观察者对比实验3211-01中所作的文本。

D-8834被给予文档3211-01，并被指示不要去读它。

-----

**0:10 &middot;** D-8834闭眼进入收容间。

**0:00 &middot;** D-8834被指示睁眼并对比屋内物体与文档3211-01中的形容。

**1:18 &middot;** D-8834确认SCP-3211与文档中描述相符。

<% if (prose.examineConfirmationAction) { %>
**1:59 &middot;** <%= prose.examineConfirmationAction %>
<% } %>

**5:45 &middot;** D-8834被指示闭眼。

**6:15 &middot;** D-8834被指示根据记忆再次比较个体与文档中的描述。

**6:34 &middot;** D-8834确认文档3211-01中<%=
  base ?
  "描述了与SCP-3211完全不同的物体" :
  "描述的仍然是SCP-3211"
%>。

**6:44 &middot;** D-8834被指示睁眼。她报告她无法再次感知到SCP-3211或阅读文档3211-01。

</blockquote>

</details>

<details><summary>文档3211-01</summary>

以下内容为文档3211-01的副本，由D-68134在实验3211-01中记录。

> <%= prose.writtenObservation %>

</details>

**附录3211-B：**实验数据

<%=
  base ?
  "为尝试找出SCP-3211的真正本质，一" :
  "一"
%>系列来自SCP-3211的数据被记录并在下列出。这些记录均为前-3211状态下的研究员所作，<% 
if (base) { -%>但目前未知阅读得到的信息是准确的抑或读者接受了匹配其当前印象中的SCP-3211的信息。<% 
} else { -%>注意目前未知为什么会认为有必要留存这些数据。
<% } %>

数据类型 | 观察结果
--- | ---
全光谱光度 | <%= prose.data.spectrophotometry %>
质量 | <%= prose.data.mass %>
休谟指数 | <%= prose.data.hume %>
磁力 | <%= prose.data.magnetism %>
D-9981的视觉观察 | <%= prose.data.visual %>
D-9981的触觉观察 | <%= prose.data.physical %>
对D-9981的基础提问的回答 | <%= prose.data.questioning %>
Kappa型模因探测器 | <%= prose.data.sentience %>

**事件记录3211-C：**于2016-03-31，Jason Greaves博士，一位并未被分至SCP-3211的研究员，在无授权情况下接受了Y级记忆强化<note>1</note>并进入了收容间。<% 
if (base) { -%>人员报告之后无法感知到Greaves博士，直到数小时后其无意识的躯体“突然出现”。Greaves博士在接受医疗处理后完全恢复健康，但对其与SCP-3211间的事全无印象，只认为他“在空收容间里浪费了时间”。
<% } %>

Greaves博士在闯入期间留下了一系列音频记录。<% 
if (base) { -%>然而这些文件内容具信息危害，并已无信息残留。<% 
} -%>其文本记录如下以待后用。

Greaves博士<%=
  base ?
  "已因未遵循标准收容程序被严责。" :
  "可随时回答其与SCP-3211间经历的相关问题。"
%>

<details><summary>音频记录3211-01</summary>

<blockquote>

Jason Greavaes博士，SCP-3211，实验记录……一？

如果你正在听这段录音，而且和我一样经历了些倒霉的记忆强化，那我们都很明白SCP-3211<%=
  base ?  "根本不存在" : `是${prose.informalDescription}`
%>。我们永远都不会知道为什么<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>这么想躲着我们。但如果你没沉在Y级强化里的话，在少于六分钟里你只会记得我在对收容间里的什么东西胡言乱语。

当然，如果这样的话，所有这些录音都会说收容间里什么也没有。

我想干的是找出SCP-3211到底是什么，它如何工作，以及<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>为什么这么想隐藏自己。<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>想要什么？

不管我怎么试和跟谁沟通，我都没法被授权这次测试。但它需要被完成。所以我弄了一小剂Y级记忆强化而且打算自己来干。在Y级强化能帮我记忆而没开始忘事前，我只有几个小时时间，所以我最好快点开始。
</blockquote>

<blockquote>

我注意到一些模式化的东西。

大部分进入3211房间的人会<% 
if (base) { -%>感知到整个房间是空的。就好像我可以清楚地看到这里什么都没有。<% 
} else { -%>把<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>感知为某种全新的东西。就好像我看到了<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>是<%= prose.informalDescription %>，而列表上没人曾经看到过跟<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>一样的东西。
<% } %>

<% if (base) { %>
这个收容间内什么都没有。SCP-3211不存在。
<% } else { -%>
但是<%= prose.funFact %>，它并不<v>仅仅</v>是<%= prose.informalDescription %>。在人们无法看到<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>超过六分钟，之后记忆就会出错以外，它还有其他异常性质。
<% } %>

在我看来基金会的人员——研究员和类似的人——会感知到<%=
  base ?
  "整个房间是空的。" :
  "它是某种异常。"
%>那些已经熟悉<%=
  base ? "空无一物" : "异常"
%>，而且_期待_
<% if (base) { -%>
空无一物的人，在收容间里什么都看不见，因为它是空的。
<% } else { -%>
<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>是异常的人，会记住<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>是某种异常。
<% } %>

但是一个不熟悉的人，比如一个D级，会记住<%=
  base ?
  "这个收容间是空的，没什么差别。" :
  "它是个寻常的东西。就好像一个黏土花瓶。"
%>

<% if (base) { %>
看来SCP-3211根本不存在。但我还是不知道为什么如果它不存在，我会坚持去证明它存在。SCP-3211不存在。<% 
} else { -%>看起来<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>会自适应观察者的期望。但我还是不知道<%= prose.informalDescription %>起初为什么要这么做来保护自己。
<% } %>

我的头开始……混乱。我不知道是因为这个SCP还是记忆强化药剂开始失效了。事实上我并不知道Y级强化能持续多久。
</blockquote>

<blockquote>

所以我把它缩小到了三个……阶段。这个词应该比较合适。

所以，第一个阶段是当你第一次走进收容间时看见了什么；SCP-3211的本质。它是<%=
  base ? "无物" : prose.informalDescription
%>。显然，当我的记忆强化失效后，我会忘掉它，你也是。我假设你也接受了记忆强化。

第二阶段是当你看了<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>超过六分钟后，SCP-3211用于覆盖它自己的随便什么记忆。我最后一次看到<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>的时候，我记得看到了……我本该六岁大的儿子。这是我感知到的第二印象。

第三阶段是你完全无法感知到<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>。<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>完全伪装了自己，从你眼中藏了起来。

我觉得我知道了为什么<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>想藏起来。我只是……需要把单词整合成句子。

思考开始变得困难了。我的思维好像正跋涉在番茄酱里。
</blockquote>

<blockquote>

天，我的脑袋简直要弄死我了。

我很确定是因为记忆强化。Z级强化会在接受时真的干掉你，因为它的效果是永久的。Y级不会……至少我希望？我，呃……可能会因为这个搞砸掉一切。

看到那些一般不会被记住的东西的感觉相当奇怪。小瑕疵到处都是，覆盖在每个地方。<% 
if (base) { -%>收容间是空的。这里没有瑕疵。<% 
} else { -%>也全都覆盖在<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>身上。
<% } %>

我需要睡觉。我只想睡觉。
</blockquote>

<% if (prose.alternateEnding) { %>
<blockquote><%= prose.alternateEnding %></blockquote>
<% } else { %>
<blockquote>

地板比站着舒服太多了。

呼吸开始变难了。我不知道是因为我的肺叶开始合上了，还是只是……只是我忘了_怎么做_ 。至少我还没忘掉我第一次看到<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>时<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "它"
%>是什么。

但我很清楚为什么<%=
  prose.objectPronoun ?  prose.objectPronoun : "SCP-3211"
%>想方设法地隐藏它自己。它就在这，就在你面前。我很惊讶居然一直没人明白这点。

只是……只是因为<%=
  prose.objectPronoun ?  prose.objectPronoun : "它"
%>并不<%=
  base ?
  "……并不在这。它不存在。" :
  "真的……真的是它自身，你懂吗？"
%>
</blockquote>

<blockquote>

我不知道怎么来一发记忆强化，操。我只是做了它们。我知道它们是如何……它们是如何……

我需要睡觉。

<%=
  base ?
  "这屋子里只有我一个人。这收容间是空的。" :
  "它就这么在那，看着我。"
%>它刚刚……刚刚已经让我忘掉了。

<%=
  base ?
  "我知道它不存在" :
  "我知道你的秘密，混蛋"
%>……为什么不……为什么不能……为什么你要让我看到他？

为什么你要再一次带走他？

我已经要活不下去了。

为什么还没有人来带我走？

</blockquote>
<% } %>

<% if (prose.conclusion) { %>
<%= prose.conclusion %>
<% } else { -%>
当前认为Greaves博士在此时陷入昏迷。之后的记录多数是无声的，<%=
  prose.madeASound ?  `除了${prose.madeASound}，` : ""
%>直到之后一位安保人员数次在监控中看到Greaves博士并随后呼叫了支援。
<% } %>

</details>

<footer data-template="脚注{N}.">

<p style="font-size: 130%"><b>脚注</b></p>

1. “记忆强化，与记忆删除相反，一般用于辅助保留记忆，并防止它被篡改，即使当面对什么想破坏它的异常时也是如此……”——摘自_逆模因措施概论_ ，[Marion Wheeler](/we-need-to-talk-about-fifty-five)

</footer>
