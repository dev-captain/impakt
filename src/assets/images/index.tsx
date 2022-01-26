/* eslint-disable global-require */

const Images = {
  Common: {
    Logo: require('./logo.png'),
    Twitter: require('./twitter.png'),
    Discord: require('./discord.png'),
    Header: require('./bg-header.png'),
    Peter: 'https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/',
  },
  motionCapture: 'https://ucarecdn.com/9d2fcade-c321-45bd-9468-4afa630af77f/-/preview/800x800/',
  burnAndEarn: 'https://ucarecdn.com/d7cd3625-043f-41a7-bcf5-0ebe402d6a7d/-/preview/800x800/',
  contact: {
    md: 'https://ucarecdn.com/9a840131-c2a0-4b38-a980-d001322b06cf/-/preview/400x400/',
    sm: 'https://ucarecdn.com/9a840131-c2a0-4b38-a980-d001322b06cf/-/preview/400x400/',
    xl: 'https://ucarecdn.com/9a840131-c2a0-4b38-a980-d001322b06cf/-/preview/800x800/',
  } as any,

  impaktGames: {
    Header: (view: 'base' | 'sm' | 'md' | 'xl' | '2xl') => {
      switch (view) {
        case 'base':
        case 'sm':
        case 'md':
          return 'https://ucarecdn.com/8cbbb091-bc4a-4a7b-a6e3-bd20d35ac08d/-/preview/-/quality/smart/';
        case 'xl':
          return 'https://ucarecdn.com/4b679a02-95b0-4d1a-b0aa-a66838f5cb4c/-/preview/-/quality/smart/';
        case '2xl':
          return 'https://ucarecdn.com/71bed9ea-d9ac-41ed-bbf6-fa456bd5e10f/-/preview/-/quality/smart/';
        default:
          return 'https://ucarecdn.com/4b679a02-95b0-4d1a-b0aa-a66838f5cb4c/-/preview/-/quality/smart/';
      }
    },
  },

  advisor: {
    kevin: 'https://ucarecdn.com/bd74b6cb-dbae-495d-9fc9-43e5f25a664b/-/preview/300x300/',
    tim: 'https://ucarecdn.com/271c3150-2b31-453c-9b84-11ea64c61c15/-/preview/300x300/',
    kai: 'https://ucarecdn.com/5e3c4fc0-7250-489a-af44-578308280112/-/preview/300x300/',
  },
};

export default Images;
