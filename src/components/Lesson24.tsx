import React, { useState } from 'react';
import { 
  Wrench, 
  Flame, 
  Zap, 
  Droplets, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  ArrowRightCircle, 
  ClipboardCheck,
  CircleDot,
  Scissors
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Overview", icon: <BookOpen className="w-4 h-4" /> },
    { id: 1, title: "Guillotining & Punching", icon: <Scissors className="w-4 h-4" /> },
    { id: 2, title: "Thermal Techniques", icon: <Flame className="w-4 h-4" /> },
    { id: 3, title: "Laser & Waterjet", icon: <Droplets className="w-4 h-4" /> },
    { id: 4, title: "Grammar & Vocab", icon: <Layers className="w-4 h-4" /> },
    { id: 5, title: "Exercises", icon: <ClipboardCheck className="w-4 h-4" /> },
  ];

  const VocabularyCard = ({ term, definition }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
      <h4 className="text-blue-600 dark:text-blue-400 font-bold mb-1 font-mono">{term}</h4>
      <p className="text-slate-600 dark:text-slate-300 text-sm">{definition}</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Lesson 24: Machining 2</h2>
              <p className="text-blue-100 text-lg max-w-2xl">
                Explore non-traditional and sheet-based machining techniques used in modern engineering. From the mechanical force of guillotines to the precision of lasers and ultra-high-pressure waterjets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Wrench className="text-blue-500" /> Key Topics
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Shearing, Guillotining & Punching</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> High-Temperature Cutting (Oxyacetylene)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Spark Erosion (EDM)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Plasma & Laser Machining</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> UHP Waterjet Technology</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <ArrowRightCircle className="text-blue-500" /> Learning Outcomes
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  By the end of this lesson, you will be able to describe complex manufacturing processes, identify specialized tooling like dies and blanks, and use engineering cause-and-effect structures correctly.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-blue-500 pl-4">Shearing & Guillotining</h3>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <p className="mb-3"><strong>Shearing:</strong> Cutting thin materials by applying pressure with a scissor-like force (<strong>shear force</strong>).</p>
                  <p><strong>Guillotining:</strong> Uses a machine called a <strong>guillotine</strong> with a long blade for long, straight cuts in sheet metal.</p>
                </div>
              </section>
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-indigo-500 pl-4">Punching</h3>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <p className="mb-4">Uses a <strong>punch</strong> and a <strong>die</strong> (shaped tool) to cut small shapes like circles.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                      <span className="font-bold block text-blue-700 dark:text-blue-300">Blanking</span>
                      <span className="text-sm">The removed piece (blank) is the finished product.</span>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800">
                      <span className="font-bold block text-indigo-700 dark:text-indigo-300">Piercing</span>
                      <span className="text-sm">The sheet with holes is the finished product.</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Thermal Metal Cutting</h3>
            <div className="grid gap-4">
              <div className="flex gap-4 p-5 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800/50">
                <div className="bg-orange-500 p-3 rounded-lg h-fit text-white"><Flame /></div>
                <div>
                  <h4 className="font-bold text-lg">Flame Cutting (Oxyacetylene)</h4>
                  <p className="text-slate-600 dark:text-slate-400">Combines oxygen ($O_2$) and acetylene ($C_2H_2$) in a torch to melt steel.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800/50">
                <div className="bg-blue-500 p-3 rounded-lg h-fit text-white"><Zap /></div>
                <div>
                  <h4 className="font-bold text-lg">Electrical Discharge Machining (EDM)</h4>
                  <p className="text-slate-600 dark:text-slate-400">Also known as <strong>spark erosion</strong>. A high-voltage current creates an electric arc between a wire and the workpiece, melting the metal without physical contact.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-200 dark:border-purple-800/50">
                <div className="bg-purple-500 p-3 rounded-lg h-fit text-white"><CircleDot /></div>
                <div>
                  <h4 className="font-bold text-lg">Plasma Cutting</h4>
                  <p className="text-slate-600 dark:text-slate-400">High-pressure gas (argon) is ionized by high-voltage current to become <strong>plasma</strong>, reaching temperatures much higher than regular gas.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-yellow-500" /> Laser Cutting</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Concentrated light beams melt material</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Highly accurate; ideal for plastics</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Used for small production quantities</li>
                  </ul>
               </div>
               <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="text-blue-500" /> UHP Waterjet Cutting</h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400 text-sm">Uses water at ultra-high-pressure to cut through almost any material.</p>
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-xs font-medium border border-green-100 dark:border-green-800/30">
                      ADVANTAGE: High edge quality (smooth finish)
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-xs font-medium border border-green-100 dark:border-green-800/30">
                      ADVANTAGE: No Secondary operations required
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs font-medium border border-blue-100 dark:border-blue-800/30">
                      COLD PROCESS: No Heat-Affected Zone (HAZ)
                    </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <section>
              <h3 className="text-xl font-bold mb-4">Grammar Focus: Cause-and-Effect</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-t-4 border-blue-500">
                  <span className="font-bold text-blue-600 dark:text-blue-400">by + gerund</span>
                  <p className="text-sm mt-2">"Thin materials can be cut <strong>by applying</strong> pressure."</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-t-4 border-indigo-500">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">as + clause</span>
                  <p className="text-sm mt-2">"<strong>As the current arcs</strong>, it generates heat..."</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-t-4 border-purple-500">
                  <span className="font-bold text-purple-600 dark:text-purple-400">because + clause</span>
                  <p className="text-sm mt-2">"<strong>Because UHP waterjets are cold</strong>, they avoid HAZ."</p>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4">Technical Vocabulary</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <VocabularyCard term="Shear Force" definition="Scissor-like cutting force applied to sheet materials." />
                <VocabularyCard term="Die" definition="A shaped tool used in punching to define the cut shape." />
                <VocabularyCard term="Blank" definition="The piece of material removed from the sheet during cutting." />
                <VocabularyCard term="Electric Arc" definition="An electrical discharge jumping across a gap to create heat." />
                <VocabularyCard term="Plasma" definition="Ionized gas with free-moving electrons at high temperatures." />
                <VocabularyCard term="HAZ" definition="Heat-Affected Zone; the area where properties change due to heat." />
              </div>
            </section>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
             <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Exercise 1: Vocabulary Matching</h3>
                <div className="space-y-3">
                  {[
                    { q: "Guillotining", a: "Cutting long, straight edges in sheet material" },
                    { q: "Blanking", a: "Cutting where the removed piece is the finished product" },
                    { q: "EDM", a: "Cutting using an electric arc without contact" },
                    { q: "UHP Waterjet", a: "Cutting using extremely high-pressure water" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                      <span className="font-medium">{item.q}</span>
                      <span className="text-slate-500 italic text-sm">{item.a}</span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Exercise 2: Sentence Completion</h3>
                <ol className="list-decimal list-inside space-y-4 text-slate-700 dark:text-slate-300">
                  <li>The force used in guillotining is called <span className="border-b-2 border-slate-300 w-24 inline-block mx-1"></span> force.</li>
                  <li>The shaped tool used in punching is called a <span className="border-b-2 border-slate-300 w-24 inline-block mx-1"></span>.</li>
                  <li>Plasma is formed when a gas becomes <span className="border-b-2 border-slate-300 w-24 inline-block mx-1"></span>.</li>
                  <li>Laser cutting removes material by <span className="border-b-2 border-slate-300 w-24 inline-block mx-1"></span> it.</li>
                </ol>
             </div>

             <div className="p-6 bg-indigo-900 text-indigo-100 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Applied Engineering Task</h3>
                <p className="text-sm opacity-90 mb-4">Draft a short technical description addressing these three points:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Explain the difference between blanking and piercing.</li>
                  <li>Describe how plasma cutting generates high temperatures.</li>
                  <li>Explain why UHP waterjet cutting does not create a heat-affected zone.</li>
                </ul>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            Engineering English
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Lesson 24: Machining 2 — Non-Traditional Techniques</p>
        </header>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }
              `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <main className="min-h-[500px]">
          {renderContent()}
        </main>

        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
          <p>&copy; 2024 Engineering English Curriculum — Machining Series</p>
        </footer>
      </div>
    </div>
  );
};

export default App;