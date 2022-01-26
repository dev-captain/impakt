/* eslint-disable no-unreachable */
/* eslint-disable global-require */

const Images = {
  Common: {
    Logo: require('./logo.png'),
    Twitter: require('./twitter.png'),
    Discord: require('./discord.png'),
    Header: require('./bg-header.png'),
    Peter: 'https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/peter.gif',
  },
  motionCapture: 'https://ucarecdn.com/e521c223-c2a9-4620-a18b-75079ee8f33c/motioncapture.webp',
  burnAndEarn: 'https://ucarecdn.com/241b7cbd-9cab-4ad4-9774-81866ab4e0dd/burntoearnhero.webp',

  contact: {
    md: 'https://ucarecdn.com/94ed78b3-9050-4226-aea5-687217b8d4f3/contactus.webp',
    sm: 'https://ucarecdn.com/94ed78b3-9050-4226-aea5-687217b8d4f3/contactus.webp',
    xl: 'https://ucarecdn.com/94ed78b3-9050-4226-aea5-687217b8d4f3/contactus.webp',
  } as any,

  impaktGames: {
    Header: (view: 'base' | 'sm' | 'md' | 'xl' | '2xl') => {
      switch (view) {
        case 'base':
        case 'sm':
        case 'md':
          return 'https://ucarecdn.com/deff5fd8-4e66-457b-94f4-e227bb9e75ea/md.webp';
        case 'xl':
          return 'https://ucarecdn.com/2a67d277-5ea9-442e-9b25-5556d728751c/xl.webp';
        case '2xl':
          return 'https://ucarecdn.com/b5d78ad2-503b-47af-9151-239b646bcac9/2xl.webp';
        default:
          return 'https://ucarecdn.com/2a67d277-5ea9-442e-9b25-5556d728751c/xl.webp';
      }
    },
  },
  advisor: {
    kevin: 'https://ucarecdn.com/fa7f3cbb-d737-45bb-9c44-121c92e280a9/kevinlin.webp',
    tim: 'https://ucarecdn.com/2249567b-d785-41e9-975e-223ccfe1ae9b/timhowes.webp',
    kai: 'https://ucarecdn.com/1206640b-1fc0-449f-8812-31a990e34360/kaihuang.webp',
  },
};

export default Images;
