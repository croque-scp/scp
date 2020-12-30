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

## Development

These instructions are written for prospective contributors who are not
familiar with command line development. Having some command line experience
will help a lot. If the thought of using Linux, the command line and Git makes
your stomach turn, there is still time to back out.

Before you can do anything to this repository, you'll need to clone it and
install its dependencies.

<details><summary>Development on Windows</summary>
You can develop on Windows — it's what I do! However, you will need to be
running a Linux environment.

You can install Ubuntu Linux from the Windows Store, but I recommend setting up
WSL 2 (Windows Subsystem for Linux 2), which will enable you to use your
Windows programmes and software to edit files in the Linux partition. If you're
unfamiliar with Linux, this is a lot easier than learning command line text
editing software.

Instructions for setting up WSL 2 on Microsoft Docs:
[WSL Installation](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
</details>

<details><summary>Setting up the repository</summary>
First, you'll need to [fork](https://guides.github.com/activities/forking/)
this repository. Click the 'Fork' button in the top right to create a copy if
this repository in your GitHub account.

Then on your computer, you'll need [Git](https://git-scm.com/) and
[Node.js](https://nodejs.org/) installed:

```shell
sudo apt install git nodejs npm
```

If you're using WSL 2, by default it starts you in your Windows user directory.
I recommend navigating to your Linux home directory:

```shell
cd ~
```

And then clone the fork that you created:

```shell
git clone https://github.com/YOUR_GITHUB_USERNAME/scp
```

You now have a copy of this repository on your computer. Navigate to the
sub-repository you want to contribute to (for example, for SCP-3211):

```shell
cd scp/articles/scp-3211
ls
```

If there is a file named `package.json`, it means that the sub-repository for
this article is a JavaScript package and that it has a build process. You'll
need to install its NPM dependencies, and then build it; and then the compiled
output files will appear in the `dist/` directory.

```shell
npm install
npm run build
```
</summary>

### Contributing

For sub-repositories that are backups, contributions should be made to the
corresponding page on the SCP Wiki. The backup being a little bit out of date
is considered normal.

For sub-repositories that contain the source code, contributions should be made
in a Pull Request to this repository. I will add instructions for doing this
later.

Currently, there are no articles in this repository that are not considered
backups, and I haven't yet worked out how building is going to work.

Before you begin making changes, create a new
[branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
and call it something that describes the changes you'll make, then switch to
it:

```shell
git branch fix-all-the-spelling-mistakes
git checkout fix-all-the-spelling-mistakes
```

All of my works are written in British English except where absolutely
necessary.

### Translating

Each sub-repository will contain instructions for translators. Typically
translating will involve finding a directory called `en/`, copying it,
renaming the copy to your branch's language code, and then editing all the
files in it.
