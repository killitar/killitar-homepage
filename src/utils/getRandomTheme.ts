interface Theme {
  id: number;
  name: string;
}

const getRandomTheme = (themesList: Theme[]): string => {
  const randomIndex: number = Math.floor(Math.random() * themesList.length);
  const theme = themesList[randomIndex].name;
  console.log(theme);
  return theme;
};

export default getRandomTheme;
