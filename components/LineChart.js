"use client";

import { Card, LineChart, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
    {
      date: '2007',
      AnnualSales: 63296.18,
    },
    {
      date: '2008',
      AnnualSales: 26951.0,
    },
    {
      date: '2009',
      AnnualSales: 26355.16,
    },
    {
      date: '2010',
      AnnualSales: 76382.04,
    },
    {
      date: '2011',
      AnnualSales: 150917.07,
    },
    {
      date: '2012',
      AnnualSales: 187669.89,
    },
    {
      date: '2013',
      AnnualSales: 282833.96,
    },
    {
      date: '2014',
      AnnualSales: 372088.87,
    },
    {
      date: '2015',
      AnnualSales: 113753146.71,
    },
    {
      date: '2016',
      AnnualSales: 177103264.77,
    },
    {
      date: '2017',
      AnnualSales: 193440206.44,
    },
    {
      date: '2018',
      AnnualSales: 212971962.99,
    },
    {
      date: '2019',
      AnnualSales: 253584528.02,
    },
    {
      date: '2020',
      AnnualSales: 311640587.61,
    },
    {
      date: '2021',
      AnnualSales: 355220117.54,
    },
    {
      date: '2022',
      AnnualSales: 341836606.41,
    },
    {
      date: '2023',
      AnnualSales: 354744306.25,
    },
    {
      date: '2024',
      AnnualSales: 176396394.43,
    }
];
  
const summary = [
    {
      name: 'Total Annual Sales',
      value: data.reduce((sum, record) => sum + record.AnnualSales, 0),
    }
];

const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
    'Total Annual Sales': 'bg-blue-500',
};
  
export const LineChartUsageExample = () => {
    return (
        <Card className="sm:mx-auto sm:max-w-md w-[400px]">
            <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Annual Sales Over Years
            </h3>
            <LineChart
                data={data}
                index="date"
                categories={['AnnualSales']}
                colors={['blue']}
                valueFormatter={valueFormatter}
                showLegend={false}
                showYAxis={true}
                startEndOnly={true}
                className="mt-6 h-32"
            />
            <List className="mt-2">
                {summary.map((item) => (
                    <ListItem key={item.name}>
                        <div className="flex items-center space-x-2">
                            <span
                                className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                                aria-hidden={true}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            {valueFormatter(item.value)}
                        </span>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};
