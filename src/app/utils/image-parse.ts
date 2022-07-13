import { environment } from "src/environments/environment";
import { PostCbEntity } from "src/generated/graphql";

export const renderImage = (post: PostCbEntity) => {
    const data = post.attributes?.fields?.Image?.data;
    if (!data) {
        return '';
    }

    const image = data[0];    
    const imageUrl = image?.attributes?.url

    if (!imageUrl) {
        return '';
    }

    return `${environment.baseUrl}${imageUrl}`
}