import fetch from "node-fetch";
import axios from "axios";
import {
    resolve
} from "path/posix";

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve({
                text: "Selam gelen data 1 evet"
            });
        } else {
            reject("Bir Problem Oluştu")
        }

    });
};
getComments(1)
    .then((data) => console.log(data))
    .catch(e => console.log(e));
/*
 * **************************************************************************
 * ********************************************En temiz kullanımlardan birisi 
 * **************************************************************************
 */
const getUser = () => {
    return new Promise(async (resolve, reject) => {
        const {
            data
        } = await axios("https://jsonplaceholder.typicode.com/users/1");
        resolve(data);
    });
};
const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {
            data
        } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
    });
};


(async () => {
    try {
        const user = await getUser();
        const post = await getPost(1);
        console.log(user);
        console.log(post);
    } catch (e) {
        console.log(e);
    }
})();