import React, { useState, useEffect } from 'react';
import '../../css/NewPost.css';

const NewPost = () => {
  const [file, setFile] = useState({ url: null, type: null });
  const [caption, setCaption] = useState('');

  const handleFileChange = (event) => {
    
    if (file.url) {
      URL.revokeObjectURL(file.url);
      setFile({ url: null, type: null }); 
    }

    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type.split('/')[0]; 
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile({
        url: fileUrl,
        type: fileType,
      });
    }
  };

 
  useEffect(() => {
    return () => {
      if (file.url) {
        URL.revokeObjectURL(file.url);
      }
    };
  }, [file.url]);

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="new-post-page">
      <form className="new-post-form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*,video/*" />
        {file.url && (
          file.type === 'image' ? (
            <img src={file.url} alt="Post preview" className="media-preview" />
          ) : (
            <video className="media-preview" controls>
              <source src={file.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        )}
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={handleCaptionChange}
        />
        <button type="submit">Share</button>
      </form>
    </div>
  );
};

export default NewPost;
