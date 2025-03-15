// Updates data for BITS Pilani Coding Club website

// Latest updates
const updates = [
    {
      id: 1,
      title: "New ML Workshop Series",
      date: "March 12, 2025",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "Join our 4-week machine learning workshop series starting next month. Learn from industry experts!",
      fullContent: `
        <p>The BITS Pilani Coding Club is excited to announce a comprehensive 4-week Machine Learning Workshop Series starting on April 10, 2025. This hands-on workshop series is designed to take participants from ML basics to implementing advanced models.</p>
        
        <p>We've partnered with industry experts from Google, Microsoft, and leading AI startups to bring you an immersive learning experience. Each session will combine theoretical knowledge with practical implementation, allowing participants to build real ML applications.</p>
        
        <h3>Workshop Schedule:</h3>
        <ul>
          <li><strong>Week 1 (April 10):</strong> ML Fundamentals and Mathematics</li>
          <li><strong>Week 2 (April 17):</strong> Supervised Learning Algorithms</li>
          <li><strong>Week 3 (April 24):</strong> Neural Networks and Deep Learning</li>
          <li><strong>Week 4 (May 1):</strong> Project Implementation and Deployment</li>
        </ul>
        
        <p>The workshops will be held every Saturday from 2:00 PM to 5:00 PM in the Computer Science Lab 3. All participants will receive workshop materials, access to cloud computing resources, and certificates upon completion.</p>
        
        <p>Registration is open to all BITS Pilani students. Limited seats are available, so register early to secure your spot!</p>
      `
    },
    {
      id: 2,
      title: "Hackathon Registration Open",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "The annual CodeFest 2025 registration is now open. Early bird tickets available until March 20.",
      fullContent: `
        <p>Registration for CodeFest 2025, the annual flagship hackathon of BITS Pilani Coding Club, is now officially open! This 36-hour coding marathon will take place from April 15-16, 2025, bringing together the brightest minds to collaborate, innovate, and compete.</p>
        
        <p>This year's theme is "Technology for Sustainable Development," focusing on innovative solutions to address environmental and social challenges through technology. Participants will have the opportunity to work on projects related to clean energy, waste management, education, healthcare, and more.</p>
        
        <h3>Why Participate in CodeFest 2025?</h3>
        <ul>
          <li>Prizes worth over ₹5,00,000</li>
          <li>Mentorship from industry experts</li>
          <li>Networking opportunities with tech companies</li>
          <li>Potential internship and job offers for top performers</li>
          <li>Free food, beverages, and CodeFest merchandise</li>
        </ul>
        
        <p>Early bird registration is available until March 20, offering a 30% discount on the registration fee. Both individual participants and teams of up to 4 members are welcome to register.</p>
        
        <p>Don't miss this opportunity to showcase your skills, learn from peers, and potentially win exciting prizes! Register now through the link in our bio or visit the Coding Club office.</p>
      `
    },
    {
      id: 3,
      title: "New Faculty Advisor",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: "We're excited to welcome Dr. Sharma from the Computer Science department as our new faculty advisor.",
      fullContent: `
        <p>The BITS Pilani Coding Club is delighted to announce that Dr. Ananya Sharma from the Computer Science department has taken on the role of Faculty Advisor for our club. Dr. Sharma will be guiding our activities, events, and initiatives starting from this semester.</p>
        
        <p>Dr. Sharma brings a wealth of experience to this role. With a Ph.D. in Computer Science from MIT and over 10 years of industry experience at companies like Google and Microsoft, she has expertise in machine learning, distributed systems, and software engineering. Her research work has been published in top conferences like ICML, NeurIPS, and OSDI.</p>
        
        <p>Under Dr. Sharma's guidance, we plan to introduce several new initiatives, including:</p>
        <ul>
          <li>A mentorship program pairing junior students with seniors and alumni</li>
          <li>Research opportunities in cutting-edge areas of computer science</li>
          <li>Industry collaboration projects</li>
          <li>Enhanced competitive programming training</li>
        </ul>
        
        <p>We would also like to extend our heartfelt gratitude to Dr. Rajesh Kumar, our outgoing faculty advisor, for his invaluable support and guidance over the past three years. His contributions have been instrumental in the growth and success of our club.</p>
        
        <p>Dr. Sharma will be hosting an introductory session on March 15, 2025, at 5:00 PM in the NAB Auditorium. All club members and interested students are encouraged to attend.</p>
      `
    }
  ];
  
  // Workshop data
  const workshops = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      date: "April 10, 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "CS Lab 3",
      instructor: "Dr. Rahul Mehta",
      description: "An introduction to machine learning concepts and techniques with hands-on exercises.",
      prerequisites: "Basic Python programming, Familiarity with NumPy and Pandas libraries",
      registration: {
        deadline: "April 8, 2025",
        fee: "₹200 (Club members), ₹400 (Non-members)",
        link: "#"
      }
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "April 5-6, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "CS Lab 2",
      instructor: "Arjun Kumar, Frontend Developer at Microsoft",
      description: "A comprehensive two-day bootcamp covering HTML, CSS, JavaScript, and modern web frameworks.",
      prerequisites: "Basic understanding of programming concepts",
      registration: {
        deadline: "April 3, 2025",
        fee: "₹500 (Club members), ₹800 (Non-members)",
        link: "#"
      }
    },
    {
      id: 3,
      title: "Blockchain Technology Workshop",
      date: "March 25, 2025",
      time: "3:00 PM - 6:00 PM",
      venue: "NAB Conference Room",
      instructor: "Vikram Singh, Blockchain Engineer at Ethereum Foundation",
      description: "An introduction to blockchain technology, smart contracts, and decentralized applications.",
      prerequisites: "Knowledge of JavaScript or Solidity",
      registration: {
        deadline: "March 23, 2025",
        fee: "₹300 (Club members), ₹500 (Non-members)",
        link: "#"
      }
    }
  ];