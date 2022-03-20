const core = require("@actions/core");
const { semver, date } = require("./regexps");

const headerRegex = new RegExp(
  `###?( | \\[)(${semver.source})( |\\]\\(.+\\) )\\(${date.source}\\)`,
  "g"
);

exports.getEntries = (rawData) => {
  const content = String(rawData);

  core.debug(`CHANGELOG content: ${content}`);

  const headerIndexes = [...content.matchAll(headerRegex)].map(
    (match) => match.index
  );
  const versions = headerIndexes.map((e, i) =>
    content.slice(e, headerIndexes[i + 1])
  );

  return versions;
};
