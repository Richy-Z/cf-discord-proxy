# Discord Webhook proxy using Cloudflare Workers

This is a very simple proxy for Discord webhooks made using Cloudflare workers.

## Using the proxy

**There are two methods for doing so.**

### 1. Using the pre-existing proxy

The latest version of this proxy (the same one in this repository) is usually published to <https://cf-discord-proxy.numelon-web-services.workers.dev/>.

```url
https://cf-discord-proxy.numelon-web-services.workers.dev/?url=YOUR_DISCORD_WEBHOOK_URL
```

Your Discord webhook URL is provided via the `url` query parameter. Anything that isnt a `POST` request with that valid parameter is rejected.

### 2. Deploying your own proxy

Deploying your own version of this proxy is very easy too.

1. Ensure that you have Cloudflare's [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) CLI tool installed.

    Installing it is very simple, you can install it with npm:

    ```bash
    npm install -g wrangler
    ```

2. Make sure you are logged in with your Cloudflare account to wrangler:

    ```bash
    wrangler login
    ```

    This will open a new browser window and prompt you to log in.

3. Deploy the proxy from this repository using wrangler:

    ```bash
    wrangler deploy
    ```

    And thats it, you're done. The deployed URL should be displayed to you in the terminal. Use it in the same way as you would use the [pre-existing proxy](#1-using-the-pre-existing-proxy).
