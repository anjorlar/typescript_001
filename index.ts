import axios from 'axios';

// async function todos(url) {
//     try {
//         const url = 'https://jsonplaceholder.typicode.com/todos/9'
//         const response = await axios.get(url)
//         console.log("todo gotten successfully", response, response.data)
//     } catch (error) {
//         console.log('error fetching todo', error)
//     }
// }

const url = 'https://jsonplaceholder.typicode.com/todos/9'
axios.get(url).then(response => {
    console.log((response.data))
    console.log(">>>>>>>>", response)
})
