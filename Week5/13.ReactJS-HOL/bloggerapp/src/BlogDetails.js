 
import React from 'react';
import { blogs } from './data';

function BlogDetails() {
    const content = blogs.map((blog) =>
        <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h3>{blog.author}</h3>
            <p>{blog.content}</p>
        </div>
    );
    return (
        <div className="v1">
            <h1>Blog Details</h1>
            {content}
        </div>
    );
}

export default BlogDetails;