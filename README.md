# SCP Wiki Backup and Build Tools

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This is a monorepo for my works on the [SCP Wiki](https://scpwiki.com).

Some of the sub-repositories are backups, and the published work on the Wiki is
considered to be the canonical source of truth for that article.

Some of the sub-repositories are the source code and build process for their
article. They are considered the source of truth, and the published work is
considered to be generated code that can be overwritten (including any changes
made to it) at any time. The output for these articles contains a note
indicating that any changes made to the published work and not reflected in
this repository will be ignored.

## Licence

All works in this repository are licensed under
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

## For translators

This repository treats translations as a first-class citizen. Each
sub-repository has been designed with translators in mind.

Typically translating will involve finding a directory called `en/`, copying
it, renaming the copy to your branch's language code, and then editing all the
files in it. If the process is more complicated than that for a given article,
the sub-repository will contain more detailed instructions in its README.

I appreciate that my articles are generally difficult to translate, so I do
what I can to make it as easy as possible. Translators, thank you for your
invaluable contributions to the international SCP community.

## For contributors

I welcome contributions from anyone. You'll need a GitHub account to contribute
to this repository directly, but if you don't, feel free to send me a Wikidot
message with your suggestions.

If you have a suggestion for (or a problem with) the technical process of
backing up and building my articles, and if you have a GitHub account, please
[create an issue](https://github.com/rossjrw/scp/issues) in this repository and
I'll respond when I can. If you know how to implement your suggestion or fix
that problem, please do make a [pull
request](https://github.com/rossjrw/scp/pulls) instead!

If you have a fix you want to make to one of my articles (for example
correcting a spelling error), please create a pull request if you can,
otherwise create an issue, otherwise contact me on Wikidot. The same rules for
minor edits apply here as they do on the wiki &mdash; go right ahead. _(Please
note that all of my English works are written in British English except where
absolutely necessary. I'll reject any suggestions to Americanise them.)_

If you have a bigger suggestion for one of my articles (for example you have an
idea for a better ending, or you want to completely rewrite something), the
same rules apply! Make a pull request or an issue for it. Wiki rules prohibit
you from making those changes to an article directly without the author's
consent, but here, you get to make a pull request &mdash; key word "request"
&mdash; and I get to deny it if I choose. So feel free to make whatever changes
you like!

If want to discuss, review or critique my articles, or brainstorm ideas within
their fiction, I'd love to hear your thoughts! Please don't do that here,
though &mdash; instead, leave a comment on the article's discussion page on the
wiki.

## How to contribute

For sub-repositories that are backups, contributions should be made to the
corresponding page on the SCP Wiki. (The backup being a little bit out of date
is considered normal.) For sub-repositories that contain the source code and
build process, keep reading.

To contribute to this repository, you will need to have a GitHub account.

### How to make a small contribution

If you only want to make a small change (i.e. just changing one file), you can
do it right here on github.com. Simply navigate to the file you want to change
and click the pencil icon in the top right labelled _"Fork the project and edit
this file"_. Make the changes you want and follow GitHub's directions to create
a pull request.

### How to make a big contribution

If you want to make a big contribution (i.e. changing lots of files, or if you
need to copy files, or if you want to change how the build works), you'll need
to set up a copy of this repository on your computer for local development.

These instructions are written for prospective contributors who are not
familiar with command line development. Having some command line experience
will help a lot. If the thought of using Linux, the command line and Git makes
your stomach turn, there is still time to back out. _(If these instructions are
confusing, please tell me!)_

Before you can do anything to this repository, you'll need to clone it and
install its dependencies.

<details><summary><b>How to develop on Windows</b></summary>

You can develop on Windows &mdash; it's what I do! However, you will need to be
running a Linux environment.

You can install Ubuntu Linux from the Windows Store, but I recommend setting up
WSL 2 (Windows Subsystem for Linux 2), which will enable you to use your
Windows programmes and software to edit files in the Linux partition. If you're
unfamiliar with Linux, this is a lot easier than learning command line text
editing software.

Instructions for setting up WSL 2 on Microsoft Docs:
[WSL Installation](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

On your new Linux command line, by default it starts you in your Windows user
directory. I recommend navigating to your Linux home directory:

```shell
cd ~
```

You can also run Windows programmes. For example, you can open the current
directory in Windows Explorer, which might make it a bit easier to edit files
with your preferred editor:

```shell
explorer.exe .
```

Or, if you know your editor's executable name, you can open a file in it
directly:

```shell
notepad.exe en/dist.ftml
code en/dist.ftml (for VSCode)
```

</details>

<details><summary><b>How to set up your local repository</b></summary>

First, you'll need to [fork](https://guides.github.com/activities/forking/)
this repository. Click the 'Fork' button in the top right to create a copy of
this repository in your GitHub account.

Then on your computer, you'll need [Git](https://git-scm.com/) and
[Node.js](https://nodejs.org/) installed:

```shell
sudo apt install git nodejs npm
```

And then clone the fork that you created:

```shell
git clone https://github.com/YOUR_GITHUB_USERNAME/scp
cd scp/
ls
```

You now have a copy of this repository on your computer. Navigate to the
sub-repository you want to contribute to (for example, for SCP-3211):

```shell
cd articles/scp-3211/
ls
```

If there is a directory there named `src/`, it means that the sub-repository
for this article is a JavaScript package and that it has a build process.
You'll need to install its NPM dependencies, and then build it; and then the
compiled output files will appear in the `dist/` directory.

```shell
npm install
npm run build
```

</details>

<details><summary><b>How to make changes</b></summary>

Before you begin making changes, create a new
[branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
and call it something that describes the changes you'll make, then switch to
it:

```shell
git branch my-branch-name
git checkout my-branch-name
```

At any point, you can ask Git to show you which files have changed:

```shell
git status
```

Once you've made a bunch of changes, upload them to your fork on GitHub with a
commit. First, add each file that you changed: _(this will turn those files
green in `git status`)_

```shell
git add file1 file2 file3 ...
```

Then make a commit to save those changes into Git, with a
[helpful commit message](https://chris.beams.io/posts/git-commit/):

```shell
git commit -m "A description of what you changed"
```

Then upload your commit(s) to your fork on GitHub:

```shell
git push origin my-branch-name
```

</details>

### Making a pull request

The title of your pull request should be a word in square brackets indicating
which article it relates to, followed by some text in the imperative mood
explaining what the pull request is about. For example:

* [\[3211\] Convert to build process](https://github.com/rossjrw/scp/pull/1)
* \[Vienna] Add German translation
* \[ListPages] Rotate all the images counter-clockwise

If the PR affects multiple articles, list them all, unless it includes lots,
then don't list any. If the PR is about multiple things and you can't think
of a single title for it, then you should split your changes into multiple
PRs (unless we've already discussed these changes).

The description of your PR should describe exactly what you want to change,
and if appropriate, how you changed it. You may even find it helpful to add a
todo list.

You can create the PR after you've finished making your changes if you like,
but I encourage you to create it as soon as possible. I find that it's
helpful to have a place to write notes and brainstorm what I'm working on
while I do it. If your PR isn't finished, though, please mark it as a draft
by clicking "Create draft PR" in the dropdown when you create it.
