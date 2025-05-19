import { useState } from 'react';
import { Search, Book, BookOpen, Download, ChevronLeft, FileText, Clock, Filter, Star, StarHalf } from 'lucide-react';

export default function LibraryApp() {
  const [currentView, setCurrentView] = useState('library');
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookIntro, setShowBookIntro] = useState(false);

  // Enhanced sample data with authors, ratings, and introductions
  const resources = [
    { 
      id: 1, 
      title: 'Introduction to React', 
      author: 'Sarah Johnson',
      type: 'ebook', 
      subject: 'Programming', 
      size: '2.4 MB', 
      date: '2025-04-15', 
      rating: 4.5,
      description: 'A comprehensive guide to React fundamentals and modern practices.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-blue-100',
      introduction: `React has revolutionized the way we build user interfaces on the web. This comprehensive guide will take you from the basics of component-based architecture to advanced patterns used in modern React applications.

      We'll begin by understanding what makes React different from other frameworks, exploring its virtual DOM implementation and the power of JSX. As you progress through this book, you'll learn how to manage state effectively, work with props, and implement hooks for functional components.
      
      The later chapters cover more advanced topics including context API, error boundaries, code-splitting techniques, and server-side rendering. By the end of this book, you'll have the skills to build efficient, scalable React applications that follow current best practices.`
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript Concepts', 
      author: 'Michael Chen',
      type: 'pdf', 
      subject: 'Programming', 
      size: '3.7 MB', 
      date: '2025-04-10', 
      rating: 4.8,
      description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, and async patterns.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-yellow-100',
      introduction: `This advanced guide to JavaScript takes experienced developers beyond the basics and into the deeper mechanics of the language. We start by examining JavaScript's prototype-based inheritance system and how it differs from class-based languages.

      You'll gain a thorough understanding of closures, one of JavaScript's most powerful features, and learn how they enable powerful patterns like module patterns and data privacy. The book explores execution contexts and the lexical environment, giving you insight into how JavaScript actually runs your code.
      
      A significant portion covers asynchronous JavaScript, from callbacks to promises to async/await syntax, with real-world examples of each approach. We'll also examine performance optimization techniques that can make your applications faster and more responsive.`
    },
    { 
      id: 3, 
      title: 'Calculus Fundamentals', 
      author: 'Dr. Emily Rodriguez',
      type: 'pdf', 
      subject: 'Mathematics', 
      size: '5.1 MB', 
      date: '2025-03-28', 
      rating: 4.2,
      description: 'Essential calculus concepts for college-level mathematics.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-green-100',
      introduction: `Calculus is the mathematical study of continuous change, and this textbook introduces the fundamental concepts that form the foundation of this powerful branch of mathematics. We begin with limits and continuity, building an intuitive understanding before moving into formal definitions.

      The core concepts of differentiation are presented with geometric interpretations and practical applications in physics, economics, and other fields. Integration follows, showing how it relates to differentiation through the Fundamental Theorem of Calculus.
      
      Throughout the book, we emphasize problem-solving techniques and provide numerous examples that connect abstract concepts to real-world applications. Whether you're pursuing a degree in science, engineering, or mathematics, this text will give you the solid foundation in calculus needed for advanced study.`
    },
    { 
      id: 4, 
      title: 'World History: Modern Era', 
      author: 'Prof. Robert Thompson',
      type: 'ebook', 
      subject: 'History', 
      size: '4.2 MB', 
      date: '2025-04-02', 
      rating: 4.0,
      description: 'Comprehensive overview of world history from the 16th century to present day.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-red-100',
      introduction: `This historical text traces the major developments and transformations of human societies from the 16th century to the present day. Beginning with the age of exploration and the global interactions it initiated, we examine how different regions of the world were connected through trade, conquest, and cultural exchange.

      The book covers the major revolutions that shaped our modern world - the Scientific Revolution, the Industrial Revolution, and the political revolutions that established new forms of government. We analyze colonialism and its lasting impact on global power structures, followed by the world wars and cold war that defined the 20th century.
      
      Rather than focusing solely on Western perspectives, this book integrates historical narratives from Africa, Asia, the Americas, and Europe to provide a truly global understanding of our shared past and how it continues to influence current events.`
    },
    { 
      id: 5, 
      title: 'Physics Laboratory Guide', 
      author: 'Dr. Alan Kumar',
      type: 'pdf', 
      subject: 'Physics', 
      size: '6.8 MB', 
      date: '2025-03-15', 
      rating: 4.7,
      description: 'Step-by-step instructions for common physics laboratory experiments.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-purple-100',
      introduction: `This laboratory guide is designed to accompany undergraduate physics courses, providing students with clear instructions and theoretical background for conducting experiments across various physics domains. Each experiment is presented with its historical context and real-world applications.

      The guide begins with fundamentals of measurement and error analysis, teaching students how to collect data accurately and interpret results with appropriate uncertainty. Subsequent chapters cover mechanics experiments including pendulum motion and conservation laws, followed by electricity and magnetism experiments with circuits and electromagnetic induction.
      
      Later sections include experiments in optics, modern physics, and thermodynamics. Each experiment includes a pre-lab theoretical discussion, step-by-step procedures, data collection tables, and analysis questions designed to reinforce the physical principles being demonstrated.`
    },
    { 
      id: 6, 
      title: 'Database Systems', 
      author: 'Maria Sanchez',
      type: 'pdf', 
      subject: 'Programming', 
      size: '4.5 MB', 
      date: '2025-04-05', 
      rating: 4.3,
      description: 'Introduction to database design, SQL, and database management systems.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-indigo-100',
      introduction: `This comprehensive guide to database systems covers both theoretical foundations and practical implementation details. Beginning with the basic concepts of data organization and storage, the book progresses through relational database theory, normalization, and query optimization.

      SQL is covered extensively, starting with simple queries and advancing to complex joins, subqueries, and stored procedures. You'll learn how to design efficient database schemas that minimize redundancy while maximizing query performance. The book also explores transaction processing, concurrency control, and recovery techniques essential for building robust database applications.
      
      Later chapters introduce NoSQL databases and their use cases, providing a balanced view of when relational versus non-relational approaches are most appropriate. The final section covers emerging trends including distributed databases, data warehousing, and the role of databases in big data ecosystems.`
    },
    { 
      id: 7, 
      title: 'Organic Chemistry Basics', 
      author: 'Dr. Jennifer Wu',
      type: 'ebook', 
      subject: 'Chemistry', 
      size: '3.9 MB', 
      date: '2025-03-20', 
      rating: 4.1,
      description: 'Fundamentals of organic chemistry with molecular structures and reactions.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-teal-100',
      introduction: `Organic chemistry studies the structure, properties, and reactions of organic compounds containing carbon atoms. This textbook introduces students to this fascinating field that forms the foundation of life itself and countless industrial applications.

      The text begins with atomic structure and chemical bonding, emphasizing how these fundamentals determine the properties of organic molecules. We then explore functional groups - the characteristic arrangements of atoms that give organic compounds their chemical behavior - and systematically cover each major group.
      
      Reaction mechanisms are presented with clear arrow-pushing notation to help students understand how electrons move during chemical transformations. Special attention is given to stereochemistry, helping students visualize three-dimensional molecular structures. The final chapters apply these concepts to biologically important molecules including carbohydrates, proteins, and nucleic acids.`
    },
    { 
      id: 8, 
      title: 'Literary Analysis Guide', 
      author: 'Elizabeth Morgan',
      type: 'pdf', 
      subject: 'Literature', 
      size: '2.8 MB', 
      date: '2025-04-12', 
      rating: 3.9,
      description: 'Methods and approaches for analyzing literary works across different genres.', 
      cover: '/api/placeholder/180/270', 
      color: 'bg-orange-100',
      introduction: `This guide equips readers with the tools and techniques needed to analyze literature across different genres, periods, and traditions. Rather than simply telling you what to think about specific texts, it teaches you how to develop your own interpretations based on careful reading and critical thinking.

      The book begins by examining the elements of fiction - plot, character, setting, point of view, symbolism, and theme - with examples from classic and contemporary works. It then explores poetic forms and devices, dramatic structures, and the unique features of non-fiction literary works.
      
      Different theoretical approaches to literary criticism are presented, including historical, psychological, feminist, and postcolonial perspectives. Each approach is explained with accessible language and demonstrated through the analysis of well-known texts. The final chapters provide guidance on writing effective literary analyses, from developing a thesis to supporting arguments with textual evidence.`
    },
  ];

  const categories = [
    { id: 1, name: 'Programming', icon: <FileText size={20} /> },
    { id: 2, name: 'Mathematics', icon: <Book size={20} /> },
    { id: 3, name: 'History', icon: <Book size={20} /> },
    { id: 4, name: 'Physics', icon: <Book size={20} /> },
    { id: 5, name: 'Chemistry', icon: <Book size={20} /> },
    { id: 6, name: 'Literature', icon: <BookOpen size={20} /> },
  ];

  const recentlyViewed = [1, 3, 4];

  // Function to render star ratings
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalfStar && <StarHalf size={16} className="text-yellow-500 fill-yellow-500" />}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Filter resources based on search query and/or category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory ? resource.subject === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setCurrentView('resourceDetail');
    setShowBookIntro(false);
  };

  const handleBackClick = () => {
    if (currentView === 'resourceDetail') {
      setCurrentView('resourcesList');
    } else if (currentView === 'resourcesList') {
      setCurrentView('search');
    } else if (currentView === 'search') {
      setCurrentView('library');
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentView('resourcesList');
  };

  const handleDownload = (resource) => {
    // In a real app, this would trigger an actual download
    alert(`Downloading ${resource.title}`);
  };

  const toggleBookIntro = () => {
    setShowBookIntro(!showBookIntro);
  };

  // Main Library View
  const LibraryView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library</h1>
        <button 
          onClick={() => setCurrentView('search')}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <Search size={18} />
          <span>Search</span>
        </button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map(category => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="flex items-center gap-3 p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                {category.icon}
              </div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recently Viewed</h2>
        <div className="space-y-3">
          {recentlyViewed.map(id => {
            const resource = resources.find(r => r.id === id);
            return (
              <div 
                key={resource.id}
                onClick={() => handleResourceClick(resource)}
                className="flex justify-between items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="h-16 w-12 rounded overflow-hidden">
                    <img 
                      src={resource.cover} 
                      alt={resource.title}
                      className={`h-full w-full object-cover ${resource.color}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{resource.title}</h3>
                    <p className="text-sm text-gray-500">By {resource.author}</p>
                    <div className="mt-1">{renderRating(resource.rating)}</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>Recent</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Resources */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Popular Resources</h2>
        <div className="space-y-3">
          {resources.slice(4, 7).map(resource => (
            <div 
              key={resource.id}
              onClick={() => handleResourceClick(resource)}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="h-16 w-12 rounded overflow-hidden">
                  <img 
                    src={resource.cover} 
                    alt={resource.title}
                    className={`h-full w-full object-cover ${resource.color}`}
                  />
                </div>
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-gray-500">By {resource.author}</p>
                  <div className="mt-1">{renderRating(resource.rating)}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {resource.size}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Search View
  const SearchView = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Search Resources</h1>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by title, author, subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <button 
          onClick={() => setCurrentView('resourcesList')}
          className="absolute right-3 top-2 bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Search
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Browse by Subject</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map(category => (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="flex items-center gap-3 p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                {category.icon}
              </div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Resources List View
  const ResourcesListView = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">
          {selectedCategory ? `${selectedCategory} Resources` : 'Search Results'}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{filteredResources.length} resources found</span>
        <button className="flex items-center gap-1 text-blue-500">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <div 
              key={resource.id}
              onClick={() => handleResourceClick(resource)}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="h-16 w-12 rounded overflow-hidden">
                  <img 
                    src={resource.cover} 
                    alt={resource.title}
                    className={`h-full w-full object-cover ${resource.color}`}
                  />
                </div>
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-gray-500">By {resource.author}</p>
                  <div className="mt-1">{renderRating(resource.rating)}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {resource.size}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-8 text-gray-500">No resources found</p>
        )}
      </div>
    </div>
  );

  // Resource Detail View
  const ResourceDetailView = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Resource Details</h1>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <div className="h-64 w-48 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={selectedResource?.cover} 
              alt={selectedResource?.title}
              className={`h-full w-full object-cover ${selectedResource?.color}`}
            />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-center">{selectedResource.title}</h2>
        <p className="text-center text-gray-600 mt-1">By {selectedResource.author}</p>
        
        <div className="flex justify-center mt-2">
          {renderRating(selectedResource.rating)}
        </div>
        
        <p className="mt-4 text-gray-600 text-center">
          {selectedResource.description}
        </p>
        
        <div className="mt-6 space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-500">Type</span>
            <span className="font-medium">{selectedResource.type.toUpperCase()}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-500">Subject</span>
            <span className="font-medium">{selectedResource.subject}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-500">Size</span>
            <span className="font-medium">{selectedResource.size}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-500">Upload Date</span>
            <span className="font-medium">{selectedResource.date}</span>
          </div>
        </div>

        <div className="mt-6">
          <button 
            onClick={toggleBookIntro}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg mb-3"
          >
            <span>{showBookIntro ? 'Hide Introduction' : 'View Introduction'}</span>
          </button>
          
          {showBookIntro && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Introduction</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedResource.introduction}
              </p>
            </div>
          )}
        </div>

        <button 
          onClick={() => handleDownload(selectedResource)}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg"
        >
          <Download size={18} />
          <span>Download Resource</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen p-4">
      {currentView === 'library' && <LibraryView />}
      {currentView === 'search' && <SearchView />}
      {currentView === 'resourcesList' && <ResourcesListView />}
      {currentView === 'resourceDetail' && selectedResource && <ResourceDetailView />}
    </div>
  );
}