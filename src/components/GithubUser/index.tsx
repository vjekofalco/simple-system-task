import React, { memo, useCallback, useState } from 'react'
import cx from 'clsx'

import { UserResponseData } from '../../utils/fetchGitHubUsers'
import {
  ListUserReposResponseData,
  fetchGitHubUserRepos,
} from '../../utils/fetchGitHubUserRepos'
import { GitHubUserRepoInfo } from '../GithubUserRepoInfo'
import { UserRow } from './UserRow'

type Props = Pick<UserResponseData, 'login' | 'repos_url'>

const GithubUserComponentPlain = ({ login, repos_url }: Props) => {
  const [repos, setRepos] = useState<ListUserReposResponseData[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isReposFetched, setIsReposFetched] = useState(false)

  const handleClick = useCallback(async () => {
    if (isReposFetched) {
      setIsOpen(!isOpen)
    } else {
      const repos = await fetchGitHubUserRepos(repos_url)

      setRepos(repos)
      setIsReposFetched(true)
      setIsOpen(true)
    }
  }, [isOpen, repos, isReposFetched])

  return (
    <div className="space-y-s">
      <UserRow userName={login} isOpen={isOpen} handleClick={handleClick} />
      <div
        className={cx(
          'pl-m space-y-s ease-in duration-100 overflow-hidden',
          isOpen ? `h-[${repos.length * 100}px]` : 'h-0'
        )}
      >
        {repos.length > 0 ? (
          repos.map((repo) => (
            <GitHubUserRepoInfo
              key={repo.id}
              name={repo.name}
              stargazers_count={repo.stargazers_count}
              description={repo.description}
            />
          ))
        ) : (
          <>
            {isOpen && (
              <p className="text-warning font-bold p-s">
                No open repositories at the moment!
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export const GithubUserComponent = memo(GithubUserComponentPlain)
