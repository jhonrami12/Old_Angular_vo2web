export type typeItemProject = 'folder' | 'item';

export class ProjectItem {
  id: number = 0;
  typeItem: typeItemProject | undefined = undefined;
  imgCover: string = '';
  nameProjectItem: string = '';
  path: string = '';
  originalLanguaje: string = '';
  targetLanguaje: string = '';
  media: string = '';
  features: string[] = [];

  constructor()
  {}
}
