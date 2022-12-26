import { useColorModeValue, VStack } from '@chakra-ui/react';
import { C, S } from '@/components';
import { useEffect } from 'react';
import Images from '@/assets/images';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  return (
    <C.HeroLayout
      showFooterV2
      showNavbar
      minH="100vh"
      pos="relative"
      customPadding="200"
      justify="flex-start"
      align="flex-start"
      bgImage={bgImage}
    >
      <VStack
        color={textColor}
        w="full"
        px={{ base: '1em', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
        mt={{ base: '10px', lg: '15px' }}
      >
        <S.ChangePassword />
      </VStack>
    </C.HeroLayout>
  );
};

export default ChangePassword;
