import { create } from 'zustand';
import { AssistantData } from '../types';

const useAssistantStore = create((set) => ({
  data: null,
  setData: (data: AssistantData) => set({ data }),
}));

export default useAssistantStore;
