import React, { useCallback, useState } from 'react'

import { GithubUserComponent } from './components/GithubUser'
import { SearchBar } from './components/SearchBar'
import { useStore } from './store'

function App() {
  const [username, setUsername] = useState('')
  const { users, setGitHubUsers } = useStore((state) => state)

  const getUsers = useCallback(async (userName: string) => {
    const formattedUsername = userName.toLocaleLowerCase().replaceAll(/\s/g, '')
    setGitHubUsers(formattedUsername)
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
              id={user.id}
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
