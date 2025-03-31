import crypto from 'crypto';
import { Buffer } from 'buffer';

class Webhooks {
  private signingToken: string | null;

  constructor(signingToken: string | null = null) {
    this.signingToken = signingToken;
  }

  validate(signature: string, payload: unknown, signingToken: string | null = null): boolean {
    const key = signingToken || this.signingToken;

    if (!key) {
      throw new Error('Signing token is required');
    }

    const payloadSignature = crypto
      .createHmac('sha1', key)
      .update(JSON.stringify(payload))
      .digest('hex');

    const ps = Buffer.from(payloadSignature, 'hex');
    const s = Buffer.from(signature, 'hex');

    // Ensure buffers are the same length before comparison
    if (ps.length !== s.length) {
      return false;
    }

    return crypto.timingSafeEqual(ps, s);
  }
}

export default Webhooks;