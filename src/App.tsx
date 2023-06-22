import React, { useCallback, useState } from 'react'
import { UserResponseData, fetchGitHubUsers } from './utils/fetchGitHubUsers'
import { NUMBER_OF_EXTRA_USERS } from './consts'
import { GithubUserComponent } from './components/GithubUser'
import { SearchBar } from './components/SearchBar'

function App() {
  const [users, setUsers] = useState<UserResponseData[]>([])
  const [username, setUsername] = useState('')

  const getUsers = useCallback(async (userName: string) => {
    const formattedUsername = userName.toLocaleLowerCase().replaceAll(/\s/g, '')
    const users = await fetchGitHubUsers(
      formattedUsername,
      NUMBER_OF_EXTRA_USERS
    )

    setUsers(users)
    setUsername(userName)
  }, [])

  return (
    <section className="my-0 mx-auto max-w-[720px] p-m bg-white space-y-m">
      <SearchBar onSubmit={getUsers} />
      <div className="space-y-xs">
        {username && (
          <p className="text-grey font-s font-bold">
            Showing users for {username}
          </p>
        )}
        <div className="space-y-m">
          {users.map((user) => (
            <GithubUserComponent
              key={user.id}
              login={user.login}
              repos_url={user.repos_url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
