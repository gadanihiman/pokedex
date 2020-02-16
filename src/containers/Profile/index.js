import React from 'react';
import { ContentWrapper } from './styled';
import { BreadcrumbCustom } from '../app/styled';
import Profile from '../../components/Profile';

const DetailPage = () => {
  return (
    <>
      <BreadcrumbCustom>
        <BreadcrumbCustom.Item>My Pokemon</BreadcrumbCustom.Item>
      </BreadcrumbCustom>
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    </>
  );
}

export default DetailPage;
