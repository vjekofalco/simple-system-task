import React from 'react'
import { ListUserReposResponseData } from '../utils/fetchGitHubUserRepos'

type Props = Pick<ListUserReposResponseData, 'name' | 'description'>

export const GitHubUserRepoInfo = ({ name, description }: Props) => (
  <div>
    <div>
      <div>{name}</div>
      {description && <div>{description}</div>}
    </div>
  </div>
)
