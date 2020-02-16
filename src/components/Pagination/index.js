import React from 'react'
import { Icon } from 'antd';
import { PaginationWrapper } from '../styled';

const Pagination = ({
  onClickNext, onClickPrevious
}) => {
  return (
    <PaginationWrapper>
      <span onClick={onClickPrevious}>
        <Icon type="left" /> Previous  
      </span>
      <span onClick={onClickNext}>
        Next <Icon type="right" />
      </span>
    </PaginationWrapper>
  )
};

export default Pagination;

