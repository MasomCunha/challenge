import React from "react";
import PostCardInterface from "../../interface/postCardinterface";
import "../../style/postCard.css";


export default function PostCards({ post } : PostCardInterface){
    return(
       <div className="postCardContainer">
            <div className="postTitle">{post.id} - {post.title}</div>
            <div className="postBody">{post.body}</div>
       </div>
    )
}