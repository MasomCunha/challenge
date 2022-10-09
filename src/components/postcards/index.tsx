import React from "react";
import PostCardInterface from "../../interface/postCardinterface";


export default function Input({ post } : PostCardInterface){
    return(
       <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
       </div>
    )
}