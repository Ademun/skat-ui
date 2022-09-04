import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Surface  from '../components/Surface/Surface';

export default {
    title: 'Surface',
    component: Surface,
} as ComponentMeta<typeof Surface>;


const Template: ComponentStory<typeof Surface> = (args) => <Surface {...args} />;

export const Srf = Template.bind({});