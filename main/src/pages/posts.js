import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { vaiParaLogin, vaiParaPostComments } from "../coordinator/coordinator";
import { Botoes, CardPost, MainPosts } from "./posts.styled";
import barra from "../assets/img/barra.png"
import barraInferior from "../assets/img/barraInferior.png"
import like from "../assets/img/like.png"
import dislike from "../assets/img/dislike.png"
import comment from "../assets/img/comments.png"
import logoPequena from "../assets/img/logoPequeno.png"


export function CreatePost(props) {

    const token = window.localStorage.getItem("tokenLogin")

    const params = useParams()

    const [content, setContent] = useState([])
    const [comments, setComments] = useState([])

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


    const getComments = async () => {
        try {
            const response = await axios.get(`https://labeddit-0qmm.onrender.com/comments`, {
                headers: {
                    Authorization: token
                }
            })

            console.log(response.data.Comment)
            setComments(response.data.Comment)
            
        } catch (error) {
            console.log(error);
        }
    }


    const likeOrDislike = async (id, like) => {
        try {

            const body = {
                "like": like,
            }
            const response = await axios.put(`https://labeddit-0qmm.onrender.com/posts/${id}/like`, body, {
                headers: {
                    Authorization: token
                }
            })
            getPost()
            

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
        getComments()
    }, [])



return (
    <MainPosts>

       <p className="header"><img className="LogoPequena" src={logoPequena}/></p>

        <input className="InputPost" onChange={onChangeContent} type="text" value={content} placeholder={"Escreva seu post..."}></input>
        <button className="BotaoPostar" onClick={createPost}><em>Postar</em></button>
        <img className="Barra" src={barra}/>

      <div className="scrool">
        {props.posts[0] && props.posts.map((post)=>{
            return <div key={post.id}>
            <CardPost>
            <p className="NomeCriador">{"Enviado por:"} {post.creator.name}</p>
            <p className="Content">{post.content}</p>
            <p>{post.comments}</p>
            <Botoes>
            <button onClick={()=>likeOrDislike(post.id, true)}><img className="img" src={like}/></button>
            <p className="Contador">{post.likes}</p>
            <button className="BotaoDislike" onClick={()=>likeOrDislike(post.id, false)}><img className="img" src={dislike}/></button>
            <button className="BotaoComentar" onClick={()=>vaiParaPostComments(navigate, post.id)}><img className="img" src={comment}/></button>
            </Botoes>
            </CardPost>
            {/* {comments && comments.filter((itemComment)=>{
            const contandorComment = itemComment.post_id === post.id
            console.log(contandorComment);
            return <div>
                <p>{contandorComment.lenght}</p>
                </div> })} */}
           

        </div>
        })}
        </div>
        <img className="BarraInferior" src={barraInferior}/>
       
    </MainPosts>
)
}




