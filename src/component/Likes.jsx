import { useState } from "react"

const Likes = () => {
    const [likes,setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="likeComponent">
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default Likes