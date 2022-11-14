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
            /* Glass */

            key={`accordion-item-${i + 1}`}
            w="100%"
            background="#20202E"
            borderRadius="1em"
            border="1px solid rgba(256,256,256,0.1)"
            p="20px 20px 20px 32px"
            position="relative"
            backdropFilter="blur(40px)"
            bgColor="rgba(28, 28, 40, 0.65)"
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
                  <Text
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="120%"
                    color="rgba(255, 255, 255, 0.85)"
                  >
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
