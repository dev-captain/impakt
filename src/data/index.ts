import Images from 'assets/images';

export const RoadMapData: {
  date: string;
  isActive: boolean;
  items: string[];
}[] = [
  {
    date: '01 Jan 2019',
    isActive: true,
    items: ['Launching 3 Impakt Minigames'],
  },
  {
    date: '02 Feb 2019',
    isActive: true,
    items: ['Launching 2 new Impakt Minigames', 'Uploading first epic NFT collections set'],
  },
  {
    date: '03 Apr 2019',
    isActive: false,
    items: ['Possibility to users get followers'],
  },
  {
    date: '04 Apr 2022',
    isActive: false,
    items: ['Impakt Minigames tournament episode'],
  },
];

export const TokenomicsData = [
  {
    percentage: '20,0',
    title: 'Team',
    color: '#FF7723',
  },
  {
    percentage: '15,3',
    title: 'Private Sale',
    color: '#C1DA00',
  },
  {
    percentage: '10,5',
    title: 'Reserve',
    color: '#8E30FF',
  },
  {
    percentage: '6,0',
    title: 'Staking + LP',
    color: '#9D5E00',
  },
  {
    percentage: '5,6',
    title: 'Strategic Round',
    color: '#7CB413',
  },
  {
    percentage: '4,7',
    title: 'Seed Round',
    color: '#0263FF',
  },
  {
    percentage: '2,4',
    title: 'Public',
    color: '#C627B5',
  },
];

export const Videos = {
  burnAndEarn: 'assets/videos/burn-and-earn.mp4',
  impaktGames: 'assets/videos/tutorial-video.mp4',
};

export const Socials = {
  facebook: '',
  youtube: 'https://www.youtube.com/channel/UCxQBnTaxPdlmxMEfPwOuBPw',
  twitter: 'https://twitter.com/demideuszin',
  discord: 'https://discord.gg/eVQJ8XRa9S',
};

export const Categories = [
  { id: 'all-resources', title: 'All Resources' },
  { id: 'the-game', title: 'The Game' },
  { id: 'tokens', title: 'Tokens' },
  { id: 'announcements', title: 'Announcements' },
  { id: 'privacy-policy', title: 'Privacy Policy' },
  { id: 'terms-of-use', title: 'Terms of Use' },
];

export const Articles = [
  {
    id: 'title-of-the-article-1',
    category: 'all-resources',
    title: 'Title of the Article #1',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-2',
    category: 'all-resources',
    title: 'Title of the Article #2',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-3',
    category: 'all-resources',
    title: 'Title of the Article #3',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-4',
    category: 'announcements',
    title: 'Title of the Article #4',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-5',
    category: 'tokens',
    title: 'Title of the Article #5',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-6',
    category: 'the-game',
    title: 'Title of the Article #6',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-7',
    category: 'privacy-policy',
    title: 'Title of the Article #7',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: 'title-of-the-article-8',
    category: 'terms-of-use',
    title: 'Title of the Article #8',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
];

export const Advisors = [
  {
    name: 'Kevin Lin',
    title: 'Founder - Twitch',
    image: Images.advisor.kevin,
    subtitle: '',
    alt: 'Kevin Lin',
  },
  {
    name: 'Tim Howes',
    title: 'CTO - Netscape',
    image: Images.advisor.tim,
    alt: 'Tim Howes',
    subtitle: 'Director of Engineering - Facebook',
  },
  {
    name: 'Kai Huang',
    title: 'Founder - Guitar Hero',
    image: Images.advisor.kai,
    alt: 'Kai Huang',
    subtitle: 'President of Red Octane - Activision',
  },
];

export const Team = [
  {
    name: 'Demideus',
    title: 'CEO',
    image: Images.team.demideus,
    alt: '',
    subtitle: '',
  },
  {
    name: 'Valtec',
    title: 'COO',
    image: Images.team.valtec,
    alt: '',
    subtitle: '',
  },
  {
    name: 'DukeNuke',
    title: 'President',
    image: Images.team.duke,
    alt: '',
    subtitle: '',
  },
  {
    name: 'Dahaka',
    title: 'CTO',
    image: Images.team.dahaka,
    alt: '',
    subtitle: '',
  },
  {
    name: 'Cap’n Crunch',
    title: 'CMO',
    image: Images.team.cap,
    alt: '',
    subtitle: '',
  },
];

export const RoadmapInfo = [
  {
    title: 'Q4 2021',
    items: [
      {
        title: 'Develop Computer Vision System',
        isDone: true,
      },
    ],
    height: '124px',
    isCompleted: true,
    lineHeight: '124px',
    pinLineHeight: '60px',
  },
  {
    title: 'Q1 2022',
    items: [
      {
        title: 'Alpha Test App',
        isDone: true,
      },
      {
        title: 'Daily/Weekly Routines',
        isDone: false,
      },
      {
        title: 'Centralized Economy',
        isDone: false,
      },
    ],
    height: '184px',
    lineHeight: '124px',
    isCompleted: true,
    pinLineHeight: '100px',
  },
  {
    title: 'Q2 2022',
    items: [
      {
        title: 'Genesis NFT Mint',
        isDone: false,
      },
      {
        title: 'Decentralized Economy',
        isDone: false,
      },
    ],
    height: '241px',
    isCompleted: false,
    lineHeight: '184px',
    pinLineHeight: '130px',
  },
  {
    title: 'Q3 2022',
    items: [
      {
        title: 'Release SDK',
        isDone: false,
      },
    ],
    height: '289px',
    lineHeight: '200px',
    isCompleted: false,
    pinLineHeight: '160px',
  },
];
export default {};
