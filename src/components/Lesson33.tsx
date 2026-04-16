import React, { useState } from 'react';
import { BookOpen, Activity, Anchor, Wrench, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

// --- VISUAL COMPONENTS (DIAGRAMS) ---

const AccelerationDiagram = () => (
  <div className="w-full h-48 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center relative overflow-hidden">
    <div className="absolute top-4 left-4 text-xs font-semibold text-blue-600 bg-white px-2 py-1 rounded shadow-sm">
      Visual Representation: Constant Acceleration
    </div>
    {/* Velocity Graph */}
    <svg className="w-full h-full p-8" viewBox="0 0 400 150">
      {/* Axes */}
      <line x1="50" y1="120" x2="350" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <line x1="50" y1="20" x2="50" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <text x="360" y="125" fontSize="12" fill="#64748b">Time (t)</text>
      <text x="10" y="20" fontSize="12" fill="#64748b">Velocity (v)</text>
      
      {/* Acceleration Line */}
      <line x1="50" y1="120" x2="320" y2="40" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Markers */}
      <circle cx="140" cy="93" r="4" fill="#2563eb" />
      <circle cx="230" cy="67" r="4" fill="#2563eb" />
      
      <text x="150" y="105" fontSize="10" fill="#2563eb">v = 10 m/s</text>
      <text x="240" y="75" fontSize="10" fill="#2563eb">v = 20 m/s</text>

      {/* Force Arrow */}
      <g transform="translate(180, 20)">
        <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#ef4444">External Force</text>
        <line x1="0" y1="5" x2="80" y2="5" stroke="#ef4444" strokeWidth="2" />
        <polygon points="80,1 88,5 80,9" fill="#ef4444" />
      </g>
    </svg>
  </div>
);

const InertiaDiagram = () => (
  <div className="w-full h-48 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
     <div className="absolute top-4 left-4 text-xs font-semibold text-slate-600 bg-white px-2 py-1 rounded shadow-sm">
      Visual Representation: Mass and Inertia
    </div>
    <div className="flex w-full justify-around items-end px-8 mt-6">
      {/* Low Mass */}
      <div className="flex flex-col items-center">
        <svg width="100" height="80" viewBox="0 0 100 80">
          <rect x="30" y="40" width="40" height="40" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2"/>
          <text x="50" y="65" fontSize="12" textAnchor="middle" fill="#475569">10 kg</text>
          {/* Small Force Arrow */}
          <line x1="0" y1="60" x2="25" y2="60" stroke="#ef4444" strokeWidth="2" />
          <polygon points="25,56 30,60 25,64" fill="#ef4444" />
          <text x="15" y="50" fontSize="10" textAnchor="middle" fill="#ef4444">Force</text>
        </svg>
        <p className="text-xs text-slate-500 mt-2 font-medium">Low Inertia = Easy to move</p>
      </div>

      {/* High Mass */}
      <div className="flex flex-col items-center">
        <svg width="150" height="120" viewBox="0 0 150 120">
          <rect x="30" y="20" width="100" height="100" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
          <text x="80" y="75" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#f8fafc">1000 kg</text>
          {/* Big Force Arrow */}
          <line x1="-20" y1="70" x2="25" y2="70" stroke="#ef4444" strokeWidth="4" />
          <polygon points="25,64 33,70 25,76" fill="#ef4444" />
          <text x="5" y="60" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#ef4444">High Force</text>
        </svg>
        <p className="text-xs text-slate-500 mt-2 font-medium">High Inertia = Hard to move</p>
      </div>
    </div>
  </div>
);

const LeverDiagram = () => (
  <div className="w-full h-48 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center relative overflow-hidden">
    
    <svg className="w-full h-full p-4 mt-4" viewBox="0 0 500 150">
      {/* Ground */}
      <line x1="20" y1="130" x2="380" y2="130" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Fulcrum */}
      <polygon points="200,100 220,130 180,130" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <text x="200" y="145" fontSize="12" textAnchor="middle" fill="#b45309" fontWeight="bold">Fulcrum (Pivot)</text>

      {/* Lever Beam */}
      <rect x="50" y="90" width="300" height="10" fill="#fbbf24" stroke="#d97706" strokeWidth="2" transform="rotate(-10 200 100)" />
      
      {/* Load */}
      <g transform="translate(60, 45) rotate(-10)">
        <rect x="0" y="0" width="40" height="40" fill="#64748b" stroke="#475569" strokeWidth="2" />
        <text x="20" y="25" fontSize="12" fill="white" textAnchor="middle">Load</text>
        <line x1="20" y1="45" x2="20" y2="75" stroke="#ef4444" strokeWidth="2" />
        <polygon points="16,75 24,75 20,83" fill="#ef4444" />
      </g>

      {/* Effort */}
      <g transform="translate(320, 15) rotate(-10)">
        <line x1="20" y1="0" x2="20" y2="50" stroke="#10b981" strokeWidth="3" />
        <polygon points="15,50 25,50 20,60" fill="#10b981" />
        <text x="20" y="-10" fontSize="14" fill="#10b981" fontWeight="bold" textAnchor="middle">Effort</text>
      </g>

      {/* Distance markers */}
      <line x1="80" y1="120" x2="195" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
      <text x="137" y="115" fontSize="10" fill="#64748b" textAnchor="middle">Short Distance</text>
      
      <line x1="205" y1="120" x2="340" y2="120" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
      <text x="272" y="115" fontSize="10" fill="#64748b" textAnchor="middle">Long Distance (Greater Leverage)</text>
    </svg>
  </div>
);

// --- MAIN APPLICATION ---

export default function App() {
  const [exerciseScore, setExerciseScore] = useState(0);
  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: ''
  });

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  q: string
) => {
  setAnswers({ ...answers, [q]: e.target.value });
};

  const checkAnswers = () => {
    let score = 0;
    if (answers.q1.toLowerCase().trim() === 'external') score++;
    if (answers.q2.toLowerCase().trim() === 'acceleration') score++;
    if (answers.q3.toLowerCase().trim() === 'fulcrum') score++;
    if (answers.q4.toLowerCase().trim() === 'inertia') score++;
    if (answers.q5.toLowerCase().trim() === 'newton') score++;
    setExerciseScore(score);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Motion and Simple Machines</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mt-1">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">1. Introduction (Overview)</h2>
              <p className="text-slate-600 leading-relaxed">
                This lesson explains how objects move under the influence of forces, how acceleration works, and how simple machines (like levers) help engineers increase efficiency. The focus is on key technical vocabulary used in engineering contexts.
              </p>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC CONTENT CARDS --- */}
        
        <div className="grid grid-cols-1 gap-8">
          
          {/* Concept 1: Acceleration and Motion */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="border-b border-slate-100 bg-slate-50/50 p-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-bold text-slate-800">Acceleration and Motion</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Explanation and Vocabulary</h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li><strong className="text-blue-700">External force:</strong> A force acting on an object from the outside.</li>
                  <li><strong className="text-blue-700">Velocity:</strong> Speed in a specific direction.</li>
                  <li><strong className="text-blue-700">Acceleration:</strong> Increase in speed over time. <em>Measured in m/s². Constant acceleration means speed increases at a steady rate.</em></li>
                  <li><strong className="text-blue-700">Deceleration:</strong> Decrease in speed.</li>
                  <li><strong className="text-blue-700">Linear motion:</strong> Movement in a straight line.</li>
                  <li><strong className="text-blue-700">Gravity:</strong> A force pulling objects downwards <em>(Approx. 10 m/s²)</em>.</li>
                  <li><strong className="text-blue-700">G-force (G):</strong> Measurement comparing acceleration with gravity.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <AccelerationDiagram />
              </div>
            </div>
          </article>

          {/* Concept 2: Inertia */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="border-b border-slate-100 bg-slate-50/50 p-6 flex items-center gap-3">
              <Anchor className="w-6 h-6 text-slate-600" />
              <h3 className="text-lg font-bold text-slate-800">Inertia and Mass</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Explanation and Vocabulary</h4>
                <ul className="space-y-3 text-sm text-slate-700 mb-4">
                  <li><strong className="text-slate-800">Mass:</strong> The amount of matter in an object.</li>
                  <li><strong className="text-slate-800">Inertia:</strong> Resistance to changes in motion.</li>
                  <li><strong className="text-slate-800">Momentum:</strong> Resistance to stopping when already in motion.</li>
                </ul>
                <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-slate-400 text-sm italic text-slate-700">
                  <strong>Key Concept:</strong> The greater the mass, the greater the force required to change motion.
                </div>
              </div>
              <div className="flex items-center justify-center">
                <InertiaDiagram />
              </div>
            </div>
          </article>

          {/* Concept 3: Simple Machines */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="border-b border-slate-100 bg-emerald-50/30 p-6 flex items-center gap-3">
              <Wrench className="w-6 h-6 text-emerald-600" />
              <h3 className="text-lg font-bold text-slate-800">Simple Machines</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Explanation and Vocabulary</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700 mb-4">
                  <div><strong className="text-emerald-700">Machine:</strong> Device with moving parts.</div>
                  <div><strong className="text-emerald-700">Simple machine:</strong> Basic device that makes work easier.</div>
                  <div><strong className="text-emerald-700">Effort:</strong> Input force.</div>
                  <div><strong className="text-emerald-700">Load:</strong> Output force.</div>
                  <div><strong className="text-emerald-700">Lever:</strong> Machine that pivots.</div>
                  <div><strong className="text-emerald-700">Fulcrum:</strong> Pivot point.</div>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong className="text-emerald-700">Mechanical advantage:</strong> When the output force is greater than the input force.</p>
                  <p><strong className="text-emerald-700">Turning moment (Moment):</strong> Force × distance from the fulcrum. Unit: <em>Newton metre (Nm)</em>.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 text-sm italic text-slate-700 mt-4">
                  <strong>Key Concept:</strong> A greater distance from the fulcrum increases the turning effect of a force (Leverage).
                </div>
              </div>
              <div className="flex items-center justify-center">
                <LeverDiagram />
              </div>
            </div>
          </article>

        </div>

        {/* Examples Section */}
        <section className="bg-slate-800 rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="text-blue-400" />
            3. Engineering Context (Real-world Examples)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <p className="bg-slate-700/50 p-4 rounded border border-slate-600 text-slate-200">"The vehicle increases speed due to <strong className="text-white">constant acceleration</strong>."</p>
             <p className="bg-slate-700/50 p-4 rounded border border-slate-600 text-slate-200">"The aircraft experiences high <strong className="text-white">G-forces</strong> during rapid ascent."</p>
             <p className="bg-slate-700/50 p-4 rounded border border-slate-600 text-slate-200">"A heavy object has greater <strong className="text-white">inertia</strong>, requiring more force to move."</p>
             <p className="bg-slate-700/50 p-4 rounded border border-slate-600 text-slate-200">"The wrench acts as a <strong className="text-white">lever</strong> to loosen the bolt."</p>
          </div>
        </section>

        {/* Exercises Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">4. Practical Exercises (Fill in the Blanks)</h2>
          <p className="text-sm text-slate-500 mb-6">Complete the sentences using the correct term.</p>
          
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-400">1.</span>
              <p className="text-slate-700 flex-1">A force acting from outside the system is called an <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-24 text-center font-semibold text-blue-600 bg-transparent" value={answers.q1} onChange={(e) => handleInputChange(e, 'q1')} placeholder="..." /> force.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-400">2.</span>
              <p className="text-slate-700 flex-1">The rate of change of velocity is called <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-32 text-center font-semibold text-blue-600 bg-transparent" value={answers.q2} onChange={(e) => handleInputChange(e, 'q2')} placeholder="..." />.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-400">3.</span>
              <p className="text-slate-700 flex-1">The pivot point of a lever is the <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-28 text-center font-semibold text-blue-600 bg-transparent" value={answers.q3} onChange={(e) => handleInputChange(e, 'q3')} placeholder="..." />.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-400">4.</span>
              <p className="text-slate-700 flex-1">Resistance to motion due to mass is called <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-24 text-center font-semibold text-blue-600 bg-transparent" value={answers.q4} onChange={(e) => handleInputChange(e, 'q4')} placeholder="..." />.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-400">5.</span>
              <p className="text-slate-700 flex-1">The unit of turning force is the <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-24 text-center font-semibold text-blue-600 bg-transparent" value={answers.q5} onChange={(e) => handleInputChange(e, 'q5')} placeholder="..." /> metre.</p>
            </div>

            <div className="pt-6 flex items-center gap-6">
              <button 
                onClick={checkAnswers}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Check Answers
              </button>
              
              {exerciseScore !== null && (
                <div className={`font-bold text-lg flex items-center ${exerciseScore === 5 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  Score: {exerciseScore} / 5
                  {exerciseScore === 5 && <span className="ml-2">Excellent work! 🎉</span>}
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
