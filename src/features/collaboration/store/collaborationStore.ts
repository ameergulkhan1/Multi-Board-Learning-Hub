import { create } from 'zustand';
import { CollaborationData } from '../types';

const useCollaborationStore = create((set) => ({
  data: null,
  setData: (data: CollaborationData) => set({ data }),
}));

export default useCollaborationStore;
