import { Injectable } from "@angular/core";

@Injectable()
export class FileService {
    async upload(file: File) {
        var data = new FormData()
        data.append('file', file)
        data.append('user', 'hubot')

        return await fetch('/api/files', {
            method: 'POST',
            body: data,

        })
    }    
}