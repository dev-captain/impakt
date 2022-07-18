import * as React from 'react';
import { Common } from 'components';
import { InputGroupPropsI } from './InputGroup';

interface InputBoxProps {
  inputItems: InputGroupPropsI[];
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
