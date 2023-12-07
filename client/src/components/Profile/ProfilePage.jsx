import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const profileData = {
    name: "Gallery Name",
    bio: "A short bio about the gallery. Here you can add information about the gallery's purpose, its specialties, or any other relevant details.",
    // More profile details can be added here
  };

  // Placeholder posts data
  const posts = [
  
  ];

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1 className="gallery-name">{profileData.name}</h1>
        <p className="gallery-bio">{profileData.bio}</p>
      </header>
      <section className="profile-content">
        <aside className="profile-sidebar">
          <img src="path-to-profile-pic.jpg" alt="Profile" className="profile-pic" />
          {/* Other sidebar content such as followers count, social links, etc. */}
        </aside>
        <main className="post-gallery">
          {posts.map(post => (
            <article key={post.id} className="post-item">
              {/* Post content here */}
              {post.content}
            </article>
          ))}
        </main>
      </section>
    </div>
  );
};

export default ProfilePage;
