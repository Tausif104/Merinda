import { PostCbEntity } from "src/generated/graphql";

export const buildLink = (post: PostCbEntity) => {
    return `/post/${post.attributes?.Slug}`;
}