"use client";

import React from 'react';
import { BarChartUsageExample } from './BarChart';
import { AreaChartUsageExample } from './AreaChart';
import { PieChartUsageExample } from './PieChart';
import { LineChartUsageExample } from './LineChart';

const Chart = ({ chartData }) => {

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