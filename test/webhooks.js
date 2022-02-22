const assert = require("assert");
const Recur = require("../src");

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

      let recur = new Recur(options);

      assert(recur.webhooks.validate(actualSignature, payload, signingToken));
      done();
    });

    it("should pass validation when included in constructor options", function (done) {
      let actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      let payload = {};

      options.webhookSigningToken = "abc";

      let recur = new Recur(options);

      assert(recur.webhooks.validate(actualSignature, payload));
      done();
    });
  });

  describe("with an invalid signing token", function () {
    it("should fail validation", function (done) {
      let signingToken = "abcdef";
      let actualSignature = "db5c76f4264d0ad96cf21baec394964b4b8ce580";
      let payload = {};

      let recur = new Recur(options);

      assert.strictEqual(
        false,
        recur.webhooks.validate(actualSignature, payload, signingToken)
      );
      done();
    });
  });
});
