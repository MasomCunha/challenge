import React, { useState } from "react";
import PostFormsInterface from "../../interface/postFormsInterface";
import Input from "../input";
import Button from "../button";
import "../../style/postForm.css";

export default function PostForm({ handleSubmitForm }: PostFormsInterface) {

    const [postTitle, setPostTitle] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");

    const handleChangePostTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value)
    }


    const handleChangePostBody = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostBody(e.target.value)
    }

    const handleClick = () => {
        handleSubmitForm(postTitle, postBody)

        /**Next step: depending if post return 200 reset fields*/
        setPostTitle("")
        setPostBody("")
    }

    return (
        <div className="postFormWrapper">
            <div className="inputTitle">
                <Input className="inputTitleForm"
                    placeholder="Insert title"
                    hasError={false}
                    value={postTitle}
                    errorMessage={""}
                    onChange={handleChangePostTitle}
                />
            </div>
            <div className="inputBody">
                <Input className="inpuBodyForm"
                    placeholder="Insert Body"
                    hasError={false}
                    value={postBody}
                    errorMessage={""}
                    onChange={handleChangePostBody}

                />
            </div>
            <Button className="buttonSubmitLogin" title="Post" handleClick={() => handleClick()} />
        </div>
    )
}