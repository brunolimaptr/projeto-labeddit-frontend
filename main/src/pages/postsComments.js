import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { vaiParaLogin } from "../coordinator/coordinator";


export function PostComment(props){

    const token = window.localStorage.getItem("tokenLogin")

    const params = useParams()

     const [postsComments, setPostsComments] = useState([])
     const [content, setContent] = useState("")


    const onChangeComment = (e) => {
        setContent(e.target.value);
       }

       const bodyCreateComment = {
        "comment": content,
    }

    const createComment = async () => {
        try {
            const response = await axios.post(`https://labeddit-0qmm.onrender.com/comments/${params.id}`, bodyCreateComment, {
                headers: {
                    "Authorization": token
                }
            })

           window.location.reload()

        } catch (error) {
            console.log(error);
        }
    }

    const getPostComment = async () => {
        try {
            const response = await axios.get(`https://labeddit-0qmm.onrender.com/posts/comment/${params.id}`,{
                headers: {
                    "Authorization": token
                }
            })

            console.log(response.data.Post);
            setPostsComments(response.data.Post)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!token){
            vaiParaLogin(Navigate)
        }
    }, [])

    useEffect(() => {
        getPostComment()
    }, [])


    return (
        <>
        
        {postsComments && postsComments.map((post)=>{
                return <div key={post.id}>
                    <p>{post.content}</p>
                </div>
            })}
                    
    
            <input onChange={onChangeComment} type="text" value={content} placeholder={"Adicionar comentário"}></input>
            <button onClick={createComment}><em>Responder</em></button>
    
            {postsComments && postsComments.map((post)=>{
                return <div key={post.id}>
                    {post.comentsPost.map((comment)=>{
                        return <div key={comment.id}>
                            <p>{comment.comment}</p>
                        </div>
                    })}
                
                
    
                </div>
            })}
           
        </>
    )
    
}