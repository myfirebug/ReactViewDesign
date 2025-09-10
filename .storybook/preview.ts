import type { Preview } from "@storybook/react-webpack5";
import "../src/styles/index.scss";

import { setTheme } from "../src/components/theme";

setTheme("default");
const preview: Preview = {
  parameters: {
    layout: "padded",
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
