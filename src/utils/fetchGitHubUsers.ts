import { Endpoints } from '@octokit/types'
import { request } from '@octokit/request'

import { generateFormatedGitHubName } from './generateFormatedGitHubName'

export type UserResponseData =
  Endpoints['GET /users/{username}']['response']['data']

const fetchGitHubUser = (userName: string): Promise<UserResponseData> =>
  request(`GET https://api.github.com/users/${userName}`, {
    headers: {
      authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  })
    .then((response) => response.data)
    .catch((e) => console.error(e))

export const fetchGitHubUsers = async (
  userName: string,
  extraUsersNumber: number
) => {
  const users = await Promise.all([
    await fetchGitHubUser(userName),
    ...[...Array(extraUsersNumber).keys()].map(
      async () => await fetchGitHubUser(generateFormatedGitHubName(userName))
    ),
  ]).then((responses) => responses.filter((response) => !!response?.id))

  return users
}
