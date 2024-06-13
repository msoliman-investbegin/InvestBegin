import React, { useState } from 'react';

const BlogPageComponent = () => {
  // Define sample blog data
  const blogs: any = [
    {
      id: 1,
      title: 'Blog Title 1',
      author: 'Author 1',
      date: 'June 10, 2024',
      image: 'https://placehold.co/700x400/000000/FFFFFF/png', // Sample image URL
      content: `Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      
      
      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      
      Where can I get some?
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    },
    {
      id: 2,
      title: 'Blog Title 2',
      author: 'Author 2',
      date: 'June 12, 2024',
      image: 'https://via.placeholder.com/150', // Sample image URL
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more blogs as needed
  ];

  // State to keep track of selected blog
  const [selectedBlog, setSelectedBlog] = useState<any>(blogs[0]);

  // Function to handle blog selection
  const handleBlogSelect = (blogId: any) => {
    setSelectedBlog(blogs.find((blog: any) => blog.id === blogId));
  };

  // Function to handle closing the blog details
  const handleCloseDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Blog List */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow sticky top-20'>
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Latest Blogs</h3>
                <div className='space-y-4'>
                  {blogs.map((blog: any) => (
                    <div key={blog.id} className='flex items-center space-x-4 cursor-pointer' onClick={() => handleBlogSelect(blog.id)}>
                      <img src={blog.image} alt={blog.title} className='w-16 h-16 rounded-md' />
                      <div>
                        <h4 className='text-lg font-semibold text-gray-900'>{blog.title}</h4>
                        <p className='text-sm text-gray-600'>{blog.author} | {blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Blog Details */}
          <div className='lg:col-span-2 overflow-y-auto h-screen'>
            {selectedBlog ? (
              <div className='bg-white rounded-lg shadow'>
                <div className='p-6'>
                  <h2 className='text-2xl font-semibold text-gray-900 mb-4'>{selectedBlog.title}</h2>
                  <p className='text-sm text-gray-600 mb-2'>{selectedBlog.author} | {selectedBlog.date}</p>
                  <img src={selectedBlog.image} alt={selectedBlog.title} className='mb-4 rounded-md' />
                  <p className='text-gray-700'>{selectedBlog.content}</p>
                  <button
                    onClick={handleCloseDetails}
                    className='mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center'
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className='bg-white rounded-lg shadow p-6'>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Select a blog to read</h2>
                <p className='text-gray-700'>Please click on a blog title from the list to view its details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogPageComponent