
import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import { ChartData } from "../types/ChartData";
import { Card, CardContent } from "@/components/ui/card";

interface ChartDisplayProps {
  chartData: ChartData | null;
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ chartData }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartData && chartContainerRef.current) {
      const { plotly_data } = chartData;
      
      Plotly.newPlot(
        chartContainerRef.current,
        plotly_data.data,
        plotly_data.layout
      );
    }
  }, [chartData]);

  if (!chartData) return null;

  return (
    <Card className="w-full mt-6">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Chart Results</h2>
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
            Type: <span className="font-medium">{chartData.chart_type}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <span className="mr-4">X-Axis: <span className="font-medium">{chartData.x_axis}</span></span>
          <span>Y-Axis: <span className="font-medium">{chartData.y_axis}</span></span>
        </div>
        <div 
          ref={chartContainerRef} 
          className="w-full h-[400px] border border-gray-200 rounded-md"
          id="chartContainer"
        />
      </CardContent>
    </Card>
  );
};

export default ChartDisplay;
