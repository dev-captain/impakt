import React from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';

interface PropsI {}
const ChallengeCreateHeader: React.FC<PropsI> = () => {
  return (
    <VStack alignItems="flex-start" mt="24px" mb="24px" rowGap="24px" padding="4px">
      <HStack w="full" justifyContent="flex-start">
        <Text fontWeight="400" fontSize="18px" lineHeight="26px" color="#29323B">
          What would you like to challenge your members with?
        </Text>
      </HStack>
      {/* <HStack
                borderRadius="12px"
                // minW="248px"
                // w="25%"
                p="4px"
                bg="#EEF4F6"
              >
                {ChallengeTab.map((tab, index) => (
                  <ChallengeModalTabTitleText
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    onClick={() => {
                      setActiveTab(tab);
                    }}
                    isSelected={activeTab === tab}
                    title={tab.charAt(0).toUpperCase() + tab.slice(1)}
                  />
                ))}
              </HStack> */}
    </VStack>
  );
};

export default ChallengeCreateHeader;
