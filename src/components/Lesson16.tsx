import React, { useState } from 'react';
import { 
  Info, 
  Layers, 
  Construction, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  Pencil,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// --- Types ---
type Section = 'Overview' | 'Mix Design' | 'Reinforcement' | 'Vocabulary' | 'Grammar' | 'Examples' | 'Exercises';

interface TabItem {
  id: Section;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Header = () => (
  <header className="bg-slate-800 text-white p-6 shadow-lg">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Civil Engineering: Concrete</h1>
        <p className="text-slate-400 mt-1 italic text-sm md:text-base">Construction Practice and Materials Engineering</p>
      </div>
      <Construction className="hidden md:block w-10 h-10 text-orange-400" />
    </div>
  </header>
);

const SectionPanel = ({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-3">
      <div className="p-2 bg-slate-200 rounded-lg text-slate-700">{icon}</div>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    </div>
    <div className="p-6 md:p-8 space-y-6">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Section>('Overview');
  
  // Exercise States
  const [ex1Answers, setEx1Answers] = useState<Record<string, string>>({});
  const [ex2Answers, setEx2Answers] = useState({ days: '', strength: '', tension: '' });
  const [ex3Text, setEx3Text] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const tabs: TabItem[] = [
    { id: 'Overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'Mix Design', label: 'Mix Design', icon: <Layers size={18} /> },
    { id: 'Reinforcement', label: 'Reinforcement', icon: <Construction size={18} /> },
    { id: 'Vocabulary', label: 'Vocabulary', icon: <BookOpen size={18} /> },
    { id: 'Grammar', label: 'Grammar', icon: <FileText size={18} /> },
    { id: 'Examples', label: 'Examples', icon: <Lightbulb size={18} /> },
    { id: 'Exercises', label: 'Exercises', icon: <Pencil size={18} /> },
  ];

  const handleEx1Select = (term: string, definition: string) => {
    setEx1Answers(prev => ({ ...prev, [term]: definition }));
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-20">
      <Header />

      {/* Navigation Tabs */}
      <nav className=" top-0 z-10 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-all border-b-2 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'border-orange-500 text-orange-600 bg-orange-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        {activeTab === 'Overview' && (
          <SectionPanel title="1. Lesson Overview" icon={<Info />}>
            <p className="text-lg leading-relaxed text-slate-700">
              This lesson covers the fundamental principles of concrete in modern construction. We will explore its composition, specification, and the various ways it is adapted for structural strength.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Composition and manufacturing process",
                "Specification of mix designs",
                "Water–cement ratio and additives",
                "Principles of reinforcement",
                "In-situ vs Precast methods",
                "Prestressing concepts"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Mix Design' && (
          <SectionPanel title="2. Concrete Mix Design" icon={<Layers />}>
            <div className="space-y-8">
              <article>
                <h3 className="text-lg font-bold text-slate-800 border-l-4 border-orange-400 pl-3 mb-4">2.1 Cement & Setting</h3>
                <p className="text-slate-600">Cement is a very fine powder. When water is added, a chemical reaction occurs, causing the cement to <strong>set</strong> (become solid).</p>
              </article>

              <article className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="font-bold mb-3 text-slate-800">2.2 Components</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                    <li>Cement</li>
                    <li>Fine aggregate (sand)</li>
                    <li>Coarse aggregate (gravel)</li>
                    <li>Water</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-bold mb-3 text-blue-800">Structural Strength</h3>
                  <p className="text-sm text-blue-700">Concrete requires time to reach full capacity. Engineers define <strong>28-day strength</strong> as the standard benchmark.</p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-bold text-slate-800 border-l-4 border-orange-400 pl-3 mb-4">2.3 Mix Proportions & Batching</h3>
                <p className="text-slate-600 mb-4">Mixing precise quantities is known as <strong>batching</strong>, usually measured by weight.</p>
                <div className="bg-slate-800 text-white p-6 rounded-lg text-center">
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Example: 1:2:4 Mix</p>
                  <div className="flex justify-center items-center gap-4 text-xl font-mono">
                    <div className="flex flex-col"><span className="text-orange-400">1</span><span className="text-[10px]">CEMENT</span></div>
                    <span>:</span>
                    <div className="flex flex-col"><span className="text-orange-400">2</span><span className="text-[10px]">SAND</span></div>
                    <span>:</span>
                    <div className="flex flex-col"><span className="text-orange-400">4</span><span className="text-[10px]">GRAVEL</span></div>
                  </div>
                </div>
              </article>

              <article className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-red-100 rounded-lg bg-red-50/30">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertCircle size={16} /> Water–Cement Ratio
                  </h4>
                  <p className="text-sm text-slate-600">Excess water reduces concrete strength. Water is kept to a minimum, but low water makes it "harder to work".</p>
                </div>
                <div className="p-4 border border-teal-100 rounded-lg bg-teal-50/30">
                  <h4 className="font-bold text-teal-800 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} /> Additives
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li><strong>Plasticizer:</strong> Improves flow (workability).</li>
                    <li><strong>Retarder:</strong> Slows setting for more pouring time.</li>
                  </ul>
                </div>
              </article>
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Reinforcement' && (
          <SectionPanel title="3. Reinforced Concrete" icon={<Construction />}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">3.1 Mechanics of RC</h3>
                <p className="text-slate-600 leading-relaxed">
                  Concrete is strong in compression but <strong>weak in tension</strong> (resisting stretching). 
                  Steel bars are added to overcome this weakness, as steel is strong in tension.
                </p>
                <div className="bg-slate-100 p-4 rounded border-l-4 border-slate-400 text-sm italic">
                  "Formwork (shuttering) consists of steel or timber moulds that hold concrete until it sets."
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">3.3 Casting Methods</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-sm">
                    <span className="font-bold text-orange-600 block">In-situ Concrete</span>
                    <span className="text-sm text-slate-500">Wet concrete cast in its final position on site.</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded shadow-sm">
                    <span className="font-bold text-orange-600 block">Precast Concrete</span>
                    <span className="text-sm text-slate-500">Elements cast at a factory and delivered for assembly.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">3.4 Prestressed Concrete</h3>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                Tension is applied to reinforcing bars <strong>before</strong> the concrete is poured. 
                Once set, the trapped tension increases the ability to resist bending forces.
              </p>
              <div className="flex gap-2">
                <span className="bg-white px-3 py-1 rounded text-xs font-bold text-indigo-600 border border-indigo-200">Better Bending Resistance</span>
                <span className="bg-white px-3 py-1 rounded text-xs font-bold text-indigo-600 border border-indigo-200">Precast Technique</span>
              </div>
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Vocabulary' && (
          <SectionPanel title="4. Technical Vocabulary" icon={<BookOpen />}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b-2 border-slate-200">
                    <th className="p-4 text-sm font-bold text-slate-600 uppercase">Term</th>
                    <th className="p-4 text-sm font-bold text-slate-600 uppercase">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { t: "Cement", d: "Fine powder that sets when mixed with water" },
                    { t: "Aggregate", d: "Sand or gravel used in concrete" },
                    { t: "Fine aggregate", d: "Sand" },
                    { t: "Coarse aggregate", d: "Gravel" },
                    { t: "Structural strength", d: "Strength required for effective performance" },
                    { t: "Water–cement ratio", d: "Relative amount of water to cement" },
                    { t: "Additive", d: "Chemical added to concrete" },
                    { t: "Plasticizer", d: "Additive that improves flow" },
                    { t: "Retarder", d: "Additive that slows setting" },
                    { t: "Reinforced concrete (RC)", d: "Concrete containing steel bars" },
                    { t: "Formwork", d: "Moulds used to shape concrete" },
                    { t: "In-situ concrete", d: "Concrete cast in final position" },
                    { t: "Precast concrete", d: "Concrete cast in a factory" },
                    { t: "Prestressed concrete", d: "Concrete with tensioned reinforcement" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-800">{row.t}</td>
                      <td className="p-4 text-slate-600 text-sm">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Grammar' && (
          <SectionPanel title="5. Grammar Focus" icon={<FileText />}>
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="font-bold text-amber-900 mb-4">Process Description & Purpose Clauses</h3>
                <p className="text-slate-700 mb-4">Technical writing often uses the passive voice to describe processes and specific clauses to indicate purpose.</p>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="bg-amber-200 p-1 rounded font-mono text-xs">PROCESS</div>
                    <p className="text-sm italic text-slate-800">“When water is added to cement, a chemical reaction occurs.”</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-amber-200 p-1 rounded font-mono text-xs">REASON</div>
                    <p className="text-sm italic text-slate-800">“Steel reinforcement is needed because concrete is weak in tension.”</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-amber-200 p-1 rounded font-mono text-xs">PURPOSE</div>
                    <p className="text-sm italic text-slate-800">“A retarder may be added to slow setting.”</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm">
                This language style is mandatory for professional construction specifications and method statements.
              </p>
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Examples' && (
          <SectionPanel title="6. Engineering Context" icon={<Lightbulb />}>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Mix proportions are specified to achieve required strength.",
                "Plasticizers improve workability without increasing water content.",
                "Reinforcement allows concrete to resist tensile and bending forces.",
                "Precast elements speed up construction on site."
              ].map((ex, i) => (
                <div key={i} className="p-4 bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-lg">
                  <p className="text-slate-700 font-medium">{ex}</p>
                </div>
              ))}
            </div>
          </SectionPanel>
        )}

        {activeTab === 'Exercises' && (
          <SectionPanel title="7. Knowledge Check" icon={<Pencil />}>
            <div className="space-y-12">
              {/* Exercise 1 */}
              <div>
                <h3 className="font-bold text-slate-800 mb-4">Exercise 1: Vocabulary Matching</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    {["Fine aggregate", "Water–cement ratio", "Formwork", "Prestressed concrete"].map(term => (
                      <div key={term} className="flex justify-between items-center p-3 bg-slate-50 border rounded text-sm">
                        <span>{term}</span>
                        <select 
                          className="p-1 border rounded text-xs"
                          onChange={(e) => handleEx1Select(term, e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="a">a. Sand used in concrete</option>
                          <option value="b">b. Mould used to shape concrete</option>
                          <option value="c">c. Concrete with tensioned steel</option>
                          <option value="d">d. Relative amount of water</option>
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 bg-slate-100 p-4 rounded">
                    <p><strong>Keys:</strong></p>
                    <p>a. Sand used in concrete</p>
                    <p>b. Mould used to shape concrete</p>
                    <p>c. Concrete with tensioned steel bars</p>
                    <p>d. Relative amount of water to cement</p>
                  </div>
                </div>
              </div>

              {/* Exercise 2 */}
              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Exercise 2: Sentence Completion</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    Concrete reaches its structural strength after 
                    <input 
                      type="text" 
                      className="mx-2 border-b-2 border-slate-300 w-16 text-center focus:border-orange-500 outline-none" 
                      placeholder="..."
                      value={ex2Answers.days}
                      onChange={(e) => setEx2Answers({...ex2Answers, days: e.target.value})}
                    /> 
                    days.
                  </div>
                  <div className="text-sm">
                    Excess water 
                    <input 
                      type="text" 
                      className="mx-2 border-b-2 border-slate-300 w-24 text-center focus:border-orange-500 outline-none" 
                      placeholder="..."
                      value={ex2Answers.strength}
                      onChange={(e) => setEx2Answers({...ex2Answers, strength: e.target.value})}
                    /> 
                    the strength of concrete.
                  </div>
                  <div className="text-sm">
                    Steel reinforcement is used because concrete is weak in 
                    <input 
                      type="text" 
                      className="mx-2 border-b-2 border-slate-300 w-24 text-center focus:border-orange-500 outline-none" 
                      placeholder="..."
                      value={ex2Answers.tension}
                      onChange={(e) => setEx2Answers({...ex2Answers, tension: e.target.value})}
                    />.
                  </div>
                </div>
              </div>

              {/* Exercise 3 */}
              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">Exercise 3: Applied Writing</h3>
                <p className="text-sm text-slate-500 mb-4 italic">Rewrite using formal engineering style and passive voice: "Workers pour concrete into formwork and allow it to set."</p>
                <textarea 
                  className="w-full p-4 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                  rows={3}
                  placeholder="Your formal rewrite here..."
                  value={ex3Text}
                  onChange={(e) => setEx3Text(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setShowFeedback(!showFeedback)}
                  className="px-8 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors shadow-lg"
                >
                  {showFeedback ? "Hide Suggested Answers" : "Check Answers"}
                </button>

                {showFeedback && (
                  <div className="w-full bg-emerald-50 p-6 rounded-lg border border-emerald-200 text-sm animate-in zoom-in duration-300">
                    <h4 className="font-bold text-emerald-800 mb-2">Suggested Solutions:</h4>
                    <ul className="list-disc list-inside space-y-2 text-emerald-900">
                      <li><strong>Ex 1:</strong> Fine Aggregate(a), Water-Cement Ratio(d), Formwork(b), Prestressed(c)</li>
                      <li><strong>Ex 2:</strong> 1. 28 days | 2. reduces/lowers | 3. tension</li>
                      <li><strong>Ex 3:</strong> "Concrete is poured into formwork and allowed to set."</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </SectionPanel>
        )}
      </main>

      {/* Footer Branding */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 py-3 text-center">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
          Concrete Engineering Interactive Module
        </p>
      </footer>
    </div>
  );
};

export default App;