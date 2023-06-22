import { Endpoints } from '@octokit/types'
import { request } from '@octokit/request'

export type ListUserReposResponseData =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export const fetchGitHubUserRepos = (
  reposUrl: string
): Promise<ListUserReposResponseData[]> => {
  const repos = request(`GET ${reposUrl}`, {
    headers: {
      authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  })
    .then((response) => response.data)
    // eslint-disable-next-line no-console
    .catch((e) => console.error(e))

  return repos
}
