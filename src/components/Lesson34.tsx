import React, { useState } from 'react';
import { Settings, RotateCw, Activity, ArrowRightLeft, MoveRight, BookOpen, CheckCircle, ArrowDownToLine } from 'lucide-react';

const AngularMotionVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100 h-64">
    <svg viewBox="0 0 200 200" className="w-48 h-48 overflow-visible">
      {/* Orbit path */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
      {/* Axis / Pivot */}
      <circle cx="100" cy="100" r="8" fill="#1e3a8a" />
      <text x="115" y="105" fontSize="12" fill="#1e3a8a" fontWeight="bold">Axis / Pivot</text>
      {/* Radius line */}
      <line x1="100" y1="100" x2="160" y2="100" stroke="#3b82f6" strokeWidth="3" />
      {/* Rotating Object */}
      <circle cx="160" cy="100" r="12" fill="#ef4444" />
      {/* Angular Velocity Arrow */}
      <path d="M 160 80 Q 150 40 100 40" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <text x="130" y="30" fontSize="12" fill="#10b981" fontWeight="bold">Angular Velocity</text>
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  </div>
);

const RotaryReciprocatingVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-xl border border-indigo-100 h-64 relative overflow-hidden">
    <svg viewBox="0 0 300 150" className="w-full h-full">
      {/* Rotary part (Wheel) */}
      <circle cx="80" cy="75" r="40" fill="none" stroke="#4f46e5" strokeWidth="4" />
      <circle cx="80" cy="75" r="6" fill="#312e81" />
      {/* Centrifugal force arrows */}
      <path d="M 80 30 L 80 10" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <path d="M 125 75 L 145 75" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
      <text x="40" y="15" fontSize="10" fill="#ef4444" fontWeight="bold">Centrifugal Force</text>
      
      {/* Reciprocating part (Piston & Cylinder) */}
      <rect x="200" y="55" width="80" height="40" fill="none" stroke="#475569" strokeWidth="3" />
      <rect x="210" y="60" width="30" height="30" fill="#64748b" />
      <line x1="210" y1="75" x2="160" y2="75" stroke="#94a3b8" strokeWidth="4" />
      
      {/* Conversion linkage (Connecting rod) */}
      <line x1="80" y1="75" x2="110" y2="45" stroke="#cbd5e1" strokeWidth="4" />
      <circle cx="110" cy="45" r="4" fill="#1e293b" />
      <line x1="110" y1="45" x2="160" y2="75" stroke="#94a3b8" strokeWidth="4" />
      <circle cx="160" cy="75" r="4" fill="#1e293b" />

      {/* Motion Indicators */}
      <path d="M 50 75 A 30 30 0 0 1 80 45" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow-indigo)" strokeDasharray="4" />
      <text x="50" y="130" fontSize="12" fill="#4f46e5" fontWeight="bold" textAnchor="middle">Rotary</text>
      
      <path d="M 240 45 L 260 45 M 260 45 L 255 40 M 260 45 L 255 50" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M 240 105 L 220 105 M 220 105 L 225 100 M 220 105 L 225 110" fill="none" stroke="#64748b" strokeWidth="2" />
      <text x="240" y="130" fontSize="12" fill="#64748b" fontWeight="bold" textAnchor="middle">Reciprocating</text>

      <defs>
        <marker id="arrow-red" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
        </marker>
        <marker id="arrow-indigo" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#4f46e5" />
        </marker>
      </defs>
    </svg>
  </div>
);

const TachometerVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-xl border border-red-100 h-64">
    <svg viewBox="0 0 200 150" className="w-48 h-36">
      {/* Dial background */}
      <path d="M 20 130 A 80 80 0 0 1 180 130" fill="none" stroke="#e2e8f0" strokeWidth="15" strokeLinecap="round" />
      {/* Green/Normal zone */}
      <path d="M 20 130 A 80 80 0 0 1 140 60" fill="none" stroke="#10b981" strokeWidth="15" strokeLinecap="round" />
      {/* Redline zone */}
      <path d="M 140 60 A 80 80 0 0 1 180 130" fill="none" stroke="#ef4444" strokeWidth="15" strokeLinecap="round" />
      
      {/* Ticks */}
      <line x1="100" y1="50" x2="100" y2="40" stroke="#333" strokeWidth="2" />
      <line x1="40" y1="90" x2="32" y2="84" stroke="#333" strokeWidth="2" />
      <line x1="160" y1="90" x2="168" y2="84" stroke="#333" strokeWidth="2" />

      {/* Needle (Over-revving) */}
      <line x1="100" y1="130" x2="165" y2="75" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="130" r="8" fill="#0f172a" />
      
      {/* Labels */}
      <text x="100" y="110" fontSize="14" fill="#64748b" fontWeight="bold" textAnchor="middle">RPM</text>
      <text x="175" y="60" fontSize="12" fill="#ef4444" fontWeight="bold">Over-rev!</text>
    </svg>
  </div>
);

const FrictionVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-amber-50 rounded-xl border border-amber-100 h-64">
    <svg viewBox="0 0 300 150" className="w-full h-full">
      {/* Surface */}
      <line x1="20" y1="100" x2="280" y2="100" stroke="#94a3b8" strokeWidth="4" />
      <path d="M 20 100 L 10 110 M 40 100 L 30 110 M 60 100 L 50 110 M 80 100 L 70 110 M 100 100 L 90 110 M 120 100 L 110 110 M 140 100 L 130 110 M 160 100 L 150 110 M 180 100 L 170 110 M 200 100 L 190 110 M 220 100 L 210 110 M 240 100 L 230 110 M 260 100 L 250 110 M 280 100 L 270 110" stroke="#cbd5e1" strokeWidth="2" />
      
      {/* Object Box */}
      <rect x="110" y="50" width="80" height="50" fill="#f59e0b" stroke="#b45309" strokeWidth="3" rx="4" />
      <text x="150" y="80" fontSize="14" fill="#fff" fontWeight="bold" textAnchor="middle">Mass</text>

      {/* Forces */}
      {/* Weight */}
      <path d="M 150 100 L 150 130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
      {/* Normal Force */}
      <path d="M 150 50 L 150 20" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
      {/* Applied Force */}
      <path d="M 190 75 L 240 75" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-blue)" />
      <text x="215" y="65" fontSize="12" fill="#3b82f6" fontWeight="bold" textAnchor="middle">Pull / Push</text>
      {/* Friction Force */}
      <path d="M 110 90 L 60 90" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow-red-fric)" />
      <text x="85" y="80" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="middle">Friction</text>

      <defs>
        <marker id="arrow-amber" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#64748b" />
        </marker>
        <marker id="arrow-blue" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
        </marker>
        <marker id="arrow-red-fric" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  </div>
);

const Term = ({ title, definition }) => (
  <div className="mb-3 flex items-start text-gray-700">
    <CheckCircle size={16} className="mt-1 mr-2 text-indigo-500 shrink-0" />
    <div>
      <strong className="text-gray-900">{title}:</strong> {definition}
    </div>
  </div>
);

const Exercises = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-slate-800 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="text-blue-400" size={28} />
          <h2 className="text-2xl font-bold">4. Exercises</h2>
        </div>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg font-medium text-sm"
        >
          {showAnswers ? 'Hide Answers' : 'Reveal Answers'}
        </button>
      </div>

      <div className="p-8 space-y-10">
        {/* Exercise 1 */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Exercise 1: Matching (Basic)</h3>
          <p className="text-gray-600 mb-4">Match each term with its correct definition.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <p>1. Angular motion</p>
              <p>2. Reciprocating motion</p>
              <p>3. Axis</p>
              <p>4. Centrifugal force</p>
              <p>5. Static friction</p>
            </div>
            <div className="space-y-3 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm">
              <p>a. Back-and-forth movement</p>
              <p>b. Resistance when surfaces are not moving</p>
              <p>c. Circular movement around a point</p>
              <p>d. Force pushing outward from rotation</p>
              <p>e. Central line of rotation</p>
            </div>
          </div>
          {showAnswers && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 animate-fade-in">
              <strong>Answers:</strong> 1-c, 2-a, 3-e, 4-d, 5-b
            </div>
          )}
        </section>

        {/* Exercise 2 */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Exercise 2: Fill in the Blanks (Intermediate)</h3>
          <div className="space-y-4 text-gray-700">
            <p>1. The speed of rotation is called <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "angular" : ""}</span> velocity.</p>
            <p>2. One complete turn is a <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "revolution" : ""}</span>.</p>
            <p>3. A piston typically exhibits <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "reciprocating" : ""}</span> motion.</p>
            <p>4. The force that resists motion between surfaces is <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "friction" : ""}</span>.</p>
            <p>5. The point around which rotation occurs is the <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "axis/pivot" : ""}</span>.</p>
          </div>
        </section>

        {/* Exercise 3 */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Exercise 3: Contextual Usage (Advanced)</h3>
          <div className="space-y-4 text-gray-700">
            <p>1. A spinning disk increases speed; this increase is called angular <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "acceleration" : ""}</span>.</p>
            <p>2. A machine part moving back and forth demonstrates <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "reciprocating" : ""}</span> motion.</p>
            <p>3. The outward force on a rotating object is <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "centrifugal" : ""}</span> force.</p>
            <p>4. Before an object starts moving, <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "static" : ""}</span> friction must be overcome.</p>
            <p>5. Engine speed is commonly measured using a <span className="inline-block w-32 border-b-2 border-gray-400 text-center font-bold text-indigo-700">{showAnswers ? "rev" : ""}</span> counter.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white pt-16 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-full mb-6 shadow-lg">
            <Settings size={32} className="text-white animate-[spin_4s_linear_infinite]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Moving Parts
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of different types of motion in mechanical systems, exploring key concepts related to rotating components and friction.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 -mt-12 space-y-8 pb-20">
        
        {/* Section A: Angular Motion */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2 block">Sección A</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <RotateCw className="text-blue-500" /> Angular Motion
              </h2>
              
              <div className="bg-gray-50 p-5 rounded-xl mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Explicación & Vocabulario</h3>
                <Term title="Angular motion" definition="Movement around a fixed point in a circular path." />
                <Term title="Axis (of rotation)" definition="The central point or line around which motion occurs." />
                <Term title="Pivot" definition="The point where a component rotates." />
                <Term title="Angular velocity" definition="Speed of rotation." />
                <Term title="Angular acceleration" definition="Increase in angular velocity." />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-900 text-sm">🔑 Key Idea:</p>
                <p className="text-blue-800 text-sm mt-1">In angular motion, one part remains fixed while another part rotates around it.</p>
              </div>
              <div className="mt-4 italic text-sm text-gray-500">
                Ejemplo: "The wheel rotates around its axis, demonstrating angular motion."
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col items-center justify-center bg-gray-50">
              <div className="w-full">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 text-center">Sugerencia Visual Inferida</h3>
                 <AngularMotionVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Section B: Rotary and Reciprocating Motion */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col items-center justify-center bg-gray-50 order-2 md:order-1 border-t md:border-t-0 md:border-r border-gray-100">
               <div className="w-full">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 text-center">Sugerencia Visual Inferida</h3>
                 <RotaryReciprocatingVisual />
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center order-1 md:order-2">
              <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-2 block">Sección B</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ArrowRightLeft className="text-indigo-500" /> Rotary & Reciprocating
              </h2>
              
              <div className="bg-gray-50 p-5 rounded-xl mb-6">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Explicación & Vocabulario</h3>
                <Term title="Rotary motion" definition="Continuous circular movement." />
                <Term title="Revolution / Rotation" definition="One complete turn (360°)." />
                <Term title="Rotational velocity" definition="Speed of rotation (measured in rpm)." />
                <Term title="Centrifugal force" definition="Force pushing outward from the axis of rotation." />
                <Term title="Reciprocating motion" definition="Back-and-forth movement." />
                <Term title="Reciprocate" definition="To move alternately in opposite directions." />
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <p className="font-semibold text-indigo-900 text-sm">🔑 Key Notes:</p>
                <ul className="list-disc pl-5 text-indigo-800 text-sm mt-1 space-y-1">
                  <li>Rotary motion produces centrifugal force.</li>
                  <li>Reciprocating motion is often converted into rotary motion in machines.</li>
                </ul>
              </div>
              <div className="mt-4 italic text-sm text-gray-500 space-y-1">
                <p>Ejemplo: "The motor shaft has a high rotational velocity measured in rpm."</p>
                <p>Ejemplo: "The piston shows reciprocating motion, moving back and forth."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section C & D Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section C: Engine Revs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-8 flex-grow">
              <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-2 block">Sección C</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="text-red-500" /> Engine Revs
              </h2>
              
              <div className="bg-gray-50 p-5 rounded-xl mb-6 text-sm">
                <Term title="Rev (revolution)" definition="One complete rotation." />
                <Term title="Rev counter" definition="Device measuring rotational speed." />
                <Term title="High/Low revs" definition="Fast or slow engine speed." />
                <Term title="Rev limiter" definition="Device that restricts maximum speed." />
                <Term title="Over-rev" definition="Exceed the safe engine speed." />
              </div>
               <div className="italic text-sm text-gray-500 mb-6">
                Ejemplo: "The engine exceeded the limit and began to over-rev."
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Sugerencia Visual Inferida</h3>
              <TachometerVisual />
            </div>
          </div>

          {/* Section D: Friction */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-8 flex-grow">
              <span className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-2 block">Sección D</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ArrowDownToLine className="text-amber-500" /> Friction
              </h2>
              
              <div className="bg-gray-50 p-5 rounded-xl mb-6 text-sm">
                <Term title="Friction" definition="Resistance when two surfaces move against each other." />
                <Term title="Frictional resistance" definition="Force opposing motion." />
                <Term title="Coefficient of friction" definition="Measure of how much friction exists between surfaces." />
                <Term title="Static friction" definition="Friction when surfaces are not moving." />
                <Term title="Dynamic friction" definition="Friction when surfaces are sliding." />
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
                <p className="font-semibold text-amber-900 text-sm">🔑 Key Idea:</p>
                <p className="text-amber-800 text-sm mt-1">More force is required to overcome static friction than dynamic friction.</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Sugerencia Visual Inferida</h3>
              <FrictionVisual />
            </div>
          </div>

        </div>

        {/* Exercises Section */}
        <Exercises />

      </main>
    </div>
  );
}