import { V2vIAction } from '../interface/action.interface';

enum V2vEnumAction {
  edit = 'pi pi-file-edit',
  preview = 'pi pi-eye',
  download = 'pi pi-download',
  rename = 'pi pi-pencil',
  archive = 'pi pi-briefcase',
  copy = 'pi pi-copy',
  delete = 'pi pi-trash',
  properties = 'pi pi-cog',
  list = 'pi pi-list',
  folder = 'pi pi-folder',
  card = 'pi pi-credit-card',
}

type V2vButtonAction =
  | 'edit'
  | 'preview'
  | 'download'
  | 'rename'
  | 'archive'
  | 'copy'
  | 'delete'
  | 'properties'
  | 'list'
  | 'folder'
  | 'card';

const getButton = (type: V2vButtonAction): V2vIAction => {
  return {
    id: `bt-${type}-id`,
    icon: V2vEnumAction[type],
    label: `project.${type}`,
    disabled: false,
  };
};

export default getButton;
