export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);

    // Handle unsubscribe API route
    if (url.pathname === '/api/unsubscribe' && request.method === 'POST') {
      try {
        const body = await request.json() as { email?: string; reason?: string };
        const email = body.email;

        if (!email || typeof email !== 'string' || !email.includes('@')) {
          return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (!env.UNSUBSCRIBES) {
          return new Response(JSON.stringify({ error: 'KV binding UNSUBSCRIBES is not configured.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const timestamp = new Date().toISOString();
        await env.UNSUBSCRIBES.put(email, JSON.stringify({ timestamp, reason: body.reason || '' }));

        return new Response(JSON.stringify({ success: true, message: 'Unsubscribed successfully.' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: `Server error: ${err?.message || 'Unknown'}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // All other requests → serve static assets (the React app)
    return env.ASSETS.fetch(request);
  },
};
