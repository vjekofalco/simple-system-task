import React, { memo, useCallback, useState } from 'react'
import cx from 'clsx'

import { UserResponseData } from '../../utils/fetchGitHubUsers'
import { UserRow } from './UserRow'
import { useStore } from '../../store'
import { GithubUserRepos } from '../GithubUserRepos'

type Props = Pick<UserResponseData, 'login' | 'repos_url' | 'id'>

const GithubUserComponentPlain = ({ login, repos_url, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isReposFetched, setIsReposFetched] = useState(false)
  const { repos, setGitHubUserRepo } = useStore((state) => state)
  const reposNumber = Object.keys(repos).length
  const userRepos = repos[id]

  const handleClick = useCallback(async () => {
    if (isReposFetched) {
      setIsOpen(!isOpen)
    } else {
      setGitHubUserRepo(repos_url)
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
          isOpen ? `h-[${reposNumber * 100}px]` : 'h-0'
        )}
      >
        <GithubUserRepos repos={userRepos} />
      </div>
    </div>
  )
}

export const GithubUserComponent = memo(GithubUserComponentPlain)
