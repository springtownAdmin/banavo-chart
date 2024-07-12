"use client";

import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'White Eco-Friendly Portable Air Cooler',
    'Total Sales': 677.0,
  },
  {
    name: 'Hose Hero 25ft Stainless Steel Garden Hose',
    'Total Sales': 588.0,
  },
  {
    name: 'The Jojoba Company Natural Certified Organic Jojoba (200 ML)',
    'Total Sales': 458.0,
  },
  {
    name: 'Diamond Celtic Knot Stud Earrings in Platinum Over Sterling Silver 0.25 ctw',
    'Total Sales': 412.0,
  },
  {
    name: 'Silk Genesis 1ct Luminous Diamond Collagen Silk 1.7oz',
    'Total Sales': 401.0,
  },
  
];

const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export function BarChartUsageExample({ data }) {

  // const chartdata = data.Xdata.map((item, i) => {

  //   return ({
  //     [data.keys[0]]: data.Xdata[i],
  //     [data.keys[1]]: data.Ydata[i]
  //   });

  // });

  const keys = Object.keys(data[0]);


  return (

    <div className='w-[1/2] p-4'>
      {/* <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Number of species threatened with extinction (2021)
      </h3> */}
      <BarChart
        className="mt-6"
        data={data}
        index={`${keys[0]}`}
        categories={[keys[1]]}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>

  );

}