import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9'
            }}>
                <h3 style={{color: '#2c3e50'}}>
                    #{this.props.id} {this.props.title}
                </h3>
                <p style={{color: '#555', lineHeight: '1.6'}}>
                    {this.props.body}
                </p>
            </div>
        );
    }
}

export default Post;