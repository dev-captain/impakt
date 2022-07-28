import { Box, FormControl, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useForm } from 'hooks';

const WalletAddressForm: React.FC = () => {
  const {
    // handleSubmit,
    getValues,
    setValue,
  } = useForm({
    defaultValues: { walletAddress: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="32px"
      // onSubmit={handleSubmit()}
      as="form"
      autoComplete="off"
      w="full"
    >
      <HStack
        rowGap="1em"
        columnGap="0.5em"
        spacing={2}
        w="full"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <Box w="full">
          <Common.InputGroup
            placeholder="Enter wallet address"
            name="walletAddress"
            onChange={onChange}
            leftIcon={<I.EthIcon />}
          />
        </Box>
        <Box w={{ sm: '100%', md: '28%' }} marginLeft="0 !important">
          <Common.ImpaktButton
            disabled={!getValues('walletAddress')}
            minW={{ base: '100%', md: '137px' }}
            size="lg"
          >
            Submit
          </Common.ImpaktButton>
        </Box>
      </HStack>
    </FormControl>
  );
};

export default WalletAddressForm;
