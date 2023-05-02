import { V2vIProject } from '../../list-projects/interface/project.interface';

export interface V2vIAction {
  id?: string;
  icon?: string;
  label?: string;
  disabled?: ((project: V2vIProject) => boolean) | boolean;
  action?: (project: V2vIProject) => void;
}
