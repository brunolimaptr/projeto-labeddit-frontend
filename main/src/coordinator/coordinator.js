export const vaiParaLogin = (navigate) => {
    navigate("/")
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