import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar  from '../components/Navbar/Navbar';

export default {
    title: 'Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}>Navbar</Navbar>;

export const Nav = Template.bind({});