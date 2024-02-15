import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: { table: { disabled: true } }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    $fullWidth: false,
    size: 'medium'
  }
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    $fullWidth: false,
    size: 'small',
    icon: <AddShoppingCart />
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
}
