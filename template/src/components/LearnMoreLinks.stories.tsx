import React from 'react';
import {LearnMoreLinks} from './LearnMoreLinks';
import type {Meta, StoryFn} from '@storybook/react';

export default {
  title: 'LearnMoreLinks',
  component: LearnMoreLinks,
} as Meta<typeof LearnMoreLinks>;

type LearnMoreLinksStory = StoryFn<typeof LearnMoreLinks>;

export const Default: LearnMoreLinksStory = () => {
  return <LearnMoreLinks />;
};
