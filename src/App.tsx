import React, { useCallback, useState } from 'react'
import './App.css'
import { UserResponseData, fetchGitHubUsers } from './utils/fetchGitHubUsers'
import { NUMBER_OF_EXTRA_USERS } from './consts'
import { GithubUserComponent } from './components/GithubUser'
import { SearchBar } from './components/SearchBar'

function App() {
  const [users, setUsers] = useState<UserResponseData[]>([])

  const getUsers = useCallback(async (userName: string) => {
    const users = await fetchGitHubUsers(userName, NUMBER_OF_EXTRA_USERS)
    setUsers(users)
  }, [])

  return (
    <section>
      <SearchBar onSubmit={getUsers} />
      {users.map((user) => (
        <GithubUserComponent
          key={user.id}
          login={user.login}
          repos_url={user.repos_url}
        />
      ))}
    </section>
  )
}

export default App
