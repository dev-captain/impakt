import * as React from 'react';

import GroupLabelItem from './GroupLabelItem';

interface GroupLabelWrapperPropsI {
  items: {
    leftIcon: any;
    visible: boolean;
    labelTitle: string;
    labelDescription: string;
    rightIcon: any;
    onClick: () => void;
  }[];
}

const GroupLabelWrapper: React.FC<GroupLabelWrapperPropsI> = ({ items }) => {
  return (
    <>
      {items.map(({ onClick, leftIcon, rightIcon, visible, labelDescription, labelTitle }) =>
        visible ? (
          <GroupLabelItem
            key={labelTitle}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            labelDescription={labelDescription}
            labelTitle={labelTitle}
            onClick={onClick}
          />
        ) : null,
      )}
    </>
  );
};
export default GroupLabelWrapper;
