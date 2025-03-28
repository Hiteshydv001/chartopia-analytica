
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Zap
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Container className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ChartOpia Analytica
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Transform your data into beautiful visualizations and discover meaningful insights with AI-powered analysis
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Zap className="mr-2 h-5 w-5" />
              Start Now
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Chart Types</h3>
            <p className="text-slate-600">
              Create bar charts, line charts, pie charts, scatter plots and more with a simple interface
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-slate-600">
              Get intelligent insights about your data through our advanced AI trend analysis
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <LineChart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Data Import</h3>
            <p className="text-slate-600">
              Upload CSV/JSON files or paste data directly for quick visualization and analysis
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-2xl text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your data?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start creating beautiful charts and uncovering insights in your data today.
          </p>
          <Link to="/dashboard">
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
              Get Started
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
