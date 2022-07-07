/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';
import RichIcon2 from '../../../icons/RichIcon2';

const YourBody: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);

  return (
    <HeroLayout
      spacing={0}
      pos="relative"
      bgColor="#121117"
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack id="general" maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack columnGap="48px" alignItems="flex-start" w="full">
            <VStack w="80%" rowGap="32px" justifyContent="flex-start" alignItems="flex-start">
              <Box id="our-ai-card-box" w="full">
                <InfoCard LeftLogo={<RichIcon2 />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      Our AI technology recognizes your gestures & movements in real time
                    </Text>
                  </VStack>
                </InfoCard>
              </Box>
              <Box id="computer-vision-box" w="full">
                <Text textStyle="semiBold5" letterSpacing="2px" color="#F04153">
                  COMPUTER VISION
                </Text>
              </Box>

              <Box id="your-body-headline-box" w="full">
                <Text textStyle="TitleBold64" letterSpacing="-2.5px" color="#fff">
                  Your body is
                </Text>
                <Text textStyle="TitleBold64" letterSpacing="-2.5px" color="#fff">
                  the controller.
                </Text>
              </Box>

              <Box id="your-body-headline-box" w="full">
                <Text textStyle="regular20" color="rgba(255, 255, 255, 0.75);">
                  All you need is a webcam or a phone camera.
                </Text>
              </Box>

              <Box id="get-the-bonus-box" w="full">
                <InfoCard
                  onToolTipClick={() => navigate('/download')}
                  tooltipLabel="Download"
                  isShowTooltip
                  LeftLogo={<YoutubeIcon />}
                >
                  <VStack alignItems="flex-start" color="white">
                    <Text textStyle="regular201" display="inline-block">
                      Get the
                      <Text
                        display="inline-block"
                        m="5px"
                        color="gold"
                        fontWeight="bold"
                        textStyle="regular201"
                      >
                        1000 GODL BONUS
                      </Text>
                    </Text>
                    <Text textStyle="semiBold14" color="whiteAlpha.400">
                      *download App & create account
                    </Text>
                  </VStack>
                </InfoCard>
              </Box>
            </VStack>
            <HStack id="right" w="full">
              <Box />
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default YourBody;
