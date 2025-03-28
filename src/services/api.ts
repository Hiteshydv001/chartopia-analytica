
import { ChartData } from "../types/ChartData";
import { InsightsData } from "../types/InsightsData";

const API_BASE_URL = "http://localhost:8000";

export async function generateChart(formData: FormData): Promise<ChartData> {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-chart/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to generate chart");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Chart generation failed: ${error.message}`);
    }
    throw new Error("Chart generation failed with an unknown error");
  }
}

export async function analyzeTrends(formData: FormData): Promise<InsightsData> {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze-trends/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to analyze trends");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Trend analysis failed: ${error.message}`);
    }
    throw new Error("Trend analysis failed with an unknown error");
  }
}
