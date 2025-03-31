import assert from 'assert';
import Bunny from '../src';

interface BunnyOptions {
  accessToken: string;
  baseUrl: string;
  webhookSigningToken?: string;
}

let options: BunnyOptions;

describe("#webhooks", function () {
  beforeEach(function () {
    options = {
      accessToken: "valid-access-token",
      baseUrl: "http://example.com",
    };
  });

  describe("with a valid signing token", function () {
    it("should pass validation when included as argument", function (done: Mocha.Done) {
      const signingToken = "abc";
      const actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      const payload = {};

      const bunny = new Bunny(options);

      assert(bunny.webhooks.validate(actualSignature, payload, signingToken));
      done();
    });

    it("should pass validation when included in constructor options", function (done: Mocha.Done) {
      const actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      const payload = {};

      options.webhookSigningToken = "abc";

      const bunny = new Bunny(options);

      assert(bunny.webhooks.validate(actualSignature, payload));
      done();
    });
  });

  describe("with an invalid signing token", function () {
    it("should fail validation", function (done: Mocha.Done) {
      const signingToken = "abcdef";
      const actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      const payload = {};

      const bunny = new Bunny(options);

      assert.strictEqual(
        false,
        bunny.webhooks.validate(actualSignature, payload, signingToken)
      );
      done();
    });
  });
});
