
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import DataInputForm from "@/components/DataInputForm";
import ChartDisplay from "@/components/ChartDisplay";
import InsightsDisplay from "@/components/InsightsDisplay";
import ErrorDisplay from "@/components/ErrorDisplay";
import { ChartData } from "@/types/ChartData";
import { generateChart, analyzeTrends } from "@/services/api";
import { toast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen bg-gray-50 py-8">
      <Container className="max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            ChartOpia Analytica
          </h1>
          <Link to="/">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
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
