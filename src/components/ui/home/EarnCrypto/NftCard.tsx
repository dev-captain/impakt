import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../assets/images';

interface PropsI {}
const NftCard: React.FC<PropsI> = () => {
  const impaktNftCardRef = React.useRef<HTMLDivElement | null>(null);
  const impaktNftCardGlowRef = React.useRef<HTMLDivElement | null>(null);

  const handleNftCardMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!impaktNftCardRef.current || !impaktNftCardGlowRef.current) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - impaktNftCardRef.current.getBoundingClientRect().x;
    const topY = mouseY - impaktNftCardRef.current.getBoundingClientRect().y;
    const center = {
      x: leftX - impaktNftCardRef.current.getBoundingClientRect().width / 2,
      y: topY - impaktNftCardRef.current.getBoundingClientRect().height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    impaktNftCardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    impaktNftCardGlowRef.current.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + impaktNftCardRef.current.getBoundingClientRect().width / 2}px
      ${center.y * 2 + impaktNftCardRef.current.getBoundingClientRect().height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
  };

  const handleOnMouseLeaveNftCard = () => {
    if (!impaktNftCardRef.current) return;
    impaktNftCardRef.current.style.transform = '';
    impaktNftCardRef.current.style.background = '';
  };

  return (
    <Box
      ref={impaktNftCardRef}
      onMouseMove={handleNftCardMouseOver}
      onMouseLeave={handleOnMouseLeaveNftCard}
      backgroundImage={Images.impaktNFT.nftCard}
      backgroundSize="cover"
      id="nft-card-box"
      position="relative"
      w="497px"
      h="300px"
      transitionDuration="300ms"
      zIndex={2}
      transitionProperty="transform, box-shadow"
      transitionTimingFunction="ease-out"
      transform="rotate3d(0)"
      _hover={{ transitionDuration: '150ms' }}
    >
      {/* <Image src={Images.impaktNFT.nftCard} /> */}
      <Box
        id="glow"
        ref={impaktNftCardGlowRef}
        position="absolute"
        width="100%"
        height="100%"
        left="0"
        top="0"
        backgroundImage="radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)"
      />
    </Box>
  );
};
export default NftCard;
