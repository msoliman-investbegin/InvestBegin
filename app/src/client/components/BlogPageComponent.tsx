import React, { useState } from 'react';

const BlogPageComponent = () => {
  // Define sample blog data
  const blogs: any = [
    {
      id: 1,
      title: 'Forex Trading meistern: Ein Leitfaden für EUR/USD, eToro Demo und Plus500 WebTrader',
      author: '',
      date: 'June 10, 2024',
      image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
      content: `Der Online-Devisenhandel ist sowohl für Anfänger als auch für erfahrene Händler immer zugänglicher geworden. Das Währungspaar EUR/USD ist aufgrund seiner Liquidität und seines Gewinnpotenzials eine der beliebtesten Optionen auf dem Devisenmarkt. Bevor Sie jedoch einsteigen, ist es wichtig, die Ihnen zur Verfügung stehenden Tools wie eToro Demo und Plus500 WebTrader zu verstehen.

      eToro, eine bekannte Plattform für Deviseninvestitionen, bietet ein Demokonto, mit dem Sie den Handel üben können, ohne echtes Geld zu riskieren. Dieses wertvolle Instrument hilft Anfängern, Vertrauen aufzubauen und die Besonderheiten des Forex-Marktes zu verstehen.
      
      Ein weiterer Top-Anwärter in der Welt des Internethandels ist Plus500 WebTrader. Seine benutzerfreundliche Oberfläche und seine robusten Funktionen machen ihn zu einer ausgezeichneten Wahl sowohl für Anfänger als auch für fortgeschrittene Trader. Mit dieser Plattform können Sie problemlos auf EUR/USD und andere Forex-Paare zugreifen.
      
      Wer in Devisen investieren will, muss die Kunst der Analyse und des Risikomanagements beherrschen. Die Kombination aus  Verstehen von Devisen wie EUR/USD, eToro Demo und Plus500 WebTrader kann Ihre Forex-Reise grundlegend verändern. Beginnen Sie damit, Ihre Fähigkeiten auf einem Demokonto zu verfeinern, lernen Sie die Dynamik des EUR/USD-Paares kennen und nutzen Sie die benutzerfreundlichen Web-Handelsplattformen, um Ihren Handelserfolg zu steigern.
      
      Zusammenfassend lässt sich sagen, dass der Online-Devisenhandel ein spannendes und potenziell lukratives Unterfangen ist. Egal, ob Sie ein erfahrener Händler oder ein Anfänger sind, eToro und Plus500 WebTrader bieten die idealen Werkzeuge, um die Welt des Devisenhandels zu erkunden und das EUR/USD-Paar zu meistern.
      `,
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