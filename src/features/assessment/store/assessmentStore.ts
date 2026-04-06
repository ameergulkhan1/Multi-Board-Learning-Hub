import { create } from 'zustand';
import { AssessmentData } from '../types';

const useAssessmentStore = create((set) => ({
  data: null,
  setData: (data: AssessmentData) => set({ data }),
}));

export default useAssessmentStore;
