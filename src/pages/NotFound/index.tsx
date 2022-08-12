import {
  Button,
  HStack,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { C } from 'components';
import { useNavigate } from 'react-router-dom';
import { layoutPadding } from 'theme';
import NotFoundCard from './component/NotFoundCard';

const NotFound = () => {
  const navigate = useNavigate();
  const text = useColorModeValue('glass.100', 'glass.700');
  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
  const [isLessThan900] = useMediaQuery('(max-width: 900px)');

  return (
    <C.HeroLayout align="flex-start" justify="flex-start" showNavbar showFooter bgImage={bgImage}>
      <VStack minH="60vh" px={layoutPadding} color={text} w="full" align="center" justify="center">
        <HStack
          w="full"
          align="center"
          justify="center"
          minH="60vh"
          display={isLessThan900 ? 'none' : 'flex'}
        >
          <VStack minH="350px">
            <NotFoundCard title="It seems this page doesn’t exit." />
          </VStack>
          <Image src={Images.Common.Peter404} maxH="540px" />
          <VStack h="full" spacing="150px">
            <NotFoundCard title="Page not found" show404 />
            <NotFoundCard title="Something went wrong." />
          </VStack>
        </HStack>
        <VStack display={isLessThan900 ? 'flex' : 'none'}>
          <NotFoundCard title="Page not found" show404 />
          <Image src={Images.Common.Peter404} maxH="500px" />
        </VStack>
        <Button variant="accent" onClick={() => navigate('/')}>
          <Text textStyle="semiBold16" color="glass.100">
            Go Back Home
          </Text>
        </Button>
      </VStack>
    </C.HeroLayout>
  );
};

export default NotFound;
