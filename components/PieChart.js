"use client";

import { Card, DonutChart, List, ListItem } from '@tremor/react';
import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
  
// const data = [
//     {
//       name: 'Travel',
//       amount: 6730,
//       share: '32.1%',
//       color: 'bg-cyan-500',
//     },

//     {
//       name: 'IT & equipment',
//       amount: 4120,
//       share: '19.6%',
//       color: 'bg-blue-500',
//     },

//     {
//       name: 'Training & development',
//       amount: 3920,
//       share: '18.6%',
//       color: 'bg-indigo-500',
//     },

//     {
//       name: 'Office supplies',
//       amount: 3210,
//       share: '15.3%',
//       color: 'bg-violet-500',
//     },

//     {
//       name: 'Communication',
//       amount: 3010,
//       share: '14.3%',
//       color: 'bg-fuchsia-500',
//     },
// ];

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
  }
];
  
const currencyFormatter = (number) => {
    return '$' + Intl.NumberFormat('us').format(number).toString();
};
  
export const PieChartUsageExample = () => {
    return (
        <>
          <Card className="sm:mx-auto sm:max-w-lg">
            {/* <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Total expenses by category
            </h3> */}
            <DonutChart
              className="mt-8 h-[200px]"
              data={chartdata}
              category="Total Sales"
              variant='pie'
              index="name"
              valueFormatter={currencyFormatter}
              showTooltip={true}
              colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia', 'red']}
            />
            <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
              <span>Category</span>
              {/* <span>Amount / Share</span> */}
            </p>
            <List className="mt-2">
              {chartdata.map((item) => (
                <ListItem key={item.name} className="space-x-6">
                  <div className="flex items-center space-x-2.5 truncate">
                    <span
                      className={classNames(
                        item.color,
                        'h-2.5 w-2.5 shrink-0 rounded-sm',
                      )}
                      aria-hidden={true}
                    />
                    <span className="truncate dark:text-dark-tremor-content-emphasis">
                      {item.name}
                    </span>
                  </div>
                </ListItem>
              ))}
            </List>
          </Card>
        </>
      );
}
