import { FormLabel, Box, Link } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface InputLabelPropsI {
  whiteMode?: boolean;
  isSmallLabel?: boolean;
  label?: string;
  helpText?: {
    onClick?: () => void;
    text?: string;
    href?: string;
  };
}

const InputLabel: React.FC<InputLabelPropsI> = ({ whiteMode, isSmallLabel, label, helpText }) => {
  return label ? (
    <FormLabel
      justifyContent="space-between"
      display="flex"
      w="full"
      color={whiteMode ? 'rgba(78, 96, 112, 1)' : 'rgba(255, 255, 255, 0.85)'}
      lineHeight="120%"
      fontSize={isSmallLabel ? '14px' : '16px'}
      fontWeight={isSmallLabel ? '400' : '600'}
    >
      <Box as="p" textStyle="inherit">
        {label}
        {label.length > 1 && ':'}
      </Box>
      {helpText && helpText.href && (
        <Link
          as={ReactRouterLink}
          to={helpText.href ?? '#'}
          onClick={helpText.onClick}
          tabIndex={-1}
          textDecor="none !important"
          cursor="pointer"
          textColor="impaktRed"
        >
          {helpText.text}
        </Link>
      )}
      {helpText && !helpText.href && (
        <Box tabIndex={-1} cursor="pointer" onClick={helpText?.onClick} color="impaktRed">
          {helpText?.text}
        </Box>
      )}
    </FormLabel>
  ) : null;
};

export default InputLabel;
