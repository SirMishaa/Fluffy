/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

module.exports = {
  plugins: ["cypress"],
  env: {
    mocha: true,
    "cypress/globals": true
  },
  rules: {
    strict: "off"
  }
};
