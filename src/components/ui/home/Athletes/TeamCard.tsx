import { Box, Image, Text, VStack } from '@chakra-ui/react';

const TeamCard = ({ image, name, data }: { image: string; name: string; data: any }) => {
  return (
    <VStack>
      <VStack pos="relative" zIndex={1}>
        <Box maxW="330px" w="full" boxShadow="sm" rounded="lg">
          <Box>
            <Image
              rounded="lg"
              objectFit="cover"
              src={image}
              width={{ md: '189px', base: '130px' }}
              height={{ md: '189px', base: '130px' }}
              boxSizing="border-box"
              borderRadius="50%"
            />
          </Box>
        </Box>
      </VStack>
      <VStack
        align="center"
        justify="center"
        mt="0 !important"
        fontWeight="600"
        mb="10px !important"
        height="120px"
      >
        <Text
          align="center"
          mt="20px"
          fontSize={{ lg: '36px', base: '26px' }}
          color="#1C1C28"
          lineHeight="100%"
        >
          {name}
          <Box height="1px" background="#000" width="152px" margin="24px auto" />
        </Text>
      </VStack>
      <VStack
        width="100%"
        maxWidth="100%"
        align="center"
        justify="center"
        mt="0px !important"
        mb="10px !important"
      >
        <Box position="relative">
          <Box
            className="flipWebkit"
            borderRadius="8px"
            w="100%"
            style={{ backfaceVisibility: 'hidden' }}
            position="relative"
            zIndex="10"
            padding="12px 16px 12px 16px"
            box-sizing="border-box"
            transform="rotateX(0deg)"
            transitionDuration="0.2s"
            transitionProperty="transform, opacity"
            mt="2px"
          >
            {data.map((d: any) => (
              <Box display="flex" height="72px">
                <Text
                  textStyle="semiBold5"
                  margin="0 !important"
                  color=" #4E6070"
                  whiteSpace="pre-line"
                  dangerouslySetInnerHTML={{ __html: d }}
                  mt="20px"
                  textAlign="start"
                  fontSize={{ md: '16px', base: '14px' }}
                  mb={{ md: '16px !important', base: '4px !impotant' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
};
export default TeamCard;
