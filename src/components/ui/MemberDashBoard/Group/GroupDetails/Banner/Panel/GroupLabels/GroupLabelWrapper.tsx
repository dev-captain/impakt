import * as React from 'react';

import GroupLabelItem from './GroupLabelItem';

interface GroupLabelWrapperPropsI {
  items: {
    leftIcon: any;
    visible: boolean;
    labelDescription: string;
    rightIcon: any;
    onClick: () => void;
  }[];
}

const GroupLabelWrapper: React.FC<GroupLabelWrapperPropsI> = ({ items }) => {
  return (
    <>
      {items.map(({ onClick, leftIcon, rightIcon, visible, labelDescription }) =>
        visible ? (
          <GroupLabelItem
            key={labelDescription}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            labelDescription={labelDescription}
            // labelTitle={labelTitle}
            onClick={onClick}
          />
        ) : null,
      )}
    </>
  );
};
export default GroupLabelWrapper;
