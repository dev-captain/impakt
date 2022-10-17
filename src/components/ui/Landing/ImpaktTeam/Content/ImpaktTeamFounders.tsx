import { Text, Box } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const ImpaktTeamFounders: React.FC = () => {
  const { t } = useTranslation().i18n;

  const leadership = t('leadershipData.data', { returnObjects: true }) as object[];

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      padding={{ lgx: '0 350px', lg: '0 50px', base: '0 16px' }}
    >
      <Box width="100%" maxW="1544px" display="flex" justifyContent="center" flexDirection="column">
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          maxW="1544px"
          gap={{ md: '40px', base: '20px' }}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Text
            width="100%"
            color="#35485a"
            fontSize="36px"
            fontWeight="700"
            textTransform="uppercase"
            textAlign="center"
          >
            Founders
          </Text>
          {leadership.map((d: any) => (
            <Box width={{ lg: '27%', md: '30%', base: '100%' }}>
              <Card
                company={d.company}
                fname={d.fname}
                lname={d.lname}
                post={d.post}
                image={d.img}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImpaktTeamFounders;
