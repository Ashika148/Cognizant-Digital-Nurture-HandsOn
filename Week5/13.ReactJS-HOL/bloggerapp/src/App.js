import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <CourseDetails />
        </div>
        <div>
          <BookDetails />
        </div>
        <div>
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;