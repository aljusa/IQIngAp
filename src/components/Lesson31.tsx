import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertCircle, Info, ArrowRight } from 'lucide-react';

// --- VISUAL DIAGRAM COMPONENTS (SVGs) ---

const TensionDiagram = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="35" width="80" height="30" rx="4" fill="#60A5FA" />
    <path d="M 50 50 L 20 50 M 20 50 L 30 40 M 20 50 L 30 60" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 150 50 L 180 50 M 180 50 L 170 40 M 180 50 L 170 60" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompressionDiagram = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="35" width="80" height="30" rx="4" fill="#60A5FA" />
    <path d="M 20 50 L 50 50 M 50 50 L 40 40 M 50 50 L 40 60" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 180 50 L 150 50 M 150 50 L 160 40 M 150 50 L 160 60" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BendingDiagram = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 30 40 Q 100 80 170 40" stroke="#60A5FA" strokeWidth="20" strokeLinecap="round" />
    <path d="M 100 20 L 100 45 M 100 45 L 90 35 M 100 45 L 110 35" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 30 70 L 30 50 M 30 50 L 20 60 M 30 50 L 40 60" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 170 70 L 170 50 M 170 50 L 160 60 M 170 50 L 180 60" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShearDiagram = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="100" height="30" rx="2" fill="#60A5FA" />
    <rect x="70" y="52" width="100" height="30" rx="2" fill="#3B82F6" />
    <path d="M 30 35 L 130 35 M 130 35 L 120 25 M 130 35 L 120 45" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 190 67 L 90 67 M 90 67 L 100 57 M 90 67 L 100 77" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TorsionDiagram = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="50" rx="15" ry="30" fill="#93C5FD" />
    <rect x="40" y="20" width="120" height="60" fill="#60A5FA" />
    <ellipse cx="160" cy="50" rx="15" ry="30" fill="#3B82F6" />
    <path d="M 20 20 C 10 30, 10 70, 20 80" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M 20 80 L 30 75 M 20 80 L 15 70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M 180 80 C 190 70, 190 30, 180 20" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M 180 20 L 170 25 M 180 20 L 185 30" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" fill="none"/>
  </svg>
);

const BeamNeutralAxisDiagram = () => (
  <svg viewBox="0 0 400 150" className="w-full max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bent Beam Body */}
    <path d="M 50 50 Q 200 120 350 50 L 350 90 Q 200 160 50 90 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
    
    {/* Neutral Axis */}
    <path d="M 50 70 Q 200 140 350 70" stroke="#1F2937" strokeWidth="2" strokeDasharray="6 6" />
    
    {/* Compression arrows (top) */}
    <path d="M 170 65 L 195 72 M 195 72 L 185 62 M 195 72 L 190 75" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 230 65 L 205 72 M 205 72 L 215 62 M 205 72 L 210 75" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Tension arrows (bottom) */}
    <path d="M 180 115 L 150 102 M 150 102 L 160 98 M 150 102 L 155 110" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 220 115 L 250 102 M 250 102 L 240 98 M 250 102 L 245 110" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>

    {/* Labels */}
    <text x="200" y="45" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold">Compression (Squashing)</text>
    <text x="200" y="145" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">Tension (Stretching)</text>
    <text x="360" y="75" fill="#1F2937" fontSize="12" fontWeight="bold">Neutral Axis</text>
    <text x="360" y="90" fill="#6B7280" fontSize="10">(Zero Stress)</text>
  </svg>
);


// --- MAIN APPLICATION COMPONENT ---

export default function EngineeringModule() {
  // Data Models
  const forceTypes = [
    { title: "Tension", nonTech: "Stretching", term: "Tensile Stress", meaning: "The material extends (lengthens).", fail: "Fracture (breaks apart)", icon: TensionDiagram },
    { title: "Compression", nonTech: "Squashing", term: "Compressive Stress", meaning: "The material shortens.", fail: "Crushes (thick material) or Buckles (slender material)", icon: CompressionDiagram },
    { title: "Bending", nonTech: "Bending", term: "Bending Stress", meaning: "The material curves (deflects or flexes).", fail: "Fracture (tension side) or crushing (compression side)", icon: BendingDiagram },
    { title: "Shear", nonTech: "Scissoring", term: "Shear Stress", meaning: "The material deforms very little, then fails suddenly.", fail: "Shearing failure (sudden break)", icon: ShearDiagram },
    { title: "Torsion", nonTech: "Twisting", term: "Torsional Stress", meaning: "The material twists.", fail: "Fracture or shear", icon: TorsionDiagram },
  ];

  // State for Exercises
  const [ex1Answers, setEx1Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ex2Answers, setEx2Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ex3Answers, setEx3Answers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  
  const [resultsEx1, setResultsEx1] = useState(null);
  const [resultsEx2, setResultsEx2] = useState(null);
  const [resultsEx3, setResultsEx3] = useState(null);

  // Exercise Handlers
  const handleEx1Change = (q, val) => setEx1Answers(prev => ({ ...prev, [q]: val }));
  const handleEx2Change = (q, val) => setEx2Answers(prev => ({ ...prev, [q]: val }));
  const handleEx3Change = (q, val) => setEx3Answers(prev => ({ ...prev, [q]: val }));

  const checkEx1 = () => {
    setResultsEx1({
      q1: ex1Answers.q1 === 'tension',
      q2: ex1Answers.q2 === 'torsion',
      q3: ex1Answers.q3 === 'compression',
      q4: ex1Answers.q4 === 'shear',
      q5: ex1Answers.q5 === 'bending',
    });
  };

  const checkEx2 = () => {
    const clean = (str) => str.toLowerCase().trim();
    setResultsEx2({
      q1: clean(ex2Answers.q1) === 'tensile' || clean(ex2Answers.q1) === 'tension',
      q2: clean(ex2Answers.q2) === 'buckle',
      q3: clean(ex2Answers.q3) === 'neutral',
      q4: clean(ex2Answers.q4) === 'shear',
      q5: clean(ex2Answers.q5) === 'torsional' || clean(ex2Answers.q5) === 'torsion',
    });
  };

  const checkEx3 = () => {
    setResultsEx3({
      q1: ex3Answers.q1 === 'sagging',
      q2: ex3Answers.q2 === 'torsion',
      q3: ex3Answers.q3 === 'crushing',
      q4: ex3Answers.q4 === 'tensile',
      q5: ex3Answers.q5 === 'shear',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 shadow-md relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4 text-blue-400">
            <BookOpen size={24} />
            <span className="uppercase tracking-widest text-sm font-semibold">Engineering Mechanics Module</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Force, Deformation, and Failure
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Explore how different types of forces affect materials and structures, and discover the essential engineering vocabulary used to describe deformation and failure.
          </p>
        </div>
        {/* Decorative background lines */}
        <svg className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,100 L100,0 L100,100 Z" fill="currentColor"/>
           <path d="M50,100 L100,50 L100,100 Z" fill="#60A5FA"/>
        </svg>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1 & 2: Key Vocabulary and Forces */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 border-b-4 border-blue-500 inline-block pb-2">1. Types of Force & Deformation</h2>
            <p className="text-slate-600 mt-4 text-lg">Every force acting on a material creates a specific type of stress, resulting in different forms of deformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forceTypes.map((force, idx) => {
              const Icon = force.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-slate-100 border-b border-slate-200 p-4 flex justify-center">
                    <Icon />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold text-blue-900">{force.title}</h3>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide border border-slate-300 rounded px-2 py-1">{force.nonTech}</span>
                    </div>
                    <p className="text-slate-700 mb-4 h-12"><strong>Meaning:</strong> {force.meaning}</p>
                    <div className="bg-red-50 text-red-800 text-sm p-3 rounded-lg border border-red-100 flex gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block mb-1">Failure Mode:</span>
                        {force.fail}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 3: Beam Focus */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Info className="text-blue-500" size={32} />
            Important Concept: Bending in Beams
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                When a beam bends downwards (known as <strong>Sagging</strong>), it experiences two opposite stresses simultaneously. Upward bending is known as <strong>Hogging</strong>.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-red-100 p-2 rounded-full h-fit"><ArrowRight className="text-red-600" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Compression (Upper Part)</h4>
                    <p className="text-slate-600">The material at the top is squashed together. The stress is maximum at the outer surface.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 p-2 rounded-full h-fit"><ArrowRight className="text-blue-600" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Tension (Lower Part)</h4>
                    <p className="text-slate-600">The material at the bottom is stretched apart. The stress is maximum at the outer surface.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-slate-200 p-2 rounded-full h-fit"><ArrowRight className="text-slate-600" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Neutral Axis</h4>
                    <p className="text-slate-600">The center line of the beam where the stress is exactly <strong>zero</strong>.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <BeamNeutralAxisDiagram />
              <p className="text-center text-sm text-slate-500 mt-6 italic">Cross-section visual representing stresses during beam sagging.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Contextual Examples */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2">Examples in Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 border-l-4 border-blue-500 shadow-sm rounded-r-lg">
              <p className="text-slate-700 text-lg">"The steel cable is under <strong>tensile stress</strong> and begins to elongate."</p>
            </div>
            <div className="bg-white p-5 border-l-4 border-red-500 shadow-sm rounded-r-lg">
              <p className="text-slate-700 text-lg">"The column failed due to <strong>compression</strong>, causing it to buckle."</p>
            </div>
            <div className="bg-white p-5 border-l-4 border-green-500 shadow-sm rounded-r-lg">
              <p className="text-slate-700 text-lg">"The beam shows <strong>bending stress</strong>, with visible deflection in the middle."</p>
            </div>
            <div className="bg-white p-5 border-l-4 border-orange-500 shadow-sm rounded-r-lg">
              <p className="text-slate-700 text-lg">"The bolt experienced <strong>shear stress</strong> and snapped suddenly."</p>
            </div>
            <div className="bg-white p-5 border-l-4 border-purple-500 shadow-sm rounded-r-lg md:col-span-2">
              <p className="text-slate-700 text-lg">"The shaft failed under <strong>torsional stress</strong> after excessive twisting."</p>
            </div>
          </div>
        </section>

        {/* Section 5: Interactive Exercises */}
        <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Knowledge Check</h2>
            <p className="text-slate-600">Test your understanding of the concepts and vocabulary.</p>
          </div>

          <div className="space-y-12">
            
            {/* Exercise 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Exercise 1: Matching (Basic)</h3>
              <p className="mb-6 text-slate-600">Match the non-technical word with the correct technical term.</p>
              
              <div className="space-y-3 max-w-lg">
                {[
                  { label: "Stretching", id: "q1" },
                  { label: "Twisting", id: "q2" },
                  { label: "Squashing", id: "q3" },
                  { label: "Scissoring", id: "q4" },
                  { label: "Bending", id: "q5" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="font-semibold text-slate-700 w-32">{item.label}</span>
                    <ArrowRight size={16} className="text-slate-400" />
                    <div className="flex items-center gap-3">
                      <select 
                        className={`border rounded p-2 bg-white min-w-[140px] focus:ring-2 focus:ring-blue-500 outline-none
                          ${resultsEx1 ? (resultsEx1[item.id] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-slate-300'}`}
                        value={ex1Answers[item.id]}
                        onChange={(e) => handleEx1Change(item.id, e.target.value)}
                        disabled={resultsEx1 !== null}
                      >
                        <option value="">Select term...</option>
                        <option value="shear">Shear</option>
                        <option value="torsion">Torsion</option>
                        <option value="compression">Compression</option>
                        <option value="tension">Tension</option>
                        <option value="bending">Bending</option>
                      </select>
                      {resultsEx1 && (
                        resultsEx1[item.id] ? <CheckCircle className="text-green-500" size={20} /> : <AlertCircle className="text-red-500" size={20} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {!resultsEx1 && <button onClick={checkEx1} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Check Answers</button>}
            </div>

            {/* Exercise 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Exercise 2: Fill in the Blanks (Intermediate)</h3>
              <div className="space-y-4">
                {[
                  { id: 'q1', pre: "When a material lengthens, it is under", post: "stress." },
                  { id: 'q2', pre: "A tall, thin column may", post: "under compression." },
                  { id: 'q3', pre: "The center of a beam where stress is zero is called the", post: "axis." },
                  { id: 'q4', pre: "Sudden failure with little deformation is typical of", post: "stress." },
                  { id: 'q5', pre: "Twisting forces create", post: "stress." }
                ].map((q) => (
                   <div key={q.id} className="text-lg text-slate-700 flex flex-wrap items-center gap-2">
                     <span>{q.pre}</span>
                     <div className="relative">
                       <input 
                         type="text" 
                         value={ex2Answers[q.id]}
                         onChange={(e) => handleEx2Change(q.id, e.target.value)}
                         disabled={resultsEx2 !== null}
                         className={`border-b-2 bg-slate-50 px-2 py-1 outline-none w-32 text-center text-blue-700 font-semibold focus:border-blue-500
                           ${resultsEx2 ? (resultsEx2[q.id] ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700') : 'border-slate-300'}`}
                       />
                        {resultsEx2 && (
                          <span className="absolute -right-6 top-1.5">
                            {resultsEx2[q.id] ? <CheckCircle className="text-green-500" size={18} /> : <AlertCircle className="text-red-500" size={18} />}
                          </span>
                        )}
                     </div>
                     <span>{q.post}</span>
                   </div>
                ))}
              </div>
              {!resultsEx2 && <button onClick={checkEx2} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Check Answers</button>}
            </div>

             {/* Exercise 3 */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Exercise 3: Contextual Usage (Advanced)</h3>
              <div className="space-y-6">
                {[
                  { id: 'q1', text: "A bridge beam curves downward under load. This is called ____.", options: ["hogging", "sagging", "buckling", "shearing"] },
                  { id: 'q2', text: "A metal rod breaks after being twisted repeatedly. This is failure due to ____.", options: ["tension", "bending", "torsion", "compression"] },
                  { id: 'q3', text: "A thick concrete block under heavy load will likely fail by ____.", options: ["crushing", "buckling", "deflection", "elongation"] },
                  { id: 'q4', text: "The bottom surface of a bent (sagging) beam is under ____ stress.", options: ["compressive", "shear", "tensile", "zero"] },
                  { id: 'q5', text: "A rivet connecting two plates fails due to sideways forces. This is ____ stress.", options: ["shear", "bending", "torsional", "compressive"] }
                ].map((q) => (
                   <div key={q.id} className="bg-slate-50 p-4 rounded border border-slate-100">
                     <p className="font-semibold text-slate-800 mb-3">{q.text}</p>
                     <div className="flex flex-wrap gap-3">
                       {q.options.map(opt => (
                         <label key={opt} className={`flex items-center gap-2 p-2 border rounded cursor-pointer transition-colors
                           ${ex3Answers[q.id] === opt ? 'bg-blue-100 border-blue-400' : 'bg-white border-slate-300'}
                           ${resultsEx3 && resultsEx3[q.id] && ex3Answers[q.id] === opt ? 'bg-green-100 border-green-500' : ''}
                           ${resultsEx3 && !resultsEx3[q.id] && ex3Answers[q.id] === opt ? 'bg-red-100 border-red-500' : ''}
                         `}>
                           <input 
                             type="radio" 
                             name={q.id} 
                             value={opt}
                             checked={ex3Answers[q.id] === opt}
                             onChange={(e) => handleEx3Change(q.id, e.target.value)}
                             disabled={resultsEx3 !== null}
                             className="hidden"
                           />
                           <span className="capitalize">{opt}</span>
                         </label>
                       ))}
                       {resultsEx3 && ex3Answers[q.id] && (
                          <div className="ml-auto flex items-center">
                            {resultsEx3[q.id] ? <CheckCircle className="text-green-500" size={24} /> : <AlertCircle className="text-red-500" size={24} />}
                          </div>
                        )}
                     </div>
                   </div>
                ))}
              </div>
              {!resultsEx3 && <button onClick={checkEx3} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Check Answers</button>}
            </div>

          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center">
        <p>Interactive Engineering Learning Module. Created based on academic text.</p>
      </footer>
    </div>
  );
}