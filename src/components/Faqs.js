import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import FaqList from '../Data/faqs.json';
const Faqs = ({ index, setIndex }) => {
  return (
    <Flex direction="column" p="4">
      <Box mb="8">
        <Heading size="md">Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {FaqList.map(faq => (
          <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
            </AccordionButton>
            <AccordionPanel>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default Faqs;
