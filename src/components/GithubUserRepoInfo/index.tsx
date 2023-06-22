import React from 'react'

import { ListUserReposResponseData } from '../../utils/fetchGitHubUserRepos'
import { Star } from '../Icons/Star'

type Props = Pick<
  ListUserReposResponseData,
  'name' | 'description' | 'stargazers_count'
>

export const GitHubUserRepoInfo = ({
  name,
  description,
  stargazers_count,
}: Props) => (
  <div className="bg-grey p-s">
    <div className="flex justify-between items-center">
      <div className="text-black font-bold">{name}</div>
      {stargazers_count > 0 && (
        <div className="flex items-center text-black font-bold space-x-xxs">
          <span>{stargazers_count}</span>
          <div className="w-m h-m">
            <Star />
          </div>
        </div>
      )}
    </div>
    {description && <div>{description}</div>}
  </div>
)
