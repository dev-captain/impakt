/* eslint-disable react/no-unused-prop-types */
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  VStack,
  Text,
} from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';

interface TopicsAccordionProps {
  topics: { title: string; description: string }[];
}
const TopicsAccordion: React.FC<TopicsAccordionProps> = ({ topics }) => {
  const [index, setIndex] = React.useState<number[]>([]);

  return (
    <Accordion w="full" index={index} allowToggle>
      <VStack w="full">
        {topics.map(({ title, description }, i) => (
          <AccordionItem
            w="100%"
            background="#20202E"
            borderRadius="1em"
            border="0"
            py="1em"
            px="2em"
            position="relative"
            onMouseEnter={() => {
              setIndex([i]);
            }}
            onMouseLeave={() => {
              setIndex([]);
            }}
          >
            {({ isExpanded }: { isExpanded: boolean }) => (
              <Box maxW="90%">
                <AccordionButton padding="0">
                  <Box flex="1" textAlign="left">
                    <Text
                      color={isExpanded ? 'gold' : 'white'}
                      transition="color .2s"
                      fontSize="20px"
                      lineHeight="32px"
                      fontWeight="400"
                    >
                      {title}
                    </Text>
                  </Box>
                  <Box
                    position="absolute"
                    top="20px"
                    right="20px"
                    transform={isExpanded ? 'rotate(180deg)' : '0'}
                    transition="transform 0.2s"
                    transformOrigin="center"
                  >
                    <I.DropIcon />
                  </Box>
                </AccordionButton>
                <AccordionPanel px="0" pb={4}>
                  <Text fontSize="20px" lineHeight="32px" fontWeight="400">
                    {description}
                  </Text>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        ))}
      </VStack>
    </Accordion>
  );
};

export default TopicsAccordion;
