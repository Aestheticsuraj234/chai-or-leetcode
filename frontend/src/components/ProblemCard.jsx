import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";




const difficultyColors = {
  EASY: "bg-success",
  MEDIUM: "bg-warning",
  HARD: "bg-error",
};

const difficultyText = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
};

const ProblemCard = ({ problem, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className=" dark:bg-gray-850 rounded-lg border  dark:border-gray-700 overflow-hidden"
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full text-white ${difficultyColors[problem.difficulty]}`}>
            {difficultyText[problem.difficulty]}
          </span>
          <div className="flex flex-wrap gap-1">
            {problem.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            {problem.tags.length > 2 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                +{problem.tags.length - 2}
              </span>
            )}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          {problem.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
          {problem.description}
        </p>
        
        <button
          onClick={onSelect}
          className="w-full bg-primary hover:bg-primary-focus text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors group"
        >
          <span>Load Problem</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProblemCard;