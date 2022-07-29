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

interface NewsFeedAccordionProps {
  feeds: { title: string; description: string; href: string }[];
}

const NewsFeedAccordion: React.FC<NewsFeedAccordionProps> = ({ feeds }) => {
  const [index, setIndex] = React.useState<number[]>([]);

  return (
    <Accordion w="full" index={index} allowToggle>
      <VStack w="full">
        {feeds.map(({ title, description, href }, i) => (
          <AccordionItem
            key={`news-accordion-item-${i + 1}`}
            background="#20202E"
            borderRadius="1em"
            border="0"
            py="1em"
            px="1.5em"
            position="relative"
            onMouseEnter={() => {
              setIndex([i]);
            }}
            onMouseLeave={() => {
              setIndex([]);
            }}
          >
            {({ isExpanded }: { isExpanded: boolean }) => (
              <Box href={href} maxW="90%">
                <AccordionButton padding="0">
                  <Box flex="1" textAlign="left">
                    <Text textStyle="semiBold5">{title}</Text>
                  </Box>
                  <Box
                    position="absolute"
                    top="25px"
                    right="20px"
                    transform={isExpanded ? 'rotate(180deg)' : '0'}
                    transition="transform 0.2s"
                    transformOrigin="center"
                  >
                    <I.DropIcon />
                  </Box>
                </AccordionButton>
                <AccordionPanel px="0">
                  <Text textStyle="semiBold5">{description}</Text>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        ))}
      </VStack>
    </Accordion>
  );
};

export default NewsFeedAccordion;
