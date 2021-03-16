# Storybook Addon Matomo

Storybook Addon Matomo can be used to support [Matomo Analytics](https://matomo.org/) in [Storybook](https://storybook.js.org).

## Getting Started

Install:

```sh
yarn add storybook-addon-matomo
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-addon-matomo']
}
```

Then, set an environment variable in `.storybook/manager.js`:

```js
window.STORYBOOK_MATOMO_OPTIONS = {
  urlBase: 'https://LINK.TO.DOMAIN', // 👈 required
  siteId: 3, // 👈 required
  userId: 'UID76903202', // optional, default value: `undefined`.
  trackerUrl: 'https://LINK.TO.DOMAIN/tracking.php', // optional, default value: `${urlBase}matomo.php`
  srcUrl: 'https://LINK.TO.DOMAIN/tracking.js', // optional, default value: `${urlBase}matomo.js`
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  heartBeat: { // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10 // optional, default value: `15
  },
  linkTracking: false, // optional, default value: true
  configurations: { // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
};
```

Note: This integration is based on [`@datapunt/matomo-tracker-js`](https://www.npmjs.com/package/@datapunt/matomo-tracker-js), so all configuration options are available.

If you would like to store your `urlBase`, `siteId`, etc. in an [environment variable](https://storybook.js.org/docs/react/configure/environment-variables) so it is not available in your repo, simply add `.env` file to the root of your project and reference that in `manager.js`

`.env`:
```
STORYBOOK_MATOMO_URL = https://LINK.TO.DOMAIN
STORYBOOK_MATOMO_SITE_ID = 3
```

`storybook/manager.js`:
```js
window.STORYBOOK_MATOMO_OPTIONS = {
  urlBase: process.env.STORYBOOK_MATOMO_URL,
  siteId: process.env.STORYBOOK_MATOMO_SITE_ID,
  // ...
}
```