export default {
    async fetch(request, env, ctx) {
        if (request.method !== "POST") return new Response("Only POST methods are allowed!", { status: 405 });

        const { searchParams } = new URL(request.url);
        const webhook = searchParams.get("url");

        if (!webhook || !/^https:\/\/discord\.com\/api\/webhooks\//.test(webhook)) {
            return new Response("A valid webhook URL was not provided as a query parameter.", { status: 400 });
        }

        try {
            const response = await fetch(webhook, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: await request.text()
            });

            return new Response(await response.text(), { status: response.status });
        } catch (err) {
            return new Response("Error: " + err.message, { status: 500 });
        }
    },
};
