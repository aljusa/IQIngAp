import React, { useState } from 'react';
import { 
  Ruler, 
  Target, 
  Maximize2, 
  BookOpen, 
  PenTool, 
  CheckCircle, 
  AlertCircle, 
  Settings, 
  Thermometer, 
  ArrowRightLeft,
  ChevronRight,
  Info
} from 'lucide-react';

// --- Types & Interfaces ---
interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

// --- Components ---

// 1. Overview Section
const OverviewSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">1. Overview of the Topic</h2>
      <p className="text-blue-800 text-lg">
        This lesson explains why absolute precision is impossible in engineering production and how engineers manage this reality using tolerances and fits.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-800 text-lg mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-indigo-600" />
          Key Focus Areas
        </h3>
        <ul className="space-y-3">
          {[
            "Precision vs. accuracy",
            "Permissible variation in size",
            "Tight and loose tolerances",
            "Clearance fit and interference fit"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full"></span>
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-center justify-center">
        <div className="text-center">
          <Settings className="w-16 h-16 mx-auto text-slate-400 mb-4" />
          <p className="text-slate-500 italic">"No manufacturing process produces perfect dimensions every time."</p>
        </div>
      </div>
    </div>
  </div>
);

// 2. Precision & Tolerance Section
const PrecisionSection = () => (
  <div className="space-y-8 animate-fadeIn">
    {/* 2.1 Impossible Precision */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
        <span className="bg-slate-800 text-white text-sm px-2 py-1 rounded mr-3">2.1</span>
        Why Absolute Precision Is Impossible
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-600 mb-4">
          It is impossible to manufacture components with dimensions that are exactly the same as those specified in a design because:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "All production processes are imprecise to some extent.",
            "Components produced from the same design will vary in size.",
            "Variations may be microscopic (hundredths of a mm), but they exist."
          ].map((text, i) => (
            <div key={i} className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-800 text-sm">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 2.2 & 2.3 Tolerances & Example */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
        <span className="bg-slate-800 text-white text-sm px-2 py-1 rounded mr-3">2.2 - 2.3</span>
        Tolerances: The Engineering Solution
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-bold text-indigo-700 mb-2">Definition</h3>
            <p className="text-slate-600">A tolerance is an acceptable variation in precision. It defines a range of permissible sizes, usually given as a deviation from a nominal size.</p>
          </div>
          
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-3">Example Calculation</h3>
            <div className="flex flex-col space-y-2 font-mono text-sm">
              <div className="flex justify-between border-b border-indigo-200 pb-1">
                <span>Specified:</span>
                <span className="font-bold">88 mm ± 0.05 mm</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Max Acceptable:</span>
                <span>88.05 mm</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Min Acceptable:</span>
                <span>87.95 mm</span>
              </div>
              <div className="flex justify-between text-red-600 pt-2 opacity-75">
                <span>Example Reject:</span>
                <span>88.06 mm (Outside Tolerance)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Diagram */}
        <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg">
          <h4 className="text-slate-300 text-sm uppercase tracking-wider mb-6">Shaft Blueprint Visualization</h4>
          <div className="relative w-full h-32 flex items-center justify-center">
            {/* Shaft */}
            <div className="h-20 bg-gradient-to-b from-slate-400 to-slate-600 w-3/4 rounded relative border-2 border-slate-300">
               {/* Dimension Line */}
               <div className="absolute -top-8 left-0 right-0 h-4 border-l border-r border-white flex items-center justify-center">
                  <div className="h-[1px] bg-white w-full absolute top-1/2"></div>
                  <span className="bg-slate-800 px-2 text-yellow-400 font-mono font-bold z-10">Ø 88 ± 0.05</span>
               </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-xs">
             <div className="flex items-center"><div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>Permissible</div>
             <div className="flex items-center"><div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>Non-Permissible</div>
          </div>
        </div>
      </div>
    </section>

    {/* 2.4 Tight vs Loose */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
        <span className="bg-slate-800 text-white text-sm px-2 py-1 rounded mr-3">2.4</span>
        Tight vs. Loose Tolerances
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-xl overflow-hidden">
        <div className="bg-green-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
          <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
            <Maximize2 className="w-5 h-5 mr-2" />
            Loose Tolerance
          </h3>
          <p className="text-green-900 mb-4">Larger permissible deviation. Easier and cheaper to achieve.</p>
          <div className="bg-white p-3 rounded border border-green-200 text-sm">
             <strong>Examples:</strong>
             <ul className="list-disc ml-5 mt-1 text-slate-600">
                <li>Metalworking: ±0.1 mm</li>
                <li>Concrete: ±10 mm</li>
             </ul>
          </div>
        </div>
        <div className="bg-red-50 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center">
            <Ruler className="w-5 h-5 mr-2" />
            Tight Tolerance
          </h3>
          <p className="text-red-900 mb-4">Very small permissible deviation. Difficult and expensive to achieve.</p>
          <div className="bg-white p-3 rounded border border-red-200 text-sm">
             <strong>Examples:</strong>
             <ul className="list-disc ml-5 mt-1 text-slate-600">
                <li>Metalworking: ±0.01 mm</li>
                <li>Concrete: ±1 mm</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// 3. Fit Section
const FitSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <h3 className="font-bold text-blue-900 mb-2">The Concept of Fit</h3>
      <p className="text-blue-800">When one component goes through another (e.g., shaft in a hole), the "fit" determines how tight or loose the connection is. Their sizes and shapes must match.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Clearance Fit */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">3.2 Clearance Fit</h3>
          <ArrowRightLeft className="text-slate-400 w-5 h-5" />
        </div>
        <div className="p-6">
          <ul className="space-y-2 mb-6 text-slate-600">
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2" />Allows component to slide/turn freely.</li>
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2" />Leaves a gap (clearance).</li>
          </ul>
          
          {/* Visual Clearance */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 h-48 flex items-center justify-center relative">
             <div className="w-32 h-32 rounded-full border-[12px] border-slate-300 flex items-center justify-center relative">
               {/* Hole Label */}
               <span className="absolute -top-6 text-xs text-slate-500">Hole</span>
               {/* Shaft */}
               <div className="w-16 h-16 rounded-full bg-blue-500 shadow-inner flex items-center justify-center text-white text-xs">Shaft</div>
               {/* Gap Indicator */}
               <div className="absolute right-3 top-1/2 h-[1px] w-8 bg-red-500"></div>
               <span className="absolute right-[-40px] top-[45%] text-xs text-red-500 font-bold">Gap</span>
             </div>
          </div>
          
          <div className="mt-4 text-sm bg-yellow-50 p-3 rounded text-yellow-800 border border-yellow-100">
            <strong>Risks:</strong>
            <ul className="list-disc ml-4 mt-1">
              <li>Insufficient clearance: Binds/Stuck.</li>
              <li>Too much clearance: Excessive "Play".</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interference Fit */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">3.3 Interference Fit</h3>
          <Thermometer className="text-slate-400 w-5 h-5" />
        </div>
        <div className="p-6">
          <ul className="space-y-2 mb-6 text-slate-600">
            <li className="flex items-start"><AlertCircle className="w-4 h-4 text-orange-500 mt-1 mr-2" />Very tight fit.</li>
            <li className="flex items-start"><AlertCircle className="w-4 h-4 text-orange-500 mt-1 mr-2" />No free movement allowed.</li>
          </ul>

          {/* Visual Interference */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 h-48 flex items-center justify-center relative">
             <div className="w-24 h-24 rounded-full border-[8px] border-slate-300 flex items-center justify-center relative overflow-hidden">
                {/* Shaft bigger than hole visual trick */}
               <div className="w-24 h-24 rounded-full bg-orange-600 opacity-90 flex items-center justify-center text-white text-xs shadow-inner">
                  Shaft
               </div>
             </div>
             <span className="absolute -bottom-6 text-xs text-slate-500">Force/Heat Required</span>
          </div>

          <div className="mt-4 text-sm bg-orange-50 p-3 rounded text-orange-800 border border-orange-100">
            <strong>Method:</strong>
            <p className="mt-1">Force component in, or heat the hole (expand) → Insert → Cool (contract).</p>
            <p className="mt-1 font-semibold">Ex: Train wheel on axle.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 4. Vocabulary Section
const VocabularySection = () => {
  const vocab = [
    { term: "Accuracy", def: "How close a size is to the design value" },
    { term: "Precision", def: "Degree of exactness in measurement" },
    { term: "Tolerance", def: "Permissible variation in size" },
    { term: "Deviation", def: "Difference from a specified value" },
    { term: "Tight tolerance", def: "Very small permissible variation" },
    { term: "Loose tolerance", def: "Large permissible variation" },
    { term: "Clearance", def: "Gap between parts" },
    { term: "Play", def: "Excessive movement due to large clearance" },
    { term: "Clearance fit", def: "Fit allowing free movement" },
    { term: "Interference fit", def: "Very tight fit with no free movement" },
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Technical Vocabulary</h2>
      <div className="overflow-x-auto rounded-lg shadow border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b border-slate-200 font-semibold w-1/3">Term</th>
              <th className="p-4 border-b border-slate-200 font-semibold">Definition</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {vocab.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 border-b border-slate-100 font-medium text-indigo-700">{item.term}</td>
                <td className="p-4 border-b border-slate-100 text-slate-600">{item.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 5. Grammar & Examples Section
const GrammarSection = () => (
  <div className="space-y-8 animate-fadeIn">
    {/* Grammar */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Grammar Focus: Modals & Conditionals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
          <h3 className="font-bold text-purple-900 mb-3 flex items-center">
             <PenTool className="w-4 h-4 mr-2" />
             Modals (Possibility)
          </h3>
          <p className="text-purple-800 mb-4 italic">Used to describe potential outcomes.</p>
          <div className="bg-white p-3 rounded shadow-sm text-slate-700 border-l-4 border-purple-400">
            "The diameter <span className="font-bold text-purple-600">may</span> deviate 0.05 mm..."
          </div>
        </div>
        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
          <h3 className="font-bold text-teal-900 mb-3 flex items-center">
             <ArrowRightLeft className="w-4 h-4 mr-2" />
             Conditionals (Consequence)
          </h3>
          <p className="text-teal-800 mb-4 italic">Used for engineering specifications and risks.</p>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded shadow-sm text-slate-700 border-l-4 border-teal-400">
              "<span className="font-bold text-teal-600">If</span> there is insufficient clearance, the component <span className="font-bold text-teal-600">will</span> bind."
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Practical Examples */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Practical Engineering Context</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
        {[
          { text: "The shaft diameter is within tolerance and therefore permissible.", type: "Success" },
          { text: "A tight tolerance increases manufacturing difficulty and cost.", type: "Fact" },
          { text: "Insufficient clearance causes the bearing to bind.", type: "Failure" },
          { text: "The wheel was installed using an interference fit.", type: "Process" }
        ].map((ex, i) => (
          <div key={i} className="p-4 flex items-center">
            <span className={`text-xs font-bold px-2 py-1 rounded uppercase mr-4 w-20 text-center ${
              ex.type === 'Success' ? 'bg-green-100 text-green-700' :
              ex.type === 'Failure' ? 'bg-red-100 text-red-700' :
              'bg-slate-100 text-slate-700'
            }`}>
              {ex.type}
            </span>
            <span className="text-slate-700">{ex.text}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// 6. Exercises Section (Interactive)
const ExercisesSection = () => {
  // State for Ex 1
  const [ex1Answers, setEx1Answers] = useState<Record<number, string>>({});
  const [ex1Feedback, setEx1Feedback] = useState<Record<number, boolean>>({});

  // State for Ex 2
  const [ex2Inputs, setEx2Inputs] = useState({ q1: "", q2: "", q3: "" });
  const [ex2Show, setEx2Show] = useState(false);

  // State for Ex 3
  const [ex3Show, setEx3Show] = useState(false);

  // Exercise 1 Data
  const ex1Questions = [
    { id: 1, term: "Tolerance", correct: "b", options: [
      { id: "a", text: "Very small permissible variation" },
      { id: "b", text: "Acceptable variation in size" },
      { id: "c", text: "Gap between parts" }
    ]},
    { id: 2, term: "Clearance", correct: "c", options: [
      { id: "a", text: "Very tight fit" },
      { id: "b", text: "Acceptable variation" },
      { id: "c", text: "Gap between parts" }
    ]},
    { id: 3, term: "Tight Tolerance", correct: "a", options: [
      { id: "a", text: "Very small permissible variation" },
      { id: "b", text: "Large permissible variation" },
      { id: "c", text: "No variation" }
    ]},
    { id: 4, term: "Interference Fit", correct: "d", options: [ // Note: Option 'd' added to logic
      { id: "c", text: "Gap between parts" },
      { id: "b", text: "Acceptable variation" },
      { id: "d", text: "Very tight fit with no free movement" }
    ]}
  ];

  const handleEx1Click = (qId: number, optId: string, correctId: string) => {
    setEx1Answers(prev => ({ ...prev, [qId]: optId }));
    setEx1Feedback(prev => ({ ...prev, [qId]: optId === correctId }));
  };

  return (
    <div className="space-y-10 animate-fadeIn pb-12">
      
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Exercise 1: Vocabulary Match</h3>
        <p className="text-sm text-slate-500 mb-6">Click the definition that matches the term.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ex1Questions.map((q) => (
            <div key={q.id} className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-bold text-indigo-700 mb-3">{q.term}</h4>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleEx1Click(q.id, opt.id, q.correct)}
                    className={`w-full text-left text-sm p-2 rounded border transition-colors ${
                      ex1Answers[q.id] === opt.id 
                        ? ex1Feedback[q.id] 
                          ? "bg-green-100 border-green-300 text-green-800"
                          : "bg-red-100 border-red-300 text-red-800"
                        : "bg-white border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt.text}
                    {ex1Answers[q.id] === opt.id && (
                       <span className="float-right font-bold">{ex1Feedback[q.id] ? "✓" : "✗"}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Exercise 2: Sentence Completion</h3>
        <p className="text-sm text-slate-500 mb-6">Fill in the blanks. (Try first, then check answers)</p>
        
        <div className="space-y-4 max-w-2xl">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="mb-2 text-slate-700">1. A diameter of 88.06 mm is <input type="text" className="border-b-2 border-slate-300 bg-transparent px-1 w-24 focus:outline-none focus:border-indigo-500" placeholder="?" value={ex2Inputs.q1} onChange={(e)=>setEx2Inputs({...ex2Inputs, q1: e.target.value})} /> tolerance.</p>
            {ex2Show && <p className="text-xs text-green-600 font-bold mt-1">Answer: outside (or not permissible)</p>}
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="mb-2 text-slate-700">2. A clearance fit allows a component to slide <input type="text" className="border-b-2 border-slate-300 bg-transparent px-1 w-24 focus:outline-none focus:border-indigo-500" placeholder="?" value={ex2Inputs.q2} onChange={(e)=>setEx2Inputs({...ex2Inputs, q2: e.target.value})} />.</p>
            {ex2Show && <p className="text-xs text-green-600 font-bold mt-1">Answer: freely</p>}
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="mb-2 text-slate-700">3. ±0.01 mm is considered a <input type="text" className="border-b-2 border-slate-300 bg-transparent px-1 w-24 focus:outline-none focus:border-indigo-500" placeholder="?" value={ex2Inputs.q3} onChange={(e)=>setEx2Inputs({...ex2Inputs, q3: e.target.value})} /> tolerance in metalworking.</p>
            {ex2Show && <p className="text-xs text-green-600 font-bold mt-1">Answer: tight (or close)</p>}
          </div>
          
          <button 
            onClick={() => setEx2Show(!ex2Show)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm font-medium"
          >
            {ex2Show ? "Hide Answers" : "Check Answers"}
          </button>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Exercise 3: Applied Writing</h3>
        <p className="text-slate-600 mb-4">Rewrite the sentence using formal engineering style and passive voice.</p>
        
        <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mb-4 text-yellow-900">
          <strong>Original:</strong> Engineers allow small size differences by specifying tolerances.
        </div>

        <textarea 
          className="w-full p-3 border border-slate-300 rounded mb-4 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none" 
          rows={3} 
          placeholder="Type your rewrite here..."
        ></textarea>

        <button 
          onClick={() => setEx3Show(!ex3Show)}
          className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors text-sm font-medium"
        >
          {ex3Show ? "Hide Model Answer" : "Show Model Answer"}
        </button>

        {ex3Show && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded animate-fadeIn">
            <h4 className="text-green-800 font-bold text-sm mb-1">Model Rewrite:</h4>
            <p className="text-green-900 italic">"Small size differences are allowed by specifying tolerances."</p>
            <p className="text-green-900 italic mt-2">OR: "Variations in size are permitted through the specification of tolerances."</p>
          </div>
        )}
      </div>

    </div>
  );
};


// --- Main App Component ---

const Lesson7App = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs: TabItem[] = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "precision", label: "Precision & Tolerance", icon: Target },
    { id: "fits", label: "Fits", icon: Settings },
    { id: "vocab", label: "Vocabulary", icon: Info },
    { id: "grammar", label: "Grammar", icon: PenTool },
    { id: "exercises", label: "Exercises", icon: CheckCircle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <OverviewSection />;
      case "precision": return <PrecisionSection />;
      case "fits": return <FitSection />;
      case "vocab": return <VocabularySection />;
      case "grammar": return <GrammarSection />;
      case "exercises": return <ExercisesSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Engineering English</h1>
          <p className="text-slate-400 flex items-center">
            Lesson: Dimensional Accuracy
            <ChevronRight className="w-4 h-4 mx-2" />
            Interactive Module
          </p>
        </div>
      </header>

      {/* Navigation Tabs (Sticky) */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex space-x-1 md:space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center px-4 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap outline-none focus:outline-none
                    ${isActive 
                      ? "border-blue-600 text-blue-600 bg-blue-50/50" 
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 mr-2 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8 pb-20">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
        <p>Created for Educational Purposes</p>
        <p className="mt-1">Based on "Lesson: Dimensional Accuracy"</p>
      </footer>
    </div>
  );
};

export default Lesson7App;