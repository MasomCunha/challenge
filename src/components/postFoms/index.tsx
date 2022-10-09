import React, { useState } from "react";
import PostFormsInterface from "../../interface/postFormsInterface";
import Input from "../input";
import Button from "../button";

export default function PostForm({ handleSubmitForm } : PostFormsInterface) {

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
    }

    return (
        <div>
            <Input className="inputTitleForm"
                placeholder="Insert title"
                hasError={false}
                value={postTitle}
                errorMessage={""}
                onChange={handleChangePostTitle}
            />
            <Input className="inpuBodyForm"
                placeholder="Insert Body"
                hasError={false}
                value={postBody}
                errorMessage={""}
                onChange={handleChangePostBody}

            />
            <Button className="buttonSubmitLogin" title="Submit" handleClick={() => handleClick()} />
        </div>
    )
}