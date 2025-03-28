
export interface PlotlyData {
  data: Array<any>;
  layout: Record<string, any>;
}

export interface ChartData {
  chart_type: string;
  x_axis: string;
  y_axis: string;
  data: Record<string, any>;
  plotly_data: PlotlyData;
  status: string;
}
