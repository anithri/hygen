import type { ActionResult } from "../types";
import createResult from "./result";

const normalizePackageList = arr =>
  (Array.isArray(arr) ? arr : arr.trim().split(/[\s,]+/)).join(" ");

const notEmpty = x => x && x.length > 0;
const shell = async (
  { attributes: { npm_packages, yarn_packages, ruby_packages }, body },
  args,
  { logger, exec }
): ActionResult => {
  if (npm_packages) {
    const npm = `npm i  + ${normalizePackageList(npm_packages)}`
  }
  const yarn = "yarn add " + normalizePackageList(yarn_packages);
  const ruby = "bundle add " + normalizePackageList(ruby_packages);

  const result = createResult("packages");

  const result = createResult("shell", packages);

  if (notEmpty(packages)) {
    if (!args.dry) {
      await exec(``, body);
    }
    logger.ok(`       shell: ${sh}`);

    return result("executed");
  }
  return result("ignored");
};

module.exports = shell;
