const assert = require("assert");
const Recur = require("../src");

describe("Recur", function () {
  it("should expose a constructor", function () {
    assert.equal("function", typeof Recur);
  });

  it("should require an access token", function () {
    assert.throws(() => {
      new Recur({ baseUrl: "url" });
    }, error("Recur access token required"));
  });

  it("should require a base url", function () {
    assert.throws(() => {
      new Recur({ accessToken: "abc" });
    }, error("Recur base url required"));
  });
});

/**
 * Assert an error with `message` is thrown.
 *
 * @param {String} message
 * @return {Function}
 */
function error(message) {
  return function (err) {
    return err.message == message;
  };
}
