import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import request from '../../utils/request';
import { Avatar, Container, Row, TextInfo, Title, TitleInfo } from './styles';

type LatestCustomersProps = {
  className?: string;
};

type CustomerData = Array<{
  avatar: string;
  createdAt: string;
  email: string;
  id: string;
  lastPurchaseDate: string;
  lastPurchaseValue: string;
  name: string;
}>;

type CustomerObject = {
  avatar: string;
  createdAt: string;
  email: string;
  id: string;
  lastPurchaseDate: string;
  lastPurchaseValue: string;
  name: string;
};

function LatestCustomers({ className }: LatestCustomersProps) {
  const [customers, setCustomers] = useState<CustomerData>();
  const alert = useAlert();

  const getCustomers = async () => {
    const { data, error } = await request({ method: 'GET', path: '/users' });

    if (error) {
      alert.error(error || 'Error on get customers!');
      return;
    }
    setCustomers(data);
  };

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={className}>
      <Title>Latest Customers</Title>

      {customers?.map((item: CustomerObject, index: number) => {
        if (index > 5) {
          return;
        }
        // eslint-disable-next-line consistent-return
        return (
          <Row>
            <div className="avatar-and-info">
              <Avatar src={item?.avatar} />
              <div className="info">
                <TitleInfo>{item?.name}</TitleInfo>
                <TextInfo>{item?.email}</TextInfo>
              </div>
            </div>
            <div>
              <TitleInfo>$</TitleInfo>
              <TitleInfo>{Number(item?.lastPurchaseValue).toFixed()}</TitleInfo>
            </div>
          </Row>
        );
      })}
    </Container>
  );
}

export default LatestCustomers;
