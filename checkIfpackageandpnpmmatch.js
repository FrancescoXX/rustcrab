const fs = require("fs");
const yaml = require("js-yaml");

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const pnpmLockYaml = yaml.load(fs.readFileSync("pnpm-lock.yaml", "utf8"));

const packageDependencies = packageJson.dependencies;
const lockDependencies = pnpmLockYaml.packages;

const discrepancies = [];

for (const [dep, version] of Object.entries(packageDependencies)) {
  if (
    !lockDependencies[`/${dep}`] ||
    lockDependencies[`/${dep}`].version !== version
  ) {
    discrepancies.push({
      dependency: dep,
      packageJsonVersion: version,
      lockFileVersion: lockDependencies[`/${dep}`]?.version || "not found",
    });
  }
}

if (discrepancies.length === 0) {
  console.log("package.json and pnpm-lock.yaml are in sync.");
} else {
  console.log("Discrepancies found between package.json and pnpm-lock.yaml:");
  console.table(discrepancies);
}
