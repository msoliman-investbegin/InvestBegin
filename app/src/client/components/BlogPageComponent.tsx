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
      title: 'ETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
      author: '',
      date: 'June 23, 2024',
      image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
      content: `
      
In den letzten Jahren hat die Beliebtheit von Exchange Traded Funds (ETFs) unter Privatanlegern und institutionellen Investoren in Deutschland stark zugenommen. ETFs bieten eine einfache und kostengünstige Möglichkeit, in eine breite Palette von Vermögenswerten zu investieren. In diesem Blogbeitrag werden wir einen Blick darauf werfen, was ETFs sind, welche Vorteile sie bieten und wie man in sie investieren kann.

### Was sind ETFs?

ETFs sind Investmentfonds, die wie Aktien an der Börse gehandelt werden. Sie bilden die Wertentwicklung eines bestimmten Indexes, einer Branche, eines Rohstoffs oder eines anderen Vermögenswertes nach. Ein ETF kann beispielsweise den DAX, den MSCI World oder einen globalen Aktienindex abbilden. Dies ermöglicht es Anlegern, mit einem einzigen Investment eine breite Diversifikation zu erreichen.

### Vorteile von ETFs

1. **Diversifikation**: Mit einem ETF kann man in viele verschiedene Unternehmen oder Vermögenswerte gleichzeitig investieren. Dies reduziert das Risiko, das mit der Investition in einzelne Aktien oder Anleihen verbunden ist.

2. **Kosteneffizienz**: ETFs haben in der Regel niedrigere Gebühren als aktiv verwaltete Fonds, da sie passiv verwaltet werden und lediglich einen Index nachbilden. Dies bedeutet, dass keine teuren Fondsmanager benötigt werden, was die Kosten senkt.

3. **Liquidität**: Da ETFs an der Börse gehandelt werden, können sie jederzeit während der Handelszeiten gekauft und verkauft werden. Dies bietet den Anlegern eine hohe Flexibilität.

4. **Transparenz**: ETFs veröffentlichen in der Regel täglich ihre Bestände, sodass Anleger genau wissen, in welche Vermögenswerte sie investieren.

### Wie investiert man in ETFs?

1. **Konto eröffnen**: Um in ETFs zu investieren, benötigen Sie ein Wertpapierdepot bei einer Bank oder einem Online-Broker in Deutschland. Es gibt viele Anbieter, die unterschiedliche Gebührenstrukturen und Dienstleistungen anbieten.

2. **ETFs auswählen**: Wählen Sie ETFs aus, die zu Ihren Anlagezielen und Ihrer Risikobereitschaft passen. Berücksichtigen Sie dabei Faktoren wie die Performance des Index, die Kostenquote (TER), die Fondsgröße und die Liquidität des ETFs.

3. **Kauf und Verwaltung**: Nachdem Sie sich für einen ETF entschieden haben, können Sie diesen über Ihr Wertpapierdepot kaufen. Es ist wichtig, Ihre Investitionen regelmäßig zu überprüfen und gegebenenfalls anzupassen, um sicherzustellen, dass sie weiterhin Ihren Zielen entsprechen.

### Tipps für ETF-Anleger

- **Langfristiger Ansatz**: ETFs eignen sich besonders gut für langfristige Investments. Durch das regelmäßige Investieren und das Halten der ETFs über einen längeren Zeitraum können Anleger von Zinseszinsen und Marktgewinnen profitieren.

- **Kosten beachten**: Achten Sie auf die Gesamtkostenquote (TER) des ETFs. Niedrigere Kosten können sich langfristig positiv auf die Rendite auswirken.

- **Diversifikation nutzen**: Nutzen Sie die Möglichkeit der Diversifikation, indem Sie in verschiedene ETFs investieren, die unterschiedliche Regionen, Branchen oder Anlageklassen abbilden.

- **Regelmäßiges Rebalancing**: Überprüfen Sie regelmäßig Ihre Anlagestrategie und passen Sie Ihr Portfolio an, um das gewünschte Risikoprofil beizubehalten.

### ETF-Investitionen in Deutschland: Das sollten Sie wissen

Für deutsche Anleger bieten ETFs eine hervorragende Möglichkeit, eine breite Diversifikation mit niedrigen Kosten zu erreichen. Besonders beliebt sind ETFs, die den DAX, den MSCI World und andere wichtige Indizes abbilden. Zudem gibt es in Deutschland zahlreiche Online-Broker, die den Handel mit ETFs zu günstigen Konditionen ermöglichen.

### Fazit

ETFs sind eine hervorragende Möglichkeit für Anleger in Deutschland, eine breite Diversifikation mit niedrigen Kosten zu erreichen. Sie bieten Flexibilität, Transparenz und sind einfach zu handeln. Mit der richtigen Strategie und einem langfristigen Ansatz können ETFs ein wertvolles Instrument für den Vermögensaufbau sein.

Investieren Sie klug, bleiben Sie informiert und nutzen Sie die Vorteile, die ETFs bieten.
      `,
    },
    // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
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