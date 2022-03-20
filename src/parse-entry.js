const { prerelease } = require("semver");
const { semver, date } = require("./regexps");

exports.parseEntry = (entry) => {
  const [title, ...other] = entry.trim().split("\n");

  const [versionNumber] = title.match(semver);
  const [versionDate] = title.match(date) || [];

  return {
    id: versionNumber,
    date: versionDate,
    status: computeStatus(versionNumber),
    text: other.join("\n").trim(),
  };
};

function computeStatus(version) {
  if (prerelease(version)) {
    return "prereleased";
  }

  return "released";
}
