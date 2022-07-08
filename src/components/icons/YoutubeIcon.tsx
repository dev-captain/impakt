import { Link } from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';

const breathKeyFrame = keyframes`
  0%{
    fill-opacity: 0;
  }

  50%{
    fill-opacity: 0.4;
  }



  100%{
    fill-opacity: 0;
  }
`;
const BorderPath = styled.path`
  d: path(
    'M18 12H58V0H18V12ZM64 18V58H76V18H64ZM58 64H18V76H58V64ZM12 58V18H0V58H12ZM18 64C14.6863 64 12 61.3137 12 58H0C0 67.9411 8.05887 76 18 76V64ZM64 58C64 61.3137 61.3137 64 58 64V76C67.9411 76 76 67.9411 76 58H64ZM58 12C61.3137 12 64 14.6863 64 18H76C76 8.05887 67.9411 0 58 0V12ZM18 0C8.05887 0 0 8.05887 0 18H12C12 14.6863 14.6863 12 18 12V0Z'
  );
  fill: #f04153;
  animation: ${breathKeyFrame} 1s linear infinite normal;
`;
const YoutubeIcon = () => (
  <Link
    href="/download"
    _focus={{
      boxShadow: 'none',
    }}
  >
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 18C6 11.3726 11.3726 6 18 6H58C64.6274 6 70 11.3726 70 18V58C70 64.6274 64.6274 70 58 70H18C11.3726 70 6 64.6274 6 58V18Z"
        fill="url(#paint0_linear_739_789)"
      />
      <path d="M29.332 22.8335V53.1668L53.1654 38.0002L29.332 22.8335Z" fill="white" />
      <BorderPath />
      {/* <path
      d="M18 12H58V0H18V12ZM64 18V58H76V18H64ZM58 64H18V76H58V64ZM12 58V18H0V58H12ZM18 64C14.6863 64 12 61.3137 12 58H0C0 67.9411 8.05887 76 18 76V64ZM64 58C64 61.3137 61.3137 64 58 64V76C67.9411 76 76 67.9411 76 58H64ZM58 12C61.3137 12 64 14.6863 64 18H76C76 8.05887 67.9411 0 58 0V12ZM18 0C8.05887 0 0 8.05887 0 18H12C12 14.6863 14.6863 12 18 12V0Z"
      fill="#F04153"
      fillOpacity="0.3"
    /> */}
      <defs>
        <linearGradient
          id="paint0_linear_739_789"
          x1="38"
          y1="6"
          x2="38"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F04153" />
          <stop offset="1" stopColor="#F91F35" />
        </linearGradient>
      </defs>
    </svg>
  </Link>
);

export default YoutubeIcon;
