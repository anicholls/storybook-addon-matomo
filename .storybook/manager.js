window.STORYBOOK_MATOMO_OPTIONS = {
  urlBase: process.env.STORYBOOK_MATOMO_URL, // REQUIRED
  siteId: process.env.STORYBOOK_MATOMO_SITE_ID, // REQUIRED
  trackerUrl: `${process.env.STORYBOOK_MATOMO_URL}/matomo.php`,
  srcUrl: `${process.env.STORYBOOK_MATOMO_URL}/matomo.js`,
};
