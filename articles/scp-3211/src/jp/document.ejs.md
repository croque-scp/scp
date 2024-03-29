<blockquote style="text-align: center;">

<% if (base) { %>
**ミーム検出器により、あなたがこの文書に最初に暴露したのは6分以上前であることが判明しました。あなたはポスト-3211であるとみなされます。もしまだこの文書をあなたの記憶通りに知覚できるならば、直ちにSCP-3211に割り当てられている調査員に相談してください。**
<% } else { -%>
**この文書は6分間のみ<span id="read">読む</span>ことができます。**

<p id="timer">06:00</p>
<% } %>

</blockquote>

<img data-src="<%= fileUrl %><%= prose.imageUrl %>"
     data-caption="<%= prose.imageCaption %>">

**アイテム番号:** SCP-3211

**オブジェクトクラス:** <%- prose.objectClass %>

**特別収容プロトコル:** SCP-3211への不必要な暴露を減らすため、この文書の先頭に警告文が設置されなければなりません。読み進めるにはレベル4認可が必要となります。SCP-3211に関するあらゆる情報は、SCP-3211に割り当てられた職員のみが利用可能な文書に限り記述されます。これには警告文も含まれます。

SCP-3211に関する知識が緊急的に必要になる場合を除き、3名以下のO5メンバーおよび各サイトにつき10%以下の職員のみがSCP-3211が存在していること以上の情報に暴露していることができます。

SCP-3211は標準的非ヒト用収容室に保管されます。アクセスは試験の際に限り許可されます。

**説明:** <%= prose.physicalDescription %>

SCP-3211は遅効性ながらも強力な知覚改変効果を呈します。SCP-3211に暴露してからの最初の6分間はSCP-3211を問題なく観察・記録できます。6分が経過すると、即座にSCP-3211に直接的に関連するあらゆる情報の知覚およびSCP-3211それ自体の観測が恒久的に不可能となります。<% if (base) { -%>
これにより、SCP-3211暴露からの経過時間が6分未満の者に対してのみ、SCP-3211に関する情報を効率的に知覚させることが可能となります。
<% } %>

当文書では、SCP-3211に暴露してから6分以上経過した者を**ポスト-3211**、6分未満の者を**プリ-3211**と呼称します。

<% if (base) { %>

ポスト-3211は、SCP-3211に関する新しい情報を手に入れることができないにもかかわらず、SCP-3211の性質を完全に想起することができると一貫して主張します。しかしながら、SCP-3211の説明は各ポスト-3211の報告ごとに異なっていることが早々に明らかになりました。この説明群は下に報告順に記載されています。

* ████ブランドの電子レンジ
* "ネロズミム"(Nerozumím)という名のチェコ人の女性
* █████████フランチャイズの画像がプリントされた空の磁器マグカップ
* 完全に平滑な面を持つ、各辺12センチメートルの赤い立方体
* 腐敗状態のまま停止した_Columba livia domestica_(カワラバト)の死体
* 暗赤色
* 古代のものと推測される粘土製の花瓶
* シーズン3の欠けた、テレビシリーズ'Friends'のDVDボックス
* '3211'とプリントされたプラスチック製の小さなバッジ

<% } else { %>

ポスト-3211は常に、SCP-3211は<%= prose.informalDescription %>であると問題なく想起できます。しかしながら、プリ-3211のみがSCP-3211自体を知覚し、SCP-3211に関する新たな情報を記録することができます。

<% } %>

ポスト-3211間でSCP-3211の説明が異なることは注目に値します。<% if (base) { -%>
観察の結果、プリ-3211はSCP-3211の性質に対し常に合意に達することが判明しました。
<% } else { -%>
全てのプリ-3211はSCP-3211が<%= prose.formalDescription %>であることに同意します。
<% } -%> -- しかしながら、6分が経過するとSCP-3211についての意見は分かれます。このことは文書にも当てはまります。この文書を閲覧している職員は暴露から6分後には、<%= base ? "例外なく" : "時として" %><%= base ? "変化する前" : "変化した後" %>とは異なる物が描写されていると報告します。詳細は実験ログ3211-Bおよび-Dを参照してください。

<% if (base) { %>

ポスト-3211の報告はそれぞれ独自のものであるとは限らないことに留意してください -- いくつかのケースにおいては、同様の報告が2度以上なされたことがあります。

SCP-3211に暴露した者が上記のリストを読むことが可能であるという事実より、上記の説明はどれもSCP-3211が実際に何であるかを述べてはいないという結論が示唆されます。いくつかの仮説が提唱されています:

* 上記の説明は全てが誤りであり、真のSCP-3211は未だ観測されていない。
* 上記の説明は全てが誤りであり、真のSCP-3211は「価値ある」者にのみ姿を見せる。
* 上記の説明は1つのみが事実であり、残りは虚偽である。
* 上記の説明は全てが事実であり、SCP-3211はどういうわけか同一の概念的空間に位置する複数の物品群である。

<% } %>

現時点で、SCP-3211がその効果を伝播させるメカニズムは<% if (base) { -%>
不明であり、現在6分の経過後にSCP-3211は偽記憶を「注入」し元の知覚を上書きするという理論が提唱されています。
<% } else { -%>
不明です。
<% } %>

記憶処理はポスト-3211に効くことが実証されています。SCP-3211が何であったかは期待通りに忘却され、再暴露の際には<% if (base) { -%>
新しいものとして知覚され得ます。偽記憶のみを消去する方法は未だ明らかになっていません。
<% } else { -%>
また6分間のみ知覚することができます。
<% } %>

**補遺 3211-A:** 実験ログ 3211-B/3211-D

<details><summary>実験ログ 3211-01</summary>

<blockquote>

<p align="center"><b>実験ログ 3211-01</b></p>

-----

この実験の目的はSCP-3211の手書きの説明を作成し、他の観察者の説明と比較することでした。

D-68134は鉛筆とクリップボード、紙を1枚与えられた後収容室へ入り、その内容物の説明を筆記するよう指示されました。

-----

**0:10 &middot;** D-68134が目を閉じた状態で収容室に入る。

**0:00 &middot;** D-68134が目を開けるよう指示される。

**0:08 &middot;** D-68134がSCP-3211の説明を筆記し始める。

<% if (prose.examineAction) { %>
**1:55 &middot;** <%= prose.examineAction %>
<% } %>

**6:04 &middot;** D-68134はもはやSCP-3211を知覚できないことに驚いている。また、自分が書いたものが読めなくなっていることに苛立っている。

**6:25 &middot;** D-68134が収容室から退出するよう指示される。

-----

D-68134による説明は文書3211-01として保存されています。

</blockquote>

</details>

<details><summary>実験ログ 3211-02</summary>

<blockquote>

<p align="center"><b>実験ログ 3211-02</b></p>

-----

この実験の目的は実験3211-01から得られた筆記の説明を他者の観察と比較することでした。

D-8834は文書3211-01を渡され、それを読まないよう指示されました。

-----

**0:10 &middot;** D-8834が目を閉じた状態で収容室に入る。

**0:00 &middot;** D-8834は目を開け、室内の物品と文書3211-01の説明を比較するよう指示される。

**1:18 &middot;** D-8834はSCP-3211が説明と一致することを確認する。

<% if (prose.examineConfirmationAction) { %>
**1:59 &middot;** <%= prose.examineConfirmationAction %>
<% } %>

**5:45 &middot;** D-8834は目を閉じるよう指示される。

**6:15 &middot;** D-8834は、記憶にある物品と説明をもう一度比較するよう指示される。

**6:34 &middot;** D-8834は文書3211-01はSCP-3211と<%=
  base ?
  "全く異なる物を記述していた" :
  "同じものを記述していた"
%>ことを確認する。

**6:44 &middot;** D-8834は目を開けるよう指示される。D-8834はSCP-3211を観測することも文書3211-01を読むこともできないと述べる。

</blockquote>

</details>

<details><summary>文書3211-01</summary>

以下は実験3211-01でD-68134により作成された文書3211-01の写しです。

> <%= prose.writtenObservation %>

</details>

**補遺 3211-B:** 実験データ

<% if (base) { %>
SCP-3211の真の性質を明らかにする試みの結果、<% } %>SCP-3211から各種情報が回収されました。以下にそれを掲載します。このデータ群はプリ-3211の研究員のみによって記録されました。<% if (base) { -%>
現時点で、各数値が正しいのか否か、及びこの文書の読者が現在観測できるSCP-3211に沿うように各数値を知覚しているのか否かは不明です。
<% } else { -%>
なぜこれらの情報がこの文書に記録するほどに重要であるとみなされたのかは現時点で不明であることに留意してください。
<% } %>

情報種別 | 計測結果
--- | ---
フルスペクトル分光測光 | <%= prose.data.spectrophotometry %>
質量 | <%= prose.data.mass %>
ヒューム値 | <%= prose.data.hume %>
磁性 | <%= prose.data.magnetism %>
D-9981による目視観測 | <%= prose.data.visual %>
D-9981による接触 | <%= prose.data.physical %>
D-9981による標準的尋問への応答 | <%= prose.data.questioning %>
タイプ-カッパミーマチック知性検出器 | <%= prose.data.sentience %>

**事案ログ 3211-C:** 2016年03月31日、SCP-3211に割り当てられていないジェイソン・グリーブス(Jason Greaves)博士がクラス-Y記憶補強剤<note>1</note>を無許可で服用し、収容室に侵入しました。<% if (base) { -%>
職員は数時間後にグリーブス博士が意識不明の状態で「自発的に出現」するまでグリーブス博士を知覚することができなかったと報告しました。メディカルケアの結果グリーブス博士は完全に回復しましたが、SCP-3211との遭遇の詳細は一切記憶しておらず「空き部屋で時間を無駄にしただけだった」と主張しています。
<% } %>

グリーブス博士はSCP-3211との遭遇中の思考の詳細をオーディオログに記録していました。<% if (base) { -%>
しかしながらこれらのログの内容は情報災害的効果を持ち、ほとんどの情報は欠落しています。
<% } -%>
後のためにこれらの写しが以下に掲載されています。

グリーブス博士は<%=
  base ?
  "標準的試験手続きに従わなかったことにより、厳重な注意を受けました。" :
  "SCP-3211との遭遇にかかわる質問に回答することができます。"
%>

<details><summary>オーディオログ 3211-01</summary>

<blockquote>

ジェイソン・グリーブス博士、SCP-3211、実験ログ...1、だ。おそらく。

もし君がこれを聞いていて、かつ、私のように何かかなりキツめの記憶補強剤の力を借りているならば、私も君もSCP-3211は<%=
  base ?  "存在しない" : `${prose.informalDescription}である`
%>ことを知っていることになる。なぜ<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>がここまで必死に我々から隠れようとするのかが分かることはないだろうが。だが、もし君がクラスYほど激しく効くものを使っていないならば、あと6分足らずで私がこの部屋に置いてある何某についてだらだら話していたこと以外は忘れることになる。

そしてもちろんのこと、そのときにはこのオーディオログも「収容室には全く何もなかった」と言っているように聞こえることになる。

私がしようとしていることはSCP-3211が正確に何であるのか、どのようにふるまうのか、そしてなぜ<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>がこんなにも隠れようとするのかを明らかにすることだ。<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>は一体何を望んでいる?

私がすることが何であろうとも、あるいは語りかけるのが誰であろうとも、このテストの認可を受けることは不可能だった。しかしこれは行われる必要がある。だから私はクラスY記憶補強剤を少々服用し、自分でこれをやることにしたのだ。クラスYが私の記憶の補強をしなくなり、私がここでのことを忘れてしまうまであと数時間しかない。だからそろそろ始めた方がよかろう。
</blockquote>

<blockquote>

なにかパターンのようなものが見えてきた。

3211の収容室に踏み入ったほとんどの者は、<% if (base) { -%>
まさに私がここには何もないとはっきりわかるのと同じように、このセルが完全な空室であることに気づくだろう。
<% } else { -%>
<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を初めて見るものと知覚するだろう。ちょうど、私が<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を<%= prose.informalDescription %>と理解し、しかしながらリストには<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>をそのように知覚した者がいないのと同じように。
<% } %>

<% if (base) { %>
収容室には何もない。SCP-3211は存在しない。
<% } else { -%>
だが、<%= prose.funFact %>。<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>は<em>ただの</em><%= prose.informalDescription %>ではない。<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>の持つ異常性は人々が<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を6分以上知覚できず、その後の記憶は偽りのものとなってしまうことだけではない。
<% } %>

私には、財団職員は -- 研究員やその他の人々は -- <%=
  base ?
  "収容室が完全に空である" :
  (prose.objectPronoun ?  prose.objectPronoun : "こいつ") + "が何か異常なものである"
%>と知覚するだろうと考える。<%=
  base ? "無" : "アノマリー"
%>に慣れ親しんだ者、言うなれば<% if (base) { -%>
無を<em>期待している</em>者は収容室に何も見出さないだろう。ここは空室なのだから。
<% } else { -%>
<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>が異常であると<em>期待している</em>者は<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>が何か異常なものだったと記憶するだろう。
<% } %>

しかし、例えばDクラスのような、アノマリーに慣れ親しんでいない者は<%=
  base ?
  "全く同じく、収容室が空であった" :
  "このオブジェクトが何か、粘土製の花瓶のようなありふれたものであった"
%>ことだけを覚えているだろう。

<% if (base) { %>
SCP-3211は完全に存在していないように思える。しかし、もしSCP-3211が存在しないとして、
なぜ私はSCP-3211の存在の証明に固執しているのだろうか。SCP-3211は存在しないのだ。
<% } else { -%>
<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>は観測者の期待にあわせているように思える。しかし、そもそもなぜただの<%= prose.informalDescription %>がそこまでして自分を守ろうとするのかが未だにわからない。
<% } %>

頭が...靄がかかっているようだ。SCPの影響なのか、それとも補強剤が切れてきたのかは分からない。実際のところ、私はクラスYがどれだけ持つのか知らないのだ。
</blockquote>

<blockquote>

三つの...段階、を見出したように思う。そう言うのが正しいと思う。

つまり、第一段階とは君が初めてこの収容室に足を踏み入れたときに目にするもの -- SCP-3211が実際に何であるかだ。それは<%=
  base ? "無" : prose.informalDescription
%>だ。言うまでもないが、補強剤が切れれば直ちに私も君もそのことを忘れる。君が補強剤を服用しているとして、だが。

第二段階は、君が<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を6分以上観察した後にSCP-3211が注入してくる何らかの上書き記憶だ。私が最後に<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を見た時は...6歳になる息子を見た。それが私にとっての第二段階だった。

第三段階では<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を全く知覚できなくなる。<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>は完璧な変装でもって隠れてしまうのだ。

<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>がなぜ隠れたがるのか分かった気がする。ただ...言葉を文章にする必要がある。

考えるのが難しくなってきた。思考がケチャップの沼に突っ込んでいるようだ。
</blockquote>

<blockquote>

ああ、頭が死ぬほど痛い。

これは間違いなく補強剤のせいだ。クラスZは服用者を文字通り殺してしまう...その影響は恒久的なものだからだ。クラスYはそうではない...ことを願う。私は、あー...この実験で、かなりめちゃくちゃになっているのかもしれない。

普通だったら覚えていられないこと全てが見えるというのは本当に奇妙な感じだ。いたるところに虫がいる。全てを覆っている。<% if (base) { -%>
収容室は空だ。虫などいない。
<% } else { -%>
<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>の上にも這いまわっている。
<% } %>

眠る必要がある。ただ眠りたい。
</blockquote>

<% if (prose.alternateEnding) { %>
<blockquote><%= prose.alternateEnding %></blockquote>
<% } else { %>
<blockquote>

床に寝るのでも立っているよりはるかにましだ。

息をするのが辛くなってきた。肺が塞がっているのか、それとも、ただ私が...息の<em>しかた</em>を忘れてしまったのか。少なくとも、<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を初めて見たときに<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>が何だったのかは忘れていない。

ただ、なぜ<%=
  prose.objectPronoun ?  prose.objectPronoun : "SCP-3211"
%>がこんなにも必死に隠れたがるのかははっきりとわかっている。そいつはすぐそこに居て、君のすぐ目の前に居る。だれも<%=
  prose.possessivePronoun ?  prose.possessivePronoun : "こいつ"
%>を見たことがないことに驚きすら覚える。

事実はただ...事実はただ、<%=
  prose.objectPronoun ?  prose.objectPronoun : "こいつ"
%>は実際には...<%=
  base ?
  "実際にはいないということなのだ。" + (prose.objectPronoun ?  prose.objectPronoun : "こいつ") + "は存在しない。" :
  "実際には" + (prose.possessivePronoun ?  prose.possessivePronoun : "こいつ") + "ではないということなのだ、わかるか?"
%>
</blockquote>

<blockquote>

くそっ、どうすれば記憶を補強できる。用意はあれしかなかったのだ。分かったのは、彼らが、どうやって...どうやって...

眠る必要がある。

<%=
  base ?
  "私はこの部屋に一人だ。収容室は空だ。" :
  (prose.objectPronoun ?  prose.objectPronoun : "そいつ") + "はただそこに居る。私を見ている。"
%>ただ...早く忘れさせてくれ。

<%=
  base ?
  "こいつが存在しないということは知っている" :
  "お前の秘密は分かってるんだぞ、クソが"
%>...なぜしない...なぜできない...なぜ私にあの子を見せる必要があったんだ?

なぜまたあの子を連れ去らなければならなかったんだ?

私はここで死ぬのだろう。

なぜ誰も私を捜しに来ないのだ?

</blockquote>
<% } %>

<% if (prose.conclusion) { %>
<%= prose.conclusion %>
<% } else { -%>
この時点においてグリーブス博士は意識を喪失したと考えられています。残りのログはセキュリティスタッフが数分後に監視モニターにグリーブス博士を発見し、救助を要請した時点まで<%=
  prose.madeASound ?  `${prose.madeASound}を除き` : ""
%>ほとんどが無音でした。
<% } %>

</details>

<footer data-template="Footnote {N}.">

<p style="font-size: 130%"><b>Footnotes</b></p>

1. 「『記憶補強』というのは『記憶処理』とは対照的にそこまで知られた言葉ではありませんが、一般的には記憶の保持及び改竄からの防衛を手伝ってくれます。例え貴方の目と鼻の先に貴方の記憶をかき回そうとするアノマリーがいるときでも...」 -- <em>反ミーム的防衛手段のイントロダクション</em>より抜粋、[マリオン・ウィーラー](/we-need-to-talk-about-fifty-five)

</footer>
