import { V2vIAction } from './action.interface';
import { V2vIProject } from './project.interface';

export interface V2vIListProject {
  id?: string;
  userId?: string;
  filters?: any[];
  projects?: V2vIProject[];
  actions?: V2vIAction[];
}
