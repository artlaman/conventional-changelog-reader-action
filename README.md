# :scroll: Conventional Changelog Reader

<a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>

A GitHub action to read and get data from the `CHANGELOG.md` files following the [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) standard and created by [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) with `conventionalcommits` flag: `conventional-changelog -p conventionalcommits`

# Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow---create-a-release-from-changelog) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `path`: The path the action can find the CHANGELOG. Optional. Defaults to `./CHANGELOG.md`.
- `version`: The [exact version](https://semver.org) of the log entry you want to retreive or "Unreleased" for the unreleased entry. Optional. Defaults to the last version number.

### Outputs

- `version`: Version of the log entry found. Ex: `2.0.0`.
- `date`: Release date of the log entry found. Ex: `2020-08-22`.
- `status`: Status of the log entry found (`prereleased`, `released`, `unreleased`, or `yanked`).
- `changes`: Description text of the log entry found.

### Example workflow - create a release from changelog

On every `push` to a tag matching the pattern `v*`, [create a release](https://developer.github.com/v3/repos/releases/#create-a-release) using the CHANGELOG.md content.
This Workflow example assumes you'll use the [`@actions/create-release`](https://www.github.com/actions/create-release) Action to create the release step:

```yaml
on:
  push:
    # Sequence of patterns matched against refs/tags
    tags:
      - "v*" # Push events to matching v*, i.e. v1.0, v20.15.10

name: Create Release

jobs:
  build:
    name: Create Release
    runs-on: ubuntu-latest
    steps:
      - name: Get version from tag
        id: tag_name
        run: |
          echo ::set-output name=current_version::${GITHUB_REF#refs/tags/v}
        shell: bash
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Get Changelog Entry
        id: changelog_reader
        uses: artlaman/conventional-changelog-reader-action@v1
        with:
          version: ${{ steps.tag_name.outputs.current_version }}
          path: ./CHANGELOG.md
      - name: Create/update release
        uses: ncipollo/release-action@v1
        with:
          # This pulls from the "Get Changelog Entry" step above, referencing it's ID to get its outputs object.
          # See this blog post for more info: https://jasonet.co/posts/new-features-of-github-actions/#passing-data-to-future-steps
          tag: ${{ steps.changelog_reader.outputs.version }}
          name: Release ${{ steps.changelog_reader.outputs.version }}
          body: ${{ steps.changelog_reader.outputs.changes }}
          prerelease: ${{ steps.changelog_reader.outputs.status == 'prereleased' }}
          allowUpdates: true
          token: ${{ secrets.GITHUB_TOKEN }}
```

## Contribution

Contributions to the source code of _Conventional Changelog Reader Action_ are welcomed and greatly appreciated.
For help on how to contribute in this project, please refer to [How to contribute to Conventional Changelog Reader Action](CONTRIBUTING.md).

To see the project's list of **awesome contributors**, please refer to our [Contributors Wall](CONTRIBUTORS.md).

## Support

_Conventional Changelog Reader Action_ is licensed under an MIT license, which means that it's a completely free open source software. Unfortunately, _Conventional Changelog Reader Action_ doesn't make itself. Version 2.0.0 is the next step, which will result in many late, beer-filled nights of development.

If you're using _Conventional Changelog Reader Action_ and want to support the development, you now have the chance! Go on my [GitHub Sponsor page](https://github.com/sponsors/mindsers) and become my joyful sponsor!!

For more help on how to support Changelog Reader Action, please refer to [The awesome people who support Changelog Reader Action](SPONSORS.md).

<!-- ### Premium sponsors -->

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
