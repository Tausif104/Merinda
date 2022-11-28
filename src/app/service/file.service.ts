import { Injectable } from "@angular/core";
import { FileGQL, FindFileInput } from "src/generated/graphql";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    constructor(private fileGQL: FileGQL) {}

    async upload(file: File) {
        var data = new FormData()
        data.append('file', file)
        data.append('user', 'hubot')

        return await fetch('/api/files', {
            method: 'POST',
            body: data,

        })
    }

    find(findFileInput: FindFileInput) {
        return this.fileGQL.fetch({
            findFileInput
        });
    }
}