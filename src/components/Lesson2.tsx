import React, { useState } from 'react';
import { 
  BookOpen, 
  PenTool, 
  Users, 
  FileText, 
  Settings, 
  CheckCircle, 
  ChevronRight, 
  Layout, 
  Briefcase,
  AlertCircle,
  Check
} from 'lucide-react';

// --- Types & Interfaces ---

type Section = 'overview' | 'concepts' | 'vocabulary' | 'grammar' | 'examples' | 'exercises';

interface TabItem {
  id: Section;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Header = () => (
  <header className="bg-slate-900 text-white p-6 shadow-lg">
    <div className="max-w-5xl mx-auto flex items-center gap-4">
      <div className="p-3 bg-blue-600 rounded-lg">
        <Layout className="w-8 h-8 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-wide">Engineering Projects</h1>
        <p className="text-slate-400 text-sm mt-1">Lesson: Design Development & Communication</p>
      </div>
    </div>
  </header>
);

const SectionOverview = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <BookOpen className="text-blue-600" />
        1. Overview of the Topic
      </h2>
      <p className="text-slate-600 leading-relaxed text-lg mb-6">
        This lesson explains the critical path of how an engineering design develops from early conceptual ideas to the final drawings used for construction or production.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-slate-800 mb-2">Core Focus Areas</h3>
          <ul className="space-y-2">
            {[
              "The initial design phase",
              "Collaborative development within a design team",
              "The revision and approval process",
              "Key professional terminology"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-600">
                <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col justify-center">
          <h3 className="font-semibold text-blue-900 mb-2">Context Example</h3>
          <p className="text-blue-800">
            The lesson uses the real-world scenario of a <span className="font-bold">new airport terminal project</span> to illustrate these concepts.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SectionConcepts = () => {
  const concepts = [
    {
      title: "2.1 Initial Design Phase",
      icon: <PenTool className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li><strong>Client:</strong> Provides a "design brief" (often open/vague).</li>
          <li><strong>Architect:</strong> Develops adventurous, creative concepts.</li>
          <li><strong>Output:</strong> Rough sketches only. No technical accuracy or scale drawings yet.</li>
        </ul>
      )
    },
    {
      title: "2.2 Sketches to Preliminary",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>Sketches evolve into <strong>preliminary drawings</strong>.</li>
          <li>Technical details are added.</li>
          <li>Prepared for review by consultants/engineers by a specific deadline.</li>
        </ul>
      )
    },
    {
      title: "2.3 Collaborative Development",
      icon: <Users className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>Requires coordination between multiple organizations.</li>
          <li>Drawings are circulated to specialists or the whole team.</li>
          <li>Team members comment and request changes.</li>
        </ul>
      )
    },
    {
      title: "2.4 Revisions & Amendments",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li><strong>Revision:</strong> A new version (Renumbered, e.g., 110A → 110B).</li>
          <li><strong>Amendment:</strong> A specific change made.</li>
          <li>Old versions are <strong>superseded</strong>.</li>
        </ul>
      )
    },
    {
      title: "2.5 Early vs. Late Revisions",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li><strong>Early:</strong> May require "going back to the drawing board" (redesign).</li>
          <li><strong>Late:</strong> Usually refining existing designs or solving specific technical issues.</li>
        </ul>
      )
    },
    {
      title: "2.6 Approval",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>Senior engineer <strong>signs off</strong> on the drawing.</li>
          <li>Becomes a <strong>working drawing</strong> for construction.</li>
          <li>Can still be revised during production.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
      {concepts.map((concept, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4 text-blue-700">
            <div className="p-2 bg-blue-100 rounded-lg">
              {concept.icon}
            </div>
            <h3 className="font-bold text-sm uppercase tracking-wider">{concept.title}</h3>
          </div>
          {concept.content}
        </div>
      ))}
    </div>
  );
};

const SectionVocabulary = () => {
  const terms = [
    { term: "Design brief", def: "A document listing the client’s main requirements" },
    { term: "Sketch", def: "A rough, informal drawing" },
    { term: "Preliminary drawing", def: "An early technical drawing with more detail than a sketch" },
    { term: "Issue (a drawing)", def: "To officially send a drawing to team members" },
    { term: "Revise", def: "To change and reissue a drawing" },
    { term: "Amendment", def: "A specific modification made to a drawing" },
    { term: "Superseded", def: "Replaced by a newer version" },
    { term: "Sign off", def: "To officially approve a drawing" },
    { term: "Working drawing", def: "A drawing used for construction or production" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fadeIn">
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          3. Technical Vocabulary
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b border-slate-200 w-1/3">Term</th>
              <th className="p-4 border-b border-slate-200">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {terms.map((item, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-colors">
                <td className="p-4 font-semibold text-slate-700">{item.term}</td>
                <td className="p-4 text-slate-600">{item.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SectionGrammar = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <PenTool className="text-purple-600" />
        4. Grammar Focus: Passive Voice
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-slate-600 mb-4">
            The source text frequently uses the <strong>passive voice</strong>. This is extremely common in technical engineering documents.
          </p>
          <div className="bg-purple-50 border border-purple-100 p-5 rounded-lg mb-4">
            <h3 className="font-bold text-purple-900 mb-2">Structure</h3>
            <p className="text-purple-800 font-mono text-sm">Subject + to be + Past Participle</p>
            <p className="text-purple-700 italic mt-2 text-sm">"The drawing <span className="font-bold underline">will be revised</span>."</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-700">Why use Passive Voice?</h3>
          <ul className="space-y-3">
            {[
              "Focuses on the process/object, not the person doing it.",
              "Sounds more formal and objective.",
              "Standard in specifications, reports, and manuals."
            ].map((reason, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-slate-600 text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SectionExamples = () => {
  const examples = [
    "The structural drawing was amended after load calculations were reviewed.",
    "Revision C supersedes all previous versions.",
    "The preliminary drawings were circulated to the mechanical and electrical teams.",
    "The senior engineer signed off the working drawings before construction began."
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Briefcase className="text-emerald-600" />
        5. Practical Engineering Examples
      </h2>
      <div className="space-y-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-500">
            <span className="font-mono text-emerald-600 font-bold opacity-50">0{idx + 1}</span>
            <p className="text-slate-700 font-medium">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionExercises = () => {
  // Exercise 1 State
  const [ex1Answers, setEx1Answers] = useState<{ [key: string]: string }>({});
  const [ex1Results, setEx1Results] = useState<{ [key: string]: boolean | null }>({});
  
  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState<string[]>(["", "", ""]);
  const [ex2Results, setEx2Results] = useState<boolean[]>([false, false, false]);
  const [ex2Checked, setEx2Checked] = useState(false);

  // Exercise 3 State
  const [ex3Input, setEx3Input] = useState("");
  const [ex3ShowAnswer, setEx3ShowAnswer] = useState(false);

  const handleEx1Check = () => {
    const correct = {
      "Preliminary drawing": "b",
      "Amendment": "d",
      "Sign off": "a",
      "Superseded": "c"
    };
    const results: any = {};
    Object.keys(correct).forEach(key => {
        // @ts-ignore
      results[key] = ex1Answers[key] === correct[key];
    });
    setEx1Results(results);
  };

  const handleEx2Check = () => {
    const correct = ["preliminary", "superseded", "amendments"];
    const results = ex2Answers.map((ans, idx) => 
      ans.toLowerCase().trim() === correct[idx] || 
      (idx === 2 && ans.toLowerCase().trim().includes("amendment")) // allow singular
    );
    setEx2Results(results);
    setEx2Checked(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 1: Vocabulary Match</h3>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Easy</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <p><strong>a.</strong> Officially approve</p>
            <p><strong>b.</strong> A detailed early design drawing</p>
            <p><strong>c.</strong> Replaced by a newer version</p>
            <p><strong>d.</strong> A specific change</p>
          </div>
          <div className="space-y-3">
            {["Preliminary drawing", "Amendment", "Sign off", "Superseded"].map((term) => (
              <div key={term} className="flex items-center justify-between gap-4">
                <span className="text-slate-700 font-medium">{term}</span>
                <div className="flex items-center gap-2">
                  <select 
                    className={`border rounded p-1 text-sm ${ex1Results[term] === true ? 'border-green-500 bg-green-50' : ex1Results[term] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                    onChange={(e) => setEx1Answers({...ex1Answers, [term]: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                  {ex1Results[term] === true && <Check className="w-4 h-4 text-green-500" />}
                </div>
              </div>
            ))}
            <button 
              onClick={handleEx1Check}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 w-full"
            >
              Check Answers
            </button>
          </div>
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 2: Sentence Completion</h3>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Medium</span>
        </div>
        <div className="space-y-4">
          {[
            { text: "The architect developed the sketches into __________ drawings.", idx: 0 },
            { text: "After revision B was issued, revision A was __________.", idx: 1 },
            { text: "Written notes describe the __________ made to the drawing.", idx: 2 },
          ].map((q, i) => (
            <div key={i} className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm">{q.text.split("__________")[0]}
                <input 
                  type="text" 
                  className={`mx-2 border-b-2 outline-none px-1 py-0.5 w-32 text-center font-medium
                    ${ex2Checked ? (ex2Results[i] ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700') : 'border-slate-300 focus:border-blue-500'}
                  `}
                  value={ex2Answers[i]}
                  onChange={(e) => {
                    const newAns = [...ex2Answers];
                    newAns[i] = e.target.value;
                    setEx2Answers(newAns);
                    setEx2Checked(false); // reset check on edit
                  }}
                />
                {q.text.split("__________")[1]}
              </label>
            </div>
          ))}
           <button 
              onClick={handleEx2Check}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 w-full md:w-auto"
            >
              Check Answers
            </button>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 3: Applied Writing</h3>
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Challenging</span>
        </div>
        <p className="text-slate-600 mb-4 text-sm">Rewrite the sentence using <strong>passive voice</strong>.</p>
        
        <div className="bg-slate-50 p-4 rounded mb-4">
          <p className="text-sm font-semibold text-slate-500 uppercase">Active Voice:</p>
          <p className="text-slate-800 text-lg">"The senior engineer approved the drawing yesterday."</p>
        </div>

        <textarea 
          className="w-full border border-slate-300 rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          rows={3}
          placeholder="Type the passive version here..."
          value={ex3Input}
          onChange={(e) => setEx3Input(e.target.value)}
        />

        <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
          <button 
            onClick={() => setEx3ShowAnswer(!ex3ShowAnswer)}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-sm hover:bg-blue-50"
          >
            {ex3ShowAnswer ? "Hide Answer" : "Show Correct Answer"}
          </button>
          
          {ex3ShowAnswer && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded text-sm animate-fadeIn flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>The drawing was approved by the senior engineer yesterday.</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

// --- Main App Component ---

const Lesson2App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Section>('overview');

  const tabs: TabItem[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'concepts', label: 'Key Concepts', icon: <PenTool className="w-4 h-4" /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <FileText className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar', icon: <Settings className="w-4 h-4" /> },
    { id: 'examples', label: 'Examples', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <SectionOverview />;
      case 'concepts': return <SectionConcepts />;
      case 'vocabulary': return <SectionVocabulary />;
      case 'grammar': return <SectionGrammar />;
      case 'examples': return <SectionExamples />;
      case 'exercises': return <SectionExercises />;
      default: return <SectionOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <Header />
      
      <main className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 md:pb-0 gap-2 md:gap-0 bg-slate-200/50 p-1 rounded-xl md:bg-white md:shadow-sm md:rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Main Content Panel */}
        <div className="min-h-[500px]">
            {renderContent()}
        </div>

      </main>

      <footer className="text-center py-8 text-slate-400 text-sm">
        Engineering English Module • Design Development Lesson
      </footer>
    </div>
  );
};

export default Lesson2App;