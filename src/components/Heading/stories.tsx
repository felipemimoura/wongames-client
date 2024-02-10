import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    leftLine: {
      type: 'boolean'
    },
    lineBotton: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'Most Pupolars',
    leftLine: true,
    lineBottom: false
  }
}
