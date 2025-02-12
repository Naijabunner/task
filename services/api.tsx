import axios, { AxiosResponse } from "axios";

const url ='https://jsonplaceholder.typicode.com/posts/'

export const getPost = async(): Promise<AxiosResponse<post[]>>=>{
    const response = await axios.get(`${url}`);
    return response
}

export const createPost = async(post:Omit<post, 'id' | 'userId'>)=>{
    const response = await axios.post(`${url}`);
    return response
}

export const updatePost = async(post:post)=>{
    const response = await axios.put(`${url}${post.id}`,post);
    return response
}

export const deletePost = async(post:post)=>{
    const response = await axios.delete(`${url}${post.id}`);
    return response
}