import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  args: {
    children: 'Only desktop',
    $greaterThan: 'medium'
  }
}

export const Mobile: StoryObj<typeof MediaMatch> = {
  args: {
    children: 'Only desktop',
    $lessThan: 'medium'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
