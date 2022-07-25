/* eslint-disable react/no-unused-prop-types */
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';

interface NewsFeedAccordionProps {
  feeds: { title: string; description: string; href: string }[];
}
const NewsFeedAccordion: React.FC<NewsFeedAccordionProps> = ({ feeds }) => {
  const [index, setIndex] = React.useState<number[]>([]);

  return (
    <Accordion index={index} allowToggle>
      <VStack>
        {feeds.map(({ title, description, href }, i) => (
          <AccordionItem
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
                    {title}
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
                <AccordionPanel px="0" pb={4}>
                  {description}
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
