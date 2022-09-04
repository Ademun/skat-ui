import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader  from '../components/Loader/Loader';

export default {
    title: 'Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;


const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Ldr = Template.bind({});