import { reactive } from 'vue';

export const store = reactive ({

    // mocking api 
    apiUri: 'http://localhost:3000/',

    // function to get the dynamic path 
    getPath(item) {

        let path = '../assets/img/';

        const format = item.imgName.toLowerCase();
        path = (format.includes('.svg')) ? '../assets/svg/' : path;
       
        return new URL (path + item.imgName, import.meta.url);
    
    },

    // functions for sliders and shange on click
    goToNext(array,activeIndex) {
        activeIndex ++;
        if (activeIndex == array.length) activeIndex = 0;
        return activeIndex;
    },
    goToPrev(array,activeIndex) {
        activeIndex --;
        if (activeIndex < 0) activeIndex = array.length - 1;
        return activeIndex;
    },
    goToClicked(activeIndex,index) {
        activeIndex = index;
        return activeIndex;
    },
});