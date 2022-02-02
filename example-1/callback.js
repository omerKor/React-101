import fetch from "node-fetch";
import axios from "axios";

const sayHi = () => {
    console.log("Merhaba");
}
sayHi();
/*
 * ***********************
 */
const sayHi2 = (cb) => {
    cb();
}
sayHi2(() => {
    console.log("Hello");
});
/*
 * ***********************FETCH*********************sıraya sokma
 */
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users yüklendi! ", users);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(posts => {
                console.log("Posts yüklendi! ", posts);
            });
    });
/*
 * **********************************************************************************
 * ***********************ASYNC*********************sıraya sokma (daha düzenli yazım)
 * **********************************************************************************

 */
async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const posts = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    console.log("Users => ", users);
    console.log("Posts => ", posts);
}
getData();
/*
 * **************************************************************************************************
 * ***********************ASYNC NoNAME Function*********************sıraya sokma (daha düzenli yazım)
 * **************************************************************************************************
 */
(async () => {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const posts = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    console.log("Users => ", users);
    console.log("Posts => ", posts);
})();
/*
 * *************************************************************************
 * ******AXIOS KULLANIMI (FETCH GİBİDİR JSON DONUSUMUNU KENDISI YAPAR)******
 * *************************************************************************
 */

async function getData2() {
    const users = await (
        await axios("https://jsonplaceholder.typicode.com/users")
    );

    const posts = await (
        await axios("https://jsonplaceholder.typicode.com/posts")
    );

    console.log("Users => ", users);
    console.log("Posts => ", posts);
}
getData2();
/*
 * **************************************************************************
 * **************************************************************************
 * **************************************************************************
 */
(async () => {
    const users = await (
        await axios("https://jsonplaceholder.typicode.com/users")
    );

    const posts = await (
        await axios("https://jsonplaceholder.typicode.com/posts")
    );

    console.log("Users => ", users);
    console.log("Posts => ", posts);
})();