import { StateCreator } from 'zustand'

import { NUMBER_OF_EXTRA_USERS } from '../consts'
import {
  ListUserReposResponseData,
  fetchGitHubUserRepos,
} from '../utils/fetchGitHubUserRepos'

export type Repo = Pick<
  ListUserReposResponseData,
  'name' | 'description' | 'stargazers_count' | 'id'
>

export type ReposState = {
  repos: { [userId: number]: Repo[] }
  setGitHubUserRepo: (reposUrl: string) => void
}

export const getGitHubUsersRepos: StateCreator<ReposState> = (set) => ({
  repos: {},
  setGitHubUserRepo: async (reposUrl: string) => {
    const fetchedUserRepos = await fetchGitHubUserRepos(reposUrl)

    if (fetchedUserRepos.length > 0) {
      const userId = fetchedUserRepos[0].owner.id

      const repos = fetchedUserRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        id: repo.id,
      }))

      set((state) => ({ repos: { ...state.repos, [userId]: repos } }))
    }
  },
})
