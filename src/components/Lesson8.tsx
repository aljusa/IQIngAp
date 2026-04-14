import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calculator, 
  Ruler, 
  PenTool, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Info
} from 'lucide-react';

// --- Types ---

type TabId = 'focus' | 'concepts' | 'vocabulary' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

// 1. Navigation Component
const TabNavigation: React.FC<{ activeTab: TabId; onTabChange: (id: TabId) => void }> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = [
    { id: 'focus', label: 'Source Focus', icon: <Info size={18} /> },
    { id: 'concepts', label: 'Key Concepts', icon: <Calculator size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <BookOpen size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
    { id: 'examples', label: 'Examples', icon: <Ruler size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <Brain size={18} /> },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto pb-0 pt-2 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'border-blue-400 text-blue-400 font-semibold bg-slate-800 rounded-t-lg' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-t-lg'}
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Content Sections

const FocusSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Lesson 8: Numbers and Calculations</h2>
      <p className="text-xl text-slate-600 mb-6 font-light">
        Engineering English context: Metric vs. Imperial, accuracy, and rounding.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Ruler size={20} /> Context
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li>• Using metric and imperial units in specifications.</li>
            <li>• Problems with decimals, rounding, and accuracy.</li>
            <li>• Basic operations: Add, Subtract, Multiply, Divide.</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
             <AlertTriangle size={20} /> The Core Problem
          </h3>
          <p className="text-slate-700 italic">
            "Rounding errors can accumulate in calculations and create bigger inaccuracies later."
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ConceptsSection = () => (
  <div className="space-y-8 animate-fadeIn">
    {/* Decimals & Fractions */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">A. Decimals and Fractions</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Unit Conversion Issues</h4>
          <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
            1 mm ≈ 0.03937 inches
            <br />
            <span className="text-slate-500">Often rounded to:</span> 0.04 inches
          </div>
          <p className="text-slate-600 text-sm mb-2">
            <strong className="text-slate-800">Whole number:</strong> Integer (1, 2, 10). No decimal part.
          </p>
          <p className="text-slate-600 text-sm mb-2">
            <strong className="text-slate-800">Decimal:</strong> e.g., 0.03937.
          </p>
          <p className="text-slate-600 text-sm">
            <strong className="text-slate-800">Fraction:</strong> e.g., 1/100 (one hundredth), 1/1000 (one thousandth).
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-50 rounded p-4 border border-slate-100">
          <div className="text-center mb-2 font-semibold text-slate-600">Accuracy Concepts</div>
          <div className="w-full bg-white p-3 rounded shadow-sm text-center mb-2">
            <span className="text-red-500 font-bold">Inaccuracy</span>
            <p className="text-xs text-slate-500">Difference between true value and measured value.</p>
          </div>
          <div className="w-full bg-white p-3 rounded shadow-sm text-center">
            <span className="text-green-600 font-bold">Negligible</span>
            <p className="text-xs text-slate-500">So small it doesn't matter (usually).</p>
          </div>
        </div>
      </div>
    </div>

    {/* Pythagoras Logic */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">B. The 3-4-5 Method (Pythagoras)</h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-slate-700 mb-4">
            To create a <strong className="text-blue-600">Right Angle (90°)</strong> using a setsquare or tape measure:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Square side A (3 ft): <span className="font-mono bg-slate-100 px-1">3² = 9</span></li>
            <li>Square side B (4 ft): <span className="font-mono bg-slate-100 px-1">4² = 16</span></li>
            <li>Add the squares: <span className="font-mono bg-slate-100 px-1">9 + 16 = 25</span></li>
            <li>Take the square root: <span className="font-mono bg-slate-100 px-1">√25 = 5</span></li>
          </ol>
          <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
            <strong>Hypotenuse:</strong> The longest side, opposite the right angle.
          </div>
        </div>
        
        {/* Visual representation */}
        <div className="flex justify-center p-6 bg-slate-50 rounded-lg">
          <svg width="240" height="200" viewBox="0 0 240 200" className="overflow-visible">
            {/* Triangle */}
            <path d="M 40 160 L 40 40 L 200 160 Z" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <path d="M 40 160 L 40 40" stroke="#3b82f6" strokeWidth="3" />
            <path d="M 40 160 L 200 160" stroke="#3b82f6" strokeWidth="3" />
            
            {/* Right Angle Marker */}
            <path d="M 40 140 L 60 140 L 60 160" fill="none" stroke="#ef4444" strokeWidth="2" />
            
            {/* Labels */}
            <text x="20" y="100" className="text-sm font-bold fill-slate-700">Side A (3)</text>
            <text x="100" y="180" className="text-sm font-bold fill-slate-700">Side B (4)</text>
            <text x="130" y="90" className="text-sm font-bold fill-slate-700">Hypotenuse (5)</text>
            <text x="70" y="135" className="text-xs fill-red-500 font-bold">90°</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const VocabularySection = () => (
  <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-sm border-t-4 border-indigo-500 overflow-hidden">
      <div className="bg-indigo-50 p-4 border-b border-indigo-100">
        <h3 className="font-bold text-indigo-900">Measurement & Conversion</h3>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span className="font-semibold block text-slate-800">Convert A to B</span>
          <span className="text-sm text-slate-600">"Convert mm to inches."</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">As a decimal</span>
          <span className="text-sm text-slate-600">"Express value as a decimal."</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">Round up / down</span>
          <span className="text-sm text-slate-600">"Round to two decimal places."</span>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-sm border-t-4 border-emerald-500 overflow-hidden">
      <div className="bg-emerald-50 p-4 border-b border-emerald-100">
        <h3 className="font-bold text-emerald-900">Accuracy</h3>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span className="font-semibold block text-slate-800">Negligible difference</span>
          <span className="text-sm text-slate-600">A very small, unimportant difference.</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">Accumulate</span>
          <span className="text-sm text-slate-600">Errors add up over steps.</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">Bigger inaccuracies</span>
          <span className="text-sm text-slate-600">Result of accumulation.</span>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-sm border-t-4 border-rose-500 overflow-hidden">
      <div className="bg-rose-50 p-4 border-b border-rose-100">
        <h3 className="font-bold text-rose-900">Operations</h3>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span className="font-semibold block text-slate-800">Square the number</span>
          <span className="text-sm text-slate-600">Multiply a number by itself.</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">Add together</span>
          <span className="text-sm text-slate-600">Sum the results.</span>
        </div>
        <div>
          <span className="font-semibold block text-slate-800">Work out</span>
          <span className="text-sm text-slate-600">Calculate (e.g., square root).</span>
        </div>
      </div>
    </div>
  </div>
);

const GrammarSection = () => (
  <div className="space-y-6 animate-fadeIn">
    {/* Conditionals */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-100 p-2 rounded text-blue-600"><Brain size={20}/></div>
        <h3 className="text-xl font-bold text-slate-800">3.1 Conditionals for Consequences</h3>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
        <p className="font-mono text-blue-600 font-bold mb-2">Pattern: When/If + present, present</p>
        <p className="text-sm text-slate-600">Used for general technical rules.</p>
      </div>
      <ul className="space-y-3 text-slate-700">
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-1 text-blue-400 flex-shrink-0" size={16} />
          <span>"<strong>When</strong> you convert from metric to imperial, you no longer have whole numbers."</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-1 text-blue-400 flex-shrink-0" size={16} />
          <span>"<strong>If</strong> you use rounding, errors can add up."</span>
        </li>
      </ul>
    </div>

    {/* Modals */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-purple-100 p-2 rounded text-purple-600"><PenTool size={20}/></div>
        <h3 className="text-xl font-bold text-slate-800">3.2 Modals (Necessity & Likelihood)</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border p-3 rounded hover:bg-slate-50 transition-colors">
          <strong className="text-purple-700 block mb-1">Have to</strong>
          <span className="text-xs uppercase tracking-wide text-slate-500 font-bold">Necessity</span>
          <p className="text-sm mt-2 text-slate-700">"Decimals <strong>have to</strong> be rounded up or down."</p>
        </div>
        <div className="border p-3 rounded hover:bg-slate-50 transition-colors">
          <strong className="text-purple-700 block mb-1">Probably</strong>
          <span className="text-xs uppercase tracking-wide text-slate-500 font-bold">Likelihood</span>
          <p className="text-sm mt-2 text-slate-700">"You'd <strong>probably</strong> round that number..."</p>
        </div>
        <div className="border p-3 rounded hover:bg-slate-50 transition-colors">
          <strong className="text-purple-700 block mb-1">Might</strong>
          <span className="text-xs uppercase tracking-wide text-slate-500 font-bold">Possibility</span>
          <p className="text-sm mt-2 text-slate-700">"You <strong>might</strong> say the difference is negligible..."</p>
        </div>
      </div>
    </div>
  </div>
);

const ExamplesSection = () => (
  <div className="grid gap-6 animate-fadeIn">
    {/* Spec Example */}
    <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Ruler size={100} />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">Specifications</h3>
      <div className="bg-white p-4 border rounded shadow-sm relative z-10">
        <p className="font-mono text-slate-700">
          "The bracket thickness is 1 mm, which is approximately <span className="bg-yellow-100">0.04 inches</span> after rounding to two decimal places."
        </p>
      </div>
    </div>

    {/* Risk Example */}
    <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
       <div className="absolute top-0 right-0 p-4 opacity-10">
        <AlertTriangle size={100} />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">Rounding Risk</h3>
      <div className="bg-white p-4 border rounded shadow-sm relative z-10">
        <p className="font-mono text-slate-700">
          "If we round each converted dimension, the total <span className="bg-red-50 text-red-700 font-bold">tolerance stack-up</span> may increase."
        </p>
      </div>
      <p className="text-sm text-slate-500 mt-2">Note: Tolerance stack-up is when multiple small variations add up to a failure.</p>
    </div>

    {/* Verification Example */}
    <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
       <div className="absolute top-0 right-0 p-4 opacity-10">
        <CheckCircle size={100} />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">Verification</h3>
      <div className="bg-white p-4 border rounded shadow-sm relative z-10">
        <p className="font-mono text-slate-700">
          "To verify a right angle during installation, we can use the 3–4–5 method and measure the diagonal."
        </p>
      </div>
    </div>
  </div>
);

// --- Interactive Exercises ---

const Exercise1 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  const checkMatch = () => {
    const key = {
      decimal: 'c',
      fraction: 'e',
      'round up': 'd',
      negligible: 'a',
      hypotenuse: 'b'
    };
    
    const newResults: Record<string, boolean> = {};
    Object.keys(key).forEach(k => {
      newResults[k] = answers[k] === key[k as keyof typeof key];
    });
    setResults(newResults);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm">Easy</span> 
        Vocabulary Matching
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {['decimal', 'fraction', 'round up', 'negligible', 'hypotenuse'].map(term => (
            <div key={term} className="flex items-center justify-between bg-slate-50 p-2 rounded">
              <span className="font-semibold text-slate-700">{term}</span>
              <div className="flex items-center gap-2">
                 <select 
                  className="border rounded p-1 text-sm w-32"
                  onChange={(e) => setAnswers({...answers, [term]: e.target.value})}
                  value={answers[term] || ''}
                >
                  <option value="">Select...</option>
                  <option value="a">a) so small it doesn't matter</option>
                  <option value="b">b) longest side of triangle</option>
                  <option value="c">c) number with point (0.04)</option>
                  <option value="d">d) increase to nearest value</option>
                  <option value="e">e) number like 1/1000</option>
                </select>
                {results[term] !== undefined && (
                  results[term] ? <CheckCircle size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded h-fit">
          <p className="font-bold mb-2">Definitions:</p>
          <ul className="space-y-2">
            <li>a) so small it doesn’t matter (or seems not to)</li>
            <li>b) the longest side of a right triangle</li>
            <li>c) a number written with a decimal point</li>
            <li>d) increase a number to the nearest chosen value</li>
            <li>e) a number like 1/1000</li>
          </ul>
        </div>
      </div>
      <button 
        onClick={checkMatch}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Check Answers
      </button>
    </div>
  );
};

const Exercise3 = () => {
  const [inputs, setInputs] = useState({
    roundedTotal: '',
    unroundedTotal: '',
    difference: ''
  });
  const [showResult, setShowResult] = useState(false);

  // Correct values
  // 0.04 * 4 = 0.16
  // 0.03937 * 4 = 0.15748
  // Diff = 0.00252

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm">Hard</span> 
        Error Spotting (The "Stack-up")
      </h3>
      
      <div className="bg-yellow-50 p-4 border border-yellow-200 rounded mb-4 text-sm text-yellow-900">
        <p className="font-bold">Scenario:</p>
        <p>A drawing converts four dimensions from mm to inches. Each is 1mm.</p>
        <p>Exact conversion: 1mm = 0.03937 inches.</p>
        <p>Rounded conversion used: 1mm = 0.04 inches.</p>
        <p>This happens 4 times in a row.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">1. Rounded Total (0.04 × 4)</label>
          <input 
            type="number" 
            className="w-full border p-2 rounded"
            placeholder="?"
            value={inputs.roundedTotal}
            onChange={e => setInputs({...inputs, roundedTotal: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">2. Unrounded Total (0.03937 × 4)</label>
          <input 
            type="number" 
            className="w-full border p-2 rounded"
            placeholder="?"
            value={inputs.unroundedTotal}
            onChange={e => setInputs({...inputs, unroundedTotal: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">3. Difference (1 minus 2)</label>
          <input 
            type="number" 
            className="w-full border p-2 rounded"
            placeholder="?"
            value={inputs.difference}
            onChange={e => setInputs({...inputs, difference: e.target.value})}
          />
        </div>
      </div>

      <button 
        onClick={() => setShowResult(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mb-4"
      >
        Verify Calculation
      </button>

      {showResult && (
        <div className="bg-slate-900 text-green-400 font-mono p-4 rounded text-sm">
          <p>Rounded Total....: 0.16</p>
          <p>Unrounded Total..: 0.15748</p>
          <p>Difference.......: 0.00252 inches</p>
          <p className="text-slate-400 mt-2">// This confirms the lesson point: errors accumulate.</p>
        </div>
      )}
    </div>
  );
};

const ExercisesSection = () => (
  <div className="animate-fadeIn max-w-3xl mx-auto space-y-8 pb-10">
    <Exercise1 />
    
    {/* Exercise 2 Static (Medium) */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">Medium</span> 
        Calculations & Language
      </h3>
      <div className="space-y-4">
        <div className="p-3 bg-slate-50 rounded">
          <p className="font-semibold mb-2">A. Rounding Practice (to 2 d.p.)</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-slate-500">0.03937 →</span>
              <input type="text" className="border rounded p-1 mt-1" placeholder="0.04" />
            </div>
             <div className="flex flex-col">
              <span className="text-slate-500">2.146 →</span>
              <input type="text" className="border rounded p-1 mt-1" placeholder="2.15" />
            </div>
             <div className="flex flex-col">
              <span className="text-slate-500">12.995 →</span>
              <input type="text" className="border rounded p-1 mt-1" placeholder="13.00" />
            </div>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded">
          <p className="font-semibold mb-2">C. Choose the best modal</p>
          <div className="space-y-2 text-sm">
            <p>1. To keep the spec readable, we <select className="bg-white border rounded"><option>?</option><option>have to</option></select> round the value.</p>
            <p>2. You <select className="bg-white border rounded"><option>?</option><option>might</option></select> say the difference is negligible.</p>
            <p>3. You'd <select className="bg-white border rounded"><option>?</option><option>probably</option></select> round 0.03937 to 0.04.</p>
          </div>
        </div>
      </div>
    </div>

    <Exercise3 />
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('focus');

  const renderContent = () => {
    switch (activeTab) {
      case 'focus': return <FocusSection />;
      case 'concepts': return <ConceptsSection />;
      case 'vocabulary': return <VocabularySection />;
      case 'grammar': return <GrammarSection />;
      case 'examples': return <ExamplesSection />;
      case 'exercises': return <ExercisesSection />;
      default: return <FocusSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>


    </div>
  );
};

export default App;