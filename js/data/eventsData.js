// Events data for BITS Pilani Coding Club website

const eventsData = [
    {
      id: 1,
      title: "BITS HACK 2025",
      date: "April 15-16, 2025",
      time: "48 Hours",
      location: "BITS Pilani Campus",
      organizer: "Coding Club Core Team",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Our flagship 48-hour hackathon focused on AI/ML, Blockchain, and IoT solutions.",
      fullDescription: `
        <p>BITS HACK 2025 is back with bigger challenges and better prizes! This year's themes include:</p>
        <ul>
          <li>AI for Social Good: Leveraging machine learning to solve community challenges</li>
          <li>Web3 Innovation: Building decentralized solutions for the future</li>
          <li>Smart IoT Systems: Creating connected solutions for real-world problems</li>
        </ul>
        <p>Total Prize Pool: ₹2,00,000 with special sponsor tracks from Microsoft, Google Cloud, and AWS.</p>
      `,
      features: ["24/7 Mentorship", "Cloud Credits", "Hardware Lab Access", "Industry Expert Sessions"]
    },
    {
      id: 2,
      title: "Competitive Programming League",
      date: "Ongoing",
      time: "Weekly Contests",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Weekly coding contests to improve your algorithmic skills.",
      fullDescription: `
        <p>Join our weekly coding competitions designed to enhance your problem-solving abilities:</p>
        <ul>
          <li>Division-based contests for all skill levels</li>
          <li>Focus on important topics: Dynamic Programming, Graphs, etc.</li>
          <li>Mock interviews with industry professionals</li>
          <li>Special preparation tracks for ICPC and company interviews</li>
        </ul>
      `,
      leaderboard: {
        updated: "Weekly",
        topPerformers: true
      }
    },
    {
      id: 3,
      title: "Project Incubator Program",
      date: "May 2025",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "6-week intensive program to build production-ready projects.",
      fullDescription: `
        <p>Turn your ideas into reality with our structured project development program:</p>
        <ul>
          <li>Weekly sprints with dedicated mentors</li>
          <li>Technical workshops on modern tech stack</li>
          <li>Code reviews by industry experts</li>
          <li>Final demo day with potential investors</li>
        </ul>
        <p>Current Projects:</p>
        <ul>
          <li>AI-powered Campus Navigation System</li>
          <li>Blockchain-based Academic Credential Verification</li>
          <li>Smart IoT Energy Management for Campus</li>
        </ul>
      `,
      mentors: ["Industry Professionals", "Alumni Network", "Faculty Advisors"]
    },
    {
      id: 4,
      title: "Tech Talk Series",
      date: "Monthly",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Monthly sessions with tech leaders and innovators.",
      fullDescription: `
        <p>Upcoming Talks:</p>
        <ul>
          <li>Building Scalable Systems at Google - Senior SWE, Google</li>
          <li>Future of AI and Ethics - Research Scientist, OpenAI</li>
          <li>Startup Journey: From BITS to Silicon Valley - Alumni Founder</li>
        </ul>
      `,
      pastSpeakers: ["Microsoft Research Team", "Meta AI Engineers", "Successful Alumni Entrepreneurs"]
    }
  ];
  
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Full Stack Development Bootcamp",
      duration: "4 Weeks",
      stack: ["React", "Node.js", "MongoDB", "AWS"],
      projects: ["E-commerce Platform", "Social Media Dashboard"]
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      duration: "2 Weeks",
      topics: ["Neural Networks", "Computer Vision", "NLP"],
      projects: ["Image Classification", "Sentiment Analysis"]
    }
  ];
  
  const achievements = [
    {
      title: "ACM-ICPC World Finals Qualification",
      team: "Team BitCoders",
      rank: "Top 50 Globally"
    },
    {
      title: "Microsoft Imagine Cup",
      project: "Smart Campus Solution",
      achievement: "Asia Regional Finalist"
    }
  ];
  
  export { eventsData, upcomingWorkshops, achievements };