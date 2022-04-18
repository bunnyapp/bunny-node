const assert = require("assert");
const Bunny = require("../src");

let options;

describe("#webhooks", function () {
  beforeEach(function () {
    options = {
      accessToken: "valid-access-token",
      baseUrl: "http://example.com",
    };
  });

  describe("with a valid signing token", function () {
    it("should pass validation when included as argument", function (done) {
      let signingToken = "abc";
      let actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      let payload = {};

      let bunny = new Bunny(options);

      assert(bunny.webhooks.validate(actualSignature, payload, signingToken));
      done();
    });

    it("should pass validation when included in constructor options", function (done) {
      let actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      let payload = {};

      options.webhookSigningToken = "abc";

      let bunny = new Bunny(options);

      assert(bunny.webhooks.validate(actualSignature, payload));
      done();
    });
  });

  describe("with an invalid signing token", function () {
    it("should fail validation", function (done) {
      let signingToken = "abcdef";
      let actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      let payload = {};

      let bunny = new Bunny(options);

      assert.strictEqual(
        false,
        bunny.webhooks.validate(actualSignature, payload, signingToken)
      );
      done();
    });
  });
});
