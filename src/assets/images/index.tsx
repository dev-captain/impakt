/* eslint-disable global-require */

const Images = {
  Common: {
    Logo: require('./logo.png'),
    Twitter: require('./twitter.png'),
    Discord: require('./discord.png'),
    Header: require('./bg-header.png'),
    Peter: require('./video.gif'),
  },
  impaktGames: {
    Header: (view: 'base' | 'sm' | 'md' | 'xl' | '2xl') => {
      switch (view) {
        case 'base':
          return require('./impaktGamesHeroBg/base.png');
        case 'sm':
        case 'md':
          return require('./impaktGamesHeroBg/md.png');
        case 'xl':
          return require('./impaktGamesHeroBg/xl.png');
        case '2xl':
          return require('./impaktGamesHeroBg/2xl.png');
        default:
          return require('./impaktGamesHeroBg/xl.png');
      }
    },
  },
};

export default Images;
