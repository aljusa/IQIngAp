import React, { useState } from 'react';
import { Settings, RefreshCcw, ArrowsUpFromLine, MoveDiagonal, CornerDownRight, CircleSlash, ArrowRightLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';

// --- CUSTOM GEAR VISUALIZATION COMPONENTS ---
const GearSystem = ({ gears }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-inner overflow-hidden">
      <style>{`
        @keyframes spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .spin-cw { animation: spin-cw linear infinite; }
        .spin-ccw { animation: spin-ccw linear infinite; }
      `}</style>
      <div className="flex items-center justify-center space-x-[-10px]">
        {gears.map((gear, index) => (
          <div key={index} className="flex flex-col items-center">
            <Settings 
              className={`${gear.direction === 'cw' ? 'spin-cw' : 'spin-ccw'}`} 
              style={{ 
                width: gear.size, 
                height: gear.size, 
                color: gear.color,
                animationDuration: `${gear.speed}s` 
              }} 
            />
            {gear.label && <span className="mt-2 text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded shadow-sm">{gear.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('concepts');

  // Exercise 1 State
  const [ex1Answers, setEx1Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ex1Results, setEx1Results] = useState(null);
  const ex1Correct = { q1: 'E', q2: 'A', q3: 'C', q4: 'B', q5: 'D' };

  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ex2Results, setEx2Results] = useState(null);
  const ex2Correct = { q1: 'gear train', q2: 'driveshaft', q3: 'follower', q4: 'idler gear', q5: 'gearbox' };

  // Exercise 3 State
  const [ex3Answers, setEx3Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ex3Results, setEx3Results] = useState(null);
  const ex3Correct = { q1: 'worm gear', q2: 'gear train', q3: 'helical gear', q4: 'idler gear', q5: 'gear ratio' };

  const checkEx1 = () => {
    let results = {};
    Object.keys(ex1Correct).forEach(key => results[key] = ex1Answers[key] === ex1Correct[key]);
    setEx1Results(results);
  };

  const checkEx2 = () => {
    let results = {};
    Object.keys(ex2Correct).forEach(key => {
      // Basic normalization for text inputs
      const normalize = (str) => str.toLowerCase().trim();
      results[key] = normalize(ex2Answers[key]) === ex2Correct[key];
    });
    setEx2Results(results);
  };

  const checkEx3 = () => {
    let results = {};
    Object.keys(ex3Correct).forEach(key => results[key] = ex3Answers[key] === ex3Correct[key]);
    setEx3Results(results);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* HEADER */}
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Settings className="w-8 h-8 text-blue-300 spin-cw" style={{animationDuration: '10s'}}/>
            <h1 className="text-2xl font-bold tracking-tight">Engineering English Lesson</h1>
          </div>
        </div>
        
       
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
       
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <BookOpen className="mr-3 text-blue-600" /> Key Concepts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">Gears</h3>
                  <ul className="space-y-2 list-disc list-inside text-slate-700">
                    <li>Gears are wheels with teeth (called cogs).</li>
                    <li>The teeth interlock (fit together) with other gears.</li>
                    <li>When one gear rotates, the connected gear rotates in the <strong>opposite direction</strong>.</li>
                    <li>Gears are mounted on shafts to transmit rotary motion.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2"> Interlocking</h3>
                  <GearSystem gears={[
                    { size: 80, speed: 4, direction: 'cw', color: '#3b82f6', label: 'Rotates CW' },
                    { size: 80, speed: 4, direction: 'ccw', color: '#ef4444', label: 'Rotates CCW' }
                  ]} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">Drive System & Gear Train</h3>
                  <ul className="space-y-2 list-disc list-inside text-slate-700">
                    <li><strong>Drive:</strong> Rotary motion transmitted from one shaft to another.</li>
                    <li><strong>Driveshaft / Input shaft:</strong> A shaft connected to the engine or motor.</li>
                    <li><strong>Driver gear:</strong> The gear attached to the driveshaft.</li>
                    <li><strong>Follower gear:</strong> The gear that meshes with and is driven by the driver.</li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-amber-900 font-medium"><strong>Transmission System (Gear Train):</strong> Starts with an input shaft and ends with an output shaft. It may include <strong>idler gears</strong> which change direction of rotation without changing speed ratio.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2"> Idler Gear</h3>
                  <GearSystem gears={[
                    { size: 60, speed: 3, direction: 'cw', color: '#10b981', label: 'Driver (CW)' },
                    { size: 60, speed: 3, direction: 'ccw', color: '#64748b', label: 'Idler (CCW)' },
                    { size: 60, speed: 3, direction: 'cw', color: '#f59e0b', label: 'Follower (CW)' }
                  ]} />
                  <p className="text-xs text-slate-500 text-center mt-2 italic">Notice how the driver and follower now rotate in the same direction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <RefreshCcw className="mr-3 text-blue-600" /> Gear Ratios
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-slate-700 mb-4">
                    A gear ratio compares the number of teeth between two gears.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                    <h4 className="font-bold text-slate-800 mb-2">Example Ratio: 3:1</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li><strong>Driver:</strong> 20 teeth</li>
                      <li><strong>Follower:</strong> 60 teeth</li>
                    </ul>
                    <p className="mt-4 text-blue-700 font-medium bg-blue-50 p-3 rounded">
                      This means: The Driver rotates 3 times → while the follower rotates once.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">Key Terms</h3>
                  <ul className="space-y-2 list-disc list-inside text-slate-700">
                    <li><strong>Input speed:</strong> Speed of the driver gear</li>
                    <li><strong>Output speed:</strong> Speed of the follower gear</li>
                    <li className="text-amber-600 font-semibold">Larger follower gear → lower output speed</li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3 border-b pb-2">Gearboxes</h3>
                  <p className="text-slate-700">A gearbox allows changing gear ratios.</p>
                  <ul className="space-y-2 list-disc list-inside text-slate-700 mt-2">
                    <li><strong>Manual gearbox:</strong> Changed by a person</li>
                    <li><strong>Automatic gearbox:</strong> Changes gears automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 text-center"> 3:1 Ratio</h3>
                  <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-inner flex flex-col items-center">
                     {/* Conceptual 3:1 representation */}
                     <div className="flex items-center justify-center space-x-[-15px]">
                        <div className="flex flex-col items-center">
                          <Settings className="spin-cw text-blue-500" style={{ width: 50, height: 50, animationDuration: '2s' }} />
                          <span className="mt-2 text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded shadow">Driver (Fast)</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Settings className="spin-ccw text-red-500" style={{ width: 150, height: 150, animationDuration: '6s' }} />
                          <span className="mt-2 text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded shadow">Follower (Slow)</span>
                        </div>
                     </div>
                     <p className="mt-6 text-sm text-slate-500 text-center max-w-sm">
                       The smaller driver gear must complete 3 full rotations to turn the large follower gear exactly 1 time.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Settings className="mr-3 text-blue-600" /> Types of Gear Wheels
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Type Cards */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <ArrowsUpFromLine />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Spur Gears</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    <li>Straight teeth</li>
                    <li>Simple design</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <ArrowRightLeft />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Helical Gears</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    <li>Curved/Angled teeth</li>
                    <li>Smoother operation</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <MoveDiagonal />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Bevel Gears</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    <li>Transmit motion at an angle</li>
                    <li>Often used for 90° changes</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <CornerDownRight />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Crown Gears</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    <li>Transmit motion at 90° to a pinion</li>
                    <li>Pinion is a small gear</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-colors group lg:col-span-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <CircleSlash />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Worm Gears</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    <li>Transmit motion at an angle</li>
                    <li>Provide large speed reduction</li>
                    <li><strong>Allow one-way drive</strong> (cannot reverse motion)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Vocabulary List</h2>
              
              <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900">
                      <th className="px-6 py-4 font-bold border-b border-blue-100 w-1/3">Term</th>
                      <th className="px-6 py-4 font-bold border-b border-blue-100">Definition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { term: 'Gear', def: 'A toothed wheel used to transmit motion' },
                      { term: 'Cog', def: 'A tooth on a gear' },
                      { term: 'Interlock', def: 'Fit together securely' },
                      { term: 'Shaft', def: 'A rotating rod that transmits motion' },
                      { term: 'Driveshaft', def: 'Shaft connected to a power source' },
                      { term: 'Driver', def: 'Gear that provides motion' },
                      { term: 'Follower', def: 'Gear that receives motion' },
                      { term: 'Gear train', def: 'System of multiple gears' },
                      { term: 'Gear ratio', def: 'Ratio of teeth between gears' },
                      { term: 'Idler gear', def: 'Gear that changes direction only' },
                      { term: 'Gearbox', def: 'Device for changing gear ratios' },
                      { term: 'Spur gear', def: 'Gear with straight teeth' },
                      { term: 'Helical gear', def: 'Gear with angled teeth' },
                      { term: 'Bevel gear', def: 'Gear for angled transmission' },
                      { term: 'Worm gear', def: 'Gear system with high reduction' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-800">{row.term}</td>
                        <td className="px-6 py-4 text-slate-600">{row.def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* EXERCISE 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Exercise 1: Matching Terms </h2>
              <p className="text-slate-600 mb-6">Match each term to its correct definition.</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    { id: 'q1', term: 'Driver' },
                    { id: 'q2', term: 'Idler gear' },
                    { id: 'q3', term: 'Gear ratio' },
                    { id: 'q4', term: 'Shaft' },
                    { id: 'q5', term: 'Follower' }
                  ].map((q) => (
                    <div key={q.id} className="flex items-center space-x-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-bold w-24 text-blue-900">{q.term}</span>
                      <select 
                        className={`flex-1 p-2 rounded border focus:ring-2 focus:ring-blue-500 outline-none
                          ${ex1Results && ex1Results[q.id] ? 'border-green-500 bg-green-50' : ''}
                          ${ex1Results && !ex1Results[q.id] ? 'border-red-500 bg-red-50' : ''}
                        `}
                        value={ex1Answers[q.id]}
                        onChange={(e) => setEx1Answers({...ex1Answers, [q.id]: e.target.value})}
                      >
                        <option value="">Select definition...</option>
                        <option value="A">A. Changes direction but not speed</option>
                        <option value="B">B. Rotating rod transmitting motion</option>
                        <option value="C">C. Relationship between gear teeth counts</option>
                        <option value="D">D. Gear that receives motion</option>
                        <option value="E">E. Gear that provides motion</option>
                      </select>
                      {ex1Results && (ex1Results[q.id] ? <CheckCircle className="text-green-500" /> : <XCircle className="text-red-500" />)}
                    </div>
                  ))}
                  <button onClick={checkEx1} className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors">
                    Check Answers
                  </button>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-4">Definitions Key</h4>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li><strong>A.</strong> Changes direction but not speed</li>
                    <li><strong>B.</strong> Rotating rod transmitting motion</li>
                    <li><strong>C.</strong> Relationship between gear teeth counts</li>
                    <li><strong>D.</strong> Gear that receives motion</li>
                    <li><strong>E.</strong> Gear that provides motion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EXERCISE 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Exercise 2: Fill in the Blanks </h2>
              <p className="text-slate-600 mb-6">Type the correct vocabulary word.</p>

              <div className="space-y-6 max-w-3xl">
                {[
                  { id: 'q1', pre: '1. Gears transmit motion through a', post: '.' },
                  { id: 'q2', pre: '2. A gear attached to the engine is called the', post: '.' },
                  { id: 'q3', pre: '3. The gear that receives motion is the', post: '.' },
                  { id: 'q4', pre: '4. A', post: 'can change the direction of rotation without changing speed.' },
                  { id: 'q5', pre: '5. A', post: 'allows gears to be changed during operation.' }
                ].map((q) => (
                  <div key={q.id} className="flex items-center flex-wrap gap-3">
                    <span className="text-slate-700">{q.pre}</span>
                    <div className="relative flex items-center">
                      <input 
                        type="text"
                        className={`px-3 py-1 border-b-2 bg-slate-50 focus:bg-blue-50 focus:border-blue-600 outline-none w-40 transition-colors
                          ${ex2Results && ex2Results[q.id] ? 'border-green-500 text-green-700' : 'border-slate-300'}
                          ${ex2Results && !ex2Results[q.id] ? 'border-red-500 text-red-700' : ''}
                        `}
                        value={ex2Answers[q.id]}
                        onChange={(e) => setEx2Answers({...ex2Answers, [q.id]: e.target.value})}
                      />
                      {ex2Results && (
                        <span className="absolute -right-8">
                          {ex2Results[q.id] ? <CheckCircle className="text-green-500 w-5 h-5" /> : <XCircle className="text-red-500 w-5 h-5" />}
                        </span>
                      )}
                    </div>
                    <span className="text-slate-700">{q.post}</span>
                  </div>
                ))}
                <button onClick={checkEx2} className="px-6 py-2 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors">
                  Check Answers
                </button>
              </div>
            </div>

            {/* EXERCISE 3 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Exercise 3: Contextual Usage </h2>
              <p className="text-slate-600 mb-6">Choose the correct term for each engineering situation.</p>

              <div className="space-y-4 max-w-4xl">
                {[
                  { id: 'q1', text: 'An engineer needs a system to reduce speed significantly and prevent reverse motion →' },
                  { id: 'q2', text: 'A system of multiple gears transferring motion from input to output →' },
                  { id: 'q3', text: 'A gear with angled teeth for smoother operation →' },
                  { id: 'q4', text: 'A gear used only to reverse rotation direction →' },
                  { id: 'q5', text: 'The relationship between input speed and output speed →' }
                ].map((q) => (
                  <div key={q.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-50 p-4 rounded-lg border border-slate-200 gap-4">
                    <span className="text-slate-700 flex-1">{q.text}</span>
                    <div className="flex items-center space-x-3 w-full sm:w-64">
                      <select 
                        className={`flex-1 p-2 rounded border focus:ring-2 focus:ring-blue-500 outline-none
                          ${ex3Results && ex3Results[q.id] ? 'border-green-500 bg-green-50' : ''}
                          ${ex3Results && !ex3Results[q.id] ? 'border-red-500 bg-red-50' : ''}
                        `}
                        value={ex3Answers[q.id]}
                        onChange={(e) => setEx3Answers({...ex3Answers, [q.id]: e.target.value})}
                      >
                        <option value="">Select term...</option>
                        <option value="helical gear">helical gear</option>
                        <option value="idler gear">idler gear</option>
                        <option value="worm gear">worm gear</option>
                        <option value="gear train">gear train</option>
                        <option value="gear ratio">gear ratio</option>
                      </select>
                      {ex3Results && (ex3Results[q.id] ? <CheckCircle className="text-green-500 w-6 h-6 shrink-0" /> : <XCircle className="text-red-500 w-6 h-6 shrink-0" />)}
                    </div>
                  </div>
                ))}
                <button onClick={checkEx3} className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors">
                  Check Answers
                </button>
              </div>
            </div>

          </div>
      </main>
    </div>
  );
}