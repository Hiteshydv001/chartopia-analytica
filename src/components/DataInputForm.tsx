
import React, { useState, ChangeEvent } from "react";
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  ScatterChart, 
  GridIcon, 
  UploadCloud, 
  FileJson, 
  FileSpreadsheet,
  RefreshCw
} from "lucide-react";

interface DataInputFormProps {
  onGenerateChart: (formData: FormData) => Promise<void>;
  onAnalyzeTrends: (formData: FormData) => Promise<void>;
  isLoading: boolean;
}

type ChartType = "AI Suggested" | "Line" | "Bar" | "Pie" | "Scatter" | "Heatmap";
type DataSourceType = "file" | "json" | "manual";

interface FormValues {
  query: string;
  chartType: ChartType;
  dataType: DataSourceType;
  file: FileList | null;
  jsonData: string;
  manualData: string;
  trendsQuery: string;
  trendsFile: FileList | null;
}

const chartTypeIcons: Record<ChartType, React.ReactNode> = {
  "AI Suggested": <RefreshCw className="h-4 w-4" />,
  "Line": <LineChart className="h-4 w-4" />,
  "Bar": <BarChart3 className="h-4 w-4" />,
  "Pie": <PieChart className="h-4 w-4" />,
  "Scatter": <ScatterChart className="h-4 w-4" />,
  "Heatmap": <GridIcon className="h-4 w-4" />
};

const dataTypeIcons: Record<DataSourceType, React.ReactNode> = {
  "file": <UploadCloud className="h-4 w-4" />,
  "json": <FileJson className="h-4 w-4" />,
  "manual": <FileSpreadsheet className="h-4 w-4" />
};

const DataInputForm: React.FC<DataInputFormProps> = ({ 
  onGenerateChart, 
  onAnalyzeTrends,
  isLoading 
}) => {
  const [activeTab, setActiveTab] = useState<"chart" | "trends">("chart");
  
  const form = useForm<FormValues>({
    defaultValues: {
      query: "",
      chartType: "AI Suggested",
      dataType: "file",
      file: null,
      jsonData: "",
      manualData: "",
      trendsQuery: "",
      trendsFile: null
    }
  });
  
  const dataType = form.watch("dataType");

  const handleChartSubmit = async (values: FormValues) => {
    const formData = new FormData();
    formData.append("query", values.query);
    formData.append("data_type", values.dataType);
    
    if (values.chartType !== "AI Suggested") {
      formData.append("chart_type", values.chartType.toLowerCase());
    }
    
    if (values.dataType === "file" && values.file && values.file.length > 0) {
      formData.append("file", values.file[0]);
    } else if (values.dataType === "json" && values.jsonData) {
      formData.append("json_data", values.jsonData);
    } else if (values.dataType === "manual" && values.manualData) {
      formData.append("manual_data", values.manualData);
    }
    
    await onGenerateChart(formData);
  };
  
  const handleTrendsSubmit = async (values: FormValues) => {
    if (!values.trendsFile || values.trendsFile.length === 0) {
      form.setError("trendsFile", { 
        type: "required", 
        message: "Please upload a file for trend analysis" 
      });
      return;
    }
    
    const formData = new FormData();
    formData.append("query", values.trendsQuery);
    formData.append("file", values.trendsFile[0]);
    
    await onAnalyzeTrends(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Data Visualization & Analysis</CardTitle>
        <CardDescription>
          Upload data, select visualization options, and let AI generate insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" value={activeTab} onValueChange={(value) => setActiveTab(value as "chart" | "trends")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="chart">Generate Chart</TabsTrigger>
            <TabsTrigger value="trends">Analyze Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chart">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleChartSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="query"
                  rules={{ required: "Please enter a query" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What would you like to visualize?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Show me sales trends over time" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="chartType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chart Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {(Object.keys(chartTypeIcons) as ChartType[]).map((type) => (
                              <SelectItem key={type} value={type}>
                                <div className="flex items-center">
                                  {chartTypeIcons[type]}
                                  <span className="ml-2">{type}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dataType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Source</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {(Object.keys(dataTypeIcons) as DataSourceType[]).map((type) => (
                              <SelectItem key={type} value={type}>
                                <div className="flex items-center">
                                  {dataTypeIcons[type]}
                                  <span className="ml-2">{type === "file" ? "Upload File" : type === "json" ? "JSON Data" : "Manual CSV"}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {dataType === "file" && (
                  <FormField
                    control={form.control}
                    name="file"
                    rules={{ required: dataType === "file" ? "Please upload a file" : false }}
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel>Upload CSV/JSON File</FormLabel>
                        <FormControl>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <Input
                              {...fieldProps}
                              type="file"
                              accept=".csv,.json"
                              className="hidden"
                              onChange={(e) => onChange(e.target.files)}
                              id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                              <UploadCloud className="h-8 w-8 text-gray-400 mb-2" />
                              <span className="text-sm font-medium text-gray-700">
                                {value && value.length > 0 ? value[0].name : "Drop files here or click to browse"}
                              </span>
                              <p className="text-xs text-gray-500 mt-1">
                                Supports CSV and JSON files
                              </p>
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                
                {dataType === "json" && (
                  <FormField
                    control={form.control}
                    name="jsonData"
                    rules={{ required: dataType === "json" ? "Please enter JSON data" : false }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>JSON Data</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder='{"Date": ["2023-01-01", "2023-02-01"], "Sales": [100, 150]}'
                            className="h-32 font-mono text-sm"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                
                {dataType === "manual" && (
                  <FormField
                    control={form.control}
                    name="manualData"
                    rules={{ required: dataType === "manual" ? "Please enter CSV data" : false }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Manual CSV Data</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Date,Sales&#10;2023-01-01,100&#10;2023-02-01,150"
                            className="h-32 font-mono text-sm"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating Chart...
                    </>
                  ) : (
                    "Generate Chart"
                  )}
                </Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="trends">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleTrendsSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="trendsQuery"
                  rules={{ required: "Please enter a query" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What trends would you like to analyze?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., What are the sales trends?" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="trendsFile"
                  rules={{ required: "Please upload a file for analysis" }}
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Upload CSV File</FormLabel>
                      <FormControl>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                          <Input
                            {...fieldProps}
                            type="file"
                            accept=".csv"
                            className="hidden"
                            onChange={(e) => onChange(e.target.files)}
                            id="trends-file-upload"
                          />
                          <label htmlFor="trends-file-upload" className="cursor-pointer flex flex-col items-center">
                            <UploadCloud className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {value && value.length > 0 ? value[0].name : "Drop CSV file here or click to browse"}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              Only CSV files are supported for trend analysis
                            </p>
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Trends...
                    </>
                  ) : (
                    "Analyze Trends"
                  )}
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataInputForm;
