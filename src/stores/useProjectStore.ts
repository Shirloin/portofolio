import { create } from "zustand";
import { IProject } from "../interfaces/IProject";

interface State {
    project: IProject | null
    setProject: (project: IProject) => void
}

export const useProjectStore = create<State>((set) => ({
    project: null,
    setProject: (project: IProject) => set({ project }),
}));