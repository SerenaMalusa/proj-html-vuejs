import { reactive } from 'vue';

export const store = reactive ({
    // function to get the dynamic path 
    getPath(item) {

        let path = '../assets/img/';

        const format = item.imgName.toLowerCase();
        path = (format.includes('.svg')) ? '../assets/svg/' : path;
       
        return new URL (path + item.imgName, import.meta.url);
    
    }
});