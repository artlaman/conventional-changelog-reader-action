const { getEntries } = require("./get-entries");

const DATA = `
# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [3.1.25](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog-v3.1.24...conventional-changelog-v3.1.25) (2021-12-24)


### Bug Fixes

* **docs:** update list of available presets ([#871](https://github.com/conventional-changelog/conventional-changelog/issues/871)) ([2799851](https://github.com/conventional-changelog/conventional-changelog/commit/2799851f1915a42cb8498cf8959875badd07fd32))

### [3.1.0](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog@3.0.6...conventional-changelog@3.1.0) (2019-04-10)


### Features

* conventionalcommits preset, preMajor config option ([#434](https://github.com/conventional-changelog/conventional-changelog/issues/434)) ([dde12fe](https://github.com/conventional-changelog/conventional-changelog/commit/dde12fe))
* creating highly configurable preset, based on conventionalcommits.org ([#421](https://github.com/conventional-changelog/conventional-changelog/issues/421)) ([f2fb240](https://github.com/conventional-changelog/conventional-changelog/commit/f2fb240))

## [3.0.0](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog@2.0.3...conventional-changelog@3.0.0) (2018-11-01)


### Bug Fixes

* Upgrade to Lerna 3, fix Node.js v11 error ([#385](https://github.com/conventional-changelog/conventional-changelog/issues/385)) ([cdef282](https://github.com/conventional-changelog/conventional-changelog/commit/cdef282))


### chore

* force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))


### BREAKING CHANGES

* forcing a breaking semver change based on https://github.com/conventional-changelog/conventional-changelog/pull/385`;

test("retreive entries", () => {
  const output = getEntries(DATA);

  expect(output.length).toEqual(3);
});
