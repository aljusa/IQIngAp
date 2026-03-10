import React, { useState } from 'react';
import { 
  Factory, 
  Flame, 
  Hammer, 
  Thermometer, 
  BookOpen, 
  CheckCircle2, 
  Zap, 
  Layers,
  Info
} from 'lucide-react';

// --- Components ---

const Card = ({ children, title, icon: Icon, color = "blue" }) => {
  const colorClasses = {
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
    red: "border-red-200 bg-red-50 text-red-800",
    purple: "border-purple-200 bg-purple-50 text-purple-800",
    green: "border-green-200 bg-green-50 text-green-800",
  };

  return (
    <div className={`border rounded-xl p-6 mb-6 shadow-sm ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="w-6 h-6" />}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const ProcessStep = ({ number, text }) => (
  <div className="flex gap-4 mb-3 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
      {number}
    </div>
    <p className="pt-1 text-slate-700">{text}</p>
  </div>
);

// --- Content Sections ---

const OverviewSection = () => (
  <div className="max-w-4xl mx-auto">
    <Card title="Lesson Overview" icon={Info} color="blue">
      <p className="mb-4 text-lg">
        This lesson explores the fundamental industrial techniques used to shape and modify metals. Understanding these processes is critical for mechanical and manufacturing engineering.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600"/> How metals are formed into shapes</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600"/> Casting, sintering, and extrusion</li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600"/> Working metal by compression</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600"/> Heat treatment properties</li>
        </ul>
      </div>
    </Card>
    <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-slate-500 italic">
      "Engineering materials are only useful once they are formed into functional components."
    </div>
  </div>
);

const FormingSection = () => (
  <div className="max-w-4xl mx-auto">
    <Card title="2.1 Casting Metal" icon={Layers} color="orange">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold mb-2">The Process:</h4>
          <ProcessStep number="1" text="Heat metal until it becomes molten (liquid)." />
          <ProcessStep number="2" text="Pour or force it under pressure into a mould (die)." />
          <ProcessStep number="3" text="Cooling: The metal solidifies and takes the shape of the die." />
        </div>
        <div className="bg-white/50 p-4 rounded-lg border border-orange-200 text-sm">
          <strong>Key Term: Die</strong> - A specialized tool used in manufacturing industries to cut or shape material mostly using a press.
        </div>
      </div>
    </Card>

    <Card title="2.2 Sintering Metal" icon={Zap} color="orange">
      <p className="mb-4 italic">Uses metal powder instead of molten metal.</p>
      <div className="space-y-2">
        <div className="p-3 bg-white rounded border border-orange-100">1. Powder is placed in a die and compressed.</div>
        <div className="p-3 bg-white rounded border border-orange-100">2. It is heated (but not melted).</div>
        <div className="p-3 bg-white rounded border border-orange-100">3. Heat causes particles to join structurally.</div>
      </div>
    </Card>

    <Card title="2.3 Extrusion" icon={Factory} color="orange">
      <p className="mb-4">Used for long lengths (bars, tubes, profiles).</p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1">
          <p>Metal is forced at high pressure through a <strong>shaping tool</strong> (die). It cools and solidifies as it exits.</p>
        </div>
        <div className="w-full md:w-1/3 bg-orange-100 h-24 rounded-lg border-2 border-dashed border-orange-400 flex items-center justify-center text-orange-800 font-mono text-center px-4">
          [Pressure] → [Die] → [Profile]
        </div>
      </div>
    </Card>
  </div>
);

const WorkingSection = () => (
  <div className="max-w-4xl mx-auto">
    <Card title="Forging and Compression" icon={Hammer} color="red">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold border-b border-red-200 mb-2">Traditional</h4>
          <p className="text-sm">Iron bars heated in a forge until red/white hot, then shaped by hammering.</p>
        </div>
        <div>
          <h4 className="font-bold border-b border-red-200 mb-2">Modern</h4>
          <p className="text-sm">Large automated machines for steel components. Can be <strong>Hot Forged</strong> or <strong>Cold Forged</strong>.</p>
        </div>
      </div>
    </Card>

    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h4 className="font-bold text-red-600 mb-2">Drop Forging</h4>
        <p className="text-sm text-slate-600">A heavy hammer (with a fixed die) is dropped onto the metal to compress it into shape.</p>
      </div>
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h4 className="font-bold text-red-600 mb-2">Rolling</h4>
        <p className="text-sm text-slate-600">Rollers apply compression to produce hot-rolled or cold-rolled metal sheets or bars.</p>
      </div>
    </div>

    <Card title="Hardening Effects" icon={Zap} color="purple">
      <div className="mb-4">
        <h4 className="font-bold text-purple-800">Work Hardening</h4>
        <p>Compression changes the metal's internal structure, increasing its hardness.</p>
      </div>
      <div className="pt-4 border-t border-purple-200">
        <h4 className="font-bold text-purple-800">Shot-Peening</h4>
        <p>Metal balls (shot) strike the surface at high speed. This hardens the surface without changing the overall shape.</p>
      </div>
    </Card>
  </div>
);

const HeatTreatmentSection = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-6 bg-red-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-6">
      <Flame className="w-12 h-12" />
      <div>
        <h2 className="text-2xl font-bold">Controlled Heating & Cooling</h2>
        <p className="opacity-90">Changing mechanical properties through thermal manipulation.</p>
      </div>
    </div>

    <div className="space-y-4">
      {[
        { name: "Quenching", process: "Heated, then dipped in water/oil (rapid cooling).", result: "Harder, but more brittle.", icon: "❄️" },
        { name: "Annealing", process: "Heated, then allowed to cool slowly.", result: "Softer, more elastic.", icon: "☁️" },
        { name: "Tempering", process: "Heated and kept at high temp for a period.", result: "Balance between hardness and elasticity.", icon: "⚖️" },
        { name: "Precipitation Hardening", process: "Like tempering, but heat is maintained longer.", result: "Harder than tempered metal.", icon: "💎" },
        { name: "Case Hardening", process: "Heated in specific gases; surface absorbs carbon.", result: "Only outer surface becomes harder; core stays tough.", icon: "🛡️" },
      ].map((item, i) => (
        <div key={i} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow grid md:grid-cols-4 items-center">
          <div className="font-bold text-lg flex items-center gap-2">
            <span className="text-xl">{item.icon}</span> {item.name}
          </div>
          <div className="md:col-span-2 text-sm text-slate-600 pr-4">
            <strong>Process:</strong> {item.process}
          </div>
          <div className="text-sm font-semibold text-blue-700">
             {item.result}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VocabularySection = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8 overflow-hidden border rounded-xl shadow-sm">
      <table className="w-full text-left bg-white border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-4">Term</th>
            <th className="p-4">Definition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { t: "Casting", d: "Forming metal by pouring molten metal" },
            { t: "Die", d: "Shaped mould for forming metal" },
            { t: "Sintering", d: "Forming metal from heated powder" },
            { t: "Extrusion", d: "Forcing metal through a die" },
            { t: "Forging", d: "Shaping metal by compression" },
            { t: "Work hardening", d: "Hardening caused by deformation" },
            { t: "Shot-peening", d: "Surface hardening by metal shot" },
            { t: "Quenching", d: "Rapid cooling in water or oil" },
            { t: "Annealing", d: "Slow cooling to soften metal" },
            { t: "Tempering", d: "Heat treatment for balanced properties" },
            { t: "Case hardening", d: "Surface-only hardening" },
          ].map((v, i) => (
            <tr key={i} className="hover:bg-slate-50">
              <td className="p-4 font-bold text-blue-700">{v.t}</td>
              <td className="p-4 text-slate-600">{v.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <Card title="Grammar Focus: The Passive Voice" icon={BookOpen} color="green">
      <p className="mb-4">Technical processes focus on the <strong>action</strong> rather than the person performing it. We use the passive voice: <strong>[Subject] + [to be] + [Past Participle]</strong>.</p>
      <div className="space-y-2 font-mono text-sm bg-green-100 p-4 rounded">
        <p>• "Metal <u>is heated</u> until it becomes molten."</p>
        <p>• "The powder <u>is compressed</u> into a solid mass."</p>
        <p>• "Metal <u>is heated</u>, then <u>dipped</u> in water or oil."</p>
      </div>
    </Card>
  </div>
);

const ExerciseSection = () => {
  const [answers, setAnswers] = useState({ ex1: {}, ex2: {}, ex3: "" });
  const [feedback, setFeedback] = useState({ ex1: false, ex2: false, ex3: false });

  const checkEx1 = () => {
    const correct = answers.ex1.s === 'd' && answers.ex1.f === 'b' && answers.ex1.q === 'a' && answers.ex1.c === 'c';
    setFeedback({ ...feedback, ex1: correct });
  };

  const checkEx2 = () => {
    const correct = 
      answers.ex2.a?.toLowerCase().trim() === 'die' && 
      answers.ex2.b?.toLowerCase().trim() === 'work' && 
      answers.ex2.c?.toLowerCase().trim() === 'elastic';
    setFeedback({ ...feedback, ex2: correct });
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" /> Exercise 1: Vocabulary Match
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <span className="font-semibold">Sintering</span>
            <select className="border p-2 rounded" onChange={e => setAnswers({...answers, ex1: {...answers.ex1, s: e.target.value}})}>
               <option value="">Select...</option>
               <option value="a">a. Rapid cooling</option>
               <option value="b">b. Compression shaping</option>
               <option value="c">c. Surface hardening</option>
               <option value="d">d. Heated powder</option>
            </select>
            <span className="font-semibold">Forging</span>
            <select className="border p-2 rounded" onChange={e => setAnswers({...answers, ex1: {...answers.ex1, f: e.target.value}})}>
               <option value="">Select...</option>
               <option value="a">a. Rapid cooling</option>
               <option value="b">b. Compression shaping</option>
               <option value="c">c. Surface hardening</option>
               <option value="d">d. Heated powder</option>
            </select>
            <span className="font-semibold">Quenching</span>
            <select className="border p-2 rounded" onChange={e => setAnswers({...answers, ex1: {...answers.ex1, q: e.target.value}})}>
               <option value="">Select...</option>
               <option value="a">a. Rapid cooling</option>
               <option value="b">b. Compression shaping</option>
               <option value="c">c. Surface hardening</option>
               <option value="d">d. Heated powder</option>
            </select>
            <span className="font-semibold">Case Hardening</span>
            <select className="border p-2 rounded" onChange={e => setAnswers({...answers, ex1: {...answers.ex1, c: e.target.value}})}>
               <option value="">Select...</option>
               <option value="a">a. Rapid cooling</option>
               <option value="b">b. Compression shaping</option>
               <option value="c">c. Surface hardening</option>
               <option value="d">d. Heated powder</option>
            </select>
          </div>
          <button onClick={checkEx1} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Check Match</button>
          {feedback.ex1 && <p className="text-green-600 font-bold mt-2">Correct! Well done.</p>}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" /> Exercise 2: Completion
        </h3>
        <div className="space-y-4">
          <p>1. Extrusion forces metal through a <input type="text" className="border-b-2 border-slate-300 bg-transparent outline-none w-20 px-1 text-blue-600 font-bold" onChange={e => setAnswers({...answers, ex2: {...answers.ex2, a: e.target.value}})}/> at high pressure.</p>
          <p>2. Hardness increased by compression is called <input type="text" className="border-b-2 border-slate-300 bg-transparent outline-none w-20 px-1 text-blue-600 font-bold" onChange={e => setAnswers({...answers, ex2: {...answers.ex2, b: e.target.value}})}/> hardening.</p>
          <p>3. Annealed metal is generally softer and more <input type="text" className="border-b-2 border-slate-300 bg-transparent outline-none w-24 px-1 text-blue-600 font-bold" onChange={e => setAnswers({...answers, ex2: {...answers.ex2, c: e.target.value}})}/>.</p>
          <button onClick={checkEx2} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Check Answers</button>
          {feedback.ex2 && <p className="text-green-600 font-bold mt-2">Perfect!</p>}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" /> Exercise 3: Applied Writing
        </h3>
        <p className="mb-4 text-slate-600 italic">Rewrite using formal engineering style (Passive Voice): "Technicians heat steel and cool it rapidly to make it harder."</p>
        <textarea 
          className="w-full h-24 p-4 border rounded mb-4 focus:ring-2 focus:ring-blue-500" 
          placeholder="Type your rewritten sentence here..."
          value={answers.ex3}
          onChange={e => setAnswers({...answers, ex3: e.target.value})}
        ></textarea>
        <p className="text-sm text-slate-500">Suggested answer: "Steel is heated and cooled rapidly to increase its hardness."</p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Overview", icon: Info },
    { label: "Forming", icon: Factory },
    { label: "Working", icon: Hammer },
    { label: "Heat Treating", icon: Flame },
    { label: "Vocab & Grammar", icon: BookOpen },
    { label: "Exercises", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-10">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8 px-6 shadow-xl mb-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Metal Processing</h1>
            <p className="text-slate-400 font-medium">Forming, Working and Heat-Treating Metal</p>
          </div>
      
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="max-w-6xl mx-auto px-4 mb-8  top-0 z-50 bg-slate-50/90 backdrop-blur pb-2">
        <div className="flex overflow-x-auto no-scrollbar gap-2 border-b border-slate-200">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 py-3 px-6 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                  activeTab === idx 
                    ? "border-blue-600 text-blue-600 bg-white shadow-sm rounded-t-lg" 
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content Container */}
      <main className="px-4">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 0 && <OverviewSection />}
          {activeTab === 1 && <FormingSection />}
          {activeTab === 2 && <WorkingSection />}
          {activeTab === 3 && <HeatTreatmentSection />}
          {activeTab === 4 && <VocabularySection />}
          {activeTab === 5 && <ExerciseSection />}
        </div>
      </main>

      {/* Global CSS for hidden scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}