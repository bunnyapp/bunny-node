const assert = require("assert");
const Bunny = require("../src");

describe("Bunny", function () {
  it("should expose a constructor", function () {
    assert.equal("function", typeof Bunny);
  });

  it("should require an access token", function () {
    assert.throws(() => {
      new Bunny({ baseUrl: "url" });
    }, error("Bunny access token required"));
  });

  it("should require a base url", function () {
    assert.throws(() => {
      new Bunny({ accessToken: "abc" });
    }, error("Bunny base url required"));
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
