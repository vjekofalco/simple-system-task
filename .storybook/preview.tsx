import React from 'react'
import '../src/index.css'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="my-0 mx-auto max-w-[720px] p-m bg-white space-y-m">
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
