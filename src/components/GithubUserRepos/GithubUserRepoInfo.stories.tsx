import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { GitHubUserRepoInfo } from './GithubUserRepoInfo'

const meta: Meta<typeof GitHubUserRepoInfo> = {
  component: GitHubUserRepoInfo,
}

export default meta

type Story = StoryObj<typeof GitHubUserRepoInfo>

export const Primary: Story = {
  render: () => (
    <GitHubUserRepoInfo
      name="Super Repo"
      description="Lorem ipsum desription text"
      stargazers_count={5}
    />
  ),
}

export const WihoutStars: Story = {
  render: () => (
    <GitHubUserRepoInfo
      name="Super Repo"
      description="Lorem ipsum desription text"
      stargazers_count={0}
    />
  ),
}
