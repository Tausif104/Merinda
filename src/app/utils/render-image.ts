import { environment } from "src/environments/environment";
import { PostCbEntity, UploadFileEntity } from "src/generated/graphql";

export const renderImage = (data: UploadFileEntity[]) => {
    if (!data.length) {
        return '';
    }

    const image = data[0];    
    const imageUrl = image?.attributes?.url

    if (!imageUrl) {
        return '';
    }

    return `${environment.baseUrl}${imageUrl}`
}