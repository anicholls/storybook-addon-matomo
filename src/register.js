import { addons } from "@storybook/addons";
import Events from "@storybook/core-events";
import MatomoTracker from "@datapunt/matomo-tracker-js";

addons.register("storybook-matomo", (api) => {
  let tracker;

  try {
    tracker = new MatomoTracker(window.STORYBOOK_MATOMO_OPTIONS);
  } catch (e) {
    console.error("Failed to intialize Matomo Tracker:\n\n", e);

    return;
  }

  tracker.trackPageView();

  api.on(Events.STORY_CHANGED, (title) => tracker.trackPageView());

  api.on(Events.STORY_ERRORED, ({ title, description }) => {
    tracker.trackEvent({
      category: "error",
      action: "story-errored",
      name: `"${title}" story encountered error: ${description}`,
    });
  });

  api.on(Events.STORY_THREW_EXCEPTION, (err) => {
    tracker.trackEvent({
      category: "error",
      action: "story-threw-exception",
      name: err,
    });
  });

  api.on(Events.STORY_MISSING, (id) => {
    tracker.trackEvent({
      category: "error",
      action: "story-missing",
      name: `attempted to render ${id}, but it is missing`,
    });
  });

  // TODO: Currently no way to tie into sidebar filter/search
});
