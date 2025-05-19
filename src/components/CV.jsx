// import { useState } from 'react';
import { 
    Search, 
    Book, 
    FileText, 
    ChevronLeft, 
    Download, 
    Eye, 
    Edit, 
    Copy, 
    Home,
    Briefcase,
    User,
    Phone,
    Mail,
    MapPin,
    ExternalLink,
    Calendar,
    Award,
    CheckCircle,
    ArrowLeft
  } from 'lucide-react';
import { useState } from 'react';
  
  export default function StudentCVApp() {
    const [currentView, setCurrentView] = useState('home');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [userCV, setUserCV] = useState(null);
    const [activeCVSection, setActiveCVSection] = useState('personal');
    
    // Sample CV templates
    const cvTemplates = [
      {
        id: 1,
        name: 'Professional',
        description: 'Clean and modern design suitable for corporate roles',
        image: '/placeholder.svg',
        color: 'bg-blue-100',
        popular: true,
        sections: ['header', 'profile', 'experience', 'education', 'skills', 'projects'],
        previewImage: '/placeholder.svg',
      },
      {
        id: 2,
        name: 'Academic',
        description: 'Focused on educational achievements and research experience',
        image: '/placeholder.svg',
        color: 'bg-green-100',
        popular: false,
        sections: ['header', 'education', 'research', 'publications', 'skills', 'awards'],
        previewImage: '/placeholder.svg',
      },
      {
        id: 3,
        name: 'Creative',
        description: 'Visual design with emphasis on portfolio and projects',
        image: '/placeholder.svg',
        color: 'bg-purple-100',
        popular: true,
        sections: ['header', 'profile', 'skills', 'portfolio', 'education', 'experience'],
        previewImage: '/placeholder.svg',
      },
      {
        id: 4,
        name: 'Technical',
        description: 'Highlights technical skills and project achievements',
        image: '/placeholder.svg',
        color: 'bg-yellow-100',
        popular: false,
        sections: ['header', 'technicalSummary', 'skills', 'projects', 'experience', 'education'],
        previewImage: '/placeholder.svg',
      },
      {
        id: 5,
        name: 'Entry-Level',
        description: 'Perfect for students with limited work experience',
        image: '/placeholder.svg',
        color: 'bg-red-100',
        popular: true,
        sections: ['header', 'education', 'skills', 'projects', 'activities', 'references'],
        previewImage: '/placeholder.svg',
      },
      {
        id: 6,
        name: 'Internship',
        description: 'Focused on educational background and relevant coursework',
        image: '/placeholder.svg',
        color: 'bg-indigo-100',
        popular: false,
        sections: ['header', 'objective', 'education', 'skills', 'projects', 'activities'],
        previewImage: '/placeholder.svg',
      },
    ];
  
    // Default CV data structure
    const defaultCV = {
      personal: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        website: '',
      },
      profile: '',
      experience: [
        {
          id: 1,
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        }
      ],
      education: [
        {
          id: 1,
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          current: false,
          gpa: '',
          description: '',
        }
      ],
      skills: [
        { id: 1, name: '', level: '' }
      ],
      projects: [
        {
          id: 1,
          name: '',
          description: '',
          technologies: '',
          link: '',
        }
      ],
      awards: [
        {
          id: 1,
          title: '',
          issuer: '',
          date: '',
          description: '',
        }
      ],
    };
  
    // Initialize user CV when selecting a template
    const initializeUserCV = () => {
      if (!userCV) {
        setUserCV(defaultCV);
      }
    };
  
    const handleBackClick = () => {
      if (currentView === 'templateDetail') {
        setCurrentView('cvLibrary');
      } else if (currentView === 'editCV') {
        setCurrentView('templateDetail');
      } else if (currentView === 'cvLibrary') {
        setCurrentView('home');
      } else if (currentView === 'previewCV') {
        setCurrentView('editCV');
      }
    };
  
    const handleTemplateSelect = (template) => {
      setSelectedTemplate(template);
      setCurrentView('templateDetail');
    };
  
    const handleEditCV = () => {
      initializeUserCV();
      setCurrentView('editCV');
    };
  
    const handlePreviewCV = () => {
      setCurrentView('previewCV');
    };
  
    const handleDownloadCV = () => {
      // This would generate and download the CV in a real app
      alert('Your CV is being prepared for download...');
    };
  
    const updateCVField = (section, field, value) => {
      setUserCV(prevState => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value
        }
      }));
    };
  
    const updateArrayField = (section, index, field, value) => {
      setUserCV(prevState => {
        const newArray = [...prevState[section]];
        newArray[index] = {
          ...newArray[index],
          [field]: value
        };
        return {
          ...prevState,
          [section]: newArray
        };
      });
    };
  
    const addArrayItem = (section) => {
      setUserCV(prevState => {
        const newId = prevState[section].length > 0 
          ? Math.max(...prevState[section].map(item => item.id)) + 1 
          : 1;
        
        let newItem = { id: newId };
        
        // Initialize with empty fields based on section
        if (section === 'experience') {
          newItem = {
            ...newItem,
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
          };
        } else if (section === 'education') {
          newItem = {
            ...newItem,
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            current: false,
            gpa: '',
            description: '',
          };
        } else if (section === 'skills') {
          newItem = {
            ...newItem,
            name: '',
            level: '',
          };
        } else if (section === 'projects') {
          newItem = {
            ...newItem,
            name: '',
            description: '',
            technologies: '',
            link: '',
          };
        } else if (section === 'awards') {
          newItem = {
            ...newItem,
            title: '',
            issuer: '',
            date: '',
            description: '',
          };
        }
  
        return {
          ...prevState,
          [section]: [...prevState[section], newItem]
        };
      });
    };
  
    const removeArrayItem = (section, id) => {
      setUserCV(prevState => ({
        ...prevState,
        [section]: prevState[section].filter(item => item.id !== id)
      }));
    };
  
    // Home View
    const HomeView = () => (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Student Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            onClick={() => setCurrentView('library')}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-gray-50"
          >
            <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Book size={24} />
            </div>
            <h2 className="text-lg font-semibold">Library</h2>
            <p className="text-sm text-center text-gray-500 mt-2">Access books and resources</p>
          </div>
          
          <div 
            onClick={() => setCurrentView('cvLibrary')}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center cursor-pointer hover:bg-gray-50"
          >
            <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4">
              <FileText size={24} />
            </div>
            <h2 className="text-lg font-semibold">CV Builder</h2>
            <p className="text-sm text-center text-gray-500 mt-2">Create and manage your CV</p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-medium text-blue-800">Upcoming Career Fair</h3>
          <p className="text-sm text-blue-600 mt-1">Prepare your CV for the Spring Campus Career Fair - May 15, 2025</p>
        </div>
      </div>
    );
    
    // CV Library View
    const CVLibraryView = () => (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">CV Templates</h1>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full p-3 pl-10 border rounded-lg"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3">Popular Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cvTemplates
              .filter(template => template.popular)
              .map(template => (
                <div 
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className="flex flex-col p-3 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <div className={`h-40 rounded-lg overflow-hidden ${template.color} mb-2`}>
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.description}</p>
                </div>
              ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3">All Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cvTemplates.map(template => (
              <div 
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className="flex flex-col p-3 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <div className={`h-40 rounded-lg overflow-hidden ${template.color} mb-2`}>
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
    // Template Detail View
    const TemplateDetailView = () => (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">{selectedTemplate.name} Template</h1>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-center mb-6">
            <div className={`h-96 w-64 rounded-lg overflow-hidden shadow-lg ${selectedTemplate.color}`}>
              <img 
                src={selectedTemplate.previewImage} 
                alt={selectedTemplate.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-center">{selectedTemplate.name}</h2>
          
          <p className="mt-4 text-gray-600 text-center">
            {selectedTemplate.description}
          </p>
          
          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-2">Included Sections:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {selectedTemplate.sections.map((section, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="capitalize">{section}</span>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button 
              onClick={handleEditCV}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600"
            >
              <Edit size={18} />
              <span>Create My CV</span>
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300"
              onClick={() => alert("Preview feature would open a preview of the template")}
            >
              <Eye size={18} />
              <span>Preview</span>
            </button>
          </div>
        </div>
      </div>
    );
    
    // Edit CV View
    const EditCVView = () => {
      const renderForm = () => {
        switch (activeCVSection) {
          case 'personal':
            return (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text"
                      value={userCV.personal.firstName}
                      onChange={(e) => updateCVField('personal', 'firstName', e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text"
                      value={userCV.personal.lastName}
                      onChange={(e) => updateCVField('personal', 'lastName', e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input 
                    type="text"
                    value={userCV.personal.jobTitle}
                    onChange={(e) => updateCVField('personal', 'jobTitle', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Computer Science Student"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email"
                    value={userCV.personal.email}
                    onChange={(e) => updateCVField('personal', 'email', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel"
                    value={userCV.personal.phone}
                    onChange={(e) => updateCVField('personal', 'phone', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input 
                    type="text"
                    value={userCV.personal.location}
                    onChange={(e) => updateCVField('personal', 'location', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="City, State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website/Portfolio (Optional)</label>
                  <input 
                    type="url"
                    value={userCV.personal.website}
                    onChange={(e) => updateCVField('personal', 'website', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="https://portfolio.com"
                  />
                </div>
              </div>
            );
          
          case 'profile':
            return (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  value={userCV.profile}
                  onChange={(e) => setUserCV({...userCV, profile: e.target.value})}
                  className="w-full p-3 border rounded-md h-40"
                  placeholder="Write a brief professional summary highlighting your skills, experience, and career goals..."
                ></textarea>
                <p className="text-xs text-gray-500">Keep your professional summary concise and focused on your key strengths and career objectives. Aim for 3-5 sentences.</p>
              </div>
            );
          
          case 'education':
            return (
              <div className="space-y-6">
                {userCV.education.map((edu, index) => (
                  <div key={edu.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Education #{index + 1}</h3>
                      {userCV.education.length > 1 && (
                        <button 
                          onClick={() => removeArrayItem('education', edu.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <input 
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateArrayField('education', index, 'institution', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="University Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <input 
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateArrayField('education', index, 'degree', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Bachelor of Science"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <input 
                        type="text"
                        value={edu.field}
                        onChange={(e) => updateArrayField('education', index, 'field', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Computer Science"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input 
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateArrayField('education', index, 'startDate', e.target.value)}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input 
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateArrayField('education', index, 'endDate', e.target.value)}
                          disabled={edu.current}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox"
                        id={`current-edu-${edu.id}`}
                        checked={edu.current}
                        onChange={(e) => updateArrayField('education', index, 'current', e.target.checked)}
                        className="mr-2 h-4 w-4"
                      />
                      <label htmlFor={`current-edu-${edu.id}`} className="text-sm text-gray-700">I am currently studying here</label>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GPA (Optional)</label>
                      <input 
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => updateArrayField('education', index, 'gpa', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="3.8/4.0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                      <textarea
                        value={edu.description}
                        onChange={(e) => updateArrayField('education', index, 'description', e.target.value)}
                        className="w-full p-2 border rounded-md h-24"
                        placeholder="Relevant coursework, achievements, activities..."
                      ></textarea>
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => addArrayItem('education')}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
                >
                  + Add Another Education
                </button>
              </div>
            );
          
          case 'experience':
            return (
              <div className="space-y-6">
                {userCV.experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Experience #{index + 1}</h3>
                      {userCV.experience.length > 1 && (
                        <button 
                          onClick={() => removeArrayItem('experience', exp.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                      <input 
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateArrayField('experience', index, 'company', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input 
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateArrayField('experience', index, 'position', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Job Title"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input 
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateArrayField('experience', index, 'startDate', e.target.value)}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input 
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateArrayField('experience', index, 'endDate', e.target.value)}
                          disabled={exp.current}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox"
                        id={`current-exp-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) => updateArrayField('experience', index, 'current', e.target.checked)}
                        className="mr-2 h-4 w-4"
                      />
                      <label htmlFor={`current-exp-${exp.id}`} className="text-sm text-gray-700">I currently work here</label>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateArrayField('experience', index, 'description', e.target.value)}
                        className="w-full p-2 border rounded-md h-32"
                        placeholder="Describe your responsibilities, achievements, and skills used..."
                      ></textarea>
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => addArrayItem('experience')}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
                >
                  + Add Another Experience
                </button>
              </div>
            );
          
          case 'skills':
            return (
              <div className="space-y-6">
                <p className="text-sm text-gray-600">Add skills relevant to the positions you're applying for. Include both technical and soft skills.</p>
                
                {userCV.skills.map((skill, index) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <input 
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateArrayField('skills', index, 'name', e.target.value)}
                      className="flex-grow p-2 border rounded-md"
                      placeholder="Skill name (e.g. JavaScript, Project Management)"
                    />
                    
                    <select
                      value={skill.level}
                      onChange={(e) => updateArrayField('skills', index, 'level', e.target.value)}
                      className="p-2 border rounded-md"
                    >
                      <option value="">Proficiency</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                    
                    {userCV.skills.length > 1 && (
                      <button 
                        onClick={() => removeArrayItem('skills', skill.id)}
                        className="p-2 text-red-500"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                
                <button 
                  onClick={() => addArrayItem('skills')}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
                >
                  + Add Another Skill
                </button>
              </div>
            );
          
          case 'projects':
            return (
              <div className="space-y-6">
                {userCV.projects.map((project, index) => (
                  <div key={project.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Project #{index + 1}</h3>
                      {userCV.projects.length > 1 && (
                        <button 
                          onClick={() => removeArrayItem('projects', project.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                      <input 
                        type="text"
                        value={project.name}
                        onChange={(e) => updateArrayField('projects', index, 'name', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="E-commerce Website"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateArrayField('projects', index, 'description', e.target.value)}
                        className="w-full p-2 border rounded-md h-24"
                        placeholder="Describe the project, your role, and outcomes..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                      <input 
                        type="text"
                        value={project.technologies}
                        onChange={(e) => updateArrayField('projects', index, 'technologies', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Link (Optional)</label>
                      <input 
                        type="url"
                        value={project.link}
                        onChange={(e) => updateArrayField('projects', index, 'link', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="https://github.com/username/project"
                      />
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => addArrayItem('projects')}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
                >
                  + Add Another Project
                </button>
              </div>
            );
            
          case 'awards':
            return (
              <div className="space-y-6">
                {userCV.awards.map((award, index) => (
                  <div key={award.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Award #{index + 1}</h3>
                      {userCV.awards.length > 1 && (
                        <button 
                          onClick={() => removeArrayItem('awards', award.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Award Title</label>
                      <input 
                        type="text"
                        value={award.title}
                        onChange={(e) => updateArrayField('awards', index, 'title', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Dean's List"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
                      <input 
                        type="text"
                        value={award.issuer}
                        onChange={(e) => updateArrayField('awards', index, 'issuer', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="University Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input 
                        type="month"
                        value={award.date}
                        onChange={(e) => updateArrayField('awards', index, 'date', e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                      <textarea
                        value={award.description}
                        onChange={(e) => updateArrayField('awards', index, 'description', e.target.value)}
                        className="w-full p-2 border rounded-md h-20"
                        placeholder="Brief description of the award and its significance..."
                      ></textarea>
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => addArrayItem('awards')}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50"
                >
                  + Add Another Award
                </button>
              </div>
            );
            
          default:
            return <div>Select a section to edit</div>;
        }
      };
  
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Edit Your CV</h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-white rounded-lg shadow p-4">
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveCVSection('personal')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'personal' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <User size={18} />
                  <span>Personal Info</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('profile')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'profile' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <FileText size={18} />
                  <span>Profile</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('education')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'education' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <Book size={18} />
                  <span>Education</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('experience')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'experience' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <Briefcase size={18} />
                  <span>Experience</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('skills')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'skills' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <CheckCircle size={18} />
                  <span>Skills</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('projects')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'projects' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <FileText size={18} />
                  <span>Projects</span>
                </button>
                
                <button 
                  onClick={() => setActiveCVSection('awards')}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left ${activeCVSection === 'awards' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <Award size={18} />
                  <span>Awards</span>
                </button>
              </nav>
              
              <div className="mt-8 space-y-2">
                <button 
                  onClick={handlePreviewCV}
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  <Eye size={16} />
                  <span>Preview CV</span>
                </button>
                
                <button 
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
            
            {/* Main form content */}
            <div className="flex-grow bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 capitalize">{activeCVSection}</h2>
              {renderForm()}
            </div>
          </div>
        </div>
      );
    };
    
    // Preview CV View
    const PreviewCVView = () => {
      if (!userCV) return null;
      
      const { personal, profile, education, experience, skills, projects, awards } = userCV;
      
      const formatDate = (dateString) => {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      };
      
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft size={20} />
              </button>
              <h1 className="text-xl font-bold">CV Preview</h1>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handleEditCV}
                className="flex items-center gap-1 px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* CV Preview Content */}
            <div className="p-8 max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">{personal.firstName} {personal.lastName}</h1>
                {personal.jobTitle && (
                  <p className="text-gray-600 mt-2">{personal.jobTitle}</p>
                )}
                
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {personal.email && (
                    <div className="flex items-center gap-1 text-sm">
                      <Mail size={14} className="text-gray-500" />
                      <span>{personal.email}</span>
                    </div>
                  )}
                  
                  {personal.phone && (
                    <div className="flex items-center gap-1 text-sm">
                      <Phone size={14} className="text-gray-500" />
                      <span>{personal.phone}</span>
                    </div>
                  )}
                  
                  {personal.location && (
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} className="text-gray-500" />
                      <span>{personal.location}</span>
                    </div>
                  )}
                  
                  {personal.website && (
                    <div className="flex items-center gap-1 text-sm">
                      <ExternalLink size={14} className="text-gray-500" />
                      <span>{personal.website}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Profile Section */}
              {profile && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Professional Profile</h2>
                  <p className="text-gray-700">{profile}</p>
                </div>
              )}
              
              {/* Education Section */}
              {education.length > 0 && education[0].institution && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Education</h2>
                  
                  <div className="space-y-4">
                    {education.map(edu => (
                      <div key={edu.id} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="md:col-span-1 text-gray-500 text-sm">
                          {edu.startDate && (
                            <div>
                              {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                            </div>
                          )}
                        </div>
                        
                        <div className="md:col-span-3">
                          <h3 className="font-semibold">{edu.institution}</h3>
                          <p>
                            {edu.degree}{edu.degree && edu.field ? ', ' : ''}{edu.field}
                            {edu.gpa && ` - GPA: ${edu.gpa}`}
                          </p>
                          {edu.description && <p className="text-sm text-gray-600 mt-1">{edu.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Experience Section */}
              {experience.length > 0 && experience[0].company && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Experience</h2>
                  
                  <div className="space-y-4">
                    {experience.map(exp => (
                      <div key={exp.id} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="md:col-span-1 text-gray-500 text-sm">
                          {exp.startDate && (
                            <div>
                              {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                            </div>
                          )}
                        </div>
                        
                        <div className="md:col-span-3">
                          <h3 className="font-semibold">{exp.company}</h3>
                          <p className="italic">{exp.position}</p>
                          {exp.description && <p className="text-sm text-gray-600 mt-1">{exp.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Skills Section */}
              {skills.length > 0 && skills[0].name && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Skills</h2>
                  
                  <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {skills.map(skill => (
                      <li key={skill.id} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>
                          {skill.name} {skill.level && <span className="text-gray-500 text-sm">({skill.level})</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Projects Section */}
              {projects.length > 0 && projects[0].name && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Projects</h2>
                  
                  <div className="space-y-4">
                    {projects.map(project => (
                      <div key={project.id}>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{project.name}</h3>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        
                        {project.technologies && (
                          <p className="text-sm text-gray-600">
                            <strong>Technologies:</strong> {project.technologies}
                          </p>
                        )}
                        
                        {project.description && (
                          <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Awards Section */}
              {awards.length > 0 && awards[0].title && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b pb-2 mb-3">Awards & Achievements</h2>
                  
                  <div className="space-y-4">
                    {awards.map(award => (
                      <div key={award.id} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="md:col-span-1 text-gray-500 text-sm">
                          {award.date && formatDate(award.date)}
                        </div>
                        
                        <div className="md:col-span-3">
                          <h3 className="font-semibold">{award.title}</h3>
                          <p className="text-sm">{award.issuer}</p>
                          {award.description && <p className="text-sm text-gray-600 mt-1">{award.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };
    
    // Library View (placeholder - this section was mentioned but not implemented in your code)
    const LibraryView = () => (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentView('home')} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Digital Library</h1>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search books and resources..."
            className="w-full p-3 pl-10 border rounded-lg"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <Book size={36} className="mx-auto text-gray-500 mb-2" />
          <h2 className="text-lg font-medium">Library Resources</h2>
          <p className="text-gray-600">This feature is coming soon!</p>
          <button 
            onClick={() => setCurrentView('home')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  
    // Main component render
    return (
      <div className="min-h-screen bg-gray-900 p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          {currentView === 'home' && <HomeView />}
          {currentView === 'cvLibrary' && <CVLibraryView />}
          {currentView === 'templateDetail' && selectedTemplate && <TemplateDetailView />}
          {currentView === 'editCV' && userCV && <EditCVView />}
          {currentView === 'previewCV' && userCV && <PreviewCVView />}
          {currentView === 'library' && <LibraryView />}
        </div>
      </div>
    );
  }