/* eslint-disable no-unreachable */
/* eslint-disable global-require */

const Images = {
  Common: {
    Logo: require('./logo.png'),
    Twitter: require('./twitter.png'),
    Discord: require('./discord.png'),
    Header: require('./bg-header.png'),
    Peter: require('./video.webp'),
  },
  motionCapture: require('./motion-capture.webp'),
  burnAndEarn: require('./burn-to-earn-hero.webp'),

  contact: {
    md: require('./contact.webp'),
    sm: require('./contact.webp'),
    xl: require('./contact.webp'),
  } as any,

  impaktGames: {
    Header: (view: 'base' | 'sm' | 'md' | 'xl' | '2xl') => {
      switch (view) {
        case 'base':
        case 'sm':
        case 'md':
          return require('./impaktGamesHeroBg/md.webp');
        case 'xl':
          return require('./impaktGamesHeroBg/xl.webp');
        case '2xl':
          return require('./impaktGamesHeroBg/2xl.webp');
        default:
          return require('./impaktGamesHeroBg/xl.webp');
      }
    },
  },
  advisor: {
    kevin: require('./advisor/kevin-lin.webp'),
    tim: require('./advisor/tim-howes.webp'),
    kai: require('./advisor/kai-huang.webp'),
  },
};

export default Images;
