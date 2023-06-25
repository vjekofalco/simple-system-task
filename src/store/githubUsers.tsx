import { StateCreator } from 'zustand'

import { NUMBER_OF_EXTRA_USERS } from '../consts'
import { UserResponseData, fetchGitHubUsers } from '../utils/fetchGitHubUsers'

export type User = Pick<UserResponseData, 'login' | 'repos_url' | 'id'>

export type UserState = {
  users: User[]
  setGitHubUsers: (userName: string) => void
}

export const getGitHubUsers: StateCreator<UserState> = (set) => ({
  users: [],
  setGitHubUsers: async (userName: string) => {
    const fetchedUsers = await fetchGitHubUsers(userName, NUMBER_OF_EXTRA_USERS)

    const users = fetchedUsers.map((user) => ({
      id: user.id,
      login: user.login,
      repos_url: user.repos_url,
    }))

    set(() => ({ users }))
  },
})
