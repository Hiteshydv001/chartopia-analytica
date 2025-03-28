
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileBarChart, Home, BarChart2, LineChart, PieChart } from "lucide-react";
import DataInputForm from "@/components/DataInputForm";
import ChartDisplay from "@/components/ChartDisplay";
import InsightsDisplay from "@/components/InsightsDisplay";
import ErrorDisplay from "@/components/ErrorDisplay";
import { ChartData } from "@/types/ChartData";
import { generateChart, analyzeTrends } from "@/services/api";
import { toast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Index = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [insights, setInsights] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateChart = async (formData: FormData) => {
    setError(null);
    setInsights(null);
    setIsLoading(true);
    
    try {
      const data = await generateChart(formData);
      setChartData(data);
      toast({
        title: "Chart generated successfully",
        description: `Created a ${data.chart_type} chart using your data.`,
      });
    } catch (err) {
      console.error("Error generating chart:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setChartData(null);
      toast({
        variant: "destructive",
        title: "Failed to generate chart",
        description: err instanceof Error ? err.message : "An unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeTrends = async (formData: FormData) => {
    setError(null);
    setChartData(null);
    setIsLoading(true);
    
    try {
      const data = await analyzeTrends(formData);
      setInsights(data.insights);
      toast({
        title: "Trend analysis complete",
        description: "AI has analyzed your data and generated insights.",
      });
    } catch (err) {
      console.error("Error analyzing trends:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setInsights(null);
      toast({
        variant: "destructive",
        title: "Failed to analyze trends",
        description: err instanceof Error ? err.message : "An unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced header with improved navigation */}
      <div className="bg-gradient-to-r from-blue-900 to-black text-white py-4 shadow-md">
        <Container className="max-w-6xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileBarChart className="h-7 w-7 text-blue-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">ChartOpia</span>
            </div>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-blue-800/50 text-white">Charts</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm">
                    <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-700 to-blue-900 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <BarChart2 className="h-6 w-6 text-white mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Data Visualization
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Transform your raw data into beautiful, insightful visualizations
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="flex items-center gap-2">
                              <BarChart2 className="h-4 w-4 text-blue-700" />
                              <div className="text-sm font-medium leading-none">Bar Charts</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Compare categories and visualize distributions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="flex items-center gap-2">
                              <LineChart className="h-4 w-4 text-blue-700" />
                              <div className="text-sm font-medium leading-none">Line Charts</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Track changes over time and identify trends
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="flex items-center gap-2">
                              <PieChart className="h-4 w-4 text-blue-700" />
                              <div className="text-sm font-medium leading-none">Pie Charts</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Show proportions and percentages of data
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-blue-800/50 text-white">Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Data Analysis</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Professional analysis of your business data
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">AI Insights</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Advanced AI analytics for deeper understanding
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Custom Dashboards</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Tailored dashboard solutions for your needs
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 focus:bg-blue-100"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Data Integration</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                              Connect your existing systems with our platform
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-blue-800/50 text-white`}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      <Container className="max-w-6xl py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Data Visualization Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Transform your data into beautiful visualizations and discover insights
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          <DataInputForm 
            onGenerateChart={handleGenerateChart}
            onAnalyzeTrends={handleAnalyzeTrends}
            isLoading={isLoading}
          />
          
          <ErrorDisplay error={error} />
          
          {chartData && <ChartDisplay chartData={chartData} />}
          
          {insights && <InsightsDisplay insights={insights} />}
        </div>
      </Container>
    </div>
  );
};

export default Index;
