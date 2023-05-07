import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { V2vIProject, V2vITag } from '../interface/project.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { V2vIProjectDefinition } from '../interface/projects-definition.interface';
import getTag from 'src/app/shared/functions/get-tags';

@Injectable({
  providedIn: 'root',
})
export class V2vProjectService {
  private URL: string;

  constructor(private apiService: ApiService) {
    this.URL = environment.azureAccount.projects.url;
  }

  async getProjectsDefinition(definition: V2vIProjectDefinition) {
    let projects = await this.getProjects(definition.userId);
    projects = projects.map((project) => {
      const tags = this.getTags(project);
      return {
        ...project,
        tags,
      };
    });

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

  private getTags(project: V2vIProject): V2vITag[] {
    const { hasDubbling, hasTranscribe, mediaType, hasTranslation } = project;
    const tags = [];
    if (hasDubbling) tags.push(getTag('Dubbling'));
    if (hasTranscribe) tags.push(getTag('Transcribe'));
    if (hasTranslation) tags.push(getTag('Translation'));
    tags.push(getTag(mediaType === 'Audio' ? 'Audio' : 'Video'));
    return tags;
  }
}
