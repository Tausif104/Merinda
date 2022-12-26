import { Post } from "src/generated/graphql";

export const getFirstImageFromPostContent = (post: Post) => {
    const content = JSON.parse(post.raw);

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

export const getFirstTextFromPostContent = (post: Post) => {
    const content = JSON.parse(post.raw);

    if (!content.blocks) {
        return '';
    }

    const block = content.blocks.find((item: any) => {
        if (item.type === 'paragraph' ) {
            return item;
        }
    });

    if (!block) {
        return ''
    }

    return block.data.text;
};