import { Link } from '@chakra-ui/react';
import React, { useState } from 'react';
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

const BorderPath = styled.path<{ isMouseOver: boolean }>`
  fill: ${(p) => (p.isMouseOver ? '#f91f35' : '#f04153')};
  animation: ${breathKeyFrame} 4s linear infinite;
`;

const StopFirst = styled.stop<{ isMouseOver: boolean }>`
  stop-color: ${(p) => (p.isMouseOver ? '#f91f35' : '#f04153')};
  transition: stop-color 0.2s linear;
`;

const YoutubeIcon: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link
      href="/download"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => setIsMouseOver(false)}
      _focus={{
        boxShadow: 'none',
      }}
    >
      <svg
        width={isMobile ? '54' : '76'}
        height={isMobile ? '54' : '76'}
        viewBox={isMobile ? '0 0 54 54' : '0 0 76 76'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMobile ? (
          <path
            d="M5 13C5 8.58172 8.58172 5 13 5H41C45.4183 5 49 8.58172 49 13V41C49 45.4183 45.4183 49 41 49H13C8.58172 49 5 45.4183 5 41V13Z"
            fill="url(#paint0_linear_1076_9766)"
          />
        ) : (
          <path
            d="M6 18C6 11.3726 11.3726 6 18 6H58C64.6274 6 70 11.3726 70 18V58C70 64.6274 64.6274 70 58 70H18C11.3726 70 6 64.6274 6 58V18Z"
            fill="url(#paint0_linear_739_789)"
          />
        )}
        {isMobile ? (
          <path d="M21.041 16.5732V37.4274L37.4264 27.0003L21.041 16.5732Z" fill="white" />
        ) : (
          <path d="M29.332 22.8335V53.1668L53.1654 38.0002L29.332 22.8335Z" fill="white" />
        )}
        {isMobile ? (
          <BorderPath
            d="M13 9.125H41V0.875H13V9.125ZM44.875 13V41H53.125V13H44.875ZM41 44.875H13V53.125H41V44.875ZM9.125 41V13H0.875V41H9.125ZM13 44.875C10.8599 44.875 9.125 43.1401 9.125 41H0.875C0.875 47.6965 6.30355 53.125 13 53.125V44.875ZM44.875 41C44.875 43.1401 43.1401 44.875 41 44.875V53.125C47.6965 53.125 53.125 47.6965 53.125 41H44.875ZM41 9.125C43.1401 9.125 44.875 10.8599 44.875 13H53.125C53.125 6.30355 47.6965 0.875 41 0.875V9.125ZM13 0.875C6.30355 0.875 0.875 6.30355 0.875 13H9.125C9.125 10.8599 10.8599 9.125 13 9.125V0.875Z"
            isMouseOver={isMouseOver}
          />
        ) : (
          <BorderPath
            d="M18 12H58V0H18V12ZM64 18V58H76V18H64ZM58 64H18V76H58V64ZM12 58V18H0V58H12ZM18 64C14.6863 64 12 61.3137 12 58H0C0 67.9411 8.05887 76 18 76V64ZM64 58C64 61.3137 61.3137 64 58 64V76C67.9411 76 76 67.9411 76 58H64ZM58 12C61.3137 12 64 14.6863 64 18H76C76 8.05887 67.9411 0 58 0V12ZM18 0C8.05887 0 0 8.05887 0 18H12C12 14.6863 14.6863 12 18 12V0Z"
            isMouseOver={isMouseOver}
          />
        )}
        {/* <path
      d="M18 12H58V0H18V12ZM64 18V58H76V18H64ZM58 64H18V76H58V64ZM12 58V18H0V58H12ZM18 64C14.6863 64 12 61.3137 12 58H0C0 67.9411 8.05887 76 18 76V64ZM64 58C64 61.3137 61.3137 64 58 64V76C67.9411 76 76 67.9411 76 58H64ZM58 12C61.3137 12 64 14.6863 64 18H76C76 8.05887 67.9411 0 58 0V12ZM18 0C8.05887 0 0 8.05887 0 18H12C12 14.6863 14.6863 12 18 12V0Z"
      fill="#F04153"
      fillOpacity="0.3"
    /> */}
        <defs>
          {isMobile ? (
            <linearGradient
              id="paint0_linear_1076_9766"
              x1="27"
              y1="5"
              x2="27"
              y2="49"
              gradientUnits="userSpaceOnUse"
            >
              <StopFirst isMouseOver={isMouseOver} />
              <stop offset="1" stopColor="#F91F35" />
            </linearGradient>
          ) : (
            <linearGradient
              id="paint0_linear_739_789"
              x1="38"
              y1="6"
              x2="38"
              y2="70"
              gradientUnits="userSpaceOnUse"
            >
              <StopFirst isMouseOver={isMouseOver} />
              <stop offset="1" stopColor="#F91F35" />
            </linearGradient>
          )}
        </defs>
      </svg>
    </Link>
  );
};
export default YoutubeIcon;
