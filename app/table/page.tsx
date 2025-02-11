'use client'
import PostPage from '@/components/Table/PostTable'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { AxiosResponse } from 'axios';

const page = () => {
    const {data} = useQuery({ queryKey: ['todos'], queryFn: getPost })
    console.log(data)
  return (
    <div>
    <PostPage/>
    </div>
  )
}

export const getPost = async(): Promise<AxiosResponse<post[]>> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response;
}

export default page