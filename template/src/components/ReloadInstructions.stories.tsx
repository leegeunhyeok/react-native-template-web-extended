import React from 'react';
import {ReloadInstructions} from './ReloadInstructions';
import type {Meta, StoryFn} from '@storybook/react';

export default {
  title: 'ReloadInstructions',
  component: ReloadInstructions,
} as Meta<typeof ReloadInstructions>;

type ReloadInstructionsStory = StoryFn<typeof ReloadInstructions>;

export const Default: ReloadInstructionsStory = () => {
  return <ReloadInstructions />;
};
