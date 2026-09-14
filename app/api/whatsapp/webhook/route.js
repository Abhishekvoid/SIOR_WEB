import { createHash, timingSafeEqual } from 'node:crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function text(body, status) {
  return new Response(body, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export async function GET(request) {
  const expected = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
  if (!expected) return text('Webhook verification is not configured.', 503);

  const query = new URL(request.url).searchParams;
  const fields = ['hub.mode', 'hub.verify_token', 'hub.challenge'];
  if (fields.some((field) => query.getAll(field).length !== 1)
      || query.get('hub.mode') !== 'subscribe' || !query.get('hub.challenge')) {
    return text('Verification rejected.', 403);
  }
  // Fixed-length digests allow constant-time comparison without exposing tokens.
  const hash = (value) => createHash('sha256').update(value).digest();
  if (!timingSafeEqual(hash(query.get('hub.verify_token')), hash(expected))) {
    return text('Verification rejected.', 403);
  }
  return text(query.get('hub.challenge'), 200);
}

export async function POST() {
  // The desktop backend owns delivery state. Never acknowledge and discard an
  // event here: add authenticated forwarding/durable storage before subscribing.
  return text('Webhook delivery processing is not configured.', 503);
}
