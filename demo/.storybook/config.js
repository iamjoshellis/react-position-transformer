import { configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from "@storybook/react";

addDecorator(withKnobs);

function loadStories() {
  require('../src');
}

configure(loadStories, module);
