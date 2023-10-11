import { Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default = {
  render: (args: LogoProps) => <Logo {...args} />
}
