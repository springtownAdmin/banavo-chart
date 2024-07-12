"use client";

import React from 'react';
import { BarChartUsageExample } from './BarChart';
import { AreaChartUsageExample } from './AreaChart';
import { PieChartUsageExample } from './PieChart';
import { LineChartUsageExample } from './LineChart';

const Chart = ({ chartData }) => {

  const type = chartData.chart;

  if (type === 'Bar') {
    return <BarChartUsageExample data={chartData.data} />;
  }

  if(type === 'Area') {
    return <AreaChartUsageExample data={chartData.data} />
  }

  if(type === 'Pie') {
    return <PieChartUsageExample data={chartData.data} />
  }

  if(type === 'Line') {
    return <LineChartUsageExample data={chartData.data} />
  }

  return null;

  return (
    <div>
        {/* {<BarChartUsageExample data={chartData} />} */}
        <AreaChartUsageExample />
        {/* <PieChartUsageExample /> */}
        {/* <LineChartUsageExample /> */}
    </div>
  )

}

export default Chart