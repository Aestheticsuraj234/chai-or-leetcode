
import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useProblemStore = create((set, get) => ({
  isProblemLoading: false,
  isProblemsLoading: false,
  problems: [],
  problem: null,
  solvedProblems: [],

  getAllProblems: async () => {
    try {
      set({ isProblemsLoading: true });
      const res = await axiosInstance.get("/problems/get-all-problems");

      set({ problems: res.data.problems });

     
    } catch (error) {
      console.log("Error getting all problems", error);
      toast.error("Error getting all problems");
    } finally {
      set({ isProblemsLoading: false });
    }
  },

  getProblemById: async (id) => {
    try {
      set({ isProblemLoading: true });
      const res = await axiosInstance.get(`/problems/get-problem/${id}`);

      set({ problem: res.data.problem });

      toast.success(res.data.message);
    } catch (error) {
      console.log("Error getting problem", error);
      toast.error("Error getting problem");
    } finally {
      set({ isProblemLoading: false });
    }
  },

  getSolvedProblemByUser: async () => {
    try {
      const res = await axiosInstance.get("/problems/get-solved-problem");

      set({ solvedProblems: res.data.problems });
    } catch (error) { 
      console.log("Error getting solved problems", error);
      toast.error("Error getting solved problems");
    }
  },

}));
