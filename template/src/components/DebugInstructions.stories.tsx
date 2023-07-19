import React from 'react';
import {DebugInstructions} from './DebugInstructions';
import type {Meta, StoryFn} from '@storybook/react';

export default {
  title: 'DebugInstructions',
  component: DebugInstructions,
} as Meta<typeof DebugInstructions>;

type DebugInstructionsStory = StoryFn<typeof DebugInstructions>;

export const Default: DebugInstructionsStory = () => {
  return <DebugInstructions />;
};
