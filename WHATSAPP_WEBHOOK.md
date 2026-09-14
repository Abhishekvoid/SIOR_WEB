# WhatsApp callback verification

The Next.js server route is:

```text
https://sior-web.vercel.app/api/whatsapp/webhook
```

1. In Vercel Project Settings > Environment Variables, add
   `WHATSAPP_WEBHOOK_VERIFY_TOKEN` for **Production**. Use a random private value.
   Do not prefix it with `NEXT_PUBLIC_` or put it in browser components.
2. Deploy this route and the environment change to production.
3. In Meta, enter the callback URL above and the exact same token, then select
   Verify and save. The homepage URL is not the callback URL.

Valid verification GET requests return HTTP 200 and the exact challenge as plain
text. Missing server configuration returns 503; invalid tokens, modes or query
parameters return 403. Responses are not cached. Tokens are not logged or echoed.

## Delivery processing is still pending

This route currently implements verification only. POST requests intentionally
return 503 instead of acknowledging events that have not been durably processed.
Do not treat successful Meta verification as a working delivery-status pipeline.

Before subscribing to delivery events, connect this route to authenticated
durable processing. SIOR's existing Python backend at `/webhooks/whatsapp`
checks Meta's raw-body HMAC signature and updates the laptop's SQLite message
transactions. It needs a reachable HTTPS endpoint, or an authenticated durable
queue and desktop consumer. Vercel cannot access `localhost` on your laptop.
The app secret belongs only on the server validating event signatures.

Outbound sending from the desktop remains independent of this verification
route. Delivery/read confirmations require the event-processing connection.

## Local checks

Requires Node 22 (matching the development environment):

```powershell
node --experimental-default-type=module --test tests/whatsapp-webhook.test.mjs
npm run build
```

Tests use a temporary test token and restore the process environment. They check
the challenge, wrong/missing tokens, duplicate parameters, absent configuration,
cache headers, and refusal to silently discard delivery events.
