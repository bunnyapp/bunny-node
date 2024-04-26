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
    let queryStub;

    beforeEach(function () {
      queryStub = sinon.stub(Bunny.prototype, "query");
      queryStub.returns({});
    });

    afterEach(function () {
      queryStub.restore();
    });

    it("should expose a subscriptionCreate method", function () {
      bunny.subscriptionCreate("A", "F", "L", "E", "P", "D");
      assert(queryStub.calledOnce);
    });

    it("should expose a featureUsageCreate method", function () {
      bunny.featureUsageCreate("Q", "D", "E", "F");
      assert(queryStub.calledOnce);
    });

    it("should expose a subscriptionCancel method", function () {
      bunny.subscriptionCancel(1);
      assert(queryStub.calledOnce);
    });

    it("should expose a portalSessionCreate method", function () {
      bunny.portalSessionCreate(1);
      assert(queryStub.calledOnce);
    });

    it("should expose a tenantCreate method", function () {
      bunny.tenantCreate(1);
      assert(queryStub.calledOnce);
    });

    it("should expose a tenantUpdate method", function () {
      bunny.tenantUpdate(1);
      assert(queryStub.calledOnce);
    });

    it("should expose a tenantByCode method", function () {
      bunny.tenantByCode("code");
      assert(queryStub.calledOnce);
    });

    it("should expose an accountUpdateByTenantCode method", function () {
      bunny.accountUpdateByTenantCode("code", {});
      assert(queryStub.calledOnce);
    });

    it("should expose a tenantMetricsUpate method", function () {
      bunny.tenantMetricsUpdate("code", "2023-12-01", 1, {});
      assert(queryStub.calledOnce);
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
