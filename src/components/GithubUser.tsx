import React, { useCallback, useState } from 'react'
import cx from 'clsx'

import { UserResponseData } from '../utils/fetchGitHubUsers'
import {
  ListUserReposResponseData,
  fetchGitHubUserRepos,
} from '../utils/fetchGitHubUserRepos'
import { GitHubUserRepoInfo } from './GithubUserRepoInfo'
import { ArrowDown } from './icons/ArrowDown'

type Props = Pick<UserResponseData, 'login' | 'repos_url'>

export const GithubUserComponent = ({ login, repos_url }: Props) => {
  const [repos, setRepos] = useState<ListUserReposResponseData[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(async () => {
    if (repos.length > 0) {
      setIsOpen(!isOpen)
    } else {
      const repos = await fetchGitHubUserRepos(repos_url)
      setRepos(repos)
      setIsOpen(true)
    }
  }, [isOpen, repos])

  return (
    <div className="space-y-s">
      <div
        className="bg-greyDark p-s font-bold flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div>{login}</div>
        <div
          className={cx('w-m h-m ease-in duration-100', isOpen && 'rotate-180')}
        >
          <ArrowDown />
        </div>
      </div>
      <div className="pl-m space-y-s">
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
