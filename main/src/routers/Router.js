import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Signup } from "../pages/signup";
import { PostComment } from "../pages/postsComments";
import { Login } from "../pages/login";
import { CreatePost } from "../pages/posts";



export function Router() {

    const [users, setUsers] = useState([])
    const [login, setLogin] = useState([])
    const [signup, setSignup] = useState([])
    const [posts, setPosts] = useState([])


    const getUsers = async () => {
        try {
            const response = await axios.get(`https://labeddit-0qmm.onrender.com/users`)

            console.log(response);
            setUsers(response)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])



    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login
                    login={login}
                    setLogin={setLogin}
                />} />

                <Route path="/signup" element={<Signup
                    signup={signup}
                    setSignup={setSignup}
                />} />

                <Route path="/posts" element={
                    
                <CreatePost
                    posts={posts}
                    setPosts={setPosts}
                />
                    
                } />

                <Route path="/postscommentId/:id" element={<PostComment
                />} />

            </Routes>
        </BrowserRouter>
    )


}
