import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { V2vIProject } from '../interface/project.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { V2vIListProject } from '../interface/list-project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private URL: string;

  constructor(private apiService: ApiService) {
    this.URL = environment.azureAccount.projects.url;
  }

  async getProjectsDefinition(definition: V2vIListProject) {
    const projects = await this.getProjects(definition.userId);
    definition = {
      ...definition,
      projects,
    };

    return definition;
  }

  private async getProjects(userId: string) {
    const url = `${this.URL}?userId=${userId}`;
    return await this.apiService.getAsPromise<V2vIProject[]>(url);
  }
}
