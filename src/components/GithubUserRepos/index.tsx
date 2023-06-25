import React from 'react'
import { Repo } from '../../store/githubUsersRepos'
import { GitHubUserRepoInfo } from './GithubUserRepoInfo'

type Props = {
  repos?: Repo[]
}

export const GithubUserRepos = ({ repos }: Props) => {
  if (!repos) {
    return null
  }

  if (repos.length > 0) {
    return (
      <>
        {repos.map((repo) => (
          <GitHubUserRepoInfo
            key={repo.id}
            name={repo.name}
            description={repo.description}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </>
    )
  }

  return (
    <p className="text-warning font-bold p-s">
      No open repositories at the moment!
    </p>
  )
}
