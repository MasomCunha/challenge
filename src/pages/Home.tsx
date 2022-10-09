import React, { useEffect } from "react";
import PostCards from "../components/postcards";
import PostInterface from "../interface/postInterface";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getPosts } from "../redux/actions/postAction";


export default function Home() {

    const dispatch = useAppDispatch();
    const userId : number | null = useAppSelector((state) => state.auth.userId);
    const postList : PostInterface[]  = useAppSelector((state) => state.post.postList);

    const fetchPosts = (userID : number) => {
        dispatch(getPosts(userID))
    }

    useEffect(() => {
        if (userId !== null) {
            fetchPosts(userId)
        }
    }, [userId])

    return (
        <>
            {postList.length > 0 &&
                <div>
                    <h1>Posts List</h1>
                    {postList.map((post, index) => <PostCards key={index} post={post} />)}
                </div>
            }
        </>
    )
}