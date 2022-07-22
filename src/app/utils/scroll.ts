import { environment } from "src/environments/environment";

export const whenPageScrolled = (document: Document) => {
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
    const totalScroll = document.documentElement.scrollHeight;

    const progress = verticalOffset + window.innerHeight;
    const end = totalScroll - (totalScroll * 0.3);
    const completed = progress >= end;

    if (environment.debug) {
        console.log(`Scroll progress: ${progress} / ${end} - > ${completed}`);
        
    }

    return completed;
}