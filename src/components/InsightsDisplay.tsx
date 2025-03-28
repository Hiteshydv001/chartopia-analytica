
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

interface InsightsDisplayProps {
  insights: string | null;
}

const InsightsDisplay: React.FC<InsightsDisplayProps> = ({ insights }) => {
  if (!insights) return null;

  // Split the insights into paragraphs for better rendering
  const paragraphs = insights.split('\n').filter(p => p.trim().length > 0);

  return (
    <Card className="w-full mt-6">
      <CardHeader className="pb-3 flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-indigo-500" />
        <CardTitle>AI-Generated Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="insights text-gray-700 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightsDisplay;
