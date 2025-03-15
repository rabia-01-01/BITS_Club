// Sample data for the website
// In a real implementation, this data might come from a server API
const updatesData = [
    {
      id: 1,
      title: "New ML Workshop Series",
      date: "March 12, 2025",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "Join our 4-week machine learning workshop series starting next month. Learn from industry experts!"
    },
    {
      id: 2,
      title: "Hackathon Registration Open",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "The annual CodeFest 2025 registration is now open. Early bird tickets available until March 20."
    },
    {
      id: 3,
      title: "New Faculty Advisor",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "We're excited to welcome Dr. Sharma from the Computer Science department as our new faculty advisor."
    }
  ];
  
  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Campus Assistant",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A virtual assistant that helps students navigate campus resources and information."
    },
    {
      id: 2,
      title: "Smart Attendance System",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Automated attendance tracking using facial recognition and RFID technology."
    },
    {
      id: 3,
      title: "Campus Navigation App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A mobile app that helps new students find their way around campus."
    }
  ];
  
  const competitionsData = [
    {
      id: 1,
      title: "ACM-ICPC Training",
      category: "Competitive Programming",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Regular training sessions for the ACM International Collegiate Programming Contest."
    },
    {
      id: 2,
      title: "Google Kickstart",
      category: "Competitive Programming",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Preparation and participation in Google's Kickstart coding competition."
    },
    {
      id: 3,
      title: "Kaggle Competitions",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Collaborative teams working on various Kaggle data science challenges."
    }
  ];
  
  const initiativesData = [
    {
      id: 1,
      title: "Code for Good",
      category: "Social Impact",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Developing software solutions for local non-profit organizations."
    },
    {
      id: 2,
      title: "Tech Mentorship Program",
      category: "Education",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Members mentor high school students interested in computer science."
    },
    {
      id: 3,
      title: "Women in Tech",
      category: "Diversity",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Supporting women pursuing computer science through events and mentorship."
    }
  ];
  
  const facultyData = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Faculty Advisor",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      department: "Computer Science",
      social: {
        email: "rajesh.kumar@bits-pilani.ac.in",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Shikha Verma",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      department: "Information Systems",
      social: {
        email: "shikha.verma@bits-pilani.ac.in",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Anil Bansal",
      role: "Research Mentor",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      department: "Artificial Intelligence",
      social: {
        email: "anil.bansal@bits-pilani.ac.in",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];
  
  const studentsData = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "President",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "4th Year",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "3rd Year",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "3rd Year",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      year: "2nd Year",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];
  
  const alumniData = [
    {
      id: 1,
      name: "Arjun Reddy",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      batch: "2023",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Kavya Nair",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1551022372-0bdac482d9c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      batch: "2022",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Rohan Mehta",
      role: "Founder, TechStart",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      batch: "2021",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];
  
  const eventsData = [
    {
      id: 1,
      title: "Machine Learning Workshop",
      date: new Date(2025, 2, 18), // March 18, 2025
      time: "3:00 PM - 5:00 PM",
      location: "Lecture Hall 3, Academic Block",
      description: "Introduction to machine learning concepts and hands-on exercises."
    },
    {
      id: 2,
      title: "CodeFest 2025",
      date: new Date(2025, 2, 25), // March 25, 2025
      time: "9:00 AM - 6:00 PM",
      location: "Auditorium",
      description: "Annual coding competition with exciting prizes."
    },
    {
      id: 3,
      title: "Industry Expert Talk: AI in Healthcare",
      date: new Date(2025, 2, 20), // March 20, 2025
      time: "4:00 PM - 5:30 PM",
      location: "Virtual Session",
      description: "Join us for a talk by Dr. Rajan from Medtech about AI applications in healthcare."
    },
    {
      id: 4,
      title: "Blockchain Study Group",
      date: new Date(2025, 2, 14), // March 14, 2025
      time: "6:00 PM - 7:30 PM",
      location: "Room 105, Academic Block",
      description: "Weekly study group focused on blockchain technology and applications."
    }
  ];
  
  
  const contestWinnersData = [
    {
      id: 1,
      title: "ACM-ICPC Regionals",
      participants: "Team BitCoders",
      position: "1st Place",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "December 2024"
    },
    {
      id: 2,
      title: "Google Kickstart Round C",
      participants: "Rahul Sharma",
      position: "Global Rank 45",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "November 2024"
    },
    {
      id: 3,
      title: "BITS HACK 2024",
      participants: "Team TechTitans",
      position: "Best Innovation Award",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "October 2024"
    }
  ];
  
  const guestTalksData = [
    {
      id: 1,
      title: "Future of AI",
      speaker: "Dr. Sundar Rao, Google Research",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "February 2025"
    },
    {
      id: 2,
      title: "Building Tech Startups",
      speaker: "Anjali Sharma, Founder & CEO",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "January 2025"
    },
    {
      id: 3,
      title: "Quantum Computing",
      speaker: "Prof. Vijay Kumar, IISc",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "December 2024"
    }
  ];
  
  const galleryImagesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "CodeFest 2024"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "ML Workshop"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Team Outing"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Hackathon Winners"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Guest Lecture"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Tech Demo Day"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Coding Competition"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "BITS HACK 2024"
    }
  ];
  
  // Function to show detailed information
  function showUpdateDetails(id) {
    const update = updatesData.find(u => u.id === id);
    if (!update) return;
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${update.image}" alt="${update.title}" class="modal-image">
        <div class="modal-date">${update.date}</div>
        <h2>${update.title}</h2>
        <p class="modal-description">${update.content}</p>
      </div>
    `;
    document.body.appendChild(modal);
    addModalListeners(modal);
  }
  
  function showActivityDetails(type, id) {
    let activity;
    switch(type) {
      case 'project':
        activity = projectsData.find(p => p.id === id);
        break;
      case 'competition':
        activity = competitionsData.find(c => c.id === id);
        break;
      case 'initiative':
        activity = initiativesData.find(i => i.id === id);
        break;
      default:
        return;
    }
  
    if (!activity) return;
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${activity.image}" alt="${activity.title}" class="modal-image">
        <span class="modal-badge">${activity.category}</span>
        <h2>${activity.title}</h2>
        <p class="modal-description">${activity.description}</p>
      </div>
    `;
    document.body.appendChild(modal);
    addModalListeners(modal);
  }
  
  function showContestWinnerDetails(id) {
    const winner = contestWinnersData.find(w => w.id === id);
    if (!winner) return;
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${winner.image}" alt="${winner.title}" class="modal-image">
        <div class="modal-date">${winner.date}</div>
        <h2>${winner.title}</h2>
        <p><strong>${winner.participants}</strong> - ${winner.position}</p>
      </div>
    `;
    document.body.appendChild(modal);
    addModalListeners(modal);
  }
  
  function showGuestTalkDetails(id) {
    const talk = guestTalksData.find(t => t.id === id);
    if (!talk) return;
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${talk.image}" alt="${talk.title}" class="modal-image">
        <div class="modal-date">${talk.date}</div>
        <h2>${talk.title}</h2>
        <p><strong>Speaker:</strong> ${talk.speaker}</p>
      </div>
    `;
    document.body.appendChild(modal);
    addModalListeners(modal);
  }
  
  function showGalleryDetail(id) {
    const image = galleryImagesData.find(img => img.id === id);
    if (!image) return;
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content gallery-modal">
        <span class="close-btn">&times;</span>
        <img src="${image.image}" alt="${image.title}" class="modal-image fullsize">
        <h2>${image.title}</h2>
      </div>
    `;
    document.body.appendChild(modal);
    addModalListeners(modal);
  }
  
  function addModalListeners(modal) {
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => document.body.removeChild(modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) document.body.removeChild(modal);
    });
  }
  
  // DOM Elements
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
  
    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
    }
  
    // Load Updates
    loadUpdates();
  
    // Load Activities
    loadProjects();
    loadCompetitions();
    loadInitiatives();
  
    // Load People
    loadFaculty();
    loadStudents();
    loadAlumni();
  
    // Calendar & Events
    setupCalendar();
    loadContestWinners();
    loadGuestTalks();
  
    // Gallery
    loadGallery();
  
    // Tab Switching
    setupTabs();
  
    // Smooth Scrolling for Navigation
    setupSmoothScrolling();
  
    // Form Submission
    setupFormSubmission();
  });
  
  // Updates Section Functions
  function loadUpdates() {
    const updatesGrid = document.querySelector('.updates-grid');
  
    if (!updatesGrid) return;
  
    updatesData.forEach(update => {
      const updateCard = document.createElement('div');
      updateCard.className = 'update-card';
      updateCard.innerHTML = `
        <a href="#" class="card-link" onclick="showUpdateDetails(${update.id}); return false;">
          <img src="${update.image}" alt="${update.title}">
          <div class="update-card-content">
            <div class="update-card-date">${update.date}</div>
            <h3>${update.title}</h3>
            <p>${update.content}</p>
          </div>
        </a>
      `;
      updatesGrid.appendChild(updateCard);
    });
  }
  
  // Activities Section Functions
  function loadProjects() {
    const projectsGrid = document.querySelector('#projects .activities-grid');
  
    if (!projectsGrid) return;
  
    projectsData.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'activity-card';
      projectCard.innerHTML = `
        <a href="#" class="card-link" onclick="showActivityDetails('project', ${project.id}); return false;">
          <div class="activity-card-img">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="activity-card-content">
            <span class="activity-card-badge">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </a>
      `;
      projectsGrid.appendChild(projectCard);
    });
  }
  
  function loadCompetitions() {
    const competitionsGrid = document.querySelector('#competitions .activities-grid');
  
    if (!competitionsGrid) return;
  
    competitionsData.forEach(competition => {
      const competitionCard = document.createElement('div');
      competitionCard.className = 'activity-card';
      competitionCard.innerHTML = `
        <a href="#" class="card-link" onclick="showActivityDetails('competition', ${competition.id}); return false;">
          <div class="activity-card-img">
            <img src="${competition.image}" alt="${competition.title}">
          </div>
          <div class="activity-card-content">
            <span class="activity-card-badge">${competition.category}</span>
            <h3>${competition.title}</h3>
            <p>${competition.description}</p>
          </div>
        </a>
      `;
      competitionsGrid.appendChild(competitionCard);
    });
  }
  
  function loadInitiatives() {
    const initiativesGrid = document.querySelector('#initiatives .activities-grid');
  
    if (!initiativesGrid) return;
  
    initiativesData.forEach(initiative => {
      const initiativeCard = document.createElement('div');
      initiativeCard.className = 'activity-card';
      initiativeCard.innerHTML = `
        <a href="#" class="card-link" onclick="showActivityDetails('initiative', ${initiative.id}); return false;">
          <div class="activity-card-img">
            <img src="${initiative.image}" alt="${initiative.title}">
          </div>
          <div class="activity-card-content">
            <span class="activity-card-badge">${initiative.category}</span>
            <h3>${initiative.title}</h3>
            <p>${initiative.description}</p>
          </div>
        </a>
      `;
      initiativesGrid.appendChild(initiativeCard);
    });
  }
  
  // People Section Functions
  function loadFaculty() {
    const facultyGrid = document.querySelector('#faculty .people-grid');
  
    if (!facultyGrid) return;
  
    facultyData.forEach(person => {
      const personCard = document.createElement('div');
      personCard.className = 'person-card';
      personCard.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div class="person-card-content">
          <h3>${person.name}</h3>
          <div class="person-card-role">${person.role}</div>
          <p>${person.department}</p>
          <div class="person-card-social">
            <a href="mailto:${person.social.email}"><i class="fas fa-envelope"></i></a>
            <a href="${person.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
            <a href="${person.social.twitter}"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      `;
      facultyGrid.appendChild(personCard);
    });
  }
  
  function loadStudents() {
    const studentsGrid = document.querySelector('#students .people-grid');
  
    if (!studentsGrid) return;
  
    studentsData.forEach(person => {
      const personCard = document.createElement('div');
      personCard.className = 'person-card';
      personCard.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div class="person-card-content">
          <h3>${person.name}</h3>
          <div class="person-card-role">${person.role}</div>
          <p>${person.year}</p>
          <div class="person-card-social">
            <a href="${person.social.github}"><i class="fab fa-github"></i></a>
            <a href="${person.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
            <a href="${person.social.twitter}"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      `;
      studentsGrid.appendChild(personCard);
    });
  }
  
  function loadAlumni() {
    const alumniGrid = document.querySelector('#alumni .people-grid');
  
    if (!alumniGrid) return;
  
    alumniData.forEach(person => {
      const personCard = document.createElement('div');
      personCard.className = 'person-card';
      personCard.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div class="person-card-content">
          <h3>${person.name}</h3>
          <div class="person-card-role">${person.role}</div>
          <p>Batch of ${person.batch}</p>
          <div class="person-card-social">
            <a href="${person.social.github}"><i class="fab fa-github"></i></a>
            <a href="${person.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
            <a href="${person.social.twitter}"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      `;
      alumniGrid.appendChild(personCard);
    });
  }
  
  // Calendar Functions
  function setupCalendar() {
    const currentMonthElement = document.getElementById('current-month');
    const calendarDaysElement = document.getElementById('calendar-days');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
  
    if (!currentMonthElement || !calendarDaysElement || !prevMonthBtn || !nextMonthBtn) return;
  
    let currentDate = new Date();
    let selectedDate = null;
  
    renderCalendar();
  
    prevMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
  
    nextMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
  
    function renderCalendar() {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
  
      currentMonthElement.textContent = `${monthNames[month]} ${year}`;
  
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      calendarDaysElement.innerHTML = '';
  
      // Create empty cells for days before first day of month
      for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'empty';
        calendarDaysElement.appendChild(emptyDay);
      }
  
      // Create cells for days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        const date = new Date(year, month, day);
  
        // Check if this date has any events
        const hasEvents = eventsData.some(event => {
          return event.date.getDate() === day && 
                 event.date.getMonth() === month && 
                 event.date.getFullYear() === year;
        });
  
        // Check if this is today
        const isToday = date.toDateString() === new Date().toDateString();
  
        // Check if this is the selected date
        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
  
        dayElement.textContent = day;
        dayElement.classList.add('day');
        if (isToday) dayElement.classList.add('today');
        if (hasEvents) dayElement.classList.add('has-event');
        if (isSelected) dayElement.classList.add('selected');
  
        dayElement.addEventListener('click', function() {
          // Remove selected class from all days
          document.querySelectorAll('.days div').forEach(day => {
            day.classList.remove('selected');
          });
  
          // Add selected class to clicked day
          dayElement.classList.add('selected');
  
          // Update selected date
          selectedDate = date;
  
          // Show events for this day
          showEvents(date);
        });
  
        calendarDaysElement.appendChild(dayElement);
      }
  
      // If there's a selected date in the current month, show its events
      if (selectedDate && selectedDate.getMonth() === month && selectedDate.getFullYear() === year) {
        showEvents(selectedDate);
      } else {
        // Otherwise, show events for today if we're in the current month
        const today = new Date();
        if (today.getMonth() === month && today.getFullYear() === year) {
          showEvents(today);
          selectedDate = today;
  
          // Find and select today's element
          const todayElement = Array.from(calendarDaysElement.children).find(child => 
            child.textContent === today.getDate().toString() && child.classList.contains('today')
          );
          if (todayElement) todayElement.classList.add('selected');
        } else {
          showEvents(new Date(year, month, 1));
        }
      }
    }
  
    function showEvents(date) {
      const eventsContainer = document.getElementById('events-container');
      if (!eventsContainer) return;
  
      function addToCalendar(event) {
        const startTime = event.time.split(' - ')[0];
        const endTime = event.time.split(' - ')[1];
        const eventDate = new Date(date);
        const [startHour, startMinute] = startTime.split(':');
        eventDate.setHours(parseInt(startHour), parseInt(startMinute));
  
        const reminder = window.confirm(`Would you like to set a reminder for "${event.title}"?`);
        if (reminder) {
          // Create calendar event
          const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
          window.open(calendarUrl, '_blank');
        }
      }
  
      // Filter events for the selected date
      const eventsForDate = eventsData.filter(event => {
        return event.date.getDate() === date.getDate() && 
               event.date.getMonth() === date.getMonth() && 
               event.date.getFullYear() === date.getFullYear();
      });
  
      eventsContainer.innerHTML = '';
  
      if (eventsForDate.length === 0) {
        eventsContainer.innerHTML = '<p>No events scheduled for this date.</p>';
        return;
      }
  
      eventsForDate.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
          <div class="event-item-time">${event.time}</div>
          <h4 class="event-item-title">${event.title}</h4>
          <div class="event-item-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
          <p>${event.description}</p>
          <button onclick="addToCalendar(${JSON.stringify(event)})">Add to Calendar</button>
        `;
        eventsContainer.appendChild(eventItem);
      });
    }
  }
  
  function loadContestWinners() {
    const contestWinnersGrid = document.querySelector('.contest-winners-grid');
  
    if (!contestWinnersGrid) return;
  
    contestWinnersData.forEach(winner => {
      const winnerCard = document.createElement('div');
      winnerCard.className = 'activity-card';
      winnerCard.innerHTML = `
        <a href="#" class="card-link" onclick="showContestWinnerDetails(${winner.id}); return false;">
          <div class="activity-card-img">
            <img src="${winner.image}" alt="${winner.title}">
          </div>
          <div class="activity-card-content">
            <span class="activity-card-badge">${winner.position}</span>
            <h3>${winner.title}</h3>
            <p><strong>${winner.participants}</strong></p>
            <p>${winner.date}</p>
          </div>
        </a>
      `;
      contestWinnersGrid.appendChild(winnerCard);
    });
  }
  
  function loadGuestTalks() {
    const guestTalksGrid = document.querySelector('.guest-talks-grid');
  
    if (!guestTalksGrid) return;
  
    guestTalksData.forEach(talk => {
      const talkCard = document.createElement('div');
      talkCard.className = 'activity-card';
      talkCard.innerHTML = `
        <a href="#" class="card-link" onclick="showGuestTalkDetails(${talk.id}); return false;">
          <div class="activity-card-img">
            <img src="${talk.image}" alt="${talk.title}">
          </div>
          <div class="activity-card-content">
            <span class="activity-card-badge">${talk.date}</span>
            <h3>${talk.title}</h3>
            <p><strong>Speaker:</strong> ${talk.speaker}</p>
          </div>
        </a>
      `;
      guestTalksGrid.appendChild(talkCard);
    });
  }
  
  // Gallery Section Functions
  function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
  
    if (!galleryGrid) return;
  
    galleryImagesData.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <a href="#" onclick="showGalleryDetail(${item.id}); return false;">
          <img src="${item.image}" alt="${item.title}">
        </a>
      `;
      galleryGrid.appendChild(galleryItem);
    });
  }
  
  // Tab Switching
  function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
  
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Find the parent tabs container
        const tabsContainer = this.closest('.tabs');
        if (!tabsContainer) return;
  
        // Remove active class from all buttons in this container
        tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
        });
  
        // Add active class to clicked button
        this.classList.add('active');
  
        // Get the tab id from data attribute
        const tabId = this.getAttribute('data-tab');
  
        // Remove active class from all tab panes in this container
        tabsContainer.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('active');
        });
  
        // Add active class to corresponding tab pane
        const targetPane = document.getElementById(tabId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }
  
  // Smooth Scrolling
  function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Get the target section id from href
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          // Close mobile menu if open
          const navMenu = document.querySelector('.nav-menu');
          if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
          }
  
          // Remove active class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));
  
          // Add active class to clicked link
          this.classList.add('active');
  
          // Scroll to the target section
          window.scrollTo({
            top: targetSection.offsetTop - 90, // Account for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
  
      // Get all sections
      const sections = document.querySelectorAll('section');
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));
  
          // Add active class to corresponding nav link
          const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    });
  }
  
  // Form Submission
  function setupFormSubmission() {
    const applicationForm = document.getElementById('application-form');
  
    if (!applicationForm) return;
  
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get all form data
      const formData = new FormData(applicationForm);
      const formDataObj = {};
      formData.forEach((value, key) => {
        // Handle checkbox values
        if (key === 'tracks') {
          if (!formDataObj[key]) {
            formDataObj[key] = [];
          }
          formDataObj[key].push(value);
        } else {
          formDataObj[key] = value;
        }
      });
  
      // Validate form data
      const fullName = formDataObj['full-name'];
      const email = formDataObj['email'];
      const studentId = formDataObj['student-id'];
      const year = formDataObj['year'];
      const department = formDataObj['department'];
      const tracks = formDataObj['tracks'];
      const whyJoin = formDataObj['why-join'];
  
      if (!fullName || !email || !studentId || !year || !department || !tracks || !whyJoin) {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Create success message modal
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>Application Submitted!</h2>
          <div class="success-message">
            <i class="fas fa-check-circle success-icon"></i>
            <p>Thank you, ${fullName}! Your application to join the BITS Pilani Coding Club has been submitted successfully.</p>
            <p>We'll review your information and contact you at ${email} with further details.</p>
            <p>If you have any questions, feel free to reach out to us at codingclub@pilani.bits-pilani.ac.in</p>
          </div>
          <button class="btn btn-primary" onclick="document.body.removeChild(this.closest('.modal'))">Close</button>
        </div>
      `;
  
      document.body.appendChild(modal);
  
      // Add event listener to close button
      const closeBtn = modal.querySelector('.close-btn');
      closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
      });
  
      // Close modal when clicking outside of it
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          document.body.removeChild(modal);
        }
      });
  
      // Reset form
      applicationForm.reset();
    });
  }