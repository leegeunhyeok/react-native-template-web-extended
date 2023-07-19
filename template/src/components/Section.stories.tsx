import React, {type ComponentProps} from 'react';
import {Section} from './Section';
import type {Meta, StoryFn} from '@storybook/react';

export default {
  title: 'Section',
  component: Section,
} as Meta<typeof Section>;

type SectionProps = ComponentProps<typeof Section>;
type SectionStory = StoryFn<typeof Section>;

const Template = (args: SectionProps) => <Section {...args} />;

export const Default: SectionStory = (args: SectionProps) => {
  return <Template {...args} />;
};

Default.args = {
  title: 'Section title',
  children: 'description text...',
};
