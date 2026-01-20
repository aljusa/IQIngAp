import React, { useState } from 'react';
import { 
  BookOpen, 
  Activity, 
  Zap, 
  Sun, 
  List, 
  Type, 
  Lightbulb, 
  CheckSquare,
  BarChart3,
  ArrowRight,
  Battery
} from 'lucide-react';

// --- Types ---
interface TabContent {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Main Application Component ---
export default function Lesson10App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // --- Content Definitions ---
  const tabs: TabContent[] = [
    {
      id: 0,
      title: "1. Overview",
      icon: <BookOpen className="w-4 h-4" />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <header className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Lesson: Measurable Parameters</h2>
            <p className="text-blue-800">
              This lesson explains how engineers measure and analyze energy-related parameters.
              The source text is based on an article about electricity grids and power consumption.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Key Topics</h3>
              <ul className="space-y-3">
                {[
                  "Supply, demand, and capacity",
                  "Variation in consumption over time",
                  "Peak and off-peak demand",
                  "Input, output, efficiency, and energy loss",
                  "Local electricity generation using photovoltaic (PV) systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <ArrowRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6 border border-gray-100">
               <div className="text-center">
                 <Activity className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                 <p className="text-sm text-gray-500 italic">Engineering Analysis & Grid Management</p>
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "2. Supply & Demand",
      icon: <BarChart3 className="w-4 h-4" />,
      content: (
        <div className="space-y-8 animate-fadeIn">
          {/* 2.1 Capacity */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white text-sm py-1 px-2 rounded">2.1</span> Capacity of an Electricity Grid
            </h3>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="mb-4 text-gray-700">The capacity is the amount of energy the grid needs to supply to users.</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="font-mono text-sm text-gray-600 mb-2">Simple Calculation Method:</p>
                <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <div className="bg-white p-3 rounded shadow-sm border">Total Power Consumed</div>
                  <div className="text-2xl text-gray-400">÷</div>
                  <div className="bg-white p-3 rounded shadow-sm border">Number of Hours</div>
                  <div className="text-2xl text-gray-400">=</div>
                  <div className="bg-blue-100 text-blue-800 p-3 rounded shadow-sm border border-blue-200 font-semibold">Average Consumption / Hour</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2.2 & 2.3 Fluctuations */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <h3 className="text-lg font-bold text-orange-900 mb-3">2.2 Why Average is Not Enough</h3>
              <p className="text-gray-700 mb-2">The problem with using averages is that:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Rate of power consumption is <strong>not constant</strong>.</li>
                <li>Consumption changes throughout the day.</li>
                <li>Supply requirements cannot be averaged out.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3">2.3 Fluctuations in Demand</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-white p-2 rounded border border-indigo-100">
                  <span>Evening</span>
                  <span className="text-red-500 font-bold flex items-center gap-1"><Activity className="w-4 h-4"/> Peak Demand</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded border border-indigo-100">
                  <span>Night</span>
                  <span className="text-green-500 font-bold flex items-center gap-1"><Battery className="w-4 h-4"/> Lowest Levels</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-indigo-700">
                *At peak times, consumption can be twice as high as off-peak.
              </p>
            </div>
          </section>

          {/* 2.4 Peak Capacity Visual */}
          <section>
             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white text-sm py-1 px-2 rounded">2.4</span> Peak vs. Spare Capacity
            </h3>
            <div className="bg-gray-800 text-white p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 {/* Abstract grid background */}
                 <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                 </svg>
              </div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="mb-4">The grid must have capacity for the <strong>Peak</strong>, even if it only lasts a short time.</p>
                  <p className="text-gray-300 text-sm">Most of the day, the grid runs below maximum, resulting in significant <strong>spare capacity</strong>.</p>
                </div>
                
                {/* Visual Chart Representation */}
                <div className="bg-gray-900 p-4 rounded border border-gray-700 flex items-end justify-between h-32 gap-2">
                   <div className="w-1/5 bg-green-500 h-1/4 rounded-t relative group"><span className="absolute -top-6 left-0 text-xs text-gray-400 w-full text-center hidden group-hover:block">Night</span></div>
                   <div className="w-1/5 bg-yellow-500 h-1/2 rounded-t relative group"><span className="absolute -top-6 left-0 text-xs text-gray-400 w-full text-center hidden group-hover:block">Morning</span></div>
                   <div className="w-1/5 bg-yellow-500 h-1/2 rounded-t relative group"><span className="absolute -top-6 left-0 text-xs text-gray-400 w-full text-center hidden group-hover:block">Afternoon</span></div>
                   <div className="w-1/5 bg-red-500 h-full rounded-t relative group animate-pulse">
                      <div className="absolute top-2 w-full text-center text-[10px] font-bold text-white">PEAK</div>
                   </div>
                   <div className="w-1/5 bg-green-500 h-1/3 rounded-t relative group"><span className="absolute -top-6 left-0 text-xs text-gray-400 w-full text-center hidden group-hover:block">Late Night</span></div>
                   
                   <div className="absolute top-0 w-full border-t border-dashed border-gray-500 pt-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest pl-1">Grid Max Capacity</span>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 2,
      title: "3. Input & Output",
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input vs Output */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">3.1 & 3.2 The Efficiency Gap</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-bold text-lg text-blue-700">Input</span>
                    <span className="text-xs text-gray-500">From Power Stations</span>
                  </div>
                  <ArrowRight className="text-gray-400" />
                  <div>
                    <span className="block font-bold text-lg text-green-700">Output</span>
                    <span className="text-xs text-gray-500">Used by Consumers</span>
                  </div>
                </div>

                <div className="bg-red-50 p-3 rounded border border-red-100 text-sm text-red-800">
                  <strong>Reality:</strong> Input &gt; Output
                </div>

                <div>
                   <p className="text-gray-700 font-semibold mb-1">Energy Loss</p>
                   <p className="text-sm text-gray-600 mb-2">Mainly lost as heat via power lines and transformers.</p>
                   <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div className="bg-green-500 h-4 rounded-l-full" style={{ width: '93%' }}></div>
                      <div className="bg-red-500 h-4 w-full" style={{ width: '7%' }}></div>
                   </div>
                   <div className="flex justify-between text-xs mt-1 text-gray-500">
                      <span>93% Delivered</span>
                      <span className="text-red-500 font-bold">7% Loss</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Local Generation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-lg font-bold text-green-900 mb-4">3.3 Local Generation Solution</h3>
              <p className="mb-4 text-green-800">
                Generating electricity at the place of consumption (e.g., Solar panels on a roof) avoids transmission distances.
              </p>
              
              <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-green-900">
                    <CheckSquare className="w-5 h-5 text-green-600" />
                    Transmission losses avoided
                  </li>
                  <li className="flex items-center gap-2 text-green-900">
                    <CheckSquare className="w-5 h-5 text-green-600" />
                    Efficiency gain of ~7%
                  </li>
                  <li className="flex items-center gap-2 text-green-900">
                    <CheckSquare className="w-5 h-5 text-green-600" />
                    Locally produced = More efficient
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "4. PV Systems",
      icon: <Sun className="w-4 h-4" />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <header className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 rounded-full">
              <Sun className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Surplus, Deficit, and Net Production</h2>
              <p className="text-gray-500">Focus on Photovoltaic (PV) Systems</p>
            </div>
          </header>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-yellow-400">
              <h3 className="font-bold text-lg mb-2">4.1 PV Basics</h3>
              <p className="text-sm text-gray-600">Commonly called "solar panels". Most allow connection to the main electricity grid.</p>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-orange-400">
              <h3 className="font-bold text-lg mb-2">4.2 Surplus vs Deficit</h3>
              <div className="space-y-3 text-sm">
                <div className="p-2 bg-green-50 rounded border border-green-100">
                  <span className="font-bold text-green-700">Surplus:</span> 
                  <p>Production &gt; Consumption. Excess fed TO grid.</p>
                </div>
                <div className="p-2 bg-red-50 rounded border border-red-100">
                  <span className="font-bold text-red-700">Deficit:</span> 
                  <p>Consumption &gt; Production. Power taken FROM grid.</p>
                </div>
              </div>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-400">
              <h3 className="font-bold text-lg mb-2">4.3 Net Producers</h3>
              <p className="text-sm text-gray-600 mb-3">Homes with low consumption and high production.</p>
              <div className="text-center bg-blue-50 p-2 rounded">
                <span className="font-mono font-bold text-blue-800">Net Production = <br/>Production &gt; Consumption</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "5. Vocabulary",
      icon: <List className="w-4 h-4" />,
      content: (
        <div className="animate-fadeIn">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Vocabulary</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Definition</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { t: "Capacity", d: "Maximum amount that can be supplied" },
                  { t: "Consumption", d: "Amount of energy used" },
                  { t: "Demand", d: "Required level of consumption" },
                  { t: "Peak demand", d: "Highest demand level" },
                  { t: "Off-peak", d: "Period of low demand" },
                  { t: "Spare capacity", d: "Unused available capacity" },
                  { t: "Input", d: "Energy supplied to a system" },
                  { t: "Output", d: "Energy used by consumers" },
                  { t: "Efficiency", d: "Ratio of useful output to input" },
                  { t: "Energy loss", d: "Wasted energy, often as heat" },
                  { t: "Surplus", d: "Excess production" },
                  { t: "Net producer", d: "User producing more than consumed" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{row.t}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "6. Grammar",
      icon: <Type className="w-4 h-4" />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Describing Variation and Conditions</h2>
            <p className="text-indigo-800">
              Engineering analysis often requires language to describe how things change over time and cause-and-effect relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Variation Over Time</h3>
              <p className="text-sm text-gray-600 mb-4">Verbs and phrases used to describe movement in data.</p>
              <ul className="space-y-3">
                <li className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-indigo-600">"Demand fluctuates significantly."</span>
                  <p className="text-xs text-gray-500 mt-1">Key word: Fluctuates (changes irregularly)</p>
                </li>
                <li className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-indigo-600">"Demand rises to a maximum..."</span>
                </li>
                 <li className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-indigo-600">"Falls to its lowest levels..."</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Conditional Relationships</h3>
              <p className="text-sm text-gray-600 mb-4">Using <em>If</em> and <em>When</em> to describe system logic.</p>
              <ul className="space-y-3">
                <li className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-indigo-600">"<u>If</u> consumption exceeds production, power is taken from the grid."</span>
                  <p className="text-xs text-gray-500 mt-1">Condition &#8594; Result</p>
                </li>
                <li className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold text-indigo-600">"<u>When</u> consumption peaks, the grid must meet demand."</span>
                  <p className="text-xs text-gray-500 mt-1">Time/Condition &#8594; Requirement</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "7. Examples",
      icon: <Lightbulb className="w-4 h-4" />,
      content: (
        <div className="animate-fadeIn">
           <h2 className="text-xl font-bold text-gray-900 mb-6">Practical Engineering Context</h2>
           <div className="grid gap-4">
             {[
               {
                 title: "Sizing for the Peak",
                 text: "Grid capacity must be sized for peak demand, not average demand. If you size for the average, the system fails every evening.",
                 color: "border-red-500"
               },
               {
                 title: "Efficiency Costs",
                 text: "Transmission losses reduce overall efficiency. This is a major economic and environmental factor in grid design.",
                 color: "border-yellow-500"
               },
               {
                 title: "The PV Impact",
                 text: "Local PV systems can create surplus power during the day, effectively turning homes into mini power stations.",
                 color: "border-green-500"
               },
               {
                 title: "Idle Assets",
                 text: "During off-peak hours, the grid operates with spare capacity. This represents expensive infrastructure sitting idle.",
                 color: "border-blue-500"
               }
             ].map((item, idx) => (
               <div key={idx} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${item.color}`}>
                 <h3 className="font-bold text-gray-800">{item.title}</h3>
                 <p className="text-gray-600 mt-1">{item.text}</p>
               </div>
             ))}
           </div>
        </div>
      )
    },
    {
      id: 7,
      title: "8. Exercises",
      icon: <CheckSquare className="w-4 h-4" />,
      content: <ExercisesComponent />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6">
           <h1 className="text-2xl md:text-3xl font-bold">Engineering English: Measurable Parameters</h1>
           <p className="text-slate-400 mt-2">Electricity Grids and Power Consumption</p>
        </div>

        {/* Navigation Tabs - Horizontal Scroll on Mobile */}
        <div className="bg-white border-b border-gray-200 overflow-x-auto">
          <div className="flex w-max md:w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-4 text-sm font-medium transition-colors duration-200
                  ${activeTab === tab.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}
                `}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-gray-50">
           {tabs[activeTab].content}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 border-t p-4 text-center text-xs text-gray-400">
           Education Module • React & TypeScript • Measurable Parameters
        </div>
      </div>
    </div>
  );
}

// --- Exercises Component (Interactive) ---
const ExercisesComponent = () => {
  const [showResults, setShowResults] = useState(false);

  // Exercise 2 State
  const [ex2Inputs, setEx2Inputs] = useState({ q1: "", q2: "", q3: "" });
  
  // Exercise 3 State
  const [ex3Show, setEx3Show] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
         <h2 className="text-xl font-bold text-gray-900">Practice Exercises</h2>
         <button 
           onClick={() => { setShowResults(!showResults); setEx3Show(!ex3Show); }}
           className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
         >
           {showResults ? "Hide Answers" : "Check All Answers"}
         </button>
      </div>

      {/* Ex 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-blue-800">Exercise 1: Vocabulary Match</h3>
        <p className="text-sm text-gray-600 mb-4">Match the term to its meaning (mentally or write it down).</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2 font-medium">
            <div className="p-2 bg-gray-50 rounded">1. Peak demand</div>
            <div className="p-2 bg-gray-50 rounded">2. Spare capacity</div>
            <div className="p-2 bg-gray-50 rounded">3. Input</div>
            <div className="p-2 bg-gray-50 rounded">4. Surplus</div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="p-2 border border-gray-200 rounded">a. Energy supplied to a system</div>
            <div className="p-2 border border-gray-200 rounded">b. Unused available capacity</div>
            <div className="p-2 border border-gray-200 rounded">c. Excess production</div>
            <div className="p-2 border border-gray-200 rounded">d. Highest level of demand</div>
          </div>
        </div>

        {showResults && (
           <div className="mt-4 p-4 bg-green-50 text-green-800 rounded border border-green-200">
             <strong>Answers:</strong> 1-d, 2-b, 3-a, 4-c
           </div>
        )}
      </div>

      {/* Ex 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-blue-800">Exercise 2: Sentence Completion</h3>
        <div className="space-y-4">
          <div>
             <label className="block text-sm text-gray-700 mb-1">1. Electricity demand __________ significantly during the day.</label>
             <input 
               type="text" 
               className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
               placeholder="Type here..."
               value={ex2Inputs.q1}
               onChange={(e) => setEx2Inputs({...ex2Inputs, q1: e.target.value})}
             />
             {showResults && <span className="text-sm text-green-600 font-bold block mt-1">Answer: fluctuates</span>}
          </div>
          <div>
             <label className="block text-sm text-gray-700 mb-1">2. The grid must have enough __________ to meet peak demand.</label>
             <input 
               type="text" 
               className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
               placeholder="Type here..."
               value={ex2Inputs.q2}
               onChange={(e) => setEx2Inputs({...ex2Inputs, q2: e.target.value})}
             />
             {showResults && <span className="text-sm text-green-600 font-bold block mt-1">Answer: capacity</span>}
          </div>
          <div>
             <label className="block text-sm text-gray-700 mb-1">3. When production exceeds consumption, there is a __________ of power.</label>
             <input 
               type="text" 
               className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
               placeholder="Type here..."
               value={ex2Inputs.q3}
               onChange={(e) => setEx2Inputs({...ex2Inputs, q3: e.target.value})}
             />
             {showResults && <span className="text-sm text-green-600 font-bold block mt-1">Answer: surplus</span>}
          </div>
        </div>
      </div>

      {/* Ex 3 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-blue-800">Exercise 3: Applied Writing</h3>
        <p className="mb-2 text-gray-700">Rewrite the sentence using formal engineering style and passive voice.</p>
        <div className="bg-gray-100 p-3 rounded mb-4 italic text-gray-600">
          "Engineers design grids to handle high demand in the evening."
        </div>
        
        <textarea 
          className="w-full border p-3 rounded h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          placeholder="Write your answer here..."
        ></textarea>

        {showResults && (
           <div className="mt-4 p-4 bg-green-50 text-green-800 rounded border border-green-200">
             <strong>Suggested Answer:</strong> Grids are designed to handle high demand in the evening. (or: Grids are designed to accommodate peak demand.)
           </div>
        )}
      </div>
    </div>
  );
};