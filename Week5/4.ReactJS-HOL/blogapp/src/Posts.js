import React from 'react';
import Post from './Post';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data.slice(0, 10) });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div style={{padding: '20px', fontFamily: 'Arial'}}>
                <h1 style={{color: '#333', borderBottom: '2px solid #333'}}>
                    📝 Blog Posts
                </h1>
                {this.state.posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </div>
        );
    }

    componentDidCatch(error, info) {
        alert('Error: ' + error);
    }
}

export default Posts;