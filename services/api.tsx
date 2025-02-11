import axios from "axios";

const url =''

const getPost = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response
}

const createPost = async(post:post)=>{
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    return response
}

const updatePost = async(post:post)=>{
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts',post);
    return response
}

const deletePost = async(post:post)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response
}