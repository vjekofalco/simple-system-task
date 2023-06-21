import React, { useCallback, useState } from 'react'
import { UserResponseData } from '../utils/fetchGitHubUsers'
import {
  ListUserReposResponseData,
  fetchGitHubUserRepos,
} from '../utils/fetchGitHubUserRepos'
import { GitHubUserRepoInfo } from './GithubUserRepoInfo'

type Props = Pick<UserResponseData, 'login' | 'repos_url'>

export const GithubUserComponent = ({ login, repos_url }: Props) => {
  const [repos, setRepos] = useState<ListUserReposResponseData[]>([])

  const handleClick = useCallback(async () => {
    const repos = await fetchGitHubUserRepos(repos_url)
    setRepos(repos)
  }, [])

  return (
    <div>
      <div onClick={handleClick}>
        <div>{login}</div>
      </div>
      {repos.map((repo) => (
        <GitHubUserRepoInfo
          key={repo.id}
          name={repo.name}
          description={repo.description}
        />
      ))}
    </div>
  )
}
