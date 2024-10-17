import { IGithub } from "./IGithub";

export interface IProject {
    thumbnail?: string
    title?: string;
    description?: string;
    stack?: string[];
    code?: IGithub[]
    demo?: string;
}