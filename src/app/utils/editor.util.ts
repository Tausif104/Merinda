import { Post } from "src/generated/graphql";

export const getImageFromPostContent = (post: Post) => {
    const content = JSON.parse(post.content);
    console.log({content});
    if (!content.blocks) {
        return '';
    }

    const block = content.blocks.find((item: any) => {
        if (item.type === 'Image' ) {
            return item;
        }
    });

    if (!block) {
        return ''
    }

    return block.data.file.url;
};

export const getTextFromPostContent = (post: Post) => {
    const content = JSON.parse(post.content);
    console.log({content});
    if (!content.blocks) {
        return '';
    }

    const block = content.blocks.find((item: any) => {
        if (item.type === 'paragraph' ) {
            console.log(item);
            
            return item;
        }
    });

    if (!block) {
        return ''
    }

    return block.data.text;
};