import { create } from 'zustand';
import { DashboardData } from '../types';

const useDashboardStore = create((set) => ({
  data: null,
  setData: (data: DashboardData) => set({ data }),
}));

export default useDashboardStore;
