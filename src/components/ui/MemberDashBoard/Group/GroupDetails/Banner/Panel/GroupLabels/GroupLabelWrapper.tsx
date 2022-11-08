import * as React from 'react';

import BannerLeftLabelItem from './GroupLabelItem';

interface GroupLabelWrapperPropsI {
  items: {
    leftIcon: React.ReactElement<any, any>;
    visible: boolean;
    labelTitle: string;
    labelDescription: string;
    rightIcon: React.ReactElement<any, any>;
  }[];
}

const GroupLabelWrapper: React.FC<GroupLabelWrapperPropsI> = ({ items }) => {
  return (
    <>
      {items.map(({ leftIcon, rightIcon, visible, labelDescription, labelTitle }) =>
        visible ? (
          <BannerLeftLabelItem
            key={labelTitle}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            labelDescription={labelDescription}
            labelTitle={labelTitle}
          />
        ) : null,
      )}
    </>
  );
};
export default GroupLabelWrapper;
