import React, { useState } from 'react';
import { 
  Info, 
  ArrowUpCircle, 
  Maximize, 
  Layers, 
  Activity, 
  BookOpen, 
  Wrench, 
  CheckCircle2,
  ChevronRight,
  Split,
  Hammer,
  Link as LinkIcon
} from 'lucide-react';

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Overview", icon: <Info size={18} /> },
    { id: 1, label: "Tensile Strength", icon: <ArrowUpCircle size={18} /> },
    { id: 2, label: "Elasticity & Plasticity", icon: <Layers size={18} /> },
    { id: 3, label: "Deformation Stages", icon: <Activity size={18} /> },
    { id: 4, label: "Vocabulary", icon: <BookOpen size={18} /> },
    { id: 5, label: "Grammar & Practice", icon: <Wrench size={18} /> },
    { id: 6, label: "Exercises", icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Material Properties 1</h1>
          <p className="text-indigo-100 mt-2">Mechanical behavior, deformation, and engineering terminology</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className=" top-0 z-10 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-5xl mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-5xl mx-auto p-6 lg:p-10">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 min-h-[600px] overflow-hidden">
          {activeTab === 0 && <OverviewPanel />}
          {activeTab === 1 && <TensilePanel />}
          {activeTab === 2 && <ElasticityPanel />}
          {activeTab === 3 && <StagesPanel />}
          {activeTab === 4 && <VocabPanel />}
          {activeTab === 5 && <GrammarPanel />}
          {activeTab === 6 && <ExercisePanel />}
        </div>
      </main>
      
      <footer className="max-w-5xl mx-auto p-6 text-center text-slate-400 text-sm">
        Engineering Materials Series &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

// --- Content Panels ---

function OverviewPanel() {
  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900 flex items-center gap-2">
        <Info className="text-indigo-600" /> 1. Overview of the Topic
      </h2>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-6">
          This lesson introduces the fundamental mechanical properties of materials. Understanding these concepts is essential for engineers to select the right material for any specific application.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="font-bold text-lg mb-3">Key Focus Areas:</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                <span>Behavior under <strong>tension</strong> and <strong>compression</strong></span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                <span>Distinction between <strong>elasticity</strong> and <strong>plasticity</strong></span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                <span>Terminology: <strong>Brittle, ductile, malleable,</strong> and <strong>stiff</strong></span>
              </li>
              <li className="flex gap-2">
                <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                <span>The lifecycle of <strong>deformation</strong> during tensile testing</span>
              </li>
            </ul>
          </div>
          <div className="bg-indigo-900 text-white p-6 rounded-lg flex items-center justify-center text-center italic">
            "Materials change shape when forces are applied. The way they change determines their industrial utility."
          </div>
        </div>
      </div>
    </div>
  );
}

function TensilePanel() {
  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">2. Tensile Strength and Deformation</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-slate-800 border-b pb-2">2.1 Forces and Deformation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-indigo-100 p-4 rounded-lg bg-indigo-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-600 text-white p-2 rounded-full"><Maximize size={20} /></div>
                <h4 className="font-bold text-indigo-900">Tension</h4>
              </div>
              <p className="text-slate-600">Stretching forces that pull a material apart, increasing its length.</p>
            </div>
            <div className="border border-rose-100 p-4 rounded-lg bg-rose-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-rose-600 text-white p-2 rounded-full"><Split size={20} className="rotate-90" /></div>
                <h4 className="font-bold text-rose-900">Compression</h4>
              </div>
              <p className="text-slate-600">Crushing forces that squeeze a material together, reducing its length.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">2.2 Extension & Resistance</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
              <p><strong>Extension (Elongation):</strong> The increase in length when a material is subjected to tension.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
              <div>
                <p><strong>Tensile Strength:</strong> The ability of a material to resist tension.</p>
                <div className="mt-2 bg-amber-50 border-l-4 border-amber-400 p-3 text-amber-800 text-sm">
                  <strong>Engineering Note:</strong> In most materials, tensile strength is lower than compressive strength (materials resist being crushed better than being pulled apart).
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ElasticityPanel() {
  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">3. Elasticity vs. Plasticity</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Elasticity */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
            <Activity size={20} /> Elasticity
          </h3>
          <p className="text-slate-600">The ability to extend significantly and return to the <strong>original shape</strong> once the force is removed.</p>
          <div className="p-4 border rounded-lg bg-green-50">
            <p className="font-medium text-green-800">Example: Rubber</p>
            <p className="text-sm text-green-700">Can be elastically deformed to a considerable extent.</p>
          </div>
          
          <div className="mt-6 space-y-4 border-t pt-4">
            <h4 className="font-bold text-slate-800">Low Elasticity Sub-types:</h4>
            <div className="p-3 bg-slate-100 rounded flex justify-between items-center">
              <div>
                <span className="font-bold">Stiff:</span>
                <span className="text-sm ml-2">Strong + Low Elasticity</span>
              </div>
            </div>
            <div className="p-3 bg-slate-100 rounded flex justify-between items-center">
              <div>
                <span className="font-bold">Brittle:</span>
                <span className="text-sm ml-2">Weak + Low Elasticity (Example: <strong>Glass</strong>)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plasticity */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-700 flex items-center gap-2">
            <Layers size={20} /> Plasticity
          </h3>
          <p className="text-slate-600">The ability to change shape significantly and <strong>not return</strong> to the original shape. Permanent deformation.</p>
          
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
              <h4 className="font-bold text-orange-800 flex items-center gap-2">
                <Hammer size={18} /> Malleable
              </h4>
              <p className="text-sm mt-1">Deformed by <strong>hammering or rolling</strong> without breaking.</p>
              <p className="text-xs font-bold mt-2 text-orange-600 italic">Example: Lead (Pb)</p>
            </div>
            <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
              <h4 className="font-bold text-orange-800 flex items-center gap-2">
                <LinkIcon size={18} /> Ductile
              </h4>
              <p className="text-sm mt-1">Can be <strong>drawn out (stretched)</strong> into a long length (wire).</p>
              <p className="text-xs font-bold mt-2 text-orange-600 italic">Example: Copper (Cu)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StagesPanel() {
  const stages = [
    { pt: "0–1", title: "Proportional Extension", desc: "Linear relationship. 10% tension increase = 10% length increase." },
    { pt: "1", title: "Limit of Proportionality", desc: "The point where length begins to increase more rapidly than tension." },
    { pt: "2", title: "Elastic Limit", desc: "Beyond this, the bar will not return to its original length (permanent damage starts)." },
    { pt: "3", title: "Yield Point", desc: "Length increases without further increase in tension. The material 'gives way'." },
    { pt: "4", title: "UTS (Ultimate Tensile Strength)", desc: "Maximum stress. A 'waist' forms; fracture is imminent." },
    { pt: "5", title: "Fracture Point", desc: "The material breaks in two." }
  ];

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">4. Stages in Elastic and Plastic Deformation</h2>
      <p className="mb-8 text-slate-600 italic">Common behavior of ductile materials during tensile testing:</p>
      
      <div className="relative border-l-2 border-indigo-200 ml-4 space-y-6">
        {stages.map((stage, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white"></div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-3">
                <span className="font-mono text-indigo-600 font-bold bg-white px-2 py-1 rounded shadow-sm border border-indigo-100">
                  Point {stage.pt}
                </span>
                <h4 className="font-bold text-slate-800">{stage.title}</h4>
              </div>
              <p className="text-sm text-slate-600 mt-2">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VocabPanel() {
  const vocabs = [
    { term: "Tension", def: "Stretching force" },
    { term: "Compression", def: "Crushing force" },
    { term: "Extension", def: "Increase in length under tension" },
    { term: "Tensile strength", def: "Ability to resist tension" },
    { term: "Elasticity", def: "Ability to return to original shape" },
    { term: "Plasticity", def: "Permanent deformation" },
    { term: "Stiff", def: "Strong with low elasticity" },
    { term: "Brittle", def: "Weak with low elasticity" },
    { term: "Ductile", def: "Can be drawn into long lengths" },
    { term: "Malleable", def: "Can be shaped by hammering/rolling" },
    { term: "Yield point", def: "Point where plastic deformation begins" },
    { term: "UTS", def: "Maximum tensile stress a material can handle" },
    { term: "Fracture", def: "Breaking of material" },
  ];

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">5. Technical Vocabulary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {vocabs.map((v, idx) => (
          <div key={idx} className="flex border-b border-slate-100 py-3 px-2 hover:bg-slate-50">
            <span className="w-1/3 font-bold text-indigo-700">{v.term}</span>
            <span className="w-2/3 text-slate-600 text-sm">{v.def}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrammarPanel() {
  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">6. Grammar & Practical Context</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded text-sm">Focus</span>
            Cause, Result, and Definition
          </h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-3 text-left">Structure</th>
                  <th className="p-3 text-left">Example from Text</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-medium">When + Cause, Result</td>
                  <td className="p-3">"When materials are exposed to forces, they deform."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Definition</td>
                  <td className="p-3">"This is called extension or elongation."</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Condition + Limit</td>
                  <td className="p-3">"Beyond this point, the bar will no longer return to its original length."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded text-sm">Case Studies</span>
            Practical Engineering Examples
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-slate-300 bg-white shadow-sm rounded-r-lg">
              <p className="font-bold text-slate-800">Rubber Components</p>
              <p className="text-sm text-slate-600">Rely on <strong>elastic deformation</strong> to absorb shocks.</p>
            </div>
            <div className="p-4 border-l-4 border-slate-300 bg-white shadow-sm rounded-r-lg">
              <p className="font-bold text-slate-800">Glass Structures</p>
              <p className="text-sm text-slate-600">Avoided in tension due to <strong>brittle fracture</strong> risks.</p>
            </div>
            <div className="p-4 border-l-4 border-slate-300 bg-white shadow-sm rounded-r-lg">
              <p className="font-bold text-slate-800">Copper Wires</p>
              <p className="text-sm text-slate-600">Selected because copper is highly <strong>ductile</strong>.</p>
            </div>
            <div className="p-4 border-l-4 border-slate-300 bg-white shadow-sm rounded-r-lg">
              <p className="font-bold text-slate-800">Structural Design</p>
              <p className="text-sm text-slate-600">The <strong>yield strength</strong> is the critical limit for safety.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ExercisePanel() {
  const [answers, setAnswers] = useState({ ex1: {}, ex2: {} });
  const [showResults, setShowResults] = useState(false);

  const checkResults = () => setShowResults(true);
  const reset = () => {
    setShowResults(false);
    setAnswers({ ex1: {}, ex2: {} });
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">8. Exercises</h2>
      
      <div className="space-y-10">
        {/* Exercise 1 */}
        <section>
          <h3 className="font-bold text-slate-800 mb-4">Exercise 1: Vocabulary Match</h3>
          <div className="space-y-4">
            {[
              { q: "Ductile", a: "c" },
              { q: "Brittle", a: "d" },
              { q: "Elasticity", a: "a" },
              { q: "Yield point", a: "b" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-24 font-medium">{item.q}</span>
                <select 
                  className="p-2 border rounded bg-white text-sm"
                  onChange={(e) => setAnswers(prev => ({ ...prev, ex1: { ...prev.ex1, [item.q]: e.target.value } }))}
                  disabled={showResults}
                  value={answers.ex1[item.q] || ""}
                >
                  <option value="">Select answer...</option>
                  <option value="a">a. Ability to return to original shape</option>
                  <option value="b">b. Point where plastic deformation begins</option>
                  <option value="c">c. Can be drawn into long lengths</option>
                  <option value="d">d. Breaks easily under tension</option>
                </select>
                {showResults && (
                  <span className={answers.ex1[item.q] === item.a ? "text-green-600" : "text-red-600"}>
                    {answers.ex1[item.q] === item.a ? <CheckCircle2 size={18} /> : "Incorrect"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Exercise 2 */}
        <section>
          <h3 className="font-bold text-slate-800 mb-4">Exercise 2: Sentence Completion</h3>
          <div className="space-y-4">
            <div className="text-sm">
              1. The increase in length under tension is called 
              <input 
                type="text" 
                className="mx-2 p-1 border-b border-slate-300 outline-none focus:border-indigo-500"
                onChange={(e) => setAnswers(prev => ({ ...prev, ex2: { ...prev.ex2, 1: e.target.value } }))}
                placeholder="..."
                disabled={showResults}
              />
              {showResults && (
                <span className="text-indigo-600 text-xs font-bold ml-2">Ans: extension / elongation</span>
              )}
            </div>
            <div className="text-sm">
              2. Glass is described as a 
              <input 
                type="text" 
                className="mx-2 p-1 border-b border-slate-300 outline-none focus:border-indigo-500"
                onChange={(e) => setAnswers(prev => ({ ...prev, ex2: { ...prev.ex2, 2: e.target.value } }))}
                placeholder="..."
                disabled={showResults}
              />
              material.
              {showResults && (
                <span className="text-indigo-600 text-xs font-bold ml-2">Ans: brittle</span>
              )}
            </div>
          </div>
        </section>

        {/* Exercise 3 */}
        <section className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="font-bold text-slate-800 mb-2 italic underline">Exercise 3: Challenge (Writing)</h3>
          <p className="text-sm text-slate-600 mb-4">Original: "Engineers test materials by pulling them until they break."</p>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Rewrite in passive/formal voice:</p>
            <textarea 
              className="w-full p-4 border rounded text-sm min-h-[80px]" 
              placeholder="Your formal version here..."
              disabled={showResults}
            />
            {showResults && (
              <div className="mt-2 text-sm text-indigo-700 bg-white p-3 rounded border border-indigo-200">
                <strong>Suggested:</strong> "Materials are subjected to tensile testing until fracture occurs."
              </div>
            )}
          </div>
        </section>

        <div className="flex gap-4">
          <button 
            onClick={checkResults}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-bold"
          >
            Check Answers
          </button>
          <button 
            onClick={reset}
            className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}