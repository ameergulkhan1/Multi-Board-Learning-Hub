import { create } from 'zustand';
import { TextbookData } from '../types';

const useTextbookStore = create((set) => ({
  data: null,
  setData: (data: TextbookData) => set({ data }),
}));

export default useTextbookStore;
