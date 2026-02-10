import React, { useState } from 'react';
import { 
  Settings, 
  Wrench, 
  RotateCw, 
  Scissors, 
  Target, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  XCircle,
  Hash,
  Info,
  Circle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [exerciseAnswers, setExerciseAnswers] = useState({
    ex1: {},
    ex2: { q1: '', q2: '', q3: '', q4: '' },
    ex3: { q1: '', q2: '', q3: '' }
  });
  const [feedback, setFeedback] = useState({});

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'concepts', label: 'Machining & CNC', icon: <Settings className="w-4 h-4" /> },
    { id: 'tools', label: 'Cutting Tools', icon: <Wrench className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar & Vocab', icon: <Target className="w-4 h-4" /> },
    { id: 'exercises', label: 'Practice Exercises', icon: <Hash className="w-4 h-4" /> }
  ];

  // Logic for Exercise 1 matching
  const checkEx1 = (id, choice) => {
    const keys = { 'milling': 'c', 'turning': 'd', 'drilling': 'b', 'grinding': 'a' };
    setExerciseAnswers(prev => ({ ...prev, ex1: { ...prev.ex1, [id]: choice } }));
    setFeedback(prev => ({ ...prev, [`ex1_${id}`]: choice === keys[id] }));
  };

  // Render Functions
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <header className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h1 className="text-3xl font-bold text-blue-900">Lesson 23: Machining 1</h1>
              <p className="text-blue-700 mt-2 text-lg italic">Engineering English for Manufacturing</p>
            </header>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Info className="text-blue-500" /> Lesson Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  This lesson introduces machining processes used in manufacturing, focusing on:
                </p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cutting Tools & CNC Systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Common Machining Techniques</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Technical Vocabulary in Context</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-2">Target Language</h3>
                <p className="text-sm text-slate-600">Reflecting typical usage in mechanical engineering, manufacturing engineering, and industrial production.</p>
              </div>
            </div>
          </div>
        );

      case 'concepts':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Machining & Waste</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800">The Workpiece</h3>
                  <p className="text-sm text-blue-700">The piece of material being cut or shaped into a component.</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-bold text-amber-800">Swarf (Chips)</h3>
                  <p className="text-sm text-amber-700">Waste metal removed during the cutting process.</p>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h3 className="font-bold text-cyan-800">Cutting Fluid</h3>
                  <p className="text-sm text-cyan-700">Liquid coolant pumped onto the workpiece to prevent overheating.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-500">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">CNC and CAD/CAM</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-lg">
                  <div className="bg-indigo-100 p-2 rounded text-indigo-700 font-mono font-bold">CNC</div>
                  <div>
                    <p className="font-semibold text-slate-800">Computer Numerical Control</p>
                    <p className="text-slate-600">Guided by computers that control machine movements precisely.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg border-dashed">
                    <p className="font-bold text-slate-800">CAD</p>
                    <p className="text-sm text-slate-500 italic">Computer-Aided Design</p>
                    <p className="text-sm mt-1">Information on component shapes and sizes.</p>
                  </div>
                  <div className="border p-4 rounded-lg border-dashed">
                    <p className="font-bold text-slate-800">CAM</p>
                    <p className="text-sm text-slate-500 italic">Computer-Aided Manufacturing</p>
                    <p className="text-sm mt-1">Directing the actual production/machining phase.</p>
                  </div>
                </div>
                <p className="text-xs bg-yellow-100 p-2 rounded text-yellow-800 inline-block">Note: CAD/CAM is pronounced as two distinct words.</p>
              </div>
            </section>
          </div>
        );

      case 'tools':
        const tools = [
          { name: 'Milling', desc: 'Workpiece is fixed; toothed cutting discs rotate and move over the surface.', icon: <RotateCw /> },
          { name: 'Turning', desc: 'Workpiece rotates; a fixed tool is moved against it. Performed on a lathe.', icon: <RotateCw className="rotate-90" /> },
          { name: 'Sawing', desc: 'Uses a blade to remove material. The gap left is called a kerf.', icon: <Scissors /> },
          { name: 'Drilling', desc: 'Cutting circular holes with a drill bit. Includes boring (enlarging holes).', icon: <Circle className="w-5 h-5" /> },
          { name: 'Grinding', desc: 'Removes material using abrasive wheels. Often used for finishing.', icon: <RotateCw className="animate-pulse" /> },
        ];
        return (
          <div className="grid md:grid-cols-2 gap-4 animate-in fade-in duration-500">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 bg-blue-100 text-blue-600 rounded-full">{tool.icon}</span>
                  <h3 className="text-xl font-bold text-slate-800">{tool.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{tool.desc}</p>
                {tool.name === 'Sawing' && (
                   <div className="mt-3 text-xs flex gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-slate-100 rounded">Circular Saw</span>
                      <span className="px-2 py-1 bg-slate-100 rounded">Band Saw</span>
                      <span className="px-2 py-1 bg-slate-100 rounded">Hacksaw</span>
                   </div>
                )}
                {tool.name === 'Drilling' && (
                   <div className="mt-3 text-xs flex gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded font-bold">Holesaws</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded font-bold">Boring</span>
                   </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            <div className="bg-white p-6 rounded-xl border-l-8 border-green-500 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Grammar Focus: Present Simple</h2>
              <p className="text-slate-700 mb-4">In engineering, we use the Present Simple to describe standard processes and general truths.</p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-3 font-mono text-sm">
                <p>"The bit <span className="text-blue-600 font-bold">rotates</span> and <span className="text-blue-600 font-bold">drills</span> into the material."</p>
                <p>"Machining <span className="text-blue-600 font-bold">is</span> the use of machines to cut material."</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4 text-green-400">Technical Vocabulary</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-slate-700">
                    <tr>
                      <th className="pb-2">Term</th>
                      <th className="pb-2">Engineering Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { t: 'Workpiece', m: 'The material being machined' },
                      { t: 'Swarf', m: 'Waste material (chips) removed' },
                      { t: 'Kerf', m: 'Width of material removed by a saw' },
                      { t: 'Lathe', m: 'Machine for turning rotating workpieces' },
                      { t: 'Drill bit', m: 'Rotating cutting tool for drilling' },
                      { t: 'Abrasive wheel', m: 'Cutting wheel with a rough surface' }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-2 font-bold text-green-200">{row.t}</td>
                        <td className="py-2 text-slate-300">{row.m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-10">
            {/* Exercise 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Vocabulary Matching
              </h3>
              <div className="space-y-4">
                {[
                  { id: 'milling', label: 'Milling', opt: 'c. Cutting with rotating tools while the workpiece is fixed' },
                  { id: 'turning', label: 'Turning', opt: 'd. Cutting while the workpiece rotates' },
                  { id: 'drilling', label: 'Drilling', opt: 'b. Cutting circular holes with a rotating tool' },
                  { id: 'grinding', label: 'Grinding', opt: 'a. Removing material with abrasive wheels' }
                ].map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 border rounded-lg hover:bg-slate-50">
                    <span className="font-bold text-slate-700">{item.label}</span>
                    <select 
                      className={`text-sm p-1 rounded border ${feedback[`ex1_${item.id}`] === true ? 'border-green-500 bg-green-50' : feedback[`ex1_${item.id}`] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                      onChange={(e) => checkEx1(item.id, e.target.value)}
                    >
                      <option value="">Select description...</option>
                      <option value="a">a. Removing material with abrasive wheels</option>
                      <option value="b">b. Cutting circular holes with rotating tool</option>
                      <option value="c">c. Rotating tools / Fixed workpiece</option>
                      <option value="d">d. Workpiece rotates</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Sentence Completion
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <p className="text-slate-700">1. Waste metal produced during machining is called <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-32" />.</p>
                  <p className="text-slate-700">2. A lathe is used mainly for <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-32" /> operations.</p>
                  <p className="text-slate-700">3. The gap left by a saw cut is called a <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-32" />.</p>
                  <p className="text-slate-700">4. Enlarging an existing hole is known as <input type="text" className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-2 w-32" />.</p>
                </div>
              </div>
            </div>

            {/* Exercise 3 */}
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="bg-white text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                Technical Writing Prompt
              </h3>
              <p className="text-blue-200 text-sm mb-4 italic">Write short technical descriptions for your teacher to review.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">CNC Principles</label>
                  <textarea className="w-full bg-blue-800 border border-blue-700 rounded p-2 text-sm text-white h-20 placeholder-blue-400" placeholder="Describe the basic principle of CNC machining..."></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Milling vs Turning</label>
                  <textarea className="w-full bg-blue-800 border border-blue-700 rounded p-2 text-sm text-white h-20 placeholder-blue-400" placeholder="Explain the difference between milling and turning..."></textarea>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Tabs */}
        <nav className="flex flex-wrap gap-1 bg-white p-2 rounded-t-2xl border-b border-slate-200  top-0 z-10 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Main Content Area */}
        <main className="bg-white rounded-b-2xl shadow-xl min-h-[600px] border border-t-0 border-slate-200 p-6 md:p-10">
          {renderTabContent()}
        </main>

        <footer className="mt-8 text-center text-slate-400 text-xs">
          Lesson 23: Machining 1 &bull; Engineering English &bull; Interactive Educational Module
        </footer>
      </div>
    </div>
  );
};

export default App;