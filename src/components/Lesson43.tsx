import React, { useState, useEffect } from 'react';
import { Zap, Battery, Lightbulb, Activity, BookOpen, Info, CheckCircle, XCircle } from 'lucide-react';

// --- Visual Components ---

const CircuitDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h4 className="text-lg font-semibold text-slate-700 mb-4">Interactive Simple Circuit</h4>
      <div className="relative w-64 h-48 mb-4">
        {/* Wires */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 20 50 L 20 20 L 80 20 L 80 50"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <path
            d="M 80 50 L 80 80 L 20 80 L 20 50"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          {/* Animated Electrons */}
          <path
            d="M 20 50 L 20 20 L 80 20 L 80 50 L 80 80 L 20 80 Z"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="4 12"
            className="animate-[dash_3s_linear_infinite]"
          />
        </svg>

        {/* Cell / Battery */}
        <div className="absolute top-[35px] left-[5px] w-8 h-8 bg-white border-2 border-slate-800 flex items-center justify-center font-bold text-xs rounded-sm shadow-sm z-10">
          <Battery size={20} className="text-orange-500" />
        </div>
        <div className="absolute top-[80px] left-[0px] text-xs font-semibold text-slate-600 bg-white px-1">Cell (Supply)</div>

        {/* Lamp / Load */}
        <div className="absolute top-[35px] right-[5px] w-8 h-8 bg-white border-2 border-slate-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <Lightbulb size={20} className="text-yellow-500" />
        </div>
        <div className="absolute top-[80px] right-[-10px] text-xs font-semibold text-slate-600 bg-white px-1">Lamp (Component)</div>
      </div>
      <p className="text-sm text-slate-500 text-center">
        Electrons (blue dashed line) flow from the cell, through the conductor (wires), to power the component (lamp).
      </p>
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
};

const OhmsLawVisualizer = () => {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const current = (voltage / resistance).toFixed(1);

  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h4 className="text-lg font-semibold text-slate-700 mb-4">Ohm's Law Simulator</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Voltage (Pressure)</span>
              <span className="font-bold text-orange-600">{voltage} V</span>
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
              <span>Resistance (Opposition)</span>
              <span className="font-bold text-yellow-600">{resistance} Ω</span>
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={resistance}
              onChange={(e) => setResistance(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l-2 border-slate-200 pl-8">
          <div className="text-sm text-slate-500 mb-2">Resulting Current</div>
          <div className="text-4xl font-extrabold text-blue-600 mb-2">{current} A</div>
          <div className="w-full bg-slate-200 h-8 rounded-full overflow-hidden mt-4 relative">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-in-out flex items-center justify-end px-2"
              style={{ width: `${Math.min((current / 24) * 100, 100)}%` }}
            >
              <Activity className="text-white opacity-70" size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PowerCalculator = () => {
  const [power, setPower] = useState(2000);
  const [voltage, setVoltage] = useState(230);
  const current = voltage > 0 ? (power / voltage).toFixed(2) : 0;

  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
       <h4 className="text-lg font-semibold text-slate-700 mb-4">Electrical Power Calculator</h4>
       <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-slate-100 w-full md:w-1/3">
             <label className="text-xs font-semibold text-slate-500 uppercase">Power (Watts)</label>
             <input 
                type="number" 
                value={power} 
                onChange={(e) => setPower(Number(e.target.value))}
                className="text-2xl font-bold text-center text-slate-800 border-b-2 border-slate-300 focus:border-blue-500 outline-none w-full bg-transparent mt-2"
             />
          </div>
          <div className="text-2xl font-bold text-slate-400">÷</div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-slate-100 w-full md:w-1/3">
             <label className="text-xs font-semibold text-slate-500 uppercase">Voltage (Volts)</label>
             <input 
                type="number" 
                value={voltage} 
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="text-2xl font-bold text-center text-slate-800 border-b-2 border-slate-300 focus:border-orange-500 outline-none w-full bg-transparent mt-2"
             />
          </div>
          <div className="text-2xl font-bold text-slate-400">=</div>
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200 w-full md:w-1/3">
             <label className="text-xs font-semibold text-blue-600 uppercase">Current (Amps)</label>
             <div className="text-2xl font-bold text-blue-700 mt-2">{current} A</div>
          </div>
       </div>
    </div>
  )
}

// --- Exercises Components ---

const Exercises = () => {
  // Exercise 1 State
  const [ex1, setEx1] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const [ex1Result, setEx1Result] = useState(null);
  const ex1Answers = { 1: 'E', 2: 'C', 3: 'B', 4: 'D', 5: 'A' };

  // Exercise 2 State
  const [ex2, setEx2] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const [ex2Result, setEx2Result] = useState(null);
  const ex2Answers = { 1: 'circuit', 2: 'conductor', 3: 'voltage', 4: 'electrons', 5: 'resistance' };

  // Exercise 3 State
  const [ex3, setEx3] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const [ex3Result, setEx3Result] = useState(null);
  const ex3Answers = { 1: 'insulator', 2: 'voltage', 3: 'conductor', 4: 'power', 5: 'charge carrier' };

  const checkEx1 = () => {
    let correct = 0;
    Object.keys(ex1Answers).forEach(k => { if (ex1[k] === ex1Answers[k]) correct++; });
    setEx1Result(correct === 5 ? 'success' : 'partial');
  };

  const checkEx2 = () => {
    let correct = 0;
    Object.keys(ex2Answers).forEach(k => { if (ex2[k].toLowerCase().trim() === ex2Answers[k]) correct++; });
    setEx2Result(correct === 5 ? 'success' : 'partial');
  };

  const checkEx3 = () => {
    let correct = 0;
    Object.keys(ex3Answers).forEach(k => { if (ex3[k] === ex3Answers[k]) correct++; });
    setEx3Result(correct === 5 ? 'success' : 'partial');
  };

  return (
    <div className="space-y-12">
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-500" /> Exercise 1: Matching Terms
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {[
              { id: 1, term: 'Voltage' },
              { id: 2, term: 'Resistance' },
              { id: 3, term: 'Conductor' },
              { id: 4, term: 'Electron' },
              { id: 5, term: 'Circuit' }
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <select 
                  className="p-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={ex1[item.id]}
                  onChange={(e) => setEx1({ ...ex1, [item.id]: e.target.value })}
                >
                  <option value="">--</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
                <span className="font-medium text-slate-700">{item.term}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-600">
            <p><strong>A.</strong> Path through which current flows</p>
            <p><strong>B.</strong> Material that allows current flow</p>
            <p><strong>C.</strong> Opposition to current flow</p>
            <p><strong>D.</strong> Negatively charged particle</p>
            <p><strong>E.</strong> Electrical force driving current</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={checkEx1} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Check Answers</button>
          {ex1Result === 'success' && <span className="flex items-center text-green-600 font-semibold gap-1"><CheckCircle size={18} /> All Correct!</span>}
          {ex1Result === 'partial' && <span className="flex items-center text-orange-600 font-semibold gap-1"><XCircle size={18} /> Keep trying!</span>}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-500" /> Exercise 2: Fill in the Blanks 
        </h4>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>1. Electric current flows through a <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none w-24 text-center px-1" value={ex2[1]} onChange={e => setEx2({...ex2, 1: e.target.value})} />.</p>
          <p>2. A <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none w-24 text-center px-1" value={ex2[2]} onChange={e => setEx2({...ex2, 2: e.target.value})} /> is a material with low resistance.</p>
          <p>3. <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none w-24 text-center px-1" value={ex2[3]} onChange={e => setEx2({...ex2, 3: e.target.value})} /> is measured in volts.</p>
          <p>4. <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none w-24 text-center px-1" value={ex2[4]} onChange={e => setEx2({...ex2, 4: e.target.value})} /> carry electric charge in a conductor.</p>
          <p>5. High <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none w-24 text-center px-1" value={ex2[5]} onChange={e => setEx2({...ex2, 5: e.target.value})} /> reduces the flow of current.</p>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={checkEx2} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Check Answers</button>
          {ex2Result === 'success' && <span className="flex items-center text-green-600 font-semibold gap-1"><CheckCircle size={18} /> All Correct!</span>}
          {ex2Result === 'partial' && <span className="flex items-center text-orange-600 font-semibold gap-1"><XCircle size={18} /> Review your spelling.</span>}
        </div>
      </div>

       {/* Exercise 3 */}
       <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-500" /> Exercise 3: Contextual Usage 
        </h4>
        <div className="space-y-6 text-slate-700">
            {[
                { id: 1, prompt: "A plastic covering used to prevent electric shock →", options: ['conductor', 'insulator', 'electron'] },
                { id: 2, prompt: "The force that pushes current through a wire →", options: ['resistance', 'voltage', 'power'] },
                { id: 3, prompt: "A copper wire used to carry current →", options: ['insulator', 'circuit', 'conductor'] },
                { id: 4, prompt: "The rate at which electrical energy is used →", options: ['electrical power', 'voltage', 'resistance'] },
                { id: 5, prompt: "Particles moving through a conductor to create current →", options: ['charge carrier', 'ohm', 'watt'] },
            ].map(q => (
                <div key={q.id} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <p className="flex-1 font-medium">{q.prompt}</p>
                    <select 
                        className="p-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none md:w-48"
                        value={ex3[q.id]}
                        onChange={(e) => setEx3({ ...ex3, [q.id]: e.target.value })}
                    >
                        <option value="">Select term...</option>
                        {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={checkEx3} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Check Answers</button>
          {ex3Result === 'success' && <span className="flex items-center text-green-600 font-semibold gap-1"><CheckCircle size={18} /> All Correct!</span>}
          {ex3Result === 'partial' && <span className="flex items-center text-orange-600 font-semibold gap-1"><XCircle size={18} /> Keep trying!</span>}
        </div>
      </div>
    </div>
  );
};


// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-16">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Fundamentals of Electricity
          </h1>

        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-[-30px] space-y-12">
        
        {/* Section 1: Key Concepts */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-blue-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <Zap className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-slate-800">1. Key Concepts: Electric Current</h2>
          </div>
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
              <p>
                An <strong>electric circuit</strong> is a system where electricity flows. The flow of electric charge is known as <strong>current (Amps, A)</strong>. 
              </p>
              <p>
                This charge is carried by negatively charged particles called <strong>electrons</strong>. When more electrons flow, the current increases. These moving electrons act as <em>charge carriers</em>.
              </p>
              <h3 className="font-semibold text-slate-800 mt-4 border-b pb-2">Components of a Circuit:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Electrical supply:</strong> Source of energy (like a cell).</li>
                <li><strong>Conductor:</strong> The path for current (usually wires).</li>
                <li><strong>Components:</strong> Devices with a specific function (like a lamp).</li>
              </ul>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md flex gap-3 text-sm">
                <Info className="text-yellow-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <strong className="text-yellow-800 block mb-1">Language Note:</strong>
                  In everyday English we say <em>battery</em>, but in technical English: 
                  <br/>1 <strong>Cell</strong> = A single unit
                  <br/>1 <strong>Battery</strong> = Multiple cells connected together.
                </div>
              </div>
            </div>
            {/* Visual Suggestion: Circuit Diagram */}
            <div>
              <CircuitDiagram />
            </div>
          </div>
        </section>

        {/* Section 2: Voltage and Resistance */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-orange-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <Activity className="text-orange-600" size={24} />
            <h2 className="text-xl font-bold text-slate-800">2. Voltage and Resistance</h2>
          </div>
          <div className="p-6 md:p-8 space-y-8">
            <div className="text-slate-700 leading-relaxed text-lg space-y-4">
              <p>
                <strong>Voltage (V)</strong> is the electrical pressure that drives the current. It is also referred to as <em>electromotive force (EMF)</em>. If other factors stay constant, a higher voltage creates a higher current.
              </p>
              <p>
                <strong>Resistance (Ω, ohms)</strong> is the opposition to current flow. High resistance means less current can flow, while low resistance allows more current.
              </p>
              
              <h3 className="font-semibold text-slate-800 mt-6 border-b pb-2">Material Behavior:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-800">Conductors</h4>
                  <p className="text-sm text-green-700 mt-1">Allow current to flow easily (low resistance). Example: Copper.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800">Insulators</h4>
                  <p className="text-sm text-red-700 mt-1">Resist current flow (high resistance). Example: Plastic. Insulation prevents electric shock by blocking contact with live conductors.</p>
                </div>
              </div>
            </div>
            {/* Visual Suggestion: Interactive Simulator */}
            <OhmsLawVisualizer />
          </div>
        </section>

        {/* Section 3: Electrical Power */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-indigo-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <Battery className="text-indigo-600" size={24} />
            <h2 className="text-xl font-bold text-slate-800">3. Electrical Power</h2>
          </div>
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
              <p>
                <strong>Electrical power (W, watts)</strong> is the rate of energy use. It depends on both Voltage (V) and Current (A). Every electrical appliance (e.g., a kettle) has a <strong>Power rating</strong> indicating the power it requires.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-center text-xl text-slate-800 shadow-inner">
                Current = Power ÷ Voltage
              </div>
              <p className="text-sm text-slate-500">
                Example: If an appliance uses 2000 W and is connected to a 230 V supply, the current is 2000 ÷ 230 = 8.7 A.
              </p>
            </div>
            {/* Visual Suggestion: Calculator */}
            <div>
              <PowerCalculator />
            </div>
          </div>
        </section>

        {/* Section 4: Vocabulary List */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-200 px-6 py-4">
            <h2 className="text-xl font-bold text-slate-800">4. Vocabulary Reference</h2>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 border-b font-medium">Term</th>
                  <th className="p-4 border-b font-medium">Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ['Electric current', 'Flow of electric charge'],
                  ['Circuit', 'Path through which current flows'],
                  ['Conductor (general)', 'Material that allows current flow'],
                  ['Component', 'Device in a circuit'],
                  ['Electron', 'Negatively charged particle'],
                  ['Charge carrier', 'Particle carrying electric charge'],
                  ['Voltage', 'Electrical force driving current'],
                  ['Electromotive force', 'Another term for voltage'],
                  ['Resistance', 'Opposition to current'],
                  ['Ohm', 'Unit of resistance'],
                  ['Conductor (material)', 'Low-resistance material'],
                  ['Insulator', 'High-resistance material'],
                  ['Electric shock', 'Harm from electric current'],
                  ['Electrical power', 'Rate of energy use'],
                  ['Watt', 'Unit of power']
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-semibold text-slate-800">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Exercises */}
        <section className="bg-slate-100 p-2 md:p-6 rounded-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 text-center">5. Practice Exercises</h2>
          </div>
          <Exercises />
        </section>

      </main>
    </div>
  );
}