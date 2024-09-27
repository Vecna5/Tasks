import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';

function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/data/posts.json');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <h1><a href='#'>MROHO'J</a></h1>
      <h1>The latest messages of brotherhood!</h1>
      <h2>Interesting scriptures, news, sacraments, prayers</h2>
      <div className='input-container'>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="post-list">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;