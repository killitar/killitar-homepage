const listThemes = [
  {
    id: 0,
    name: 'gruvbox-dark',
  },
  {
    id: 1,
    name: 'solarized-dark',
  },
  {
    id: 2,
    name: 'catppuccin',
  },
  {
    id: 3,
    name: 'blueberry-light',
  },
]

function getRandomTheme(themesList) {
  const randomIndex = Math.floor(Math.random() * themesList.length)
  const theme = themesList[randomIndex].name
  return theme
}

const initialTheme = getRandomTheme(listThemes)

document.querySelector('html')?.classList.add(initialTheme)
