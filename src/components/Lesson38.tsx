import React, { useState } from 'react';
import { Settings, Wind, Droplets, ArrowDownRight, Gauge, RotateCw, CheckCircle2, ChevronRight, BookOpen, PenTool, Lightbulb } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-900 text-white p-8 rounded-b-3xl shadow-lg mb-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
        <Settings className="h-10 w-10 text-blue-300" />
        Fluid Containment
      </h1>
      <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
        This lesson explains how fluids (liquids and gases) are contained, transported, and controlled in engineering systems. It introduces key vocabulary related to pipes, tanks, and flow devices.
      </p>
    </div>
  </header>
);

const VisualPipes = () => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Visualización: Inclinación por Gravedad (Fall)</h4>
    <svg viewBox="0 0 400 150" className="w-full max-w-md drop-shadow-md">
      {/* Horizontal Pipe (Main) */}
      <path d="M 20 40 L 200 40 L 200 70 L 20 70 Z" fill="#94a3b8" />
      <text x="110" y="60" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">Water Main (Pressure)</text>
      
      {/* Downward Sloping Pipe (Sewer/Drain) */}
      <path d="M 200 40 L 380 90 L 372 118 L 192 68 Z" fill="#64748b" />
      <text x="290" y="85" fontSize="12" fill="white" textAnchor="middle" transform="rotate(15, 290, 85)" fontWeight="bold">Sewer / Drain</text>
      
      {/* Gravity Indicator */}
      <path d="M 280 40 L 280 60" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="280" y="30" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">Gravity (Fall)</text>
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  </div>
);

const VisualTanks = () => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-6">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Visualización: Recipientes a Presión</h4>
    <div className="flex gap-12 items-end">
      {/* Open Tank */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 border-4 border-t-0 border-blue-400 rounded-b-lg relative bg-blue-50">
          <div className="absolute bottom-0 w-full h-16 bg-blue-300 opacity-50"></div>
          <Droplets className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 opacity-50" />
        </div>
        <span className="mt-3 font-semibold text-slate-700">Open Tank</span>
      </div>
      
      {/* Pressure Vessel */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-32 border-4 border-slate-700 rounded-full relative bg-slate-200 flex items-center justify-center">
          <Gauge className="text-slate-700 w-8 h-8 absolute -top-4 bg-white rounded-full" />
          <Wind className="text-slate-400 w-8 h-8" />
        </div>
        <span className="mt-3 font-semibold text-slate-700">Pressure Vessel</span>
      </div>
    </div>
  </div>
);

const VisualMachines = () => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-6">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Visualización: Control de Flujo</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-2"><Droplets size={24}/></div>
        <span className="font-bold text-sm">Pump</span>
        <span className="text-xs text-slate-500 text-center">Moves liquids</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
        <div className="p-3 bg-green-100 text-green-600 rounded-full mb-2"><Wind size={24}/></div>
        <span className="font-bold text-sm">Fan</span>
        <span className="text-xs text-slate-500 text-center">Moves gases (low P)</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
        <div className="p-3 bg-red-100 text-red-600 rounded-full mb-2"><Gauge size={24}/></div>
        <span className="font-bold text-sm">Compressor</span>
        <span className="text-xs text-slate-500 text-center">Increases gas P</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
        <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-2"><RotateCw size={24}/></div>
        <span className="font-bold text-sm">Turbine</span>
        <span className="text-xs text-slate-500 text-center">Fluid to mechanical</span>
      </div>
    </div>
  </div>
);

const VocabularySection = () => {
  const sections = [
    {
      title: "Pipes, Ducts, and Hoses",
      icon: <ArrowDownRight className="w-6 h-6 text-blue-500" />,
      vocab: [
        { term: "Pipe", def: "A rigid tube used to carry fluids." },
        { term: "Pipe fittings", def: "Components used to connect pipes." },
        { term: "Pipework", def: "An assembly of connected pipes." },
        { term: "Main", def: "A large underground pipe (e.g., water or gas main)." },
        { term: "Pipeline", def: "A long-distance pipe, often above ground." },
        { term: "Drain", def: "A pipe that carries waste water." },
        { term: "Sewer", def: "A large drain system in cities." },
        { term: "Fall", def: "A downward slope that allows fluid to flow by gravity." },
        { term: "Duct", def: "A passage for air (not under pressure)." },
        { term: "Hose", def: "A flexible tube for liquids or gases." },
        { term: "Hose fittings / couplings", def: "Connectors for hoses." },
      ],
      keyIdea: "Drains and sewers rely on gravity and require a downward slope to function.",
      visual: <VisualPipes />
    },
    {
      title: "Tanks",
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      vocab: [
        { term: "Tank", def: "A container for liquids or gases." },
        { term: "Watertight", def: "Does not leak liquid." },
        { term: "Airtight", def: "Does not leak gas." },
        { term: "Pressure vessel", def: "A tank designed to hold pressurized contents." },
        { term: "Gas cylinder (bottle)", def: "A small portable pressure vessel." },
        { term: "Boiler", def: "A pressure vessel that heats liquid to produce steam." },
      ],
      keyIdea: "Pressure vessels must be sealed and strong enough to withstand internal pressure.",
      visual: <VisualTanks />
    },
    {
      title: "Pumps, Fans, and Turbines",
      icon: <RotateCw className="w-6 h-6 text-blue-500" />,
      vocab: [
        { term: "Pump", def: "A device that moves liquids through pipes." },
        { term: "Flow", def: "Movement of fluid." },
        { term: "Valve", def: "A device that controls fluid flow." },
        { term: "Compressor", def: "A pump that increases gas pressure." },
        { term: "Fan", def: "A device that moves air or gas." },
        { term: "Turbine", def: "A rotating device driven by fluid flow." },
      ],
      keyIdea: "Pumps move liquids. Fans move gases at low pressure. Compressors increase gas pressure. Turbines convert fluid flow into mechanical energy.",
      visual: <VisualMachines />
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-2 mb-6 border-b-2 border-slate-100 pb-2">
        <BookOpen className="text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-800">Key Vocabulary and Definitions</h2>
      </div>
      
      {sections.map((sec, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
                {sec.icon} {sec.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {sec.vocab.map((v, i) => (
                  <li key={i} className="text-slate-600 leading-tight">
                    <strong className="text-slate-900">{v.term}:</strong> {v.def}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">Key Idea</span>
              </div>
              <p className="text-amber-900 text-sm">{sec.keyIdea}</p>
            </div>
          </div>
          <div className="bg-slate-50 md:w-1/2 p-8 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100">
            {sec.visual}
          </div>
        </div>
      ))}
    </div>
  );
};

const ExamplesSection = () => {
  const examples = [
    "Water flows through the pipework to supply the building.",
    "The sewer system relies on gravity and proper fall.",
    "Air is distributed through ducts in the HVAC system.",
    "The fuel is transported using flexible hoses.",
    "The gas is stored in a high-pressure vessel.",
    "A pump moves water from the tank to the system.",
    "The compressor increases air pressure for tools.",
    "The turbine converts wind energy into rotation."
  ];

  return (
    <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <Settings className="w-6 h-6" /> Example Sentences (Context)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-slate-700 italic">"{ex}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExercisesSection = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="mt-12 mb-16">
      <div className="flex items-center justify-between mb-6 border-b-2 border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <PenTool className="text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-800">Interactive Exercises</h2>
        </div>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
          <CheckCircle2 className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ex 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">1: Matching (Basic)</h3>
          <ul className="space-y-4">
            {[
              { term: "Pipe", ans: "d. Rigid tube for fluids" },
              { term: "Hose", ans: "b. Flexible tube" },
              { term: "Pressure vessel", ans: "e. Container for pressurized gas/liquid" },
              { term: "Pump", ans: "c. Device moving liquid" },
              { term: "Valve", ans: "a. Device controlling fluid flow" }
            ].map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-semibold text-slate-700">{item.term}</span>
                {showAnswers ? (
                  <span className="text-green-600 font-medium text-sm mt-1 bg-green-50 p-2 rounded">{item.ans}</span>
                ) : (
                  <span className="text-slate-400 text-sm mt-1 border-b border-dashed border-slate-300 w-full h-6 block"></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Ex 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">2: Fill in the Blanks</h3>
          <ul className="space-y-4 text-slate-700">
            {[
              { text: "A large underground water pipe is called a", ans: "main" },
              { text: "A flexible tube used for fluids is a", ans: "hose" },
              { text: "A device that increases gas pressure is a", ans: "compressor" },
              { text: "A downward slope that allows flow is called a", ans: "fall" },
              { text: "A container designed to hold pressure is a", ans: "pressure vessel" }
            ].map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item.text}{' '}
                {showAnswers ? (
                  <strong className="text-green-600 bg-green-50 px-2 py-0.5 rounded underline">{item.ans}</strong>
                ) : (
                  <span className="inline-block w-24 border-b-2 border-slate-400 mx-1"></span>
                )}
                .
              </li>
            ))}
          </ul>
        </div>

        {/* Ex 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">3: Contextual Usage</h3>
          <ul className="space-y-4 text-slate-700">
            {[
              { text: "Wastewater flows through a city system called a", ans: "sewer" },
              { text: "Air moves through a building via a", ans: "duct" },
              { text: "A device used to move water through pipes is a", ans: "pump" },
              { text: "A rotating machine driven by fluid flow is a", ans: "turbine" },
              { text: "A sealed container storing high-pressure gas is a", ans: "gas cylinder / pressure vessel" }
            ].map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item.text}{' '}
                {showAnswers ? (
                  <strong className="text-green-600 bg-green-50 px-2 py-0.5 rounded underline">{item.ans}</strong>
                ) : (
                  <span className="inline-block w-24 border-b-2 border-slate-400 mx-1"></span>
                )}
                .
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-blue-500 mb-10 flex gap-4 items-start">
           <div className="bg-blue-100 p-2 rounded-full mt-1">
             <Lightbulb className="w-5 h-5 text-blue-600" />
           </div>
           <div>
             <h3 className="font-bold text-lg mb-1">Engineering Notes</h3>
             <p className="text-slate-600 text-sm">Fluid systems require proper design for safe and efficient operation. Gravity, pressure, and mechanical devices all control fluid movement. Understanding these terms is essential in mechanical, civil, and process engineering.</p>
           </div>
        </div>
        
        <VocabularySection />
        <ExamplesSection />
        <ExercisesSection />
      </main>
    </div>
  );
}