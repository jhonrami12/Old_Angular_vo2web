import { V2vIProject } from './project.interface';

export interface V2vAction {
  id?: string;
  icon?: string;
  label?: string;
  disabled?: (project: V2vIProject) => boolean;
  action?: (project: V2vIProject) => void;
}
