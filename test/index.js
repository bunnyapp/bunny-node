const assert = require("assert");
const sinon = require("sinon");

const Bunny = require("../src");

describe("Bunny", function () {
  it("should expose a constructor", function () {
    assert.equal("function", typeof Bunny);
  });

  it("should require a base url", function () {
    assert.throws(() => {
      new Bunny({});
    }, error("Bunny base url required"));
  });

  describe("When no access token is provided", function () {
    it("should require a client id", function () {
      assert.throws(() => {
        new Bunny({ baseUrl: "url" });
      }, error("Bunny API clientId required"));
    });
    it("should require a client secret", function () {
      assert.throws(() => {
        new Bunny({ baseUrl: "url", clientId: "id" });
      }, error("Bunny API clientSecret required"));
    });
    it("should require a scope", function () {
      assert.throws(() => {
        new Bunny({ baseUrl: "url", clientId: "id", clientSecret: "secret" });
      }, error("Bunny API scope required"));
    });
  });

  describe("Convenience methods", function () {
    let bunny = new Bunny({ baseUrl: "url", accessToken: "token" });
    let query;

    beforeEach(function () {
      query = sinon.spy(bunny, "query");
    });

    afterEach(function () {
      query.restore();
    });

    it("should expose a subscriptionCreate method", function () {
      bunny.subscriptionCreate("A", "F", "L", "E", "P", "D");
      assert(query.calledOnce);
    });

    it("should expose a featureUsageCreate method", function () {
      bunny.featureUsageCreate("Q", "D", "E", "F");
      assert(query.calledOnce);
    });

    it("should expose a subscriptionCancel method", function () {
      bunny.subscriptionCancel(1);
      assert(query.calledOnce);
    });

    it("should expose a portalSessionCreate method", function () {
      bunny.portalSessionCreate(1);
      assert(query.calledOnce);
    });

    it("should expose a tenantCreate method", function () {
      bunny.tenantCreate(1);
      assert(query.calledOnce);
    });

    it("should expose a tenantUpdate method", function () {
      bunny.tenantUpdate(1);
      assert(query.calledOnce);
    });

    it("should expose a tenantByCode method", function () {
      bunny.tenantByCode("code");
      assert(query.calledOnce);
    });
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
