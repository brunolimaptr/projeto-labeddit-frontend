import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { vaiParaLogin, vaiParaPostComments } from "../coordinator/coordinator";


export function CreatePost(props) {

    const token = window.localStorage.getItem("tokenLogin")

    const [content, setContent] = useState([])

    const navigate = useNavigate()
    
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const bodyCreatePost = {
        "content": content,
    }


    const createPost = async () => {
        try {
            const response = await axios.post(`https://labeddit-0qmm.onrender.com/posts`, bodyCreatePost, {
                headers: {
                    Authorization: token
                }
            })

            console.log(response);
            props.setPosts(response)
            window.location.reload()

        } catch (error) {
            console.log(error);
        }
    }


    const getPost = async () => {
        try {
            const response = await axios.get(`https://labeddit-0qmm.onrender.com/posts`, {
                headers: {
                    Authorization: token
                }
            })

            console.log(response.data.Post);
            props.setPosts(response.data.Post)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!token){
            vaiParaLogin(navigate)
        }
    }, [])

    useEffect(() => {
        getPost()
    }, [])


console.log(props.posts);
return (
    <>

        <p>Content</p><input onChange={onChangeContent} type="text" value={content}></input>
        <button onClick={createPost}><em>Postar</em></button>

        {props.posts[0] && props.posts.map((post)=>{
            return <div key={post.id}>
            <p>{post.creator.name}</p>
            <p>{post.content}</p>
            <button onClick={()=>vaiParaPostComments(navigate, post.id)}><em>Comentar</em></button>

            </div>
        })}
       
    </>
)
}




