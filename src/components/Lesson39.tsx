import React, { useState } from 'react';
import { BookOpen, Wind, Activity, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

const Header = () => (
  <header className="bg-slate-900 text-white p-6 shadow-md">
    <div className="max-w-5xl mx-auto flex items-center gap-3">
      <Wind className="w-8 h-8 text-blue-400" />
      <h1 className="text-2xl font-bold tracking-wide">Fluid Dynamics</h1>
     
    </div>
  </header>
);

const Section = ({ title, icon: Icon, children }) => (
  <section className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3">
      <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    </div>
    <div className="p-6">
      {children}
    </div>
  </section>
);

// --- Visual Components (SVG Diagrams) ---

const FlowDiagram = () => (
  <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div>
      <h4 className="text-sm font-bold text-slate-700 mb-2">Laminar Flow</h4>
      <svg viewBox="0 0 400 100" className="w-full h-auto bg-white border border-slate-200 rounded-lg">
        {/* Sphere */}
        <circle cx="100" cy="50" r="20" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        {/* Laminar lines */}
        <path d="M 0 20 L 60 20 Q 100 0 140 20 L 400 20" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 0 50 L 70 50 Q 100 20 130 50 L 400 50" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M 0 80 L 60 80 Q 100 100 140 80 L 400 80" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <text x="300" y="45" fontSize="10" fill="#64748b">Smooth and orderly flow</text>
      </svg>
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-700 mb-2">Turbulent Flow</h4>
      <svg viewBox="0 0 400 100" className="w-full h-auto bg-white border border-slate-200 rounded-lg">
        {/* Sphere */}
        <circle cx="100" cy="50" r="20" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        {/* Turbulent lines */}
        <path d="M 0 20 L 60 20 Q 100 0 130 30 Q 150 60 180 30 Q 200 10 230 40" fill="none" stroke="#ef4444" strokeWidth="2" />
        <path d="M 0 50 L 70 50 Q 100 20 120 60 Q 140 90 170 50 Q 210 20 250 80" fill="none" stroke="#ef4444" strokeWidth="2" />
        <path d="M 0 80 L 60 80 Q 100 100 130 70 Q 160 40 190 80 Q 220 110 260 60" fill="none" stroke="#ef4444" strokeWidth="2" />
        {/* Wake/Vortex */}
        <circle cx="160" cy="50" r="10" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="200" cy="60" r="15" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
        <text x="300" y="45" fontSize="10" fill="#ef4444">Wake and Vortices</text>
      </svg>
    </div>
  </div>
);

const AerofoilDiagram = () => (
  <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
    <svg viewBox="0 0 500 250" className="w-full h-auto">
      {/* Airflow arrows */}
      <path d="M 20 120 L 80 120" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 20 150 L 80 150" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 20 180 L 80 180" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Aerofoil Shape */}
      <path d="M 100 150 C 100 80, 250 110, 400 170 C 250 175, 100 180, 100 150 Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" />
      
      {/* Labels & Lines */}
      {/* Chord line */}
      <path d="M 90 150 L 410 170" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
      
      {/* Forces */}
      <path d="M 250 140 L 250 40" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow-green)" />
      <text x="260" y="80" fontSize="14" fill="#16a34a" fontWeight="bold">Lift</text>

      <path d="M 400 170 L 480 170" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
      <text x="420" y="160" fontSize="14" fill="#dc2626" fontWeight="bold">Drag</text>

      {/* Parts labels */}
      <circle cx="100" cy="150" r="4" fill="#0284c7" />
      <text x="80" y="130" fontSize="12" fill="#0284c7" textAnchor="end">Leading edge</text>
      
      <circle cx="400" cy="170" r="4" fill="#0284c7" />
      <text x="410" y="200" fontSize="12" fill="#0284c7">Trailing edge</text>

      {/* Angle of attack */}
      <path d="M 50 150 L 200 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 150 150 A 50 50 0 0 1 146 156" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="160" y="145" fontSize="12" fill="#d97706">Angle of attack</text>

      {/* Markers definition */}
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
        <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
        </marker>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  </div>
);

const DragDiagram = () => (
  <div className="w-full max-w-xl mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
    <svg viewBox="0 0 400 200" className="w-full h-auto">
      {/* Moving object (Car shape simplified) */}
      <path d="M 100 150 L 100 120 C 100 100, 150 80, 200 80 L 250 80 C 280 80, 300 120, 300 150 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <circle cx="150" cy="150" r="15" fill="#334155" />
      <circle cx="250" cy="150" r="15" fill="#334155" />
      
      {/* Motion arrow */}
      <path d="M 150 180 L 300 180" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow-green)" />
      <text x="200" y="195" fontSize="12" fill="#16a34a" fontWeight="bold">Motion</text>

      {/* Airflow/Drag opposing */}
      <path d="M 380 90 L 280 90" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <path d="M 380 110 L 310 110" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <path d="M 380 130 L 310 130" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <text x="320" y="75" fontSize="14" fill="#dc2626" fontWeight="bold">Drag</text>
      
      {/* Slipstream/Wake */}
      <path d="M 80 100 Q 50 100 20 120" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
      <path d="M 80 120 Q 40 130 10 150" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
      <text x="10" y="90" fontSize="12" fill="#64748b">Slipstream</text>
    </svg>
  </div>
);

// --- Content Components ---

const VocabularyGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {items.map((item, idx) => (
      <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex items-start gap-3">
        <div className="mt-1 flex-shrink-0">
          <ChevronRight className="w-4 h-4 text-blue-500" />
        </div>
        <div>
          <strong className="text-slate-800 font-semibold">{item.term}:</strong>
          <p className="text-slate-600 text-sm mt-1">{item.definition}</p>
        </div>
      </div>
    ))}
  </div>
);


export default function App() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-12">
      <Header />

      {/* Navigation Tabs */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="flex space-x-2 bg-white p-1 rounded-xl shadow-sm inline-flex">
          <button 
            onClick={() => setActiveTab('theory')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'theory' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            Theoretical Lesson
          </button>
          <button 
            onClick={() => setActiveTab('exercises')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'exercises' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            Practical Exercises
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto p-4 mt-4">
        {activeTab === 'theory' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* 1. Overview */}
            <section className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 text-white mb-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Wind className="w-64 h-64 -mt-10 -mr-10" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">1. Overview</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  This lesson explains how fluids (gases and liquids) move, especially around objects. It introduces key concepts in aerodynamics, types of drag, flow behavior, and aerofoils used in engineering design.
                </p>
              </div>
            </section>

            {/* 2A. Fluid Dynamics */}
            <Section title="A. Fluid Dynamics and Aerodynamics" icon={BookOpen}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-600 mb-6">
                    Understanding how air interacts with structures is fundamental to the engineering of vehicles, buildings, and aircraft.
                  </p>
                  <VocabularyGrid items={[
                    { term: 'Fluid dynamics', definition: 'Study of how liquids and gases flow.' },
                    { term: 'Aerodynamics', definition: 'Study of airflow around objects.' },
                    { term: 'Airflow', definition: 'Movement of air.' },
                    { term: 'Wind tunnel', definition: 'Facility used to test airflow around objects.' },
                    { term: 'Computational Fluid Dynamics (CFD)', definition: 'Simulation of fluid flow using computers.' }
                  ]} />
                </div>
                <div className="bg-slate-100 rounded-xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center h-full min-h-[250px]">
                  <Activity className="w-16 h-16 text-blue-400 mb-4" />
                  <p className="text-sm text-slate-500 font-medium">Conceptual Representation: CFD Digital Mesh</p>
                  <div className="mt-4 grid grid-cols-5 grid-rows-5 gap-1 w-32 h-32 opacity-20">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className="bg-blue-600 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* 2B. Drag */}
            <Section title="B. Drag and Resistance" icon={Wind}>
              <p className="text-slate-600 mb-6 max-w-3xl">
                Drag is the force that opposes the motion of an object through a fluid. Reducing drag is crucial for energy efficiency and speed.
              </p>
              
              <div className="mb-8">
                <DragDiagram />
              </div>

              <VocabularyGrid items={[
                { term: 'Drag', definition: 'Resistance caused by airflow.' },
                { term: 'Drag coefficient', definition: 'Measure of how much drag an object experiences.' },
                { term: 'Streamlined', definition: 'Shape designed to reduce drag (aerodynamic).' },
                { term: 'Form drag', definition: 'Caused by the shape of an object.' },
                { term: 'Skin friction', definition: 'Caused by air flowing over a surface.' },
                { term: 'Pressure drag', definition: 'Caused by pressure differences (front vs. back).' },
                { term: 'Interference drag', definition: 'Caused by the turbulence of interacting airflows.' },
                { term: 'Slipstream', definition: 'Low-pressure wake behind a moving object.' }
              ]} />
            </Section>

            {/* 2C. Flow Types */}
            <Section title="C. Laminar Flow vs. Turbulent Flow" icon={Activity}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-slate-600 mb-6">
                    The way air travels over a surface determines the aerodynamic efficiency of the design.
                  </p>
                  <VocabularyGrid items={[
                    { term: 'Boundary layer', definition: 'Air close to the surface of an object.' },
                    { term: 'Laminar flow', definition: 'Smooth and orderly airflow.' },
                    { term: 'Turbulent flow', definition: 'Irregular and chaotic airflow.' },
                    { term: 'Wake', definition: 'Disturbed air behind an object.' },
                    { term: 'Vortex', definition: 'Rotating fluid flow.' }
                  ]} />
                </div>
                <div className="flex items-center">
                  <FlowDiagram />
                </div>
              </div>
            </Section>

            {/* 2D. Aerofoils */}
            <Section title="D. Aerofoils (Airfoils)" icon={Wind}>
              <p className="text-slate-600 mb-6 max-w-3xl">
                Aerofoils are geometric shapes specifically designed to manipulate air and generate useful forces such as lift or downforce.
              </p>

              <div className="mb-8">
                <AerofoilDiagram />
              </div>

              <VocabularyGrid items={[
                { term: 'Aerofoil (airfoil)', definition: 'Shape designed to control airflow.' },
                { term: 'Lift', definition: 'Upward force generated by airflow.' },
                { term: 'Thrust', definition: 'Forward force (e.g., from propellers).' },
                { term: 'Downforce', definition: 'Downward force (e.g., on racing cars).' },
                { term: 'Leading edge', definition: 'Front edge of an aerofoil.' },
                { term: 'Trailing edge', definition: 'Rear edge of an aerofoil.' },
                { term: 'Angle of attack (pitch)', definition: 'Angle between the airflow and the aerofoil.' }
              ]} />
            </Section>

            {/* Context Examples */}
            <Section title="3. Contextual Examples (Engineering)" icon={BookOpen}>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <ul className="space-y-4">
                  {[
                    "Engineers study fluid dynamics to improve vehicle performance.",
                    "The model is tested in a wind tunnel to measure drag.",
                    "A streamlined design reduces drag coefficient.",
                    "Aircraft wings generate lift using an aerofoil shape.",
                    "Turbulent flow creates a large wake behind the object.",
                    "The propeller produces thrust to move the aircraft forward.",
                    "Adjusting the angle of attack changes lift."
                  ].map((sentence, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="italic">"{sentence}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Exercise 1: Matching </h2>
              <p className="text-slate-500 mb-6">Mentally match each term with its correct definition and review your choices.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-700 mb-2">Terms:</h3>
                  {['Drag', 'Laminar flow', 'Turbulent flow', 'Aerofoil', 'Lift'].map((term, i) => (
                    <div key={i} className="p-3 bg-blue-50 text-blue-900 font-medium rounded-lg border border-blue-100 shadow-sm text-center">
                      {term}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-700 mb-2">Definitions:</h3>
                  {[
                    'a. Smooth, orderly airflow',
                    'b. Force opposing motion',
                    'c. Upward aerodynamic force',
                    'd. Chaotic, irregular airflow',
                    'e. Shape designed to control airflow'
                  ].map((def, i) => (
                    <div key={i} className="p-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                      {def}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Exercise 2: Fill in the Blanks </h2>
              <ul className="space-y-6">
                {[
                  { text: "The study of airflow is called ", blank: "aerodynamics" },
                  { text: "Resistance to motion through air is ", blank: "drag" },
                  { text: "Smooth airflow is called ", blank: "laminar", text2: " flow." },
                  { text: "The disturbed air behind an object is called the ", blank: "wake" },
                  { text: "The front edge of an aerofoil is the ", blank: "leading", text2: " edge." }
                ].map((item, i) => (
                  <li key={i} className="text-lg text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-wrap items-center gap-2">
                    {item.text}
                    <span className="inline-block border-b-2 border-blue-400 w-32 text-center text-blue-600 font-semibold px-2">______</span>
                    {item.text2}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Exercise 3: Contextual Use </h2>
              <ul className="space-y-6">
                {[
                  { text: "A car designed to reduce air resistance is ", blank: "streamlined" },
                  { text: "Airflow becomes chaotic at high speeds, creating ", blank: "turbulent", text2: " flow." },
                  { text: "Engineers use ", blank: "CFD", text2: " to simulate airflow using computers." },
                  { text: "The rotating air behind a wing is called a ", blank: "vortex" },
                  { text: "The forward force generated by a propeller is ", blank: "thrust" }
                ].map((item, i) => (
                  <li key={i} className="text-lg text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-wrap items-center gap-2">
                    {item.text}
                    <span className="inline-block border-b-2 border-blue-400 w-32 text-center text-blue-600 font-semibold px-2">______</span>
                    {item.text2}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}