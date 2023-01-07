import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { truncateText } from '../../utils/maskAndValidators';
import request from '../../utils/request';
import { Container, Row, TitleInfo, TextInfo, Title } from './styles';

type TopProductsProps = {
  className?: string;
};

function TopProducts({ className }: TopProductsProps) {
  const [products, setProducts] = useState<any[]>();
  const alert = useAlert();

  const getProducts = async () => {
    const { data, error } = await request({ method: 'GET', path: '/products' });

    if (error) {
      alert.error(error || 'Error on get products!');
      return;
    }
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={className}>
      <Title>Top Products</Title>

      {products?.map((item, index) => {
        if (index > 5) {
          return;
        }
        // eslint-disable-next-line consistent-return
        return (
          <Row>
            <div className="left">
              <TitleInfo>{item?.name}</TitleInfo>
              <TextInfo>{truncateText(item?.description, 32)}</TextInfo>
            </div>

            <div className="right">
              <TitleInfo>{Number(item?.totalSales).toFixed()}</TitleInfo>
              <TextInfo style={{ fontSize: '1rem', marginLeft: 5 }}>Sales</TextInfo>
            </div>
          </Row>
        );
      })}
    </Container>
  );
}

export default TopProducts;
