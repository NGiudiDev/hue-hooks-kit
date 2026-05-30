import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Box, ThemeProvider } from "@ngiudi.dev/hue-design-system";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ThemeProvider>
          <Box padding="b-32 t-24 x-24">
            <Story />
          </Box>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],

  parameters: {
    backgrounds: {},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
    status: {
      statuses: {
        //? add custom statuses.
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;