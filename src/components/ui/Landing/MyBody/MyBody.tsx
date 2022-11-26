import React from 'react';
import MyBodyHeader from './Header';
import MyBodyContent from './Content';
import MyBodyLayout from './MyBodyLayout';

const MyBody: React.FC = () => {
  return (
    <MyBodyLayout>
      <MyBodyHeader />
      <MyBodyContent />
    </MyBodyLayout>
  );
};

export default MyBody;
