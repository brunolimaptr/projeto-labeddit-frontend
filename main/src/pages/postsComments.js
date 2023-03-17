import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { vaiParaLogin } from "../coordinator/coordinator";
import { CardComments, MainPostsComments } from "./postsComments.styled";
import { Botoes, CardPost } from "./posts.styled";
import barra from "../assets/img/barra.png"
import barraInferior from "../assets/img/barraInferior.png"
import like from "../assets/img/like.png"
import dislike from "../assets/img/dislike.png"
import comment from "../assets/img/comments.png"
import logoPequena from "../assets/img/logoPequeno.png"



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

    const likeOrDislikePost = async (id, like) => {
        try {

            const body = {
                "like": like,
            }
            const response = await axios.put(`https://labeddit-0qmm.onrender.com/posts/${id}/like`, body, {
                headers: {
                    Authorization: token
                }
            })
            getPostComment()
            

        } catch (error) {
            console.log(error);
        }
    }


    const likeOrDislikeComment = async (id, like) => {
        try {

            const body = {
                "like": like,
            }
            const response = await axios.put(`https://labeddit-0qmm.onrender.com/comments/${id}/like`, body, {
                headers: {
                    Authorization: token
                }
            })
            getPostComment()
            

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
        <MainPostsComments>

        <p className="header"><img className="LogoPequena" src={logoPequena}/></p>

        <CardPost>
        {postsComments && postsComments.map((post)=>{
                return <div key={post.id}>
                    <p>{post.content}</p>
                    <Botoes>
                    <button className="BotaoDislike" onClick={()=>likeOrDislikePost(post.id, true)}><img className="img" src={like}></img></button>
                    <p className="BotaoDislike">{post.likes}</p>
                    <button className="BotaoDislike" onClick={()=>likeOrDislikePost(post.id, false)}><img className="img" src={dislike}></img></button>
                    <p  className="BotaoComentar"><img className="imgContador" src={comment}/>{post.comments}</p>
                    </Botoes>
                </div>
            })}
        </CardPost>
                    
    
            <input className="InputComment" onChange={onChangeComment} type="text" value={content} placeholder={"Adicionar comentário"}></input>
            <button className="BotaoResponder" onClick={createComment}><em>Responder</em></button>
            <img className="Barra" src={barra}/>

    <div className="scrool">
            {postsComments && postsComments.map((post)=>{
                return <div key={post.id}>
                    {post.comentsPost.map((comment)=>{
                        return <div key={comment.id}>
                            <CardComments>
                            <p>{comment.comment}</p>
                            <Botoes>
                            <button className="BotaoDislike" onClick={()=>likeOrDislikeComment(comment.id, true)}><img className="img" src={like}/></button>
                            <p className="BotaoDislike">{comment.likes}</p>
                            <button className="BotaoDislike" onClick={()=>likeOrDislikeComment(comment.id, false)}><img className="img" src={dislike}/></button>
                            </Botoes>
                            </CardComments>
                        </div>
                    })}
                
                </div>
            })}
    </div>
    <img className="BarraInferior" src={barraInferior}/>
           
        </MainPostsComments>
    )
    
}