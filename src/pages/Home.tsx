import React, { useEffect } from "react";
import PostCards from "../components/postcards";
import PostForm from "../components/postFoms";
import PostInterface from "../interface/postInterface";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getPosts, addPosts } from "../redux/actions/postAction";
import "../style/home.css"


export default function Home() {

    const dispatch = useAppDispatch();
    const userId: number | null = useAppSelector((state) => state.auth.userId);
    const postList: PostInterface[] = useAppSelector((state) => state.post.postList);

    const fetchPosts = (userID: number) => {
        dispatch(getPosts(userID))
    }

    useEffect(() => {
        if (userId !== null) {
            fetchPosts(userId)
        }
    }, [userId])

    const handleSubmitForm = (title: string, body: string) => {

        let postObj = {
            id: postList[postList.length - 1].id + 1,
            title: title,
            body: body,
            userId: userId
        }

        dispatch(addPosts(postObj))



    }

    return (
        <div className="homePage">
            <div className="postFormContainer">
                <h1>Insert new post</h1>
                <div className="postFormContainerInputs">
                <PostForm handleSubmitForm={handleSubmitForm} />
                </div>
            </div>
            {postList.length > 0 &&
                <div>
                    <h1>Posts List</h1>
                    {postList.map((post, index) => <PostCards key={index} post={post} />)}
                </div>
            }
        </div>
    )
}