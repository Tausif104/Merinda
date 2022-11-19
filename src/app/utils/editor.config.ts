import Header from '@editorjs/header';
import { FileService } from '../service/file.service';
const List = require('@editorjs/list');
const Embed = require('@editorjs/embed');
const Marker = require('@editorjs/marker');
const Image = require('@editorjs/image');
const LinkAutocomplete = require('@editorjs/link-autocomplete');

export const editorjsConfig = {

  holder: 'editorjs',
  tools: {
    Image :{
      class : (Image as any),
      shortcut : 'CMD+SHIFT+M',
      config: {
        uploader: {
          uploadByFile(file: any) {
            const fileService = new FileService();
            return fileService.upload(file).then(async (response) => {
              const data = await response.json();

              return {
                success: 1,
                file: {
                  url: `http://localhost:3000/static/${data[0]}`
                }
              };
            });
          },
        }
      }
    },
    header: {
      class: (Header as any),
      inlineToolbar: [
        'link', 'bold', 'italic'
      ],
      config: {
        levels: [2, 3, 4]
      }
    },
    list: {
      class: (List as any),
      inlineToolbar: [
        'link','bold'
      ]
    },
    link: {
      class: LinkAutocomplete,
      config: {
        endpoint: 'http://localhost:4200/api/post-links',
        queryParam: 'search'
      }
    }
  },
}
