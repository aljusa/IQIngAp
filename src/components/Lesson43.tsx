import React, { useState, useEffect } from 'react';
import { Zap, Activity, Lightbulb, Battery, BookOpen, CheckCircle, ArrowRight, Info } from 'lucide-react';

// --- STYLES FOR ANIMATIONS ---
const styles = `
  @keyframes flow {
    0% { transform: translateX(-100%); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateX(400%); opacity: 0; }
  }
  .electron {
    animation: flow linear infinite;
  }
`;

// --- VISUAL COMPONENTS ---

const CurrentVisual = () => {
  return (
    <div className="bg-slate-900 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden h-64 border-4 border-slate-700 shadow-inner">
      <div className="absolute top-4 left-4 text-slate-400 text-sm font-medium flex items-center gap-2">
        <Info size={16} /> Visualización: Flujo de Electrones en un Conductor
      </div>
      
      {/* Conductor (Wire) */}
      <div className="w-full h-16 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-500 rounded-lg relative shadow-[0_0_15px_rgba(251,146,60,0.4)] flex items-center border-y-2 border-orange-600">
        
        {/* Electrons */}
        <div className="absolute w-full h-full flex items-center overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="electron w-4 h-4 bg-blue-300 rounded-full absolute shadow-[0_0_10px_rgba(147,197,253,0.8)] flex items-center justify-center text-[8px] font-bold text-blue-900"
              style={{ 
                left: `${(i * 10) - 20}%`, 
                animationDuration: '3s',
                animationDelay: `${i * 0.25}s`
              }}
            >
              -
            </div>
          ))}
        </div>
        <div className="absolute right-4 text-orange-900 font-bold opacity-50">Cobre (Conductor)</div>
      </div>
      <div className="mt-8 text-slate-300 text-center text-sm max-w-xs">
        <span className="font-bold text-blue-400">Concepto Clave:</span> La corriente eléctrica es el flujo direccional de estas partículas cargadas negativamente (electrones).
      </div>
    </div>
  );
};

const OhmVisual = () => {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(2);
  
  const current = (voltage / resistance).toFixed(1);
  const flowSpeed = Math.max(0.5, 5 / current); // Faster speed = lower duration

  return (
    <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 shadow-sm flex flex-col gap-6 h-full justify-between">
      <div className="text-slate-600 text-sm font-medium flex items-center gap-2">
        <Info size={16} /> Visualización Interactiva: Relación Voltaje, Resistencia y Corriente
      </div>

      <div className="flex flex-col gap-4">
        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold text-slate-700">Voltaje (V) - Fuerza impulsora</label>
              <span className="text-sm font-bold text-blue-600">{voltage} V</span>
            </div>
            <input 
              type="range" min="1" max="24" value={voltage} 
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold text-slate-700">Resistencia (Ω) - Oposición</label>
              <span className="text-sm font-bold text-red-600">{resistance} Ω</span>
            </div>
            <input 
              type="range" min="1" max="10" value={resistance} 
              onChange={(e) => setResistance(Number(e.target.value))}
              className="w-full accent-red-600"
            />
          </div>
        </div>

        {/* Visual Indicator */}
        <div className="mt-4 p-4 bg-slate-200 rounded-lg flex items-center gap-4 relative overflow-hidden">
           <div className="flex-shrink-0 bg-blue-500 text-white p-3 rounded-lg font-bold z-10 shadow-md">
             {voltage}V
           </div>
           
           <div className="flex-grow h-8 bg-slate-300 rounded-full relative overflow-hidden shadow-inner flex items-center">
              {/* Animated current flow based on calculated current */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="electron w-3 h-3 bg-yellow-400 rounded-full absolute shadow-md"
                  style={{ 
                    animationDuration: `${flowSpeed}s`,
                    animationDelay: `${i * (flowSpeed/8)}s`,
                  }}
                />
              ))}
              {/* Resistance representation (constriction) */}
              <div 
                className="absolute left-1/2 top-0 bottom-0 bg-red-400 opacity-80 flex items-center justify-center transition-all duration-300"
                style={{ width: `${resistance * 10}%`, transform: 'translateX(-50%)' }}
              >
                 <span className="text-xs text-white font-bold block transform -rotate-90 md:rotate-0">R</span>
              </div>
           </div>

           <div className="flex-shrink-0 bg-yellow-500 text-white p-3 rounded-lg font-bold z-10 shadow-md flex items-center gap-1">
             <Activity size={18} /> {current}A
           </div>
        </div>

        <div className="text-center text-sm text-slate-600 mt-2 bg-blue-50 p-3 rounded-md">
          A mayor voltaje <ArrowRight className="inline w-3 h-3"/> mayor corriente.<br/>
          A mayor resistencia <ArrowRight className="inline w-3 h-3"/> menor corriente.
        </div>
      </div>
    </div>
  );
};

const PowerVisual = () => {
  const [power, setPower] = useState(1000);
  const fixedVoltage = 230;
  const calculatedCurrent = (power / fixedVoltage).toFixed(2);

  // Brightness mapping: 100W -> low, 3000W -> max
  const brightness = Math.min(100, Math.max(20, (power / 3000) * 100));

  return (
    <div className="bg-indigo-950 text-white rounded-xl p-6 border-2 border-indigo-800 flex flex-col md:flex-row items-center gap-8 h-full">
      <div className="flex-1 space-y-6 w-full">
         <div className="text-indigo-300 text-sm font-medium flex items-center gap-2">
            <Info size={16} /> Visualización: Consumo de Potencia
         </div>
         
         <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-indigo-200">Potencia del Aparato (W)</label>
              <span className="text-sm font-bold text-yellow-400">{power} W</span>
            </div>
            <input 
              type="range" min="100" max="3000" step="100" value={power} 
              onChange={(e) => setPower(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
          </div>

          <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700/50 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-indigo-300">Voltaje del Sistema:</span>
              <span className="font-mono">{fixedVoltage} V</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-indigo-300">Fórmula:</span>
              <span className="font-mono text-xs">Corriente = Potencia ÷ Voltaje</span>
            </div>
            <div className="w-full h-px bg-indigo-700 my-2"></div>
            <div className="flex justify-between font-bold">
              <span className="text-indigo-200">Corriente Generada:</span>
              <span className="text-green-400 font-mono">{calculatedCurrent} A</span>
            </div>
          </div>
      </div>

      <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-indigo-900/30 rounded-full relative">
        <div 
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{ 
            boxShadow: `0 0 ${brightness * 1.5}px ${brightness * 0.5}px rgba(250, 204, 21, ${brightness/100})`,
            backgroundColor: `rgba(250, 204, 21, ${brightness/500})`
          }}
        ></div>
        <Lightbulb 
          size={80} 
          className="transition-colors duration-300 relative z-10"
          color={brightness > 40 ? "#facc15" : "#4f46e5"}
          fill={brightness > 40 ? "#facc15" : "transparent"}
        />
      </div>
    </div>
  );
}

const ExerciseSection = () => {
  const [showAnswers1, setShowAnswers1] = useState(false);
  const [showAnswers2, setShowAnswers2] = useState(false);

  return (
    <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-slate-800 text-white p-6 flex items-center gap-3">
        <CheckCircle size={24} className="text-green-400" />
        <h2 className="text-2xl font-bold">Interactive Exercises</h2>
      </div>

      <div className="p-8 space-y-12">
        {/* Exercise 1 */}
        <section>
          <div className="flex justify-between items-center mb-6 border-b pb-2">
            <h3 className="text-lg font-bold text-slate-800">Exercise 1: Matching (Basic)</h3>
            <button 
              onClick={() => setShowAnswers1(!showAnswers1)}
              className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 py-1 px-3 rounded-full font-medium transition-colors"
            >
              {showAnswers1 ? "Hide Answers" : "Reveal Answers"}
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-bold text-slate-500 mb-3 text-sm uppercase tracking-wider">Terms</h4>
              <ul className="space-y-3 font-medium text-slate-700">
                <li className="flex justify-between">Current <span className="text-blue-600 font-bold">{showAnswers1 ? "→ b" : "→ __"}</span></li>
                <li className="flex justify-between">Voltage <span className="text-blue-600 font-bold">{showAnswers1 ? "→ d" : "→ __"}</span></li>
                <li className="flex justify-between">Resistance <span className="text-blue-600 font-bold">{showAnswers1 ? "→ c" : "→ __"}</span></li>
                <li className="flex justify-between">Conductor <span className="text-blue-600 font-bold">{showAnswers1 ? "→ e" : "→ __"}</span></li>
                <li className="flex justify-between">Insulator <span className="text-blue-600 font-bold">{showAnswers1 ? "→ a" : "→ __"}</span></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wider">Definitions</h4>
              <ul className="space-y-3 text-sm text-blue-900">
                <li><strong>a.</strong> Material that blocks current</li>
                <li><strong>b.</strong> Flow of electric charge</li>
                <li><strong>c.</strong> Opposition to current</li>
                <li><strong>d.</strong> Driving force of electricity</li>
                <li><strong>e.</strong> Material that allows current</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exercise 2 & 3 Combined for UI simplicity */}
        <section>
          <div className="flex justify-between items-center mb-6 border-b pb-2">
            <h3 className="text-lg font-bold text-slate-800">Exercise 2 & 3: Fill in the Blanks / Context</h3>
            <button 
              onClick={() => setShowAnswers2(!showAnswers2)}
              className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 py-1 px-3 rounded-full font-medium transition-colors"
            >
              {showAnswers2 ? "Hide Answers" : "Reveal Answers"}
            </button>
          </div>

          <div className="space-y-4">
            {[
              { q: "The flow of electric charge is called", a: "current" },
              { q: "The unit of current is the", a: "ampere" },
              { q: "Opposition to current flow is", a: "resistance" },
              { q: "The unit of resistance is the", a: "ohm" },
              { q: "A material like copper is a good", a: "conductor" },
              { q: "A plastic coating acts as an", a: "insulator" },
              { q: "A device operating at higher electrical force has higher", a: "voltage" },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-slate-700 font-medium flex-1">{idx + 1}. {item.q}...</span>
                {showAnswers2 ? (
                  <span className="bg-green-100 text-green-800 font-bold px-4 py-1 rounded border border-green-200 shadow-sm text-center">
                    {item.a}
                  </span>
                ) : (
                  <span className="bg-white text-transparent border-b-2 border-slate-300 border-dashed px-8 py-1 rounded w-32">
                    answer
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-blue-200">
      <style>{styles}</style>
      
      {/* Header / Overview */}
      <header className="bg-slate-900 text-white pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <Zap size={400} className="absolute -top-20 -right-20 text-blue-500 rotate-12" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">
            <BookOpen size={20} /> Academic Lesson
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Fundamentals of <br/> Electric Circuits
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            This lesson introduces the fundamentals of electric circuits, including current, voltage, resistance, and electrical power. The focus is on essential vocabulary used in electrical and electronic engineering.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-12 relative z-20 pb-20">
        
        {/* Section 1: Electric Current */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-slate-200">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                <Activity size={28} />
                <h2 className="text-2xl font-bold text-slate-800">1. Electric Current</h2>
              </div>
              <div className="prose prose-slate">
                <p className="text-slate-600 mb-6">
                  <strong>Electric current</strong> is the flow of electric charge through a conductor. The property carried by particles such as <strong>electrons</strong> (negatively charged particles) creates this charge.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span><strong>Ampere (A):</strong> The standard unit of current.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span><strong>Conductor:</strong> A material that allows electricity to flow easily (e.g., a copper wire).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span><strong>Electrical supply & components:</strong> The source (e.g., a cell) and the devices (e.g., lamp) in a circuit.</span>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <span className="font-bold text-blue-800">Key Idea:</span> Current increases when more electrons flow through a conductor.
                </div>
              </div>
            </div>
            {/* Visual Suggestion Rendered */}
            <div className="p-8 md:p-10 bg-slate-50 flex items-center justify-center">
              <div className="w-full">
                <CurrentVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Voltage and Resistance */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-slate-200">
          <div className="grid md:grid-cols-2">
             <div className="order-2 md:order-1 p-8 md:p-10 bg-slate-100 flex items-center justify-center border-t md:border-t-0 md:border-r border-slate-200">
              <div className="w-full h-full">
                <OhmVisual />
              </div>
            </div>
            <div className="order-1 md:order-2 p-8 md:p-10">
              <div className="flex items-center gap-3 text-red-500 mb-4">
                <Battery size={28} />
                <h2 className="text-2xl font-bold text-slate-800">2. Voltage & Resistance</h2>
              </div>
              <div className="prose prose-slate">
                <p className="text-slate-600 mb-6">
                  <strong>Voltage (V)</strong>, also known as Electromotive Force (EMF), is the electrical potential difference or the "driving force" of current. <strong>Resistance (Ω)</strong> is the opposition to this current flow.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                     <div className="font-bold text-slate-800 mb-1">Ohm (Ω)</div>
                     <div className="text-sm text-slate-600">Unit of resistance.</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                     <div className="font-bold text-slate-800 mb-1">Insulator</div>
                     <div className="text-sm text-slate-600">Material with very high resistance.</div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
                  <p className="font-bold text-red-800 m-0">Key Notes:</p>
                  <ul className="text-sm text-red-900 m-0 pl-4 space-y-1">
                    <li>Higher voltage → more current (if resistance is constant)</li>
                    <li>Higher resistance → less current</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Electrical Power */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center gap-3 text-yellow-500 mb-4">
                <Zap size={28} />
                <h2 className="text-2xl font-bold text-slate-800">3. Electrical Power</h2>
              </div>
              <div className="prose prose-slate">
                <p className="text-slate-600 mb-4">
                  <strong>Power (W)</strong> is the rate of electrical energy use, measured in <strong>Watts</strong>.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span><strong>Electrical appliance:</strong> Device using electrical energy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span><strong>Power rating:</strong> The amount of power required by a device.</span>
                  </li>
                </ul>
                <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-center">
                  <span className="block text-xs uppercase tracking-wider font-bold text-indigo-400 mb-1">Formula</span>
                  <span className="font-mono font-bold text-indigo-900 text-lg">Current (A) = Power (W) ÷ Voltage (V)</span>
                </div>
              </div>
            </div>
             <div className="md:col-span-3 p-8 md:p-10 bg-slate-900 flex items-center justify-center">
              <div className="w-full h-full">
                <PowerVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Example Sentences Context Box */}
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 border border-emerald-100 shadow-sm">
          <h3 className="text-emerald-800 font-bold text-xl mb-4 flex items-center gap-2">
            <BookOpen size={24} /> Example Sentences (Engineering Context)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "The current flows through the copper conductor.",
              "The circuit operates at a voltage of 230 volts.",
              "High resistance reduces current flow.",
              "Plastic is an electrical insulator.",
              "The device has a power rating of 2000 W.",
              "The system draws 8.7 amps of current."
            ].map((sentence, i) => (
              <div key={i} className="bg-white p-3 rounded shadow-sm border border-emerald-100 text-slate-700 italic">
                "{sentence}"
              </div>
            ))}
          </div>
        </div>

        {/* Exercises */}
        <ExerciseSection />

      </main>
      
      <footer className="bg-slate-900 text-slate-400 text-center py-8 mt-12 text-sm border-t border-slate-800">
        <p>Interactive Academic Tool &copy; 2024. Concepts of Current, Voltage, and Resistance.</p>
      </footer>
    </div>
  );
}