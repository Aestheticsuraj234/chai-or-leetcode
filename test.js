function getJudge0LanguageId(language) {
  const languageMap = {
    PYTHON: 71,
    JAVASCRIPT: 63,
    JAVA: 62,
    CPP: 54,
    GO: 60,
  };
  return languageMap[language.toUpperCase()];
}

const sampleStringProblem = {
  referenceSolutions: {
    JAVASCRIPT: `/**
     * @param {string} s
     * @return {boolean}
     */
    function isPalindrome(s) {
      // Convert to lowercase and remove non-alphanumeric characters
      s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      // Check if it's a palindrome
      let left = 0;
      let right = s.length - 1;
      
      while (left < right) {
        if (s[left] !== s[right]) {
          return false;
        }
        left++;
        right--;
      }
      
      return true;
    }
    
    // Add readline for dynamic input handling
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    
    // Process input line
    rl.on('line', (line) => {
      // Call solution with the input string
      const result = isPalindrome(line);
      
      // Output the result
      console.log(result ? "true" : "false");
      rl.close();
    });`,
    PYTHON: `class Solution:
        def isPalindrome(self, s: str) -> bool:
            # Convert to lowercase and keep only alphanumeric characters
            filtered_chars = [c.lower() for c in s if c.isalnum()]
            
            # Check if it's a palindrome
            return filtered_chars == filtered_chars[::-1]
    
    # Input parsing
    if __name__ == "__main__":
        import sys
        # Read the input string
        s = sys.stdin.readline().strip()
        
        # Call solution
        sol = Solution()
        result = sol.isPalindrome(s)
        
        # Output result
        print(str(result).lower())  # Convert True/False to lowercase true/false`,
    JAVA: `import java.util.Scanner;
  
  public class Main {
      public static String preprocess(String s) {
          return s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
      }
  
      public static boolean isPalindrome(String s) {
          s = preprocess(s);
          int left = 0, right = s.length() - 1;
  
          while (left < right) {
              if (s.charAt(left) != s.charAt(right)) return false;
              left++;
              right--;
          }
  
          return true;
      }
  
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          String input = sc.nextLine();
  
          boolean result = isPalindrome(input);
          System.out.println(result ? "true" : "false");
      }
  }
  `,
  },
  testCases: [
    {
      input: "A man, a plan, a canal: Panama",
      output: "true",
    },
    {
      input: "race a car",
      output: "false",
    },
    {
      input: " ",
      output: "true",
    },
  ],
};

const { referenceSolutions, testCases } = sampleStringProblem;

for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
 
  console.log(`Language: ${language}`);
  console.log(`Solution Code:\n${solutionCode}`);

  console.log("Test Cases:");
  testCases.forEach(({ input, output }, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${input}`);
    console.log(`Expected Output: ${output}`);
  });

  console.log("-----------------------------------");
}
