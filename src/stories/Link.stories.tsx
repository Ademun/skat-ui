import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link  from '../components/Link/Link';

export default {
    title: 'Link',
    component: Link,
} as ComponentMeta<typeof Link>;


const Template: ComponentStory<typeof Link> = (args) => <Link {...args} href='/'>Link</Link> ;

export const Lnk = Template.bind({});

