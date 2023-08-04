# Remix + Fastly Recipe

[https://www.fastly.com/blog/host-your-remix-app-on-fastly-compute-edge](https://www.fastly.com/blog/host-your-remix-app-on-fastly-compute-edge)

## Install the [Fastly CLI](https://developer.fastly.com/learning/tools/cli/)
1. On Linux, run `dpkg --print-architecture` to find your architecture. We got `amd64`.
2. Visit the [Fastly releases page](https://github.com/fastly/cli/releases) to download the correct `*.deb` file. 
3. Right-click "Copy link address" from the browser and run `wget https://github.com/fastly/cli/releases/download/v10.2.4/fastly_10.2.4_linux_amd64.deb`
4. `apt install ./fastly_10.2.4_linux_amd64.deb`
5. `fastly version` to confirm installation

## Install Remix
1. `npx create-remix@latest ./my-app --template https://github.com/fastly/remix-compute-js/tree/main/packages/remix-template`
2. Run dev server: `npm run dev`
3. Build and run production server: `npm run build && npm run start`

## Deploy to Fastly
1. Generate a Fastly API token: [Fastly CLI usage](https://developer.fastly.com/learning/tools/cli/#configuring)
  1. Navigate to [Account > API tokens](https://manage.fastly.com/account/personal/tokens)
  2. Create a `user` token with `Global API access`.
2. Create a Fastly CLI profile: `fastly profile create`
3. Build and deploy to Fastly: `npm run build && npm run deploy`. You can accept all of the CLI's defaults.
