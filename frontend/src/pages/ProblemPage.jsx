import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  FileText,
  MessageSquare,
  Lightbulb,
  Bookmark,
  Share2,
  Clock,
  Award,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Terminal,
  Code2,
  ArrowRight,
  Users,
  Timer,
  ThumbsUp
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useProblemStore } from "../store/useProblemStore";



const ProblemPage = () => {
  const { id } = useParams();
  const { getProblemById, problem, isProblemLoading } = useProblemStore();
  const [code, setCode] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    getProblemById(id);
  }, [id]);

  useEffect(() => {
    if (problem) {
      setCode(problem.codeSnippets?.[selectedLanguage] || "");
      // Convert problem test cases to our format
      setTestCases(
        problem.testCases?.map(tc => ({
          input: tc.input,
          output: tc.output,
          status: 'pending'
        })) || []
      );
    }
  }, [problem, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    setCode(problem.codeSnippets?.[lang] || "");
  };

  const handleRunCode = () => {
   
   
  };

  if (isProblemLoading || !problem) {
    return (
      <div className="flex items-center justify-center h-screen bg-base-200">
        <div className="card bg-base-100 p-8 shadow-xl">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-base-content/70">Loading problem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-200">
      {/* Navigation Bar */}
      <nav className="navbar bg-base-100 shadow-lg px-4">
        <div className="flex-1 gap-2">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="w-6 h-6" />
            <ChevronRight className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{problem.title}</h1>
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <Clock className="w-4 h-4" />
              <span>Updated 2 hours ago</span>
              <span className="text-base-content/30">•</span>
              <Users className="w-4 h-4" />
              <span>61.1K Submissions</span>
              <span className="text-base-content/30">•</span>
              <ThumbsUp className="w-4 h-4" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
        <div className="flex-none gap-4">
          <button 
            className={`btn btn-ghost btn-circle ${isBookmarked ? 'text-primary' : ''}`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Share2 className="w-5 h-5" />
          </button>
          <select 
            className="select select-bordered select-primary w-40"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {Object.keys(problem.codeSnippets || {}).map((lang) => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-0">
              <div className="tabs tabs-bordered">
                <button 
                  className={`tab gap-2 ${activeTab === 'description' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  <FileText className="w-4 h-4" />
                  Description
                </button>
                <button 
                  className={`tab gap-2 ${activeTab === 'submissions' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('submissions')}
                >
                  <Code2 className="w-4 h-4" />
                  Submissions
                </button>
                <button 
                  className={`tab gap-2 ${activeTab === 'discussion' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('discussion')}
                >
                  <MessageSquare className="w-4 h-4" />
                  Discussion
                </button>
                <button 
                  className={`tab gap-2 ${activeTab === 'hints' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('hints')}
                >
                  <Lightbulb className="w-4 h-4" />
                  Hints
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold">{problem.title}</h2>
                  <div className={`badge ${
                    problem.difficulty === "EASY" ? "badge-success" :
                    problem.difficulty === "MEDIUM" ? "badge-warning" :
                    "badge-error"
                  } badge-lg`}>
                    {problem.difficulty}
                  </div>
                  {problem.tags?.map((tag, index) => (
                    <div key={index} className="badge badge-ghost badge-lg">{tag}</div>
                  ))}
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">{problem.description}</p>

                  {problem.examples && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Examples:</h3>
                      {Object.entries(problem.examples).map(([lang, example], idx) => (
                        <div key={lang} className="bg-base-200 p-6 rounded-xl mb-6 font-mono">
                          <div className="mb-4">
                            <div className="text-primary mb-2">Input:</div>
                            <code>{example.input}</code>
                          </div>
                          <div className="mb-4">
                            <div className="text-primary mb-2">Output:</div>
                            <code>{example.output}</code>
                          </div>
                          {example.explanation && (
                            <div>
                              <div className="text-primary mb-2">Explanation:</div>
                              <p className="text-base-content/70">{example.explanation}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}

                  {problem.constraints && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Constraints:</h3>
                      <div className="bg-base-200 p-6 rounded-xl mb-6">
                        <code className="text-lg">{problem.constraints}</code>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-0">
              <div className="tabs tabs-bordered">
                <button className="tab tab-active gap-2">
                  <Terminal className="w-4 h-4" />
                  Code Editor
                </button>
              </div>
              
              <div className="h-[600px] w-full">
                <Editor
                  height="100%"
                  language={selectedLanguage.toLowerCase()}
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    automaticLayout: true,
                  }}
                />
              </div>

              <div className="p-4 border-t border-base-300 bg-base-200">
                <div className="flex justify-between items-center">
                  <button 
                    className="btn btn-primary gap-2"
                    onClick={handleRunCode}
                  >
                    <Play className="w-4 h-4" />
                    Run Code
                  </button>
                  <button className="btn btn-success gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Submit Solution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Cases Panel */}
        <div className="card bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold">Test Cases</h3>
                <div className="badge badge-neutral">
                  <Timer className="w-3 h-3 mr-1" />
                  Time Limit: 1000ms
                </div>
              </div>
            
            </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Input</th>
                    <th>Expected Output</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {testCases.map((testCase, index) => (
                    <tr key={index}>
                      <td className="font-mono">{testCase.input}</td>
                      <td className="font-mono">{testCase.output}</td>
                   
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;