import { IGithub } from "./IGithub";
import { IProjectDetail } from "./IProjectDetail";

export interface IProject {
    thumbnail?: string
    title?: string;
    description?: string;
    overview?: string[];
    stack?: string[];
    code?: IGithub[]
    demo?: string;
    video?: string;
    details?: IProjectDetail[]
}