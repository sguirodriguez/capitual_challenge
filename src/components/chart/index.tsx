/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { useAlert } from 'react-alert';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { theme } from '../../styles/theme/generalColors';
import request from '../../utils/request';
import SVGIcon from '../svgIcon';
import {
  Container,
  ContainerTooltip,
  TextToolTip,
  Title,
  TitleAndIcon,
  TitleToolTip,
  ValueToolTip,
} from './styles';

type ChartData = Array<{ fullDate: string; month: string; order: Date; sales: number }>;

type ObjectResponseApi = { createdAt: string; id: string; price: string; productName: string };

function Chart() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  const alert = useAlert();

  const sizeOfThings = () => {
    const width = window.innerWidth;

    return setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      sizeOfThings();
    });
    sizeOfThings();
  }, []);

  const checkDate = (date: string, format: string) => {
    const modifyDate = date?.toString()?.split('T')[0];
    const splitDate = modifyDate?.split('-');
    const year: string = splitDate[0];
    const month: string = splitDate[1];
    const day: string = splitDate[2];

    const translatorMonth: any = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'March',
      '04': 'Apr',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Octo',
      '11': 'Nov',
      '12': 'Dec',
    };

    if (format === 'month') {
      return `${day} ${translatorMonth[String(month)]}`;
    }

    if (format === 'year') {
      return `${day} ${translatorMonth[String(month)]}, ${year}`;
    }

    return `${year}-${month}-${day}`;
  };

  const getSales = async () => {
    const { data, error } = await request({ method: 'GET', path: '/sales' });

    if (error) {
      alert.error(error || 'Error on get sales!');
      return;
    }

    const newArray: ChartData = data?.map((item: ObjectResponseApi) => ({
      month: checkDate(item?.createdAt, 'month'),
      sales: Number(item?.price),
      fullDate: checkDate(item?.createdAt, 'year'),
      order: new Date(checkDate(item?.createdAt, 'forOrder')),
    }));

    setChartData(newArray);
  };
  useEffect(() => {
    getSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function orderArray(array: ChartData | null) {
    return array?.sort((a: any, b: any) => a.order - b.order);
  }

  const arrayOrdened = orderArray(chartData);

  function CustomTooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
    if (active && payload && payload.length) {
      return (
        <ContainerTooltip>
          <TitleToolTip>{`${payload[0]?.payload?.fullDate}`}</TitleToolTip>
          <div className="sales">
            <div className="circle" />
            <TextToolTip>Sales:</TextToolTip>
            <ValueToolTip>{`$${payload[0]?.payload?.sales}K`}</ValueToolTip>
          </div>
        </ContainerTooltip>
      );
    }

    return null;
  }

  return (
    <Container>
      <TitleAndIcon>
        <Title>Sales</Title>
        <SVGIcon iconName="exclamationCircle" />
      </TitleAndIcon>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={510}
          height={100}
          data={arrayOrdened}
          margin={{
            top: 40,
            right: 10,
            left: 10,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={30}
            angle={windowWidth < 768 ? -25 : 0}
            interval="preserveStartEnd"
            ticks={['04 Octo', '07 Jan', '23 Feb', '10 May', '18 June', '22 Sep']}
          />

          <YAxis tickLine={false} axisLine={false} tickMargin={20} hide={windowWidth < 768} />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} />

          <Line
            type="monotone"
            dataKey="sales"
            stroke={theme.colors.secondaryDefault}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
