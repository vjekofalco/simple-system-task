import { GITHUB_NAME_MAX_CHARATERS } from '../consts'

const GITHUB_NAME_ALLOWED_CHARACTERS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy-'

export const generateFormatedGitHubName = (inputValue: string) => {
  const charactersLeft = GITHUB_NAME_MAX_CHARATERS - inputValue.length
  const appendingCharactersCount = Math.floor(
    Math.random() * charactersLeft + 1
  )

  return Array.from(Array(appendingCharactersCount).keys()).reduce((acc) => {
    const randomAllowedCharacterIndex = Math.floor(
      Math.random() * GITHUB_NAME_ALLOWED_CHARACTERS.length + 1
    )
    const randomAllowedCharacter = GITHUB_NAME_ALLOWED_CHARACTERS.charAt(
      randomAllowedCharacterIndex
    )

    return `${acc}${randomAllowedCharacter}`
  }, inputValue)
}
