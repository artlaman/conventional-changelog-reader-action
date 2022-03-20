const { semver } = require("./regexps");

exports.getVersionById = (versions, id) => {
  if (id != null) {
    return versions.find((version) => {
      const [semverVersionId] = version.id.match(semver);
      const [semverId] = id.match(semver);

      return semverVersionId === semverId;
    });
  }

  return versions[0];
};
