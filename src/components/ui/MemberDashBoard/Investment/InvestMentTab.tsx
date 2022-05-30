import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import * as React from 'react';

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 700;
// font-size: 40px;
// line-height: 40px;
const InvestMentTab: React.FC = () => {
  return (
    <Tabs display="flex" w="100%" flexDirection="column">
      <TabList justifyContent="space-between" borderBottom="0">
        <Tab
          w="100% !important"
          maxW="400px"
          flexDirection="column"
          height="186px"
          backgroundColor="#566B84"
          borderRadius="14px"
          border="1px solid #F5F6FF"
          _selected={{ color: 'white', backgroundColor: '#F1C231' }}
        >
          <Text
            display="block"
            fontWeight="700"
            color="rgba(11, 23, 37, 1)"
            fontSize="40px"
            lineHeight="40px"
          >
            Phase 1
          </Text>
          <Text color="rgba(11, 23, 37, 1)" fontWeight="400" lineHeight="36px" fontSize="32px">
            Token Price Challange
          </Text>
        </Tab>
        <Tab
          w="100% !important"
          maxW="400px"
          flexDirection="column"
          height="186px"
          backgroundColor="#566B84"
          borderRadius="14px"
          border="1px solid #F5F6FF"
          _selected={{ color: 'white', backgroundColor: '#F1C231' }}
        >
          <Text
            display="block"
            fontWeight="700"
            color="rgba(11, 23, 37, 1)"
            fontSize="40px"
            lineHeight="40px"
          >
            Phase 2
          </Text>
          <Text color="rgba(11, 23, 37, 1)" fontWeight="400" lineHeight="36px" fontSize="32px">
            Community Presale
          </Text>
        </Tab>
        <Tab
          w="100% !important"
          maxW="400px"
          flexDirection="column"
          height="186px"
          backgroundColor="#566B84"
          borderRadius="14px"
          border="1px solid #F5F6FF"
          _selected={{ color: 'white', backgroundColor: '#F1C231' }}
        >
          <Text
            display="block"
            fontWeight="700"
            color="rgba(11, 23, 37, 1)"
            fontSize="40px"
            lineHeight="40px"
          >
            Phase 3
          </Text>
          <Text color="rgba(11, 23, 37, 1)" fontWeight="400" lineHeight="36px" fontSize="32px">
            Token Launch
          </Text>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InvestMentTab;
