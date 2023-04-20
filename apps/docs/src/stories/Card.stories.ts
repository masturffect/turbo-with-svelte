import type { Meta, StoryObj } from '@storybook/svelte'

import { Card } from 'frontend'

const meta = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        hasButton: { control: { type: 'boolean'} }
    }
} satisfies Meta<Card>

export default meta;
type Story = StoryObj<typeof meta>

export const WithButton: Story = {
    args: {
        subheader: 'Card With Button',
        headline: 'Card With Button',
        hasButton: true
    }
}

export const WithOutButton: Story = {
    args: {
        subheader: 'Card w/o Button',
        headline: 'Card w/o Button',
        hasButton: false
    }
}