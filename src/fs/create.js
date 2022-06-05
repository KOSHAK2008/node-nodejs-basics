import { create } from 'fs';
// import { unlink } from 'fs'

export const create = async (args) => {
    // Write your code here 
    // try {
    //     await unlink('./files/fresh.txt');
    //     console.log('I am fresh and young');
    // } catch (error) {
    //     console.error('FS operation failed', error.message);
    // }

    args('./files/fresh.txt', 'w', "I am fresh and young", (err) => {
        if (err) throw err
        console.log('FS operation failed');
    });
    //     unlink('./files/fresh.txt', (err) => {
    //         if (err) throw err;
    //         console.log('FS operation failed');
    //     });
};
create();