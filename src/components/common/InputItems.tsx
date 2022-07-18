import * as React from 'react';
import { Common } from 'components';

interface InputBoxProps {
  inputItems: {
    leftIcon?: Element;
    rightIcon?: Element;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    helpText?: {
      onClick: () => void;
      text: string;
    };
  }[];
}
const InputItems: React.FC<InputBoxProps> = ({ inputItems }) => {
  return (
    <>
      {inputItems.map((props, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Common.InputGroup key={index} {...props} />
      ))}
    </>
  );
};
export default InputItems;
