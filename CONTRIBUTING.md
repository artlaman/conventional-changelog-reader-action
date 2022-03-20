# How to contribute to Conventional Changelog Reader Action

_First off, thanks for taking the time to contribute!_

This file is a set of guilines for contributing to _Conventional Changelog Reader Action_ project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table of contents

[How can I contribute?](#how-can-i-contribute)

- [Did you find a bug?](#did-you-find-a-bug)
- [Did you write a patch that fixes a bug?](#did-you-write-a-patch-that-fixes-a-bug)
- [Did you fix whitespace, format code, or make a purely cosmetic patch?](#did-you-fix-whitespace-format-code-or-make-a-purely-cosmetic-patch)
- [Do you intend to add a new feature or change an existing one?](#do-you-intend-to-add-a-new-feature-or-change-an-existing-one)
- [Do you have questions about the source code?](#do-you-have-questions-about-the-source-code)
- [Do you want to contribute to the Conventional Changelog Reader Action documentation?](#do-you-want-to-contribute-to-the-Configfile-documentation)

[Styleguides](#styleguides)

- [JavaScript styleguide](#javaScript-styleguide)
- [Git commit messages](#git-commit-messages)

## How can I contribute?

### Did you find a bug?

- **Ensure the bug was not already reported** by searching on GitHub under [Issues][issues].

- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/artlaman/conventional-changelog-reader-action/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

- If possible, use the relevant bug report templates to create the issue.

### Did you write a patch that fixes a bug?

- Write new unit test(s) that match the bug case to limit future regression.

- Open a new GitHub pull request with the patch.

- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

- Before submitting, please ensure your code follow the code convention.

### Did you fix whitespace, format code, or make a purely cosmetic patch?

- Your changes must follow the coding convention.

- Please ensure that your changes does not include regression.

### Do you intend to add a new feature or change an existing one?

- Please ask first ([open an issue][issues] before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

- Please adhere to the coding conventions used in this project (indentation, accurate comments, etc.) and any other requirements (such as test coverage, documentation).

### Do you have questions about the source code?

- Ask any question about how to use Configfile on [Stack Overflow](https://stackoverflow.com).

### Do you want to contribute to the Configfile documentation?

Documentation file are stored in the project source code.

- Please refer to "Do you intend to add a new feature or change an existing one?" section.

## Styleguides

### JavaScript styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com).

All the rules are listed in `.eslintrc.json` on the root directory.

### Git commit messages

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification

- Use the present tense ("Add feature" not "Added feature").

- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").

- Limit the first line to 72 characters or less.

- Reference issues and pull requests liberally after the first line.

[issues]: https://github.com/artlaman/conventional-changelog-reader-action/issues
