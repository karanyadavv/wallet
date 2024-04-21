// @ts-nocheck
"use client";
import prisma from '@repo/db/client';
import { AreaChart } from '@tremor/react';
import { useEffect, useState } from 'react';
import { OnRampTransactions } from './OnRampTransactions';

const chartdata = [
  {
    date: 'Jan 23',
    Balance: 167,
  },
  {
    date: 'Feb 23',
    Balance: 125,
  },
  {
    date: 'Mar 23',
    Balance: 156,
  },
  {
    date: 'Apr 23',
    Balance: 165,
  },
  {
    date: 'May 23',
    Balance: 153,
  },
  {
    date: 'Jun 23',
    Balance: 124,
  },
];



export default function AreaChartUsageExampleWithCustomTooltip() {

  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} INR
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      {/* <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Average BPM</h3> */}
      <AreaChart
        className="mt-4 h-72 fill-tremor-border fill-tremor-content"
        data={chartdata}
        index="date"
        categories={['Balance']}
        colors={['blue']}
        yAxisWidth={30}
        customTooltip={customTooltip}
        showAnimation={true}
        showLegend={false}
        showGridLines={true}
      />
    </>
  );
}