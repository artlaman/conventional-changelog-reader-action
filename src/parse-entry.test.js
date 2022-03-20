const { parseEntry } = require("./parse-entry");

const entryDescription = `
### Features

* conventionalcommits preset, preMajor config option ([#434](https://github.com/conventional-changelog/conventional-changelog/issues/434)) ([dde12fe](https://github.com/conventional-changelog/conventional-changelog/commit/dde12fe))
* creating highly configurable preset, based on conventionalcommits.org ([#421](https://github.com/conventional-changelog/conventional-changelog/issues/421)) ([f2fb240](https://github.com/conventional-changelog/conventional-changelog/commit/f2fb240))


### Bug Fixes

* Upgrade to Lerna 3, fix Node.js v11 error ([#385](https://github.com/conventional-changelog/conventional-changelog/issues/385)) ([cdef282](https://github.com/conventional-changelog/conventional-changelog/commit/cdef282))


### chore

* force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))


### BREAKING CHANGES

* forcing a breaking semver change based on https://github.com/conventional-changelog/conventional-changelog/pull/385`;

test("get readable data from text entry", () => {
  const input = `
    ### [3.0.0](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog@2.0.3...conventional-changelog@3.0.0) (2018-11-01)
    ${entryDescription}
  `;
  const output = parseEntry(input);

  expect(output.id).toEqual("3.0.0");
  expect(output.date).toEqual("2018-11-01");
  expect(output.status).toEqual("released");
  expect(output.text).toContain(`### Features`);
  expect(output.text).toContain(
    `force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))`
  );
});

test("get readable data from text entry with heading level 2", () => {
  const input = `
    ## [3.0.0](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog@2.0.3...conventional-changelog@3.0.0) (2018-11-01)
    ${entryDescription}
  `;
  const output = parseEntry(input);

  expect(output.id).toEqual("3.0.0");
  expect(output.date).toEqual("2018-11-01");
  expect(output.status).toEqual("released");
  expect(output.text).toContain(`### Features`);
  expect(output.text).toContain(
    `force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))`
  );
});

test("get readable data from text entry with prereleased version", () => {
  const input = `
    ## [3.0.0-0](https://github.com/conventional-changelog/conventional-changelog/compare/conventional-changelog@2.0.3...conventional-changelog@3.0.0) (2018-11-01)
    ${entryDescription}
  `;
  const output = parseEntry(input);

  expect(output.id).toEqual("3.0.0-0");
  expect(output.date).toEqual("2018-11-01");
  expect(output.status).toEqual("prereleased");
  expect(output.text).toContain(`### Features`);
  expect(output.text).toContain(
    `force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))`
  );
});

test("get readable data from text entry without compare url", () => {
  const input = `
    ## 3.0.0 (2018-11-01)
    ${entryDescription}
  `;
  const output = parseEntry(input);

  expect(output.id).toEqual("3.0.0");
  expect(output.date).toEqual("2018-11-01");
  expect(output.status).toEqual("released");
  expect(output.text).toContain(`### Features`);
  expect(output.text).toContain(
    `force breaking change ([f6d506d](https://github.com/conventional-changelog/conventional-changelog/commit/f6d506d))`
  );
});
