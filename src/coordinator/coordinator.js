export const vaiParaLogin = (navigate) => {
    navigate("/login")
}

export const vaiParaPost = (navigate) => {
    navigate(`/posts`)
}

export const vaiParaSignup = (navigate) => {
    navigate("/signup")
}

export const vaiParaPostComments = (navigate, postId) => {
    navigate(`/postscommentId/${postId}`)
}