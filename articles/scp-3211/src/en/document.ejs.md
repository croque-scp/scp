<blockquote>

<% if (anomaly.base) { %>
**Memetic detectors indicate that you were first exposed to this file more than
6 minutes ago. You are now considered post-3211. If you can still perceive the
documentation as you originally recall it, please consult a researcher assigned
to SCP-3211 immediately.**
<% } else { -%>
**YOU HAVE 6 MINUTES TO <span id="read">READ</span> THIS FILE**
<% } %>

<p id="timer">06:00</p>

</blockquote>

<image src="<%= anomaly.prose.imageUrl %>"
       caption="<%= anomaly.prose.imageCaption %>">

**Item #:** SCP-3211

**Object Class:** <%- anomaly.prose.objectClass %>

**Special Containment Procedures:** To reduce unnecessary exposure to SCP-3211,
a warning message is to be placed at the start of this document. Level 4
authorisation must be required to proceed. No information regarding SCP-3211 is
to be present in any resources not exclusively available to researchers
assigned to SCP-3211, including the warning message.

Except in the event of an emergency necessitating knowledge of SCP-3211, no
more than 3 members of the O5 council and 10% of the population of any
individual Site are to have been exposed to information regarding SCP-3211
other than its existence.

SCP-3211 is to be kept in a standard non-humanoid containment chamber. Access
is to be limited to tests only.

**Description:** <%= anomaly.prose.physicalDescription %>

SCP-3211 exhibits a slow-acting but potent perception-altering effect. During
the first 6 minutes of exposure to SCP-3211, subjects are able to observe and
record SCP-3211 without issue. Once 6 minutes have passed, subjects will
immediately and permanently be unable to perceive any direct information
associated with SCP-3211, or observe SCP-3211 itself.
<% if (anomaly.base) { -%>
This effectively quarantines information about SCP-3211 to only those who have
been exposed to it for less than 6 minutes.
<% } %>

For the purposes of this document, subjects who have already been exposed to
SCP-3211 for at least 6 minutes will be described as **post-3211** and those
who have been exposed to it for less than 6 minutes will be described as
**pre-3211**.

<% if (anomaly.base) { %>

Post-3211 subjects are consistently adamant that they are able to perfectly
remember its nature despite being unable to take in new information about it.
However, it quickly becomes apparent that each post-3211 subject reports a
different description for SCP-3211. A selection of such descriptions, in
chronological order of their being reported, is provided below.

* ████ brand microwave oven
* _Homo sapiens_, Czech female, named "Nerozumím"
* Porcelain mug printed with imagery from █████████ franchise, empty
* Red cube, perfectly smooth, 12 cm on all sides
* _Columba livia domestica_ (common pigeon) corpse in suspended decomposition
* The colour "puce"
* Clay vase, presumably ancient
* DVD boxset of the television series 'Friends', missing a disc from season 3
* A small plastic badge imprinted with the number '3211'

<% } else { %>

Post-3211 subjects are consistently able to recall, without issue, that
SCP-3211 is <%= anomaly.prose.informalDescription %>. However, only pre-3211
subjects are able to perceive SCP-3211 itself, or record new information
about it.

<% } %>

Of note is that descriptions of the object vary between post-3211 subjects.
<% if (anomaly.base) { -%>
Observations indicate that pre-3211 subjects consistently agree on the nature
of SCP-3211
<% } else { -%>
All pre-3211 subjects agree that SCP-3211 is
<%= anomaly.prose.formalDescription %>
<% } -%>
-- however, once these subjects pass the 6 minute threshold, they will disagree
on what it is. This also applies to documentation: personnel viewing this
document <%= anomaly.base ? "universally" : "may" %> report that it describes
something else <%= anomaly.base ? "before it changed" : "after it changes" %>
after 6 minutes of exposure. See Experiment Logs 3211-B and -D for more
details.

<% if (anomaly.base) { %>

Note that post-3211 subjects reporting unique descriptions is not universal --
in several cases, the same description has been reported more than once.

The fact that those who have been exposed to SCP-3211 are able to read the list
above suggests that none of those descriptions are what SCP-3211 truly is.
Several theories have been suggested:

* That none of the descriptions are true, and that the real SCP-3211 has yet to
  be seen.
* That none of the descriptions are true, and that the real SCP-3211 will
  reveal itself to someone 'worthy'.
* That one of the above descriptions is true, and the rest are false.
* That all of the above descriptions are true, and that SCP-3211 is somehow
  several objects located in the same conceptual space.

<% } %>

The mechanism through which SCP-3211 propagates this effect is currently
<% if (anomaly.base) { -%>
unknown, though the current theory proposes that after the 6-minute threshold,
SCP-3211 'injects' false memories over the original perception.
<% } else { -%>
unknown.
<% } %>

Amnestics have proven to be effective on post-3211 subjects. They will forget
SCP-3211 as expected, and upon re-exposure
<% if (anomaly.base) { -%>
may perceive it as something new. A method of amnesticating only the false
memories has not yet been found.
<% } else { -%>
will be able to perceive it for an additional 6 minutes.
<% } %>

**Addendum 3211-A:** Experiment Logs 3211-B and 3211-D

<details><summary>Experiment Log 3211-01</summary>

<blockquote>
<p align="center">**EXPERIMENT LOG 3211-01**</p>

-----

The purpose of this experiment was to establish a firsthand written description
of SCP-3211 and then compare this description with another observer.

D-68134 was given a pencil, clipboard and a single sheet of paper. He was
instructed to enter the containment cell and produce a written description of
its contents.

-----

**[-0:10]** D-68134 enters the containment chamber with his eyes closed.

**[0:00]** D-68134 is instructed to open his eyes.

**[0:08]** D-68134 begins writing a description of SCP-3211.

<% if (anomaly.prose.examineAction) { %>
**[1:55]** <%= anomaly.prose.examineAction %>
<% } %>

**[6:04]** D-68134 expresses surprise that he can no longer perceive
SCP-3211. He expresses anger at not being able to read what he has written.

**[6:25]** D-68134 is instructed to leave the containment chamber.

-----

The description produced by D-68134 was retained as Document 3211-01.
</blockquote>

</details>

<details><summary>Experiment Log 3211-02</summary>

<blockquote>

<p align="center">**EXPERIMENT LOG 3211-02**</p>

-----

The purpose of this experiment was to compare the written description from
Experiment 3211-01 with another observer.

D-8834 is provided with Document 3211-01 and instructed not to read it.

-----

**[-0:10]** D-8834 enters the containment chamber with her eyes closed.

**[0:00]** D-8834 is instructed to open her eyes and compare the object in
the room to the description on Document 3211-01.

**[1:18]** D-8834 confirms that the SCP-3211 matches the written
description.

<% if (anomaly.prose.examineConfirmationAction) { %>
**[1:59]** <%= anomaly.prose.examineConfirmationAction %>
<% } %>

**[5:45]** D-8834 is asked to close her eyes.

**[6:15]** D-8834 is asked to compare the object to the written description
again, from memory.

**[6:34]** D-8834 confirms that Document 3211-01 <%=
  anomaly.base ?
  "describes a completely different object to" :
  "still describes"
%> SCP-3211.

**[6:44]** D-8834 is asked to open her eyes. She reports that she is
neither able to perceive the object nor read Document 3211-01.
</blockquote>

</details>

<details><summary>Document 3211-01</summary>

The following is a transcription of Document 3211-01, the text produced by
D-68134 during Experiment 3211-01.

> <%= anomaly.prose.writtenObservation %>

</details>

**Addendum 3211-B:** Empirical data

<%=
  anomaly.base ?
  "As an attempt to determine the true nature of SCP-3211, a" :
  "A"
%> collection of data has been recorded from SCP-3211 and is listed below.
This data has been recorded only by pre-3211 researchers.
<% if (anomaly.base) { -%>
It is currently unknown whether the readings are accurate, or if the reader
perceives them to match their current perception of SCP-3211.
<% } else { -%>
Note that it is currently unknown why this data is considered important enough
to retain on file.
<% } %>

Data type | Observation
--- | ---
Full-spectrum spectrophotometry | <%= anomaly.prose.data.spectrophotometry %>
Mass | <%= anomaly.prose.data.mass %>
Hume measurement | <%= anomaly.prose.data.hume %>
Magnetism | <%= anomaly.prose.data.magnetism %>
Visual observation by D-9981 | <%= anomaly.prose.data.visual %>
Physical observation by D-9981 | <%= anomaly.prose.data.physical %>
Response to basic questioning by D-9981 | <%= anomaly.prose.data.questioning %>
Type-Kappa memetic sentience detector | <%= anomaly.prose.data.sentience %>

**Incident Log 3211-C:** On 2016-03-31, a researcher who was not assigned
to SCP-3211, Dr. Jason Greaves, took a Class-Y mnestic<footnote>"Mnestics, as
opposed to the more common amnestics, generally aid in the retention of
memories and the prevention of their modification even in the face of anomalies
that seek to disrupt this..." -- Excerpt from _An Introduction to Antimemetic
Counter-Measures_, [Marion Wheeler](we-need-to-talk-about-fifty-five)
</footnote> without authorisation and entered the containment chamber.
<% if (anomaly.base) { -%>
Personnel reported being unable to perceive Dr. Greaves until his unconscious
body "spontaneously appeared" several hours later. Dr. Greaves returned to full
health with medical care, but did not retain any details of his encounter with
SCP-3211, claiming only that he "wasted his time in an empty cell".
<% } %>

Dr. Greaves recorded a series of audio logs detailing his thought process
during his encounter.
<% if (anomaly.base) { -%>
However, the content of these logs propagate the infohazardous effect, and are
effectively devoid of information.
<% } -%>
Their transcriptions are preserved below for posterity.

Dr. Greaves <%=
  anomaly.base ?
  "was severely reprimanded for not following standard testing procedure." :
  "is available for questions regarding his experience with SCP-3211."
%>

<details><summary>Audio Log 3211-01</summary>

<blockquote>

Dr. Jason Greaves, SCP-3211, experiment log... one?

If you're hearing this and if, like me, you're souped-up on some heavy-ass
mnestics, then you and me both know for sure that SCP-3211 <%=
  anomaly.base ?  "does not exist" : `is ${anomaly.prose.informalDescription}`
%>. Why <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%>'s trying so hard to hide that from us, we'll never know.  But, if you're not
high as hell on Class Y, then in less than 6 minutes you'll only remember me
just rambling on about some random thing sat in a containment chamber.

And of course, when that happens, all these logs will say is that there's
nothing in the containment chamber at all.

What I'm trying to do is work out exactly what SCP-3211 is, how it
works, and why <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%>'s trying so hard to hide. What does <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%> want?

No matter what I tried and who I spoke to, I couldn't get this test authorised.
But it needs to be done. So I've taken a small dose of Class Y mnestics and I'm
doing this myself. I only have a couple of hours before the Class Y stops
helping me remember things and starts making me forget things, so I'd better
get started.
</blockquote>

<blockquote>

I've noticed something of a pattern emerging.

Most people who walk into 3211's cell will perceive
<% if (anomaly.base) { -%>
the cell to be completely empty. Like, I can clearly see that there
is nothing here.
<% } else { -%>
<%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> as something totally new. Like, I see <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> as <%= anomaly.prose.informalDescription %>, and there's no one else on the
list who's perceived <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> as that.
<% } %>

<% if (anomaly.base) { %>
There is nothing in the containment cell. SCP-3211 does not exist.
<% } else { -%>
But, <%= anomaly.prose.funFact %>. It's not _just_
<%= anomaly.prose.informalDescription %>. It has anomalous properties other
than the fact that people can't see <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> for more than 6 minutes and then their memories after that are wrong.
<% } %>

It seems to me like Foundation personnel -- researchers and the like -- will
perceive <%=
  anomaly.base ?
  "the containment cell to be completely empty." :
  "it as something anomalous."
%> People who are already familiar with <%=
  anomaly.base ? "nothing" : "the anomalous"
%>, who are _expecting_
<% if (anomaly.base) { -%>
nothing, will see nothing in the containment chamber, because it is empty.
<% } else { -%>
<%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> to be anomalous, will remember <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> being something anomalous.
<% } %>

But a D-Class, for example, who is not familiar with the anomalous, will
remember <%=
  anomaly.base ?
  "the containment cell being empty, just the same." :
  "it being something mundane. Like a clay vase."
%>

<% if (anomaly.base) { %>
It looks like SCP-3211 does not exist at all. But I still don't understand why,
if SCP-3211 does not exist, I insist on trying to prove that it does. SCP-3211
does not exist.
<% } else { -%>
It looks like <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%> adapts to match the viewer's expectation. But I still don't understand why
<%= anomaly.prose.informalDescription %> is going to such lengths to
protect itself in the first place.
<% } %>

My head feels... foggy. I don't know if it's the SCP or the mnestics starting
to wear off. I actually don't know how long Class Y lasts.
</blockquote>

<blockquote>

I think I've narrowed it down to three... stages. That seems to be the right
word.

So, the first stage is what you see when you walk into the cell for the first
time; what SCP-3211 really is. It's <%=
  anomaly.base ? "nothing" : anomaly.prose.informalDescription
%>. Obviously, as soon as my mnestics wear off, I'll forget that. And so will
you. I assume you've taken mnestics.

The second stage is whatever memory SCP-3211 injects over itself when you've
seen <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> for more than 6 minutes. Last time I saw <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%>, I remembered seeing... my son, who would be six. That was the second stage
for me.

The third stage is that you can't perceive <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%> at all. Its disguise is complete and <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%>'s hidden from you.

I think I know why <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%> wants to hide. I just... need to put the words into a sentence.

It's getting hard to think. My thoughts feel like walking through
ketchup.
</blockquote>

<blockquote>

Oh God, my head is killing me.

I'm certain it's the mnestics. Class Z literally kills you when you take it,
because the effect is permanent. Class Y won't kill you... I hope? I, uh...
might have majorly fucked up by doing this.

It's really weird seeing all the things you can't usually remember.  There's
bugs everywhere, covering every surface.
<% if (anomaly.base) { -%>
The containment cell is empty. There are no bugs.
<% } else { -%>
They're crawling all over <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%>, too.
<% } %>

I need to sleep. I just want to sleep.
</blockquote>

<% if (anomaly.prose.alternateEnding) { %>
<blockquote><%= anomaly.prose.alternateEnding %></blockquote>
<% } else { %>
<blockquote>

The floor is so much more comfortable than standing.

It's getting hard to breathe. I don't know if that's my lungs closing up, or if
it's just the... if it's just me forgetting _how_. At least I haven't forgotten
what <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%> was the first time I saw <%=
  anomaly.prose.possessivePronoun ?  anomaly.prose.possessivePronoun : "it"
%>.

But I know for sure why <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "SCP-3211"
%> wants to disguise so avidly. It's right there, just in front of you. I'm
surprised no one has seen it yet.

It's just... it's just that <%=
  anomaly.prose.objectPronoun ?  anomaly.prose.objectPronoun : "it"
%>'s not really... <%=
  anomaly.base ?
  "it's not really there. It does not exist." :
  "really itself, right?"
%>
</blockquote>

<blockquote>

I don't know how to take mnestics, dammit. I only make them. I know how
they're... how they're...

I need to sleep.

<%=
  anomaly.base ?
  "I am alone in this room. The containment cell is empty." :
  "It's just sat there. Watching me."
%> Just... just make me forget already.

<%=
  anomaly.base ?
  "I know that it does not exist" :
  "I know your secrets, dammit"
%>... why don't... why can't... why did you have to show him to me?

Why did you have to take him away again?

I don't think I'm going to survive.

Why hasn't anyone come to get me?
</blockquote>
<% } %>

<% if (anomaly.prose.conclusion) { %>
<%= anomaly.prose.conclusion %>
<% } else { -%>
It is assumed that Dr. Greaves fell unconscious at this point. The remainder of
the logs are mostly silent<%=
  anomaly.prose.madeASound ?  `, excluding ${anomaly.prose.madeASound},` : ""
%> up to the point where a member of security staff noticed Dr. Greaves on
closed-circuit monitoring several minutes later and called for help.
<% } %>
