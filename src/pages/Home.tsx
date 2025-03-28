
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Code, 
  FileBarChart
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="py-6 px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FileBarChart className="h-8 w-8 text-blue-500" />
          <span className="text-2xl font-bold">ChartOpia</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Use Cases</a>
        </div>
        
        <Link to="/dashboard">
          <Button className="rounded-full bg-white text-black hover:bg-gray-200">
            Start a project
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold text-center max-w-5xl leading-tight">
          Creating better
          <span className="block">
            <span className="text-gray-400">data visualization</span>
            <span className="relative px-2">
              <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-lg rotate-3 transform">AI</span>
            </span>
            for
          </span>
          <span className="text-gray-400">businesses</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-center mt-8">
          Our AI-powered tools and visualizations know what's
          missing and what converts your data into insights.
        </p>
        
        <Link to="/dashboard" className="mt-12">
          <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-white text-black hover:bg-gray-200">
            Start a project
          </Button>
        </Link>
      </div>

      {/* Testimonials/Clients */}
      <div className="py-10 px-8 md:px-16 border-t border-gray-800">
        <p className="text-xl text-center mb-10">Only Winners Rely on ChartOpia</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          <div className="text-xl font-bold">TECHSTACK</div>
          <div className="text-xl font-bold">DATAHOUSE</div>
          <div className="text-xl font-bold">VIZUALLY</div>
          <div className="text-xl font-bold">DATATRAVELS</div>
          <div className="text-xl font-bold">INSIGHTXPO</div>
        </div>
      </div>

      {/* Process Section */}
      <div id="how-it-works" className="py-24 px-8 md:px-16 bg-white text-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-0">How We Do It?</h2>
            <p className="text-xl text-gray-600 md:max-w-md">Process to make every data visualization a success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative bg-green-400 rounded-xl p-6 overflow-hidden">
              <div className="mb-4 flex justify-between">
                <p className="font-semibold">Step - 01</p>
                <div className="bg-white p-2 rounded-full">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Input</h3>
              <p className="text-gray-800">
                We gather your data requirements, meticulously understanding every aspect of the data set and the objectives you aim to accomplish.
              </p>
              <Link to="/dashboard" className="block mt-6">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Upload Data</Button>
              </Link>
            </div>
            
            {/* Step 2 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="mb-4 flex justify-between">
                <p className="font-semibold">Step - 02</p>
                <div className="bg-gray-100 p-2 rounded-full">
                  <PieChart className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analyze</h3>
              <p className="text-gray-600">
                After comprehensively understanding the data structure, we'll analyze patterns and provide you with relevant insights about trends and correlations.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="mb-4 flex justify-between">
                <p className="font-semibold">Step - 03</p>
                <div className="bg-gray-100 p-2 rounded-full">
                  <LineChart className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visualize</h3>
              <p className="text-gray-600">
                Once the data is analyzed, we will create beautiful, interactive visualizations that highlight the key insights, ensuring an excellent user experience.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="mb-4 flex justify-between">
                <p className="font-semibold">Step - 04</p>
                <div className="bg-gray-100 p-2 rounded-full">
                  <Code className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interpret</h3>
              <p className="text-gray-600">
                Our AI will interpret the visualizations, providing text explanations of what the data means for your business, paying close attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 px-8 md:px-16 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Features that make us special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="bg-blue-500 p-3 rounded-full w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Chart Types</h3>
              <p className="text-gray-400">
                Create bar charts, line charts, pie charts, scatter plots and more with a simple interface. Our AI suggests the best chart type for your data.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="bg-purple-500 p-3 rounded-full w-fit mb-6">
                <PieChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-400">
                Get intelligent insights about your data through our advanced AI trend analysis. Uncover hidden patterns you might have missed.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="bg-green-500 p-3 rounded-full w-fit mb-6">
                <LineChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Data Import</h3>
              <p className="text-gray-400">
                Upload CSV/JSON files or paste data directly for quick visualization and analysis. No coding skills required.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/dashboard">
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-200">
                Try These Features
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FileBarChart className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">ChartOpia</span>
          </div>
          
          <p className="text-gray-500">© 2023 ChartOpia. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
