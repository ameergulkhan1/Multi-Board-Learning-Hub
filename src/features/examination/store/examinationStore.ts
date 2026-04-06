import { create } from 'zustand';
import { ExaminationData } from '../types';

const useExaminationStore = create((set) => ({
  data: null,
  setData: (data: ExaminationData) => set({ data }),
}));

export default useExaminationStore;
