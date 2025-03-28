
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Code, 
  FileBarChart,
  ChevronRight,
  Settings,
  Smartphone,
  FileCode,
  ArrowRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
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

      {/* Testimonials Section */}
      <div id="testimonials" className="py-24 px-8 md:px-16 bg-gray-50 text-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">What clients say</h2>
            <p className="text-xl text-gray-600">Team of data visualization experts creating value-added insights that act as a business catalyst</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Pleasure working with ChartOpia on DataStack launch!</h3>
              
              <p className="text-gray-600 mb-8">
                Was a pleasure working with ChartOpia on launching DataStack. They understood the vision and worked efficiently, with great communications, to execute it. Looking forward to working with them again!
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/41.jpg" />
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Robert Anderson</p>
                  <p className="text-sm text-gray-500">CEO, DataStack Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">ChartOpia's human-centered design exceeded expectations.</h3>
              
              <p className="text-gray-600 mb-8">
                ChartOpia's human-centered design approach made our collaboration smooth and effective. They delivered as promised, were receptive to feedback, and the redesign met our expectations. Highly recommend them for any data visualization project.
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/41.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Jennifer Davis</p>
                  <p className="text-sm text-gray-500">Investments at TechGrowth</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">ChartOpia understood our needs, improved our conversions.</h3>
              
              <p className="text-gray-600 mb-8">
                ChartOpia took the time to understand my industry. They knew what our visitors wanted, and they did an exceptional job to meet those needs. We've seen great improvements in impression and conversion after the redesign. I vouch for them!
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <AvatarFallback>MN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Michael Nguyen</p>
                  <p className="text-sm text-gray-500">CEO at InsightXpo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 px-8 md:px-16 bg-gray-100 text-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-0">ChartOpia's Big Services</h2>
            <p className="text-xl text-gray-600 md:max-w-md">We're not a jack of all trades; just masters of 4 specific services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/be11e2f3-e18a-4c41-a817-18fe32b0820e.png" 
                  alt="Data to Visualization Service" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Data To Visualization</h3>
              <p className="text-gray-600 text-center mb-4">
                Experience data transformations that bring clarity and insights. Our visualizations blend stunning visuals, optimized for understanding and seamless functionality.
              </p>
              <div className="flex justify-center">
                <Link to="/dashboard">
                  <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                    Try Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/e1dd8c88-18da-4bc0-aba0-1a3f6e7987f8.png" 
                  alt="Design and Development Service" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Advanced Analytics & Design</h3>
              <p className="text-gray-600 text-center mb-4">
                Our analysts know which visual artistry will hook your audience and grab their attention, aligning with your brand's data storytelling needs.
              </p>
              <div className="flex justify-center">
                <Link to="/dashboard">
                  <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-lg">
                <FileCode className="h-24 w-24 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Custom Data Solutions</h3>
              <p className="text-gray-600 text-center mb-4">
                We transform complex data sets into interactive, custom solutions that provide real-time insights and decision-making capabilities for your business.
              </p>
              <div className="flex justify-center">
                <Link to="/dashboard">
                  <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-lg">
                <Settings className="h-24 w-24 text-gray-400" />
                <Smartphone className="h-16 w-16 ml-4 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Dashboard Maintenance</h3>
              <p className="text-gray-600 text-center mb-4">
                Keep your data visualizations up-to-date and optimized with our maintenance services. We ensure your dashboards stay relevant and functional.
              </p>
              <div className="flex justify-center">
                <Link to="/dashboard">
                  <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                    Get Support <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
