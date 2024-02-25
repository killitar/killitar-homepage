interface Theme {
  id: number;
  themeName: string;
}

const getRandomTheme = (themesList: Theme[]): string => {
  const randomIndex: number = Math.floor(Math.random() * themesList.length);
  const theme = themesList[randomIndex].themeName;
  console.log(theme);
  return theme;
};

export default getRandomTheme;
