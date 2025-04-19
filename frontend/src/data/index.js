

export const sampleProblems = [
  // 1. Two Sum (Array Problem)
  {
    id: "two-sum",
    title: "Two Sum",
    category: "array",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "EASY",
    tags: ["Array", "Hash Table", "Algorithms"],
    constraints:
      "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
    hints:
      "A really efficient solution can be found using a hash map. Try to use the two-pass hash table approach.",
    editorial:
      "The brute force approach is to check every possible pair of numbers in the array. However, we can use a hash map to optimize this to O(n) time complexity.",
    testCases: [
      {
        input: "[2,7,11,15]\n9",
        output: "[0,1]",
      },
      {
        input: "[3,2,4]\n6",
        output: "[1,2]",
      },
      {
        input: "[3,3]\n6",
        output: "[0,1]",
      },
    ],
    examples: {
      JAVASCRIPT: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      PYTHON: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      JAVA: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your code here
}

// Add readline for dynamic input handling
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Process input lines
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
  
  // When we have received both lines (nums array and target)
  if (lines.length === 2) {
    const nums = JSON.parse(lines[0].replace(/'/g, '"'));
    const target = parseInt(lines[1]);
    
    // Call the solution function
    const result = twoSum(nums, target);
    
    // Output result
    console.log(JSON.stringify(result));
    rl.close();
  }
});`,
      PYTHON: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass

# Input parsing
if __name__ == "__main__":
    import sys
    lines = sys.stdin.read().strip().split('\\n')
    
    # Parse input
    nums = eval(lines[0])  # Convert string representation to list
    target = int(lines[1])
    
    # Call solution
    sol = Solution()
    result = sol.twoSum(nums, target)
    
    # Output result
    print(result)`,
      JAVA: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Parse input array
        String numsInput = scanner.nextLine().trim();
        numsInput = numsInput.substring(1, numsInput.length() - 1); // Remove brackets
        String[] numStrings = numsInput.split(",");
        int[] nums = new int[numStrings.length];
        
        for (int i = 0; i < numStrings.length; i++) {
            nums[i] = Integer.parseInt(numStrings[i].trim());
        }
        
        // Parse target
        int target = Integer.parseInt(scanner.nextLine().trim());
        
        // Solve and output
        Solution solution = new Solution();
        int[] result = solution.twoSum(nums, target);
        
        // Format and print result
        System.out.print("[");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) {
                System.out.print(",");
            }
        }
        System.out.println("]");
        
        scanner.close();
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Add readline for dynamic input handling
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Process input lines
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
  
  // When we have received both lines (nums array and target)
  if (lines.length === 2) {
    const nums = JSON.parse(lines[0].replace(/'/g, '"'));
    const target = parseInt(lines[1]);
    
    // Call the solution function
    const result = twoSum(nums, target);
    
    // Output result
    console.log(JSON.stringify(result));
    rl.close();
  }
});`,
      PYTHON: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[num] = i
        return []

# Input parsing
if __name__ == "__main__":
    import sys
    lines = sys.stdin.read().strip().split('\\n')
    
    # Parse input
    nums = eval(lines[0])  # Convert string representation to list
    target = int(lines[1])
    
    # Call solution
    sol = Solution()
    result = sol.twoSum(nums, target)
    
    # Output result
    print(result)`,
      JAVA: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            map.put(nums[i], i);
        }
        
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Parse input array
        String numsInput = scanner.nextLine().trim();
        numsInput = numsInput.substring(1, numsInput.length() - 1); // Remove brackets
        String[] numStrings = numsInput.split(",");
        int[] nums = new int[numStrings.length];
        
        for (int i = 0; i < numStrings.length; i++) {
            nums[i] = Integer.parseInt(numStrings[i].trim());
        }
        
        // Parse target
        int target = Integer.parseInt(scanner.nextLine().trim());
        
        // Solve and output
        Solution solution = new Solution();
        int[] result = solution.twoSum(nums, target);
        
        // Format and print result
        System.out.print("[");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) {
                System.out.print(",");
            }
        }
        System.out.println("]");
        
        scanner.close();
    }
}`,
    },
  },
  
  // 2. Valid Palindrome (String Problem)
  {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    category: "array",
    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
    difficulty: "EASY",
    tags: ["String", "Two Pointers"],
    constraints:
      "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
    hints:
      "Consider using two pointers, one from the start and one from the end, moving towards the center.",
    editorial:
      "We can use two pointers approach to check if the string is a palindrome. One pointer starts from the beginning and the other from the end, moving towards each other.",
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
    examples: {
      JAVASCRIPT: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      PYTHON: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      JAVA: {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Write your code here
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
        # Write your code here
        pass

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
       // Write your code here
       return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();

        boolean result = isPalindrome(input);
        System.out.println(result ? "true" : "false");
        sc.close();
    }
}`,
    },
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
        sc.close();
    }
}`,
    },
  },
  
  // 3. Reverse Linked List (Linked List Problem)
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    category: "linkedlist",
    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list. A linked list can be reversed either iteratively or recursively. Try to implement both approaches.",
    difficulty: "EASY",
    tags: ["Linked List", "Recursion"],
    constraints:
      "The number of nodes in the list is the range [0, 5000].\n-5000 <= Node.val <= 5000",
    hints:
      "A simple and intuitive way is to use a stack. Or you can swap the values of the nodes, but that's usually not the expected approach.",
    editorial:
      "The iterative approach uses three pointers: prev, curr, and next to reverse the links between nodes. The recursive approach uses the call stack to reverse the links.",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "[1,2]",
        output: "[2,1]",
      },
      {
        input: "[]",
        output: "[]",
      },
    ],
    examples: {
      JAVASCRIPT: {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The reversed linked list is [5,4,3,2,1]",
      },
      PYTHON: {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The reversed linked list is [5,4,3,2,1]",
      },
      JAVA: {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The reversed linked list is [5,4,3,2,1]",
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // Write your code here
}

// Helper function to create a linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  
  let head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
}

// ListNode definition
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const input = JSON.parse(line.replace(/'/g, '"') || '[]');
  const head = createLinkedList(input);
  const reversedHead = reverseList(head);
  const result = linkedListToArray(reversedHead);
  
  console.log(JSON.stringify(result));
  rl.close();
});`,
      PYTHON: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # Write your code here
        pass

# Helper function to create linked list from array
def create_linked_list(arr):
    if not arr:
        return None
    
    head = ListNode(arr[0])
    current = head
    
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    
    return head

# Helper function to convert linked list to array
def linked_list_to_array(head):
    result = []
    current = head
    
    while current:
        result.append(current.val)
        current = current.next
    
    return result

# Main execution
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    if line:
        arr = json.loads(line)
    else:
        arr = []
    
    # Create linked list and solve
    head = create_linked_list(arr)
    sol = Solution()
    reversed_head = sol.reverseList(head)
    
    # Print result
    result = linked_list_to_array(reversed_head)
    print(result)`,
      JAVA: `import java.util.*;

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your code here
        return null;
    }
    
    // Helper method to create a linked list from an array
    public static ListNode createLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        
        return head;
    }
    
    // Helper method to convert linked list to array
    public static List<Integer> linkedListToList(ListNode head) {
        List<Integer> result = new ArrayList<>();
        ListNode current = head;
        
        while (current != null) {
            result.add(current.val);
            current = current.next;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse input array
        int[] arr;
        if (input.equals("[]")) {
            arr = new int[0];
        } else {
            String[] strArr = input.substring(1, input.length() - 1).split(",");
            arr = new int[strArr.length];
            for (int i = 0; i < strArr.length; i++) {
                arr[i] = Integer.parseInt(strArr[i].trim());
            }
        }
        
        // Create linked list and solve
        ListNode head = createLinkedList(arr);
        Solution solution = new Solution();
        ListNode reversedHead = solution.reverseList(head);
        
        // Print result
        List<Integer> result = linkedListToList(reversedHead);
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // Iterative solution
  let prev = null;
  let curr = head;
  
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
  
  /* Recursive solution
  if (head === null || head.next === null) {
    return head;
  }
  
  let reversed = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  
  return reversed;
  */
}

// Helper function to create a linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  
  let head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
}

// ListNode definition
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const input = JSON.parse(line.replace(/'/g, '"') || '[]');
  const head = createLinkedList(input);
  const reversedHead = reverseList(head);
  const result = linkedListToArray(reversedHead);
  
  console.log(JSON.stringify(result));
  rl.close();
});`,
      PYTHON: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # Iterative solution
        prev = None
        curr = head
        
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        
        return prev
        
        # Recursive solution
        # if not head or not head.next:
        #     return head
        # 
        # reversed_head = self.reverseList(head.next)
        # head.next.next = head
        # head.next = None
        # 
        # return reversed_head

# Helper function to create linked list from array
def create_linked_list(arr):
    if not arr:
        return None
    
    head = ListNode(arr[0])
    current = head
    
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    
    return head

# Helper function to convert linked list to array
def linked_list_to_array(head):
    result = []
    current = head
    
    while current:
        result.append(current.val)
        current = current.next
    
    return result

# Main execution
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    if line:
        arr = json.loads(line)
    else:
        arr = []
    
    # Create linked list and solve
    head = create_linked_list(arr)
    sol = Solution()
    reversed_head = sol.reverseList(head)
    
    # Print result
    result = linked_list_to_array(reversed_head)
    print(result)`,
      JAVA: `import java.util.*;

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        // Iterative solution
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
        
        /* Recursive solution
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode reversed = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        
        return reversed;
        */
    }
    
    // Helper method to create a linked list from an array
    public static ListNode createLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        
        return head;
    }
    
    // Helper method to convert linked list to array
    public static List<Integer> linkedListToList(ListNode head) {
        List<Integer> result = new ArrayList<>();
        ListNode current = head;
        
        while (current != null) {
            result.add(current.val);
            current = current.next;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse input array
        int[] arr;
        if (input.equals("[]")) {
            arr = new int[0];
        } else {
            String[] strArr = input.substring(1, input.length() - 1).split(",");
            arr = new int[strArr.length];
            for (int i = 0; i < strArr.length; i++) {
                arr[i] = Integer.parseInt(strArr[i].trim());
            }
        }
        
        // Create linked list and solve
        ListNode head = createLinkedList(arr);
        Solution solution = new Solution();
        ListNode reversedHead = solution.reverseList(head);
        
        // Print result
        List<Integer> result = linkedListToList(reversedHead);
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
  },
  
  // 4. Binary Tree Level Order Traversal (Tree Problem)
  {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    category: "tree",
    description:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    difficulty: "MEDIUM",
    tags: ["Tree", "Binary Tree", "Breadth-First Search", "BFS"],
    constraints:
      "The number of nodes in the tree is in the range [0, 2000].\n-1000 <= Node.val <= 1000",
    hints:
      "Try using a queue data structure for a breadth-first search (BFS) approach.",
    editorial:
      "Level-order traversal requires us to process nodes level by level, which is perfectly suited for a breadth-first search approach. We use a queue to store nodes at each level and process them from left to right.",
    testCases: [
      {
        input: "[3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      
      },
      {
        input: "[1]",
        output: "[[1]]",
      },
      {
        input: "[]",
        output: "[]",
      },
    ],
    examples: {
      JAVASCRIPT: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "The level order traversal gives us three levels:\n- Level 1: [3]\n- Level 2: [9,20]\n- Level 3: [15,7]",
      },
      PYTHON: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "The level order traversal gives us three levels:\n- Level 1: [3]\n- Level 2: [9,20]\n- Level 3: [15,7]",
      },
      JAVA: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "The level order traversal gives us three levels:\n- Level 1: [3]\n- Level 2: [9,20]\n- Level 3: [15,7]",
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  // Write your code here
}

// Helper function to create a binary tree from array (level-order format)
function createBinaryTree(arr) {
  if (!arr || arr.length === 0) return null;
  
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    
    // Left child
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    
    // Right child
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  
  return root;
}

// TreeNode definition
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const input = JSON.parse(line.replace(/'/g, '"') || '[]');
  const root = createBinaryTree(input);
  const result = levelOrder(root);
  
  console.log(JSON.stringify(result));
  rl.close();
});`,
      PYTHON: `# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: TreeNode) -> list[list[int]]:
        # Write your code here
        pass

# Helper function to create binary tree from array (level-order format)
def create_binary_tree(arr):
    if not arr:
        return None
    
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    
    while queue and i < len(arr):
        node = queue.pop(0)
        
        # Left child
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        
        # Right child
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    
    return root

# Main execution
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    if line:
        # Handle "null" values properly
        line = line.replace('null', 'None')
        arr = eval(line)
    else:
        arr = []
    
    # Create binary tree and solve
    root = create_binary_tree(arr)
    sol = Solution()
    result = sol.levelOrder(root)
    
    # Print result
    print(json.dumps(result))`,
      JAVA: `import java.util.*;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your code here
        return new ArrayList<>();
    }
    
    // Helper method to create a binary tree from array (level-order format)
    public static TreeNode createBinaryTree(Integer[] arr) {
        if (arr == null || arr.length == 0) return null;
        
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            
            // Left child
            if (i < arr.length) {
                if (arr[i] != null) {
                    node.left = new TreeNode(arr[i]);
                    queue.offer(node.left);
                }
                i++;
            }
            
            // Right child
            if (i < arr.length) {
                if (arr[i] != null) {
                    node.right = new TreeNode(arr[i]);
                    queue.offer(node.right);
                }
                i++;
            }
        }
        
        return root;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse input array with null values
        Integer[] arr;
        if (input.equals("[]")) {
            arr = new Integer[0];
        } else {
            String[] strArr = input.substring(1, input.length() - 1).split(",");
            arr = new Integer[strArr.length];
            for (int i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].trim();
                if (strArr[i].equals("null")) {
                    arr[i] = null;
                } else {
                    arr[i] = Integer.parseInt(strArr[i]);
                }
            }
        }
        
        // Create binary tree and solve
        TreeNode root = createBinaryTree(arr);
        Solution solution = new Solution();
        List<List<Integer>> result = solution.levelOrder(root);
        
        // Print result
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

// Helper function to create a binary tree from array (level-order format)
function createBinaryTree(arr) {
  if (!arr || arr.length === 0) return null;
  
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    
    // Left child
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    
    // Right child
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  
  return root;
}

// TreeNode definition
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const input = JSON.parse(line.replace(/'/g, '"').replace(/null/g, 'null') || '[]');
  const root = createBinaryTree(input);
  const result = levelOrder(root);
  
  console.log(JSON.stringify(result));
  rl.close();
});`,
      PYTHON: `# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: TreeNode) -> list[list[int]]:
        if not root:
            return []
        
        result = []
        queue = [root]
        
        while queue:
            level_size = len(queue)
            current_level = []
            
            for _ in range(level_size):
                node = queue.pop(0)
                current_level.append(node.val)
                
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            result.append(current_level)
        
        return result

# Helper function to create binary tree from array (level-order format)
def create_binary_tree(arr):
    if not arr:
        return None
    
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    
    while queue and i < len(arr):
        node = queue.pop(0)
        
        # Left child
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        
        # Right child
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    
    return root

# Main execution
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    if line:
        # Handle "null" values properly
        line = line.replace('null', 'None')
        arr = eval(line)
    else:
        arr = []
    
    # Create binary tree and solve
    root = create_binary_tree(arr)
    sol = Solution()
    result = sol.levelOrder(root)
    
    # Print result
    print(json.dumps(result))`,
      JAVA: `import java.util.*;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.val);
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            
            result.add(currentLevel);
        }
        
        return result;
    }
    
    // Helper method to create a binary tree from array (level-order format)
    public static TreeNode createBinaryTree(Integer[] arr) {
        if (arr == null || arr.length == 0) return null;
        
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int i = 1;
        
        while (!queue.isEmpty() && i < arr.length) {
            TreeNode node = queue.poll();
            
            // Left child
            if (i < arr.length) {
                if (arr[i] != null) {
                    node.left = new TreeNode(arr[i]);
                    queue.offer(node.left);
                }
                i++;
            }
            
            // Right child
            if (i < arr.length) {
                if (arr[i] != null) {
                    node.right = new TreeNode(arr[i]);
                    queue.offer(node.right);
                }
                i++;
            }
        }
        
        return root;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse input array with null values
        Integer[] arr;
        if (input.equals("[]")) {
            arr = new Integer[0];
        } else {
            String[] strArr = input.substring(1, input.length() - 1).split(",");
            arr = new Integer[strArr.length];
            for (int i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].trim();
                if (strArr[i].equals("null")) {
                    arr[i] = null;
                } else {
                    arr[i] = Integer.parseInt(strArr[i]);
                }
            }
        }
        
        // Create binary tree and solve
        TreeNode root = createBinaryTree(arr);
        Solution solution = new Solution();
        List<List<Integer>> result = solution.levelOrder(root);
        
        // Print result
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
  },
  
  // 5. Climbing Stairs (Dynamic Programming Problem)
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    category: "dp",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    difficulty: "EASY",
    tags: ["Dynamic Programming", "Math", "Memoization"],
    constraints:
      "1 <= n <= 45",
    hints:
      "To reach the nth step, you can either come from the (n-1)th step or the (n-2)th step.",
    editorial:
      "This is a classic dynamic programming problem. The number of ways to reach the nth step is the sum of the number of ways to reach the (n-1)th step and the (n-2)th step, forming a Fibonacci-like sequence.",
    testCases: [
      {
        input: "2",
        output: "2",
      },
      {
        input: "3",
        output: "3",
      },
      {
        input: "4",
        output: "5",
      },
    ],
    examples: {
      JAVASCRIPT: {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top:\n1. 1 step + 1 step\n2. 2 steps",
      },
      PYTHON: {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
      },
      JAVA: {
        input: "n = 4",
        output: "5",
        explanation: "There are five ways to climb to the top:\n1. 1 step + 1 step + 1 step + 1 step\n2. 1 step + 1 step + 2 steps\n3. 1 step + 2 steps + 1 step\n4. 2 steps + 1 step + 1 step\n5. 2 steps + 2 steps",
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // Write your code here
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const n = parseInt(line.trim());
  const result = climbStairs(n);
  
  console.log(result);
  rl.close();
});`,
      PYTHON: `class Solution:
    def climbStairs(self, n: int) -> int:
        # Write your code here
        pass

# Input parsing
if __name__ == "__main__":
    import sys
    
    # Parse input
    n = int(sys.stdin.readline().strip())
    
    # Solve
    sol = Solution()
    result = sol.climbStairs(n)
    
    # Print result
    print(result)`,
      JAVA: `import java.util.Scanner;

class Solution {
    public int climbStairs(int n) {
        // Write your code here
        return 0;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        
        Solution solution = new Solution();
        int result = solution.climbStairs(n);
        
        System.out.println(result);
        scanner.close();
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // Base cases
  if (n <= 2) {
    return n;
  }
  
  // Dynamic programming approach
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
  
  /* Alternative approach with O(1) space
  let a = 1; // ways to climb 1 step
  let b = 2; // ways to climb 2 steps
  
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return n === 1 ? a : b;
  */
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const n = parseInt(line.trim());
  const result = climbStairs(n);
  
  console.log(result);
  rl.close();
});`,
      PYTHON: `class Solution:
    def climbStairs(self, n: int) -> int:
        # Base cases
        if n <= 2:
            return n
        
        # Dynamic programming approach
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        
        return dp[n]
        
        # Alternative approach with O(1) space
        # a, b = 1, 2
        # 
        # for i in range(3, n + 1):
        #     a, b = b, a + b
        # 
        # return a if n == 1 else b

# Input parsing
if __name__ == "__main__":
    import sys
    
    # Parse input
    n = int(sys.stdin.readline().strip())
    
    # Solve
    sol = Solution()
    result = sol.climbStairs(n)
    
    # Print result
    print(result)`,
      JAVA: `import java.util.Scanner;

class Solution {
    public int climbStairs(int n) {
        // Base cases
        if (n <= 2) {
            return n;
        }
        
        // Dynamic programming approach
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
        
        /* Alternative approach with O(1) space
        int a = 1; // ways to climb 1 step
        int b = 2; // ways to climb 2 steps
        
        for (int i = 3; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        
        return n == 1 ? a : b;
        */
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        
        Solution solution = new Solution();
        int result = solution.climbStairs(n);
        
        System.out.println(result);
        scanner.close();
    }
}`,
    },
  },
  
  // 6. Number of Islands (Graph Problem)
  {
    id: "number-of-islands",
    title: "Number of Islands",
    category: "tree",
    description:
      "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    difficulty: "MEDIUM",
    tags: ["Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
    constraints:
      "m == grid.length\nn == grid[i].length\n1 <= m, n <= 300\ngrid[i][j] is '0' or '1'.",
    hints:
      "Think about using depth-first search (DFS) or breadth-first search (BFS) to explore and mark visited islands.",
    editorial:
      "We can use a DFS or BFS approach to search for islands. When we find a land cell ('1'), we increment our island count and use DFS/BFS to mark all connected land cells as visited by changing them to '0' to avoid counting them again.",
    testCases: [
      {
        input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
      {
        input: '[["0","0","0"],["0","0","0"],["0","0","0"]]',
        output: "0",
      },
    ],
    examples: {
      JAVASCRIPT: {
        input: 'grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]',
        output: "1",
        explanation: "This grid has 1 island (all connected '1's in the first three rows).",
      },
      PYTHON: {
        input: 'grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]',
        output: "3",
        explanation: "This grid has 3 islands.",
      },
      JAVA: {
        input: 'grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]',
        output: "3",
        explanation: "This grid has 3 islands.",
      },
    },
    codeSnippets: {
      JAVASCRIPT: `/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  // Write your code here
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const grid = JSON.parse(line.replace(/'/g, '"'));
  const result = numIslands(grid);
  
  console.log(result);
  rl.close();
});`,
      PYTHON: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        # Write your code here
        pass

# Input parsing
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    grid = json.loads(line)
    
    # Solve
    sol = Solution()
    result = sol.numIslands(grid)
    
    # Print result
    print(result)`,
      JAVA: `import java.util.*;

class Solution {
    public int numIslands(char[][] grid) {
        // Write your code here
        return 0;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse the input to create a grid
        input = input.substring(1, input.length() - 1); // Remove outer brackets
        String[] rows = input.split("\\],\\[");
        
        // Clean up the row strings
        rows[0] = rows[0].substring(1); // Remove leading [
        rows[rows.length - 1] = rows[rows.length - 1].substring(0, rows[rows.length - 1].length() - 1); // Remove trailing ]
        
        // Create the grid
        char[][] grid = new char[rows.length][];
        for (int i = 0; i < rows.length; i++) {
            String[] cells = rows[i].split(",");
            grid[i] = new char[cells.length];
            for (int j = 0; j < cells.length; j++) {
                // Remove quotes from the string
                grid[i][j] = cells[j].charAt(1);
            }
        }
        
        // Solve and output
        Solution solution = new Solution();
        int result = solution.numIslands(grid);
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
    referenceSolutions: {
      JAVASCRIPT: `/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  
  function dfs(r, c) {
    // Check boundaries and if it's a land cell
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return;
    }
    
    // Mark as visited by changing to '0'
    grid[r][c] = '0';
    
    // Check all four directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  
  return count;
}

// Parse input and execute
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const grid = JSON.parse(line.replace(/'/g, '"'));
  const result = numIslands(grid);
  
  console.log(result);
  rl.close();
});`,
      PYTHON: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        if not grid:
            return 0
        
        rows, cols = len(grid),
        len(grid[0])
        count = 0
        
        def dfs(r, c):
            # Check boundaries and if it's a land cell
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
                return
            
            # Mark as visited by changing to '0'
            grid[r][c] = '0'
            
            # Check all four directions
            dfs(r + 1, c)  # down
            dfs(r - 1, c)  # up
            dfs(r, c + 1)  # right
            dfs(r, c - 1)  # left
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    count += 1
                    dfs(r, c)
        
        return count

# Input parsing
if __name__ == "__main__":
    import sys
    import json
    
    # Parse input
    line = sys.stdin.readline().strip()
    grid = json.loads(line)
    
    # Solve
    sol = Solution()
    result = sol.numIslands(grid)
    
    # Print result
    print(result)`,
      JAVA: `import java.util.*;

class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }
        
        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;
        
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c);
                }
            }
        }
        
        return count;
    }
    
    private void dfs(char[][] grid, int r, int c) {
        int rows = grid.length;
        int cols = grid[0].length;
        
        // Check boundaries and if it's a land cell
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0') {
            return;
        }
        
        // Mark as visited by changing to '0'
        grid[r][c] = '0';
        
        // Check all four directions
        dfs(grid, r + 1, c); // down
        dfs(grid, r - 1, c); // up
        dfs(grid, r, c + 1); // right
        dfs(grid, r, c - 1); // left
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine().trim();
        
        // Parse the input to create a grid
        input = input.substring(1, input.length() - 1); // Remove outer brackets
        String[] rows = input.split("\\],\\[");
        
        // Clean up the row strings
        rows[0] = rows[0].substring(1); // Remove leading [
        rows[rows.length - 1] = rows[rows.length - 1].substring(0, rows[rows.length - 1].length() - 1); // Remove trailing ]
        
        // Create the grid
        char[][] grid = new char[rows.length][];
        for (int i = 0; i < rows.length; i++) {
            String[] cells = rows[i].split(",");
            grid[i] = new char[cells.length];
            for (int j = 0; j < cells.length; j++) {
                // Remove quotes from the string
                grid[i][j] = cells[j].charAt(1);
            }
        }
        
        // Solve and output
        Solution solution = new Solution();
        int result = solution.numIslands(grid);
        System.out.println(result);
        
        scanner.close();
    }
}`,
    },
  },
];

