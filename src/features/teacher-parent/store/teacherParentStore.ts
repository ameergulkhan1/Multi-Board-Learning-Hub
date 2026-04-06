import { create } from 'zustand';
import { TeacherParentData } from '../types';

const useTeacherParentStore = create((set) => ({
  data: null,
  setData: (data: TeacherParentData) => set({ data }),
}));

export default useTeacherParentStore;
