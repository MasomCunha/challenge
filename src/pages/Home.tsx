import React, { useEffect } from "react";
import PostCards from "../components/postcards";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getPosts } from "../redux/actions/postAction";


export default function Home() {

    const dispatch = useAppDispatch();
    const postList = useAppSelector((state) => state.post.postList);

    useEffect(() => {
        dispatch(getPosts(10))
    }, [])

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