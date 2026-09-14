import assert from 'node:assert/strict';
import { test } from 'node:test';
import { GET, POST } from '../app/api/whatsapp/webhook/route.js';

function request(params) {
  return new Request(`https://sior-web.vercel.app/api/whatsapp/webhook?${new URLSearchParams(params)}`);
}

test('Meta verification returns the exact challenge only with the configured token', async () => {
  const previous = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
  try {
    process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN = 'test-only-private-token';
    const valid = { 'hub.mode': 'subscribe', 'hub.verify_token': 'test-only-private-token', 'hub.challenge': '00123456' };
    const response = await GET(request(valid));
    assert.equal(response.status, 200);
    assert.equal(await response.text(), '00123456');
    assert.match(response.headers.get('content-type'), /text\/plain/);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    for (const change of [
      { 'hub.verify_token': 'wrong' }, { 'hub.verify_token': '' },
      { 'hub.mode': 'invalid' }, { 'hub.challenge': '' },
    ]) {
      const rejected = await GET(request({ ...valid, ...change }));
      assert.equal(rejected.status, 403);
      assert.ok(!(await rejected.text()).includes('test-only-private-token'));
    }
    for (const key of Object.keys(valid)) {
      const duplicate = request(valid);
      assert.equal((await GET(new Request(`${duplicate.url}&${key}=extra`))).status, 403);
    }
    delete process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
    assert.equal((await GET(request(valid))).status, 503);
  } finally {
    if (previous === undefined) delete process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN;
    else process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN = previous;
  }
});

test('delivery events are not acknowledged before durable processing is configured', async () => {
  const response = await POST();
  assert.equal(response.status, 503);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});
