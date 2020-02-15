import { Layout, Breadcrumb } from 'antd';

import styled from 'styled-components';

const { Content } = Layout;

export const Container = styled(Content)`
  padding: 0px 20px;
  margin-bottom: 20px;
  /* Large devices */
  @media (min-width: 576px) {
    padding: 0px 50px;
  }
`;

export const BreadcrumbCustom = styled(Breadcrumb)`
  margin: 16px 0px;
`;