# SCP-3211

This is the sub-repository for [SCP-3211](https://www.scpwiki.com/scp-3211),
which is an article that describes a fictional anomalous entity that appears to
be different for every person who sees it.

Instead of passively describing this experience, the article is designed to
simulate this effect for the reader.

A splash screen primes the reader into expecting some meta fuckery, and also
acts as a buffer for the timer with which they're about to be presented. When
they click to confirm that they are ready, they are presented with a
description of a randomly-picked sub-anomaly from a selection, and a six-minute
timer starts visibly and ominously ticking. The time was chosen to be
approximately the amount of time it takes to read the article.

The article describes the entity plainly, but explains that for each observer
(including the reader), exactly six minutes after they first perceive it, they
will:

* forget what it is,
* be unable to take in any new information about it, and
* be unable to see it, or acknowledge that it exists at all.

If the reader is quick enough, they will be able to read the personal log of
one of the researchers investigating the anomaly. The researcher has taken a
drug that allows him to experience the first six minutes for a second time, and
he sees it as something different to what he remembers from the first time
&mdash; but he sees the same thing that the reader does.

Owing to the nature of fiction, readers have grown to expect that they are
immune to things that would affect fictional characters. Given this assumption,
the article is intended to make them wonder what could possibly happen once the
timer is up, when they will supposedly be unable to remember what they have
just read &mdash; what I, as the author, could not possibly be able to make
them forget.

When the timer expires, the article changes. It no longer describes whatever
they were just reading about: it now describes nothing. This new iteration is
keen to emphasise that the entity is nothing and that if it ever existed at
all, it it impossible to confirm. The article even presents a set of data
recorded from the anomaly, which previously described whatever they were
reading about; now, the data from all those tests are null because there is
nothing to measure.

The previous iteration is presented as a false memory, created by the anomaly
and injected into the reader's mind to cover up what it actually was. The
narrative is that the reader read about SCP-3211 and learned what it actually
is, but after six minutes, SCP-3211 destroyed that information as an act of
self-defence and replaced it with a lie. That there are multiple original
version of the document, randomly picked for each reader, is intended to
further this illusion by effecting confusion and disagreements between readers
discussing what they've read &mdash; exactly as the article described.

To the best of my knowledge, this is the only article across the international
SCP community that combines memory falsification, lying, and gaslighting in
such a literal way. With a little suspension of disbelief, I hope that it is
quite effective.

## Translating

### Configuring your language

First, add your language to `src/config.ts`, in the `langs` object.

The `rot13` property is either `true` or `false` and sets whether or not your
language wants [ROT13 encryption](https://en.wikipedia.org/wiki/ROT13). ROT13
only affects letters in the `A-Z` and `a-z` ranges, so it only works for
Latin-based languages; for other languages, it won't do anything. The option is
provided so that translations can turn it off if they want. SCP-3211-EN is
encrypted thanks to inspiration from
[SCP-3125-EN](https://www.scpwiki.com/scp-3125), which features a similar
simple cipher. This setting only affects the final output &mdash; it doesn't
change the translation process.

The `fileUrl` property is the URL that all of the necessary files can be found
at, including images and `3211.js`.

### Copying the files

The English source files are kept in `src/en/`. In your fork of this
repository, copy that directory to one with the language code of your branch
(e.g. for the Russian branch, `src/ru/`). You'll translate each of the files in
this new directory.

### Which files to translate

Translate `document.ejs.md` to your language, leaving the
[EJS](https://ejs.co/) placeholders intact (they look like this: `<%=
anomaly.something %>`). The placeholders will be replaced with information
taken from each sub-anomaly.

Translate your choice of the sub-anomalies in the `anomalies/` directory. You
can translate as few or as many as you like, but for the build to work you will
need to translate `base.ts` and at least one other. The original four from
before I added the rest were `cube.ts`, `her.ts`, `puce.ts` and `pigeon.ts`,
but you can translate whichever ones you like.

### Adding language-specifc placeholders

If you need other language-specific placeholders, feel free to add them. For
example, the English version uses placeholders like `possessivePronoun` (for
"her") and `objectPronoun` (for "she"), which might not be needed in your
language. Feel free to remove those if appropriate, or add your own.

If you add a placeholder, you must register it in the `AnomalyProse` type in
`src/anomaly.ts`. Add it with a question mark, so that other languages do not
have to use it.

Make sure you add a value for your new placeholder in each sub-anomaly!

## Local development

For local testing:

1. Change your language's `fileUrl` to `"./"`.
1. Run `npm run dev` instead of `npm run build`.
1. Open `./dist/[lang]/iframe.html` in a browser.
