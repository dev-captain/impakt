import Images from 'assets/images';
import { Day, EventInput, Month } from 'dayspan';

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
  heroVideo: 'assets/videos/herovideo.mov',
  stars: 'assets/videos/stars.mov',
  backgroundBeachVideo: 'assets/videos/backgroundbeach.mp4',
};

export const Socials = {
  facebook: '',
  youtube: 'https://www.youtube.com/channel/UCxQBnTaxPdlmxMEfPwOuBPw',
  twitter: 'https://twitter.com/impaktlife',
  discord: 'https://discord.gg/eVQJ8XRa9S',
  tiktok: 'http://tiktok.com/@impaktlife',
  instagram: 'https://www.instagram.com/impakt.life/',
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
    title: 'Twitch Founder',
    image: Images.advisor.kevin,
    subtitle: '',
    alt: 'Kevin Lin',
  },
  {
    name: 'Tim Howes',
    title: 'Netscape CTO',
    image: Images.advisor.tim,
    alt: 'Tim Howes',
    subtitle: 'Director of Engineering - Facebook',
  },
  {
    name: 'Kai Huang',
    title: 'Guitar Hero Founder',
    image: Images.advisor.kai,
    alt: 'Kai Huang',
    subtitle: 'President of Red Octane - Activision',
  },
];

export const AdvisorSec = [
  {
    name: 'Kevin Lin',
    title: 'Twitch Founder',
    image: Images.advisor.kevin,
    subtitle: '',
    alt: 'Kevin Lin',
  },
  {
    name: 'Tim Howes',
    title: 'Netscape CTO ',
    image: Images.advisor.tim,
    alt: 'Tim Howes',
  },
  {
    name: 'Kai Huang',
    title: 'Guitar Hero Founder',
    image: Images.advisor.kai,
    alt: 'Kai Huang',
  },
];

export const Team = [
  {
    name: 'Demideus',
    title: 'CEO',
    image: Images.team.demideus,
    alt: '',
    subtitle:
      '3rd time CEO with <span style="color:#FFF;">15+ years</span> of experience in building businesses.\nPrevious 2 CEO/Founder roles in companies generating <span style="color:#FFF;">$40M+</span> yearly turnover.',
  },
  {
    name: 'Valtec',
    title: 'President',
    image: Images.team.valtec,
    alt: '',
    subtitle:
      ' <span style="color:#FFF;">10+ years</span> of building technology companies.\nPrevious roles at Uber Eats (Business Intel Lead), Block (Square), and Y-Combinator.',
  },
  {
    name: 'Dahaka',
    title: 'CTO',
    image: Images.team.dahaka,
    alt: '',
    subtitle:
      ' <span style="color:#FFF;">10+ years</span> building technology companies and experienced in building Computer Vision, Unity Apps, and Web Apps.\nManaging a team of <span style="color:#FFF;">20+</span> engineers & product managers',
  },
  // {
  //   name: 'Cap’n Crunch',
  //   title: 'CMO',
  //   image: Images.team.cap,
  //   alt: '',
  //   subtitle: '',
  // },
];

export const RoadmapInfo = [
  {
    title: 'Q4 2021',
    items: [
      {
        title: 'q4_1',
        isDone: true,
      },
    ],
    height: '0px',
    isCompleted: true,
    lineHeight: '88px',
    pinLineHeight: '60px',
  },
  {
    title: 'Q1 2022',
    items: [
      {
        title: 'q1_1',
        isDone: true,
      },
      {
        title: 'q1_2',
        isDone: true,
      },
      {
        title: 'q1_3',
        isDone: true,
      },
      {
        title: 'q1_4',
        isDone: true,
      },
    ],
    height: '150px',
    lineHeight: '124px',
    isCompleted: true,
    pinLineHeight: '100px',
  },
  {
    title: 'Q2 2022',
    items: [
      {
        title: 'q2_1',
        isDone: true,
      },
      {
        title: 'q2_2',
        isDone: true,
      },
      {
        title: 'q2_3',
        isDone: true,
      },

      {
        title: 'q2_4',
        isDone: true,
      },
    ],
    height: '220px',
    isCompleted: true,
    lineHeight: '184px',
    pinLineHeight: '130px',
  },
  {
    title: 'Q3 2022',
    items: [
      {
        title: 'q3_1',
        isDone: false,
      },

      {
        title: 'q3_2',
        isDone: false,
      },

      {
        title: 'q3_3',
        isDone: false,
      },

      {
        title: 'q3_4',
        isDone: false,
      },
      {
        title: 'q3_5',
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

export const LeaderBoardData = [
  {
    order: 1,
    name: 'CapnCrunc',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 2,
    name: 'CapnCrunc',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 3,
    name: 'CapnCrunc',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 4,
    name: 'CapnCruncx',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 5,
    name: 'CapnCrunco',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 6,
    name: 'CapnCrunco',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 7,
    name: 'CapnCrunco',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
  {
    order: 8,
    name: 'CapnCrunco',
    community: 'Cereal',
    date: '02.11.22',
    points: '8,500',
  },
];

export const CommunityData = [
  'lorem',
  'Tron',
  'Ontology',
  'ThunderoCore',
  'WAX',
  'Hive',
  'DEP',
  'Tron',
  'Polugoon',
  'NEAR',
  'Avalanche',
  'Telos',
  'Moonriver',
  'Cronos',
];

export const event1Data = JSON.stringify({
  title: 'Good morning',
  description: 'This is description',
  link: 'impakt.com/e/ehF47bc11',
  memberCount: 29,
  chellanges: 'Hero cardio',
});

export const event2Data = JSON.stringify({
  title: 'Power Training',
  description: 'This is description 2',
  link: 'impakt.com/e/ehF47bc9',
  memberCount: 29,
  chellanges: 'Hero cardio',
});

export const event3Data = JSON.stringify({
  title: 'Event 3 - Cinema',
  description: 'This is description 3',
  link: 'impakt.com/e/ehF47bc4',
  memberCount: 15,
  chellanges: 'Hero cardio',
});

export const event4Data = JSON.stringify({
  title: 'Event 4 - Theater',
  description: 'This is description 4',
  link: 'impakt.com/e/ehF47bca',
  memberCount: 99,
  chellanges: 'Hero cardio',
});

export const event5Data = JSON.stringify({
  title: 'Event 5 - Theater',
  description: 'This is description 5',
  link: 'impakt.com/e/ehF47bca',
  memberCount: 15,
  chellanges: 'Hero cardio',
});

export const getDummyEvents = () => {
  const allEvents: EventInput<string, any>[] = [];

  const event1: EventInput<string, any> = {
    id: 1,
    data: event1Data,
    schedule: {
      on: Day.build(2022, Month.SEPTEMBER, 11),
      times: [Day.build(2022, Month.SEPTEMBER, 11, 8)],
      duration: 1,
      durationUnit: 'hours',
    },
  };

  const event2: EventInput<string, any> = {
    id: 2,
    data: event2Data,
    schedule: {
      on: Day.build(2022, Month.SEPTEMBER, 11),
      times: [Day.build(2022, Month.SEPTEMBER, 11, 15)],
      duration: 1,
      durationUnit: 'hours',
    },
  };

  const event3 = {
    id: 3,
    data: event3Data,
    schedule: {
      on: Day.build(2022, Month.SEPTEMBER, 1),
      times: [Day.build(2022, Month.SEPTEMBER, 1, 13)],
      duration: 1,
      durationUnit: 'hours',
    },
  };

  const event4 = {
    id: 4,
    data: event4Data,
    schedule: {
      on: Day.build(2022, Month.SEPTEMBER, 2),
      times: [Day.build(2022, Month.SEPTEMBER, 2, 13)],
      duration: 1,
      durationUnit: 'hours',
    },
  };

  const event5 = {
    id: 4,
    data: event5Data,
    schedule: {
      on: Day.build(2022, Month.SEPTEMBER, 7),
      times: [Day.build(2022, Month.SEPTEMBER, 7, 13)],
      duration: 1,
      durationUnit: 'hours',
    },
  };

  allEvents.push(event1);
  allEvents.push(event2);
  allEvents.push(event3);
  allEvents.push(event4);
  allEvents.push(event5);

  return allEvents;
};

export const ChallengeList = [
  {
    title: 'Daily Challenge',
    challenge: '8',
    time: '5 min',
    play: '256',
    like: '72',
    timmer: { h: '08', m: '32', s: '44' },
    name: 'Impakt',
  },
  {
    title: 'Good Morning',
    challenge: '22',
    time: '18 min',
    name: 'Demideus',
  },
  {
    title: 'Power v3',
    challenge: '16',
    time: '12 min',
    play: '8',
    timmer: { h: '08', m: '32', s: '44' },
    name: 'Demideus',
  },
  {
    title: 'Power v3',
    challenge: '16',
    time: '19 min',
    timmer: { h: '08', m: '32', s: '44' },
    name: 'Demideus',
  },
];

export const ChallengeTab = ['My Routines', 'My Challenges', 'Impakt', 'ICONs', 'Community'];

export const GroupSettingTab = ['Edit group', 'Permissions', 'Requests', 'Members list'];
