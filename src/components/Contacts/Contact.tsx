import React, { useState, useEffect } from 'react'
import { PostAPI } from '../../api/PostApi';

const Contact = () => {
    const [posts, setPosts] = useState<Array<{ id: number, title: string, body: string }>>([]);

    const postList = posts.length ? (
        posts.map(post => {
            return (<div className="post card" key={post.id}>
                <div className="card-content">
                    <span className="card-title">
                        {post.title}
                    </span>
                    <p>{post.body}</p>
                </div>
            </div>)
        })
    ) : (
        <div className="center">No contacts present</div>
    );

    useEffect(() => {

        PostAPI().then((res: any) => {
            setPosts(res.data.slice(0, 10));
        }).catch((error: any) => {
            console.log(error);
        })

    }, []);

    return (
        <div className="container">
            <h1>Contact</h1>
            {postList}
        </div>
    )
}

export default Contact