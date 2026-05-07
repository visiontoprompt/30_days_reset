

export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;
    const body = await request.json() as { email?: string; reason?: string };
    const email = body.email;

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const timestamp = new Date().toISOString();
    
    // Check if KV is bound
    if (!env.UNSUBSCRIBES) {
      return new Response(JSON.stringify({ error: 'Database binding (UNSUBSCRIBES) is missing in Cloudflare settings.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Save to KV. We use the email as the key.
    await env.UNSUBSCRIBES.put(email, JSON.stringify({ timestamp, reason: body.reason || '' }));

    return new Response(JSON.stringify({ success: true, message: 'Unsubscribed successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
