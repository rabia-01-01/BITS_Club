// Projects data for BITS Pilani Coding Club website
const projects = [
    {
      id: 1,
      title: "AI-Powered Campus Assistant",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A virtual assistant that helps students navigate campus resources and information.",
      fullDescription: `
        <p>The AI-Powered Campus Assistant is an innovative project developed by the BITS Pilani Coding Club to enhance 
        the student experience on campus. This virtual assistant helps students access information, resources, and services 
        more efficiently.</p>
        
        <p>Using natural language processing (NLP) and machine learning, the assistant can answer queries about campus 
        facilities, course schedules, faculty information, event timings, and more. It's available 24/7 through a 
        user-friendly web interface and mobile app.</p>
        
        <p>The system is trained on a comprehensive database of campus information and continuously learns from user 
        interactions to improve its responses over time. It can also provide personalized recommendations based on a 
        student's preferences and past inquiries.</p>
      `,
      teamSize: 8,
      duration: "6 months",
      status: "Completed",
      githubUrl: "https://github.com/BITSCodingClub/campus-assistant",
      demoUrl: "https://campus-assistant.bits-pilani.ac.in",
      features: [
        {
          title: "Voice Recognition",
          description: "Interact with the assistant using natural speech on both web and mobile platforms.",
          icon: "fas fa-microphone"
        },
        {
          title: "Personalized Recommendations",
          description: "Receive customized suggestions based on your preferences and past interactions.",
          icon: "fas fa-user-check"
        },
        {
          title: "Real-time Updates",
          description: "Get the latest information about events, notices, and changes on campus.",
          icon: "fas fa-bell"
        },
        {
          title: "Multi-language Support",
          description: "Communicate in English, Hindi, and several other regional languages.",
          icon: "fas fa-language"
        }
      ],
      technologies: [
        "Python", "TensorFlow", "React", "Node.js", "MongoDB", "Flask", "AWS"
      ],
      progress: [
        { title: "Research & Planning", value: 100 },
        { title: "Development", value: 100 },
        { title: "Testing", value: 100 },
        { title: "Documentation", value: 90 }
      ],
      team: [
        {
          name: "Rahul Sharma",
          role: "Project Lead",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Priya Patel",
          role: "ML Engineer",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Vikram Singh",
          role: "Backend Developer",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        }
      ],
      gallery: [
        {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "The team working on the NLP model"
        },
        {
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "Development of the web interface"
        },
        {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "Testing session with student volunteers"
        }
      ]
    },
    {
      id: 2,
      title: "Smart Attendance System",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Automated attendance tracking using facial recognition and RFID technology.",
      fullDescription: `
        <p>The Smart Attendance System is a cutting-edge solution developed to streamline attendance tracking across 
        the BITS Pilani campus. This system combines facial recognition technology with RFID identification to provide 
        a robust, efficient, and reliable attendance management solution.</p>
        
        <p>Traditional attendance systems often suffer from issues like proxy attendance, time-consuming roll calls, and 
        manual record-keeping errors. Our system addresses these challenges with a multi-layered verification approach that 
        ensures accuracy while saving valuable class time.</p>
        
        <p>The system is currently deployed in several lecture halls and laboratories, with plans to expand campus-wide. 
        It integrates with the institute's existing management system to provide real-time attendance data, comprehensive 
        reports, and analytics.</p>
      `,
      teamSize: 6,
      duration: "4 months",
      status: "Active",
      githubUrl: "https://github.com/BITSCodingClub/smart-attendance",
      demoUrl: null,
      features: [
        {
          title: "Dual Verification",
          description: "Uses both facial recognition and RFID cards for foolproof attendance tracking.",
          icon: "fas fa-id-card"
        },
        {
          title: "Real-time Notifications",
          description: "Instant alerts for students and faculty about attendance status.",
          icon: "fas fa-bell"
        },
        {
          title: "Analytics Dashboard",
          description: "Comprehensive reporting and analytics for administrators and faculty.",
          icon: "fas fa-chart-bar"
        },
        {
          title: "Offline Mode",
          description: "Continues to function even during internet outages with local data storage.",
          icon: "fas fa-wifi"
        }
      ],
      technologies: [
        "Python", "TensorFlow", "OpenCV", "Raspberry Pi", "Arduino", "React", "Node.js", "MongoDB"
      ],
      progress: [
        { title: "Research & Planning", value: 100 },
        { title: "Hardware Development", value: 90 },
        { title: "Software Development", value: 85 },
        { title: "Testing", value: 75 },
        { title: "Deployment", value: 60 }
      ],
      team: [
        {
          name: "Arjun Mehta",
          role: "Project Lead",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Neha Gupta",
          role: "Hardware Engineer",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Akash Patel",
          role: "ML Engineer",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        }
      ],
      gallery: [
        {
          image: "https://images.unsplash.com/photo-1551617409-42670f405c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "Hardware setup in lecture hall"
        },
        {
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "Backend development and testing"
        },
        {
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "Team planning session"
        }
      ]
    },
    {
      id: 3,
      title: "Campus Navigation App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A mobile app that helps new students find their way around campus.",
      fullDescription: `
        <p>The Campus Navigation App is a user-friendly mobile application designed to help students, visitors, and new 
        faculty members navigate the expansive BITS Pilani campus with ease. Featuring detailed maps, real-time directions, 
        and location-based services, the app makes campus exploration intuitive and stress-free.</p>
        
        <p>New students often find it challenging to locate specific buildings, classrooms, or facilities during their first 
        few weeks on campus. Our app addresses this common issue by providing accurate indoor and outdoor navigation, even 
        in areas where GPS signals are weak or unavailable.</p>
        
        <p>Beyond basic navigation, the app includes features like location sharing, points of interest, event information, 
        and integration with the campus shuttle schedule to enhance the overall campus experience for all users.</p>
      `,
      teamSize: 5,
      duration: "3 months",
      status: "Completed",
      githubUrl: "https://github.com/BITSCodingClub/campus-navigator",
      demoUrl: "https://play.google.com/store/apps/details?id=com.bits.campusnavigator",
      features: [
        {
          title: "Indoor & Outdoor Navigation",
          description: "Seamless navigation between indoor and outdoor spaces with accurate directions.",
          icon: "fas fa-map-marked-alt"
        },
        {
          title: "Points of Interest",
          description: "Comprehensive database of campus facilities, services, and landmarks.",
          icon: "fas fa-map-pin"
        },
        {
          title: "Shuttle Tracker",
          description: "Real-time tracking of campus shuttle buses with ETA information.",
          icon: "fas fa-bus"
        },
        {
          title: "Location Sharing",
          description: "Share your location with friends or classmates for easy meetups.",
          icon: "fas fa-share-alt"
        }
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Firebase", "Google Maps API", "BLE Beacons"
      ],
      progress: [
        { title: "Research & Planning", value: 100 },
        { title: "UI/UX Design", value: 100 },
        { title: "Frontend Development", value: 100 },
        { title: "Backend Development", value: 100 },
        { title: "Testing", value: 100 },
        { title: "Release", value: 100 }
      ],
      team: [
        {
          name: "Deepika Shah",
          role: "Project Lead",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Sameer Khan",
          role: "UI/UX Designer",
          image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
          }
        }
      ],
      gallery: [
        {
          image: "https://images.unsplash.com/photo-1584905179208-7c9920861110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "User testing with students"
        },
        {
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          caption: "App development in progress"
        }
      ]
    }
  ];