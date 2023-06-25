import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { UserState, getGitHubUsers } from './githubUsers'
import { getGitHubUsersRepos, ReposState } from './githubUsersRepos'

type AppStateType = UserState & ReposState

export const useStore = create<AppStateType>()(
  devtools((...a) => ({
    ...getGitHubUsers(...a),
    ...getGitHubUsersRepos(...a),
  }))
)
