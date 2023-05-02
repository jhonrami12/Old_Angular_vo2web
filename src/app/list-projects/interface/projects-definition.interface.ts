import { V2vIAction } from '../../shared/interface/action.interface';
import { V2vIProject } from './project.interface';

export interface V2vIProjectDefinition {
  id?: string;
  userId?: string;
  filters?: any[];
  projects?: V2vIProject[];
  actions?: V2vIAction[];
}
