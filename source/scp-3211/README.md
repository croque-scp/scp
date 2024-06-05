# SCP-3211

This is the sub-repository for
[SCP-3211](https://scp-wiki.wikidot.com/scp-3211), which is an article that
describes a fictional anomalous entity that appears to be different for every
person who sees it.

Instead of passively describing this experience, the article is designed to
simulate this effect for the reader.

<details><summary><b>Synopsis</b></summary>

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

</details>

## Translating

The following guide is for translators who have chosen to translate SCP-3211
for their language branch.

Once you've finished a translation, I'd love it if you
[made a pull request](https://github.com/rossjrw/scp#making-a-pull-request)
to add your translation to this repository, but you don't have to. You can just
generate the output, copy it to your branch, and forget about it if you like.
However, if you make a pull request, it's easy to ping me if you need help
&mdash; just add a new comment to your PR and ping me with `cc @rossjrw`.

### Configuring your language

First, add your language to `src/config.ts`, in the `langs` object. Each
configured language needs 2 properties: `encrypt` and `fileUrl`.

The `encrypt` property is a list of lists. Each sub-list contains 3 values: a
char, another char, and a number. For characters that appear between those two
chars in the Unicode character table (inclusive), during encryption, they will
be shifted up by the configured number of places in the table, resulting in the
anomaly list in `dist.ftml` appearing garbled and nonsensical. They will be
decrypted at runtime in the reader's browser.

For the English version, the character sets `A-Z` and `a-z` are rotated by 13
character points. This is equivalent to
[ROT13](https://en.wikipedia.org/wiki/ROT13), which is a handy lightweight
cipher for Latin languages.

If your language doesn't want any encryption, set this property to an empty
list (`[]`).

The `fileUrl` property is the URL that all of the necessary files can be found
at, including images and the JavaScript bundle.

### Copying the files

The English source files are kept in `src/en/`. In your fork of this
repository, copy that directory to one with the language code of your branch
(e.g. for the Russian branch, `src/ru/`):

```shell
cp -r src/en/ src/ru/
```

### Which files to translate

Every file in your new language directory should be translated. You don't need
to translate any files outside of it.

Please note that any file that has `.ejs.` in its name contains
[EJS](https://ejs.co/) placeholders. EJS placeholders look like this: `<%=
variable.name %>`. They'll be automatically replaced with information from each
sub-anomaly later, so don't change them! _(However, if they contain an English
string &mdash; for example `", excluding ${prose.madeASound},"` &mdash; do
translate in this case the word "excluding".)_

`document.ejs.md` is the main body of the article, written in
[Markdown](https://www.markdownguide.org/), because I think it's easier to work
with for long text documents than HTML.

`buttons.html`, `loading.html`, and `warning.ejs.html` are the different static
sections of the document: the 'secret' popup that lets you modify the cookies,
the loading screen that appears after you click 'Proceed', and the initial
screen with the infohazard warning, respectively.

`page.ejs.ftml` is the template for the final output, and is written in native
Wikidot syntax. Everything here will go directly to the page, so translate it
however you would normally.

Translate your choice of the sub-anomalies in the `anomalies/` directory. You
can translate as few or as many as you like, but for the build to work you will
need to translate `base.ts` and at least one other. The original four from
before I added the rest were `cube.ts`, `her.ts`, `puce.ts` and `pigeon.ts`,
but you can translate whichever ones you like. If you choose not to translate a
given anomaly, just delete its file.

If you see any English in the final output that you couldn't change, that's a
problem &mdash; please let me know!

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

`npm run dev` is the same as `npm run build`, except:

* The output JS bundle is not minified.
* The bundle contains a source map, so errors say "line 200, character 40 of
  iframe.ts" instead of "line 1, character 100000 of 3211.js"
* An `iframe.html` is output to the dist dir, which can be opened in a browser.
* The `fileUrl` is automatically set to `./`, so files and JS will be fetched
  from the same directory as `iframe.html` instead of from Wikidot.
