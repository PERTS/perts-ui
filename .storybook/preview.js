import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

import '../lib/styles/reset.css';
import '../lib/styles/boxSizingReset.css';
import '../lib/styles/bodyPadding.css';
import '../lib/styles/colors.css';
import '../lib/styles/fonts.css';
