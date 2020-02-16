import React from 'react';
import { ContentWrapper } from './styled';
import { BreadcrumbCustom } from '../app/styled';

const DetailPage = () => {
  return (
    <>
      <BreadcrumbCustom>
        <BreadcrumbCustom.Item>Profile</BreadcrumbCustom.Item>
      </BreadcrumbCustom>
      <ContentWrapper>
        {/* <Profile /> */}
        <h1>Profile</h1>
      </ContentWrapper>
    </>
  );
}

export default DetailPage;
