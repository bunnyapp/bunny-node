const crypto = require("crypto");
const scmp = require("scmp");
const Buffer = require("safe-buffer").Buffer;

class Webhooks {
  constructor(signingToken = null) {
    this.signingToken = signingToken;
  }
  validate(signature, payload, signingToken = null) {
    let key = signingToken || this.signingToken;

    let payloadSignature = crypto
      .createHmac("sha1", key)
      .update(JSON.stringify(payload))
      .digest("hex");

    const ps = Buffer.from(payloadSignature, "hex");
    const s = Buffer.from(signature, "hex");

    return scmp(ps, s);
  }
}

module.exports = Webhooks;
