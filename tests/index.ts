import assert from 'assert';
import sinon from 'sinon';
import { describe, it, beforeEach, afterEach } from 'mocha';
import Bunny from '../src';

interface BunnyConfig {
  baseUrl?: string;
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  scope?: string;
}

describe("Bunny", function () {
  it("should expose a constructor", function () {
    assert.equal("function", typeof Bunny);
  });

  it("should require a base url", function () {
    assert.throws(() => {
      new Bunny({} as BunnyConfig);
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
    let bunny: Bunny;
    let queryStub: sinon.SinonStub;

    beforeEach(function () {
      bunny = new Bunny({ baseUrl: "url", accessToken: "token" });
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
 * @param {string} message
 * @return {(err: Error) => boolean}
 */
function error(message: string): (err: Error) => boolean {
  return function (err: Error): boolean {
    return err.message === message;
  };
}
