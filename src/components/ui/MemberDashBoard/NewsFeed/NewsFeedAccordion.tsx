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
import truncH from 'trunc-html';

import { useAppSelector } from '../../../../hooks';

const NewsFeedAccordion: React.FC = () => {
  const [index, setIndex] = React.useState<number[]>([]);
  const newsFeeds = useAppSelector((state) => state.discourseReducer.news);
  console.log(newsFeeds.map(({ description }: any) => description.replace(/<[^>]*>/g, '')));

  return (
    <Accordion w="full" index={index} allowToggle>
      <VStack w="full">
        {newsFeeds.map(({ title, description, id }: any, i: number) => (
          <AccordionItem
            w="full"
            key={`news-accordion-item-${id}`}
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
              <Box maxW="90%">
                <AccordionButton padding="0">
                  <Box flex="1" textAlign="left">
                    <Text textStyle="semiBold5">{title}</Text>
                  </Box>
                  <Box
                    position="absolute"
                    top="15px"
                    right="20px"
                    transform={isExpanded ? 'rotate(180deg)' : '0'}
                    transition="transform 0.2s"
                    transformOrigin="center"
                  >
                    <I.DropIcon />
                  </Box>
                </AccordionButton>
                <AccordionPanel px="0">
                  <Box
                    textStyle="semiBold5"
                    overflow="hidden"
                    dangerouslySetInnerHTML={{
                      __html: `${
                        truncH(description, 200).html
                      }<a style="color:blue" target="_blank" href="https://discuss.impakt.com/t/${id}">Click here </a> to read more.`,
                    }}
                  />
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
