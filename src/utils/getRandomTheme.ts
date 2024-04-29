interface Theme {
  id: number
  name: string
}

function getRandomTheme(themesList: Theme[]): string {
  const randomIndex: number = Math.floor(Math.random() * themesList.length)
  const theme = themesList[randomIndex].name
  return theme
}

export default getRandomTheme
