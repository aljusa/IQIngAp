import React, { useState } from 'react';
import { 
  Thermometer, 
  Flame, 
  Droplet, 
  Cloud, 
  Box, 
  ArrowRight, 
  ArrowLeft, 
  Sun, 
  Waves, 
  Activity,
  CheckCircle,
  HelpCircle,
  BookOpen
} from 'lucide-react';

// --- VISUAL COMPONENTS ---

const PhaseChangeDiagram = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 my-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Activity className="text-blue-500" />
        Changes of State
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Solid state */}
        <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg w-32 border border-blue-100">
          <Box size={48} className="text-blue-500 mb-2" />
          <span className="font-bold text-slate-700">Solid</span>
        </div>

        {/* Solid to Liquid Arrows */}
        <div className="flex flex-col items-center justify-center relative w-full md:w-48 h-24">
          <div className="absolute top-2 w-full flex flex-col items-center">
            <span className="text-xs font-semibold text-red-500 mb-1">Melting (Endothermic)</span>
            <div className="w-full h-1 bg-red-400 relative">
              <div className="absolute right-0 -top-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-red-400"></div>
            </div>
          </div>
          <div className="absolute bottom-2 w-full flex flex-col items-center">
            <div className="w-full h-1 bg-blue-400 relative">
              <div className="absolute left-0 -top-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-blue-400"></div>
            </div>
            <span className="text-xs font-semibold text-blue-500 mt-1">Solidification (Exothermic)</span>
          </div>
        </div>

        {/* Liquid state */}
        <div className="flex flex-col items-center p-4 bg-cyan-50 rounded-lg w-32 border border-cyan-100">
          <Droplet size={48} className="text-cyan-500 mb-2" />
          <span className="font-bold text-slate-700">Liquid</span>
        </div>

        {/* Liquid to Gas Arrows */}
        <div className="flex flex-col items-center justify-center relative w-full md:w-48 h-24">
          <div className="absolute top-2 w-full flex flex-col items-center">
            <span className="text-xs font-semibold text-red-500 mb-1">Evaporation (Endothermic)</span>
            <div className="w-full h-1 bg-red-400 relative">
              <div className="absolute right-0 -top-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-red-400"></div>
            </div>
          </div>
          <div className="absolute bottom-2 w-full flex flex-col items-center">
            <div className="w-full h-1 bg-blue-400 relative">
              <div className="absolute left-0 -top-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-blue-400"></div>
            </div>
            <span className="text-xs font-semibold text-blue-500 mt-1">Condensation (Exothermic)</span>
          </div>
        </div>

        {/* Gas state */}
        <div className="flex flex-col items-center p-4 bg-orange-50 rounded-lg w-32 border border-orange-100">
          <Cloud size={48} className="text-orange-500 mb-2" />
          <span className="font-bold text-slate-700">Gas</span>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-slate-700">
        <strong>Key Idea:</strong> During a state change (the flat lines on a heating curve), heat is absorbed or released <em>without</em> changing the temperature.
      </div>
    </div>
  );
};

const HeatTransferDiagram = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500">
        <div className="flex justify-center mb-4">
          <div className="bg-amber-100 p-3 rounded-full">
            <Flame size={32} className="text-amber-600" />
          </div>
        </div>
        <h4 className="text-lg font-bold text-center mb-2">Conduction</h4>
        <p className="text-sm text-slate-600 text-center">Heat transfer through a solid material.</p>
        <div className="mt-4 flex items-center justify-center space-x-2 text-amber-500">
          <Box size={24} /> <ArrowRight size={16} /> <Box size={24} /> <ArrowRight size={16} /> <Box size={24} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Waves size={32} className="text-blue-600" />
          </div>
        </div>
        <h4 className="text-lg font-bold text-center mb-2">Convection</h4>
        <p className="text-sm text-slate-600 text-center">Heat transfer through fluid movement (warm rises, cool sinks).</p>
        <div className="mt-4 flex flex-col items-center justify-center space-y-1 text-blue-500">
          <ArrowRight size={20} className="-rotate-45 text-red-400" />
          <ArrowRight size={20} className="rotate-[135deg] text-blue-400" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-500">
        <div className="flex justify-center mb-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Sun size={32} className="text-orange-600" />
          </div>
        </div>
        <h4 className="text-lg font-bold text-center mb-2">Radiation</h4>
        <p className="text-sm text-slate-600 text-center">Heat transfer via electromagnetic waves (no medium required).</p>
        <div className="mt-4 flex items-center justify-center space-x-2 text-orange-400">
          <Activity size={24} />
          <Activity size={24} />
          <Activity size={24} />
        </div>
      </div>
    </div>
  );
};

const ExercisesSection = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <HelpCircle className="text-indigo-600" />
          Knowledge Check: Exercises
        </h2>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium text-sm"
        >
          {showAnswers ? "Hide Answers" : "Show Answers"}
        </button>
      </div>

      <div className="space-y-8">
        {/* Exercise 1 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg mb-3">Exercise 1: Matching </h3>
          <ul className="space-y-3">
            {[
              { term: "Conduction", ans: "c. Heat transfer through solids" },
              { term: "Convection", ans: "a. Heat transfer through movement of fluids" },
              { term: "Radiation", ans: "d. Heat transfer by electromagnetic waves" },
              { term: "Endothermic", ans: "e. Process that absorbs heat" },
              { term: "Latent heat", ans: "b. Heat absorbed during a state change" }
            ].map((item, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row sm:items-center border-b border-slate-100 pb-2 last:border-0">
                <span className="font-semibold w-40 text-slate-700">{item.term}</span>
                <span className="text-slate-400 mx-2 hidden sm:inline">→</span>
                <span className={`transition-all duration-300 ${showAnswers ? 'text-green-600 font-medium' : 'text-slate-300 bg-slate-100 px-3 rounded'}`}>
                  {showAnswers ? item.ans : "________________"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercise 2 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg mb-3">Exercise 2: Fill in the Blanks </h3>
          <ul className="space-y-3 text-slate-700">
            <li>1. The energy needed to raise temperature depends on <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "specific" : "______"}</span> heat capacity.</li>
            <li>2. Heat transfer in solids is called <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "conduction" : "______"}</span>.</li>
            <li>3. Liquid changing into gas is called <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "evaporation/vaporization" : "______"}</span>.</li>
            <li>4. A process that releases heat is <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "exothermic" : "______"}</span>.</li>
            <li>5. Heat transfer through waves is called <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "radiation" : "______"}</span>.</li>
          </ul>
        </div>

        {/* Exercise 3 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg mb-3">Exercise 3: Contextual Usage </h3>
          <ul className="space-y-3 text-slate-700">
            <li>1. A metal rod heats at one end and transfers heat along its length by <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "conduction" : "______"}</span>.</li>
            <li>2. Boiling water forms bubbles due to <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "convection" : "______"}</span>.</li>
            <li>3. Heat from the sun reaching Earth is <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "radiation" : "______"}</span>.</li>
            <li>4. A cooling system uses fluid movement to transfer heat by <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "convection" : "______"}</span>.</li>
            <li>5. Ice turning into water requires <span className={showAnswers ? 'text-green-600 font-bold' : 'text-slate-400 font-bold'}>{showAnswers ? "latent" : "______"}</span> heat of fusion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION APP ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* HEADER / HERO */}
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Thermometer size={40} />
            <Flame size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Heat and Temperature
          </h1>
          
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        
        {/* SECTION A: Changes of Temperature and State */}
        <section>
          <div className="mb-6 border-b-2 border-slate-200 pb-2 flex items-center gap-2 text-2xl font-bold text-slate-800">
            <BookOpen className="text-blue-600"/>
            <h2>1. Changes of Temperature and State</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-red-600 mb-1">Temperature</h4>
              <p className="text-sm">Measure of how hot or cold something is (°C).</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-orange-600 mb-1">Heat</h4>
              <p className="text-sm">A form of energy measured in joules.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-amber-600 mb-1">Specific Heat Capacity</h4>
              <p className="text-sm">Energy required to raise the temperature of 1 kg of a substance by 1°C.</p>
            </div>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Thermal Processes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-400 mt-1 shrink-0"/>
                    <span><strong>Endothermic process:</strong> Absorbs heat (e.g., melting, evaporation).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-400 mt-1 shrink-0"/>
                    <span><strong>Exothermic process:</strong> Releases heat (e.g., condensation, solidification).</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-400 mt-1 shrink-0"/>
                    <span><strong>Latent heat of fusion:</strong> Energy required to change solid to liquid.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-400 mt-1 shrink-0"/>
                    <span><strong>Latent heat of vaporization:</strong> Energy required to change liquid to gas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <PhaseChangeDiagram />

        </section>

        {/* SECTION B: Heat Transfer */}
        <section>
          <div className="mb-6 border-b-2 border-slate-200 pb-2 flex items-center gap-2 text-2xl font-bold text-slate-800">
            <Activity className="text-orange-600"/>
            <h2>2. Heat Transfer Methods</h2>
          </div>
          
          <p className="text-slate-600 mb-6 text-lg">
            <strong>Heat transfer</strong> is the movement of heat energy. In engineering systems, we use devices like <strong>heat exchangers</strong> to transfer heat between fluids, or design systems to <strong>dissipate</strong> (spread out) heat effectively.
          </p>

          <HeatTransferDiagram />

        </section>

        {/* SECTION C: Engineering Context */}
        <section>
          <div className="mb-6 border-b-2 border-slate-200 pb-2 flex items-center gap-2 text-2xl font-bold text-slate-800">
            <Box className="text-indigo-600"/>
            <h2>3. Example Sentences (Engineering Context)</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-slate-100">
              {[
                "Water requires a high specific heat capacity to increase temperature.",
                "Ice melts through an endothermic process.",
                "Steam forms through vaporization.",
                "Heat moves through metal by conduction.",
                "Warm air rises due to convection currents.",
                "The sun transfers heat to Earth by radiation.",
                "A radiator acts as a heat exchanger."
              ].map((sentence, i) => (
                <li key={i} className="p-4 hover:bg-slate-50 flex items-start gap-3 transition-colors">
                  <div className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{sentence}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION D: Exercises */}
        <ExercisesSection />

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-slate-400 py-8 text-center text-sm mt-12">
        <p>Interactive Engineering & Physics Lesson Module</p>
      </footer>
    </div>
  );
}