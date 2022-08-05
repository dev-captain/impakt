import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { I } from '..';

interface ImpaktAccordionPropsI {
  items: { title: string; description: string }[];
}
const ImpaktAccordion: React.FC<ImpaktAccordionPropsI> = ({ items }) => {
  const [index, setIndex] = React.useState<number[]>([]);

  return (
    <Accordion w="full" index={index} allowToggle>
      <VStack w="full">
        {items.map(({ title, description }, i) => (
          <AccordionItem
            key={`accordion-item-${i + 1}`}
            w="100%"
            background="#20202E"
            borderRadius="1em"
            border="0"
            p="20px 20px 20px 32px"
            position="relative"
            onMouseEnter={() => {
              setIndex([i]);
            }}
            onMouseLeave={() => {
              setIndex([]);
            }}
          >
            {(props: any) => (
              <Box maxW="90%">
                <AccordionButton padding="0">
                  <Box flex="1" textAlign="left">
                    <Text
                      color={props.isExpanded ? 'gold' : 'white'}
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
                    transform={props.isExpanded ? 'rotate(180deg)' : '0'}
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

export default ImpaktAccordion;
