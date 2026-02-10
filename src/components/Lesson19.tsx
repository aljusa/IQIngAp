import React, { useState } from 'react';
import { 
  Shield, 
  Activity, 
  Thermometer, 
  BookOpen, 
  Code, 
  Plane, 
  CheckCircle2, 
  Info,
  Layers,
  Zap,
  Hammer,
  ArrowRight
} from 'lucide-react';

// --- Types ---
type TabType = 'Overview' | 'Hardness' | 'Fatigue & Creep' | 'Thermal' | 'Vocab' | 'Grammar' | 'Practice' | 'Exercises';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Overview');

  // --- Components for Panels ---

  const OverviewPanel = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
          <Info className="w-6 h-6" /> Lesson Overview
        </h2>
        <p className="text-blue-800 text-lg">
          This lesson continues the study of material properties with a focus on durability, 
          mechanical failure modes, and thermal behavior, especially in engineering contexts like aviation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: 'Mechanical Durability', desc: 'Hardness, wear resistance, and longevity.', icon: <Shield className="text-blue-600" /> },
          { title: 'Failure & Deformation', desc: 'Fatigue, fracture toughness, and creep.', icon: <Activity className="text-red-600" /> },
          { title: 'Thermal Science', desc: 'Conductivity and expansion coefficients.', icon: <Thermometer className="text-orange-600" /> }
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white shadow-sm border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
            <div className="mb-2">{item.icon}</div>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 text-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plane className="w-5 h-5 text-sky-400" /> Engineering Context: Aviation
        </h3>
        <p className="text-slate-300 leading-relaxed">
          The source text includes examples from engineering practice, particularly aviation, 
          where materials face extreme conditions, cyclic loads, and high temperatures.
        </p>
      </div>
    </div>
  );

  const HardnessPanel = () => (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
      <section>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">2.1 What Hardness Is</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-blue-700 mb-2">Durability & Wear</h4>
            <p className="text-slate-600 mb-4">Durability refers to how long a material will last. Hard materials are generally more durable because they are better at resisting wear.</p>
            <div className="flex items-center gap-2 text-sm bg-slate-50 p-3 rounded border">
              <Layers className="w-4 h-4 text-slate-400" />
              <span><strong>Wear:</strong> Progressive damage to a surface.</span>
            </div>
          </div>
          <div className="flex items-center justify-center bg-blue-50 rounded-xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Hardness ↑</div>
              <div className="text-slate-500 mt-2">leads to</div>
              <div className="text-4xl font-bold text-green-600">Durability ↑</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">2.2 Types of Hardness</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5" /> Scratch Hardness
            </h4>
            <p className="text-amber-800">Ability to resist being scratched. High scratch hardness means better <strong>abrasion resistance</strong> (rubbing damage).</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-2">
              <Hammer className="w-5 h-5" /> Indentation Hardness
            </h4>
            <p className="text-emerald-800">Ability to resist surface compressions caused by <strong>impacts</strong>.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const FatiguePanel = () => (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-bold text-red-700 mb-2">3.1 Fatigue (Metal Fatigue)</h3>
            <p className="text-slate-600 mb-4">Occurs when materials are subject to <strong>cyclic loads</strong> (forces that vary continuously).</p>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-500 italic text-slate-700">
              "In aircraft, wings flex up and down repeatedly due to turbulence. This leads to fatigue."
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-bold text-purple-700 mb-2">3.2 Fracture Toughness</h3>
            <p className="text-slate-600">Fatigue causes <strong>micro-cracking</strong>. Fracture toughness measures how easily these cracks continue to open or increase in length.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col justify-center">
          <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" /> 3.3 Creep
          </h3>
          <p className="text-slate-300 text-sm mb-4">Permanent deformation under constant load over time.</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500 mt-1 shrink-0" /> Serious at high loads</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500 mt-1 shrink-0" /> Serious at high temps</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500 mt-1 shrink-0" /> Critical in jet engines</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ThermalPanel = () => (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Thermal Conductivity
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
              <span className="font-semibold">Copper</span>
              <span className="text-sm bg-orange-200 px-2 py-1 rounded">Excellent Conductor</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
              <span className="font-semibold">Polystyrene</span>
              <span className="text-sm bg-blue-200 px-2 py-1 rounded">Excellent Insulator</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-bold text-rose-700 mb-4">Expansion & Contraction</h3>
          <p className="text-slate-600 mb-4">Most materials expand when heated and contract when cooled.</p>
          <div className="p-4 bg-slate-50 border rounded-lg text-sm">
            <strong>Coefficient of Linear Expansion:</strong> Measures change in length per degree of temperature change.
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white p-6 rounded-xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-sky-400 font-bold mb-2">Math Example: Aluminum</h4>
          <p className="text-2xl font-mono">1m Al + 1°C = +0.000023m</p>
          <p className="text-slate-400 text-sm mt-2">Coefficient: 0.000023</p>
        </div>
        <Thermometer className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-white/5 rotate-12" />
      </div>
    </div>
  );

  const VocabPanel = () => {
    const vocab = [
      { t: "Hardness", d: "Resistance to wear or damage" },
      { t: "Durability", d: "How long a material lasts" },
      { t: "Wear", d: "Progressive surface damage" },
      { t: "Abrasion", d: "Damage from rubbing surfaces" },
      { t: "Indentation", d: "Surface compression from impact" },
      { t: "Fatigue", d: "Damage from cyclic loading" },
      { t: "Cyclic load", d: "Load that varies over time" },
      { t: "Fracture toughness", d: "Resistance to crack growth" },
      { t: "Creep", d: "Permanent deformation over time" },
      { t: "Thermal conductivity", d: "Ability to conduct heat" },
      { t: "Thermal expansion", d: "Increase in size due to heating" },
      { t: "Coefficient of expansion", d: "Measure of size change with temperature" },
    ];

    return (
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm animate-in zoom-in-95 duration-300">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-4 font-bold text-slate-700">Term</th>
              <th className="px-6 py-4 font-bold text-slate-700">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {vocab.map((v, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 font-semibold text-blue-600">{v.t}</td>
                <td className="px-6 py-3 text-slate-600">{v.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const GrammarPanel = () => (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Code className="w-6 h-6" /> Cause & Result
        </h3>
        <p className="text-indigo-800 mb-6 italic">Engineering language often links conditions to outcomes using specific structures.</p>
        
        <div className="space-y-4">
          {[
            { cause: "Resisting wear", result: "Higher durability", connector: "because", sentence: "Hard materials are more durable because they resist wear." },
            { cause: "Passing time under load", result: "Increase in creep", connector: "Over time", sentence: "Creep increases over time." },
            { cause: "Temperature increases", result: "Material expands", connector: "As", sentence: "As temperature increases, most materials expand." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border shadow-sm border-indigo-100">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Logic:</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 rounded">Condition</span>
                <ArrowRight className="w-3 h-3 text-slate-300" />
                <span className="text-xs bg-blue-100 text-blue-700 px-2 rounded">Outcome</span>
              </div>
              <p className="text-slate-800 font-medium">"{item.sentence}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PracticePanel = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <h3 className="text-xl font-bold text-slate-800">Practical Engineering Examples</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { text: "Hard coatings improve abrasion resistance.", tag: "Surface Engineering" },
          { text: "Aircraft components must resist fatigue cracking.", tag: "Aviation Safety" },
          { text: "Engine materials must be selected to limit creep.", tag: "Thermal Management" },
          { text: "Thermal expansion must be considered in long structural elements.", tag: "Structural Design" }
        ].map((ex, i) => (
          <div key={i} className="p-4 bg-white border-l-4 border-sky-500 shadow-sm rounded-r-lg">
            <div className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-widest">{ex.tag}</div>
            <p className="text-slate-700 leading-relaxed font-medium">{ex.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ExercisesPanel = () => {
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<Record<string, boolean | null>>({});

    const checkAnswer = (id: string, correct: boolean) => {
      if (feedback[id] !== undefined) return;
      setFeedback(prev => ({ ...prev, [id]: correct }));
      if (correct) setScore(s => s + 1);
    };

    return (
      <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
        <div className="flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur py-2 z-10 border-b mb-4">
          <h3 className="text-xl font-bold text-slate-800">Assessment Tools</h3>
          <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full font-bold">
            Score: {score}
          </div>
        </div>

        {/* Exercise 1 */}
        <section className="bg-slate-50 p-6 rounded-xl border">
          <h4 className="font-bold mb-4">Ex 1: Matching Terms</h4>
          <div className="grid gap-3">
            {[
              { q: "Abrasion resistance", a: "Ability to resist surface wear" },
              { q: "Fatigue", a: "Damage caused by cyclic loading" },
              { q: "Creep", a: "Permanent deformation over time" },
              { q: "Thermal conductivity", a: "Ability to conduct heat" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-white border rounded shadow-sm gap-2">
                <span className="font-medium text-slate-700">{item.q}</span>
                <div className="flex gap-2">
                   <button 
                    onClick={() => checkAnswer(`ex1_${i}`, true)}
                    className={`text-xs px-3 py-1 rounded transition-colors ${feedback[`ex1_${i}`] === true ? 'bg-green-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
                   >
                     {item.a}
                   </button>
                   {feedback[`ex1_${i}`] === true && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exercise 2 */}
        <section className="bg-slate-50 p-6 rounded-xl border">
          <h4 className="font-bold mb-4">Ex 2: Sentence Completion</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border">
              <p className="text-slate-700 mb-2">1. Scratch hardness is related to resistance to _________.</p>
              <div className="flex gap-2">
                {['impact', 'abrasion', 'creep'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => checkAnswer('ex2_1', opt === 'abrasion')}
                    className={`text-sm px-4 py-1 rounded border ${feedback['ex2_1'] !== undefined ? (opt === 'abrasion' ? 'bg-green-100 border-green-500' : 'bg-slate-50') : 'hover:bg-slate-100'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="text-slate-700 mb-2">2. Most materials _________ when heated.</p>
              <div className="flex gap-2">
                {['contract', 'expand', 'stay the same'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => checkAnswer('ex2_2', opt === 'expand')}
                    className={`text-sm px-4 py-1 rounded border ${feedback['ex2_2'] !== undefined ? (opt === 'expand' ? 'bg-green-100 border-green-500' : 'bg-slate-50') : 'hover:bg-slate-100'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exercise 3 */}
        <section className="bg-slate-900 text-white p-6 rounded-xl border">
          <h4 className="font-bold mb-2">Ex 3: Applied Writing</h4>
          <p className="text-slate-400 text-sm mb-4 italic">Rewrite in formal engineering style (Passive Voice).</p>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
             <span className="text-xs uppercase text-slate-500 block mb-1">Active (Original):</span>
             "Engineers consider fatigue and creep when designing aircraft engines."
          </div>
          <div className="p-4 bg-slate-800 border-l-4 border-sky-500 rounded-r-lg">
             <span className="text-xs uppercase text-sky-500 block mb-1">Passive (Target):</span>
             "Fatigue and creep are considered when aircraft engines are designed."
          </div>
        </section>
      </div>
    );
  };

  const tabs: { id: TabType; icon: React.ReactNode; label: string }[] = [
    { id: 'Overview', icon: <Info className="w-4 h-4" />, label: 'Overview' },
    { id: 'Hardness', icon: <Shield className="w-4 h-4" />, label: 'Hardness' },
    { id: 'Fatigue & Creep', icon: <Activity className="w-4 h-4" />, label: 'Fatigue' },
    { id: 'Thermal', icon: <Thermometer className="w-4 h-4" />, label: 'Thermal' },
    { id: 'Vocab', icon: <BookOpen className="w-4 h-4" />, label: 'Vocab' },
    { id: 'Grammar', icon: <Code className="w-4 h-4" />, label: 'Grammar' },
    { id: 'Practice', icon: <Plane className="w-4 h-4" />, label: 'Examples' },
    { id: 'Exercises', icon: <CheckCircle2 className="w-4 h-4" />, label: 'Exercises' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">M-02</span>
            Material Properties 2
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Advanced Engineering Materials & Dynamics</p>
        </header>

        {/* Tab System */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-50 border-b border-slate-200 p-2 overflow-x-auto">
            <nav className="flex space-x-1 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 
                    ${activeTab === tab.id 
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200 translate-y-[1px]' 
                      : 'text-slate-500 hover:bg-slate-200 hover:text-slate-700'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Panel Content */}
          <div className="p-6 md:p-10 min-h-[500px]">
            {activeTab === 'Overview' && <OverviewPanel />}
            {activeTab === 'Hardness' && <HardnessPanel />}
            {activeTab === 'Fatigue & Creep' && <FatiguePanel />}
            {activeTab === 'Thermal' && <ThermalPanel />}
            {activeTab === 'Vocab' && <VocabPanel />}
            {activeTab === 'Grammar' && <GrammarPanel />}
            {activeTab === 'Practice' && <PracticePanel />}
            {activeTab === 'Exercises' && <ExercisesPanel />}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          Engineering Science & Technical English Series • Material Science Unit
        </footer>
      </div>
    </div>
  );
};

export default App;