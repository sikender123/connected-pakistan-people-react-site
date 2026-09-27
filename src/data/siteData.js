// ============================================================
// SITE-WIDE DATA
// ============================================================

// ---- NAV MENU TREE ----
export const nav = [
  { label: 'All People', to: '/people' },
  {
    label: 'All CPC', dropdown: true,
    children: [
      { label: 'CPC 2024', to: '/cpc/cpc-2024' },
      { label: 'CPC 2023', to: '/cpc/cpc-2023' },
      { label: 'CPC 2022', to: '/cpc/cpc-2022' },
      { label: 'CPC 2021', to: '/cpc/cpc-2021' },
    ],
  },
  {
    label: 'CWC', dropdown: true,
    children: [
      { label: 'CWC22', to: '/cwc/cwc22' },
      { label: 'CWC24', to: '/cwc/cwc24' },
    ],
  },
  { label: 'Events', to: '/events/innoventure-club-26' },
  {
    label: 'KX', dropdown: true,
    children: [
      { label: 'KX Lahore', to: '/kx/lahore' },
      { label: 'KX Members', to: '/kx/members' },
    ],
  },
  {
    label: 'Innoventure Club', dropdown: true,
    children: [
      { label: 'Innoventure Club 26', to: '/innoventure-club/26' },
      { label: 'Innoventure Club 25', to: '/innoventure-club/25' },
      { label: 'Innoventure Club 24', to: '/innoventure-club/24' },
    ],
  },
  {
    label: '30Under30', dropdown: true,
    children: [
      { label: 'Awardees 25', to: '/30under30/awardees-25' },
      { label: 'Awardees 26', to: '/30under30/awardees-26' },
      { label: 'Speakers', to: '/30under30/speakers' },
      { label: 'Premium', to: '/30under30/premium' },
    ],
  },
  {
    label: 'Growth Summit', dropdown: true,
    children: [
      { label: 'Growth Summit', to: '/growth-summit' },
      { label: 'Growth Summit 05', to: '/growth-summit/05' },
      { label: 'Growth Summit 04', to: '/growth-summit/04' },
      { label: 'Growth Summit 03', to: '/growth-summit/03' },
      { label: 'Growth Summit 02', to: '/growth-summit/02' },
      { label: 'Growth Summit 01', to: '/growth-summit/01' },
    ],
  },
];

// ---- GLOBAL PEOPLE INDEX ----
export const people = [
  // IC26 Speakers
  { slug: 'dr-arif-alvi', name: 'Dr. Arif Alvi', role: 'Former President', org: 'Pakistan', likes: 452, views: 8943, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', bio: 'Former President of Pakistan, Dr. Arif Alvi is a visionary leader who has championed digital Pakistan and technology-driven growth throughout his career. He has been a speaker at numerous international forums.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'Innoventure Club 25', to: '/innoventure-club/25', date: 'Oct 5, 2025' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'zia-chishti', name: 'Zia Chishti', role: 'CEO', org: 'Afiniti', likes: 380, views: 6721, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Zia Chishti is the founder and CEO of Afiniti, an AI company that has transformed customer engagement for Fortune 500 companies worldwide. One of Pakistan\'s most celebrated tech entrepreneurs.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'rabeel-warraich', name: 'Rabeel Warraich', role: 'Founder & CEO', org: 'Sarmayacar', likes: 341, views: 5832, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'Rabeel Warraich founded Sarmayacar, Pakistan\'s leading early-stage venture capital firm, with a mission to back transformative technology companies in Pakistan.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'Growth Summit 05', to: '/growth-summit/05', date: 'Mar 15, 2026' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'sara-naseem', name: 'Sara Naseem', role: 'Co-founder', org: 'Abhi Finance', likes: 295, views: 4918, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Sara Naseem is the co-founder of Abhi Finance, a fintech company that has revolutionized payroll financing and embedded finance solutions for employees in Pakistan.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'CPC 2024', to: '/cpc/cpc-2024', date: 'Dec 10, 2024' }], socials: { linkedin: '#', instagram: '#' } },
  { slug: 'faisal-sherjan', name: 'Faisal Sherjan', role: 'CEO', org: '1LINK', likes: 278, views: 4203, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Faisal Sherjan leads 1LINK, Pakistan\'s premier digital payments backbone, driving financial inclusion and interoperability across the country\'s banking ecosystem.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  { slug: 'kalsoom-lakhani', name: 'Kalsoom Lakhani', role: 'Co-founder', org: 'i2i Ventures', likes: 312, views: 5541, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Kalsoom Lakhani is the co-founder of i2i Ventures, Pakistan\'s first female-led VC firm. A trailblazer in Pakistan\'s startup ecosystem, she has invested in 20+ startups.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: '30Under30 Speakers', to: '/30under30/speakers', date: 'Jan 2026' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'maeen-siddiqui', name: 'Maeen Siddiqui', role: 'Managing Partner', org: 'PTVF', likes: 189, views: 3241, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', bio: 'Maeen Siddiqui is the Managing Partner at Pakistan Tech Venture Fund, focused on seed and Series A investments in Pakistan\'s technology sector.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  { slug: 'ali-mukhtar', name: 'Ali Mukhtar', role: 'Partner', org: 'Lakson Ventures', likes: 201, views: 3897, image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80', bio: 'Ali Mukhtar is a Partner at Lakson Venture Capital, one of Pakistan\'s most active corporate venture arms, investing in deep tech and consumer technology.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  // Attendees
  { slug: 'ahmed-khan', name: 'Ahmed Khan', role: 'Founder', org: 'TechPak', likes: 145, views: 2341, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80', bio: 'Ahmed Khan is the founder of TechPak, a B2B SaaS company helping Pakistani SMEs digitize their operations.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  { slug: 'zara-ali', name: 'Zara Ali', role: 'CEO', org: 'GreenTech PK', likes: 132, views: 2108, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'Zara Ali leads GreenTech PK, a cleantech startup focused on solar energy solutions for rural communities in Pakistan.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'CWC24', to: '/cwc/cwc24', date: 'Nov 2024' }], socials: { linkedin: '#', instagram: '#' } },
  { slug: 'usman-malik', name: 'Usman Malik', role: 'CTO', org: 'FinPakistan', likes: 98, views: 1876, image: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80', bio: 'Usman Malik is the CTO of FinPakistan, building open banking infrastructure for the next generation of fintech apps.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  { slug: 'ayesha-siddiqui', name: 'Ayesha Siddiqui', role: 'Head of Product', org: 'Rozgaar', likes: 167, views: 2654, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'Ayesha Siddiqui heads product at Rozgaar, Pakistan\'s leading freelance platform connecting over 500,000 skilled workers with global clients.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'bilal-ahmed', name: 'Bilal Ahmed', role: 'Investor', org: 'Pakistan Angels', likes: 88, views: 1654, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80', bio: 'Bilal Ahmed is an active angel investor and the co-organizer of Pakistan Angels Network, having made 40+ early-stage investments.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#' } },
  { slug: 'fatima-malik', name: 'Fatima Malik', role: 'COO', org: 'Daraz', likes: 211, views: 3102, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80', bio: 'Fatima Malik is the COO of Daraz Pakistan, the country\'s largest e-commerce platform, overseeing operations across the entire supply chain.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'CPC 2024', to: '/cpc/cpc-2024', date: 'Dec 10, 2024' }], socials: { linkedin: '#' } },
  { slug: 'hassan-raza', name: 'Hassan Raza', role: 'Founder', org: 'AgriPak', likes: 76, views: 1432, image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&q=80', bio: 'Hassan Raza is the founder of AgriPak, an agri-tech startup using AI and IoT to help Pakistani farmers improve crop yields.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'nadia-sheikh', name: 'Nadia Sheikh', role: 'MD', org: 'Sehat Kahani', likes: 143, views: 2341, image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80', bio: 'Nadia Sheikh is the Managing Director of Sehat Kahani, Pakistan\'s leading telehealth platform connecting patients with doctors across the country.', appearances: [{ event: 'Innoventure Club 26', to: '/innoventure-club/26', date: 'Sep 18, 2026' }, { event: 'Growth Summit 04', to: '/growth-summit/04', date: 'Sep 2025' }], socials: { linkedin: '#', instagram: '#' } },
  // CPC Speakers
  { slug: 'imran-baig', name: 'Imran Baig', role: 'Founder & CEO', org: 'Systems Ltd', likes: 267, views: 4832, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', bio: 'Imran Baig is a serial entrepreneur with over 20 years of experience in enterprise software and IT services.', appearances: [{ event: 'CPC 2024', to: '/cpc/cpc-2024', date: 'Dec 10, 2024' }], socials: { linkedin: '#' } },
  { slug: 'sadia-noor', name: 'Sadia Noor', role: 'MD', org: 'Engro Digital', likes: 198, views: 3567, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'Sadia Noor leads digital transformation at Engro Corporation, one of Pakistan\'s largest conglomerates.', appearances: [{ event: 'CPC 2024', to: '/cpc/cpc-2024', date: 'Dec 10, 2024' }, { event: 'CPC 2023', to: '/cpc/cpc-2023', date: 'Nov 2023' }], socials: { linkedin: '#' } },
  { slug: 'omar-qureshi', name: 'Omar Qureshi', role: 'Partner', org: 'McKinsey PK', likes: 176, views: 3102, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Omar Qureshi is a Partner at McKinsey & Company\'s Pakistan office, advising the country\'s top CEOs on strategy and transformation.', appearances: [{ event: 'CPC 2023', to: '/cpc/cpc-2023', date: 'Nov 2023' }, { event: 'CPC 2022', to: '/cpc/cpc-2022', date: 'Oct 2022' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'amina-khan', name: 'Amina Khan', role: 'Country Head', org: 'IFC Pakistan', likes: 231, views: 4021, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Amina Khan heads IFC\'s Pakistan operations, driving private sector development and sustainable investment across the country.', appearances: [{ event: 'CPC 2022', to: '/cpc/cpc-2022', date: 'Oct 2022' }, { event: 'CPC 2021', to: '/cpc/cpc-2021', date: 'Sep 2021' }], socials: { linkedin: '#' } },
  // KX Members
  { slug: 'tariq-mehmood', name: 'Tariq Mehmood', role: 'Chapter Lead', org: 'KX Lahore', likes: 89, views: 1632, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', bio: 'Tariq Mehmood leads the KX Lahore chapter, organizing monthly meetups for Pakistan\'s knowledge exchange community.', appearances: [{ event: 'KX Lahore', to: '/kx/lahore', date: 'Ongoing' }], socials: { linkedin: '#' } },
  { slug: 'rabia-qasim', name: 'Rabia Qasim', role: 'Member', org: 'KX Pakistan', likes: 67, views: 1245, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'Rabia Qasim is an active KX member and co-founder of a healthtech startup based in Lahore.', appearances: [{ event: 'KX Lahore', to: '/kx/lahore', date: 'Ongoing' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'danish-ali', name: 'Danish Ali', role: 'Member', org: 'KX Pakistan', likes: 54, views: 987, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Danish Ali is a software architect and active KX Pakistan member based in Lahore.', appearances: [{ event: 'KX Members', to: '/kx/members', date: 'Ongoing' }], socials: { linkedin: '#' } },
  // 30Under30
  { slug: 'ali-hassan-raza', name: 'Ali Hassan Raza', role: 'Awardee', org: '30Under30 2025', likes: 345, views: 5432, image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80', bio: 'Ali Hassan Raza is a 2025 30Under30 awardee, recognized for building Pakistan\'s first carbon credit marketplace at the age of 24.', appearances: [{ event: '30Under30 Awardees 25', to: '/30under30/awardees-25', date: 'Jan 2025' }], socials: { linkedin: '#', instagram: '#' } },
  { slug: 'hina-baig', name: 'Hina Baig', role: 'Awardee', org: '30Under30 2025', likes: 289, views: 4321, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Hina Baig is a 2025 30Under30 awardee and the founder of EduConnect, a platform democratizing quality education across Pakistan\'s rural areas.', appearances: [{ event: '30Under30 Awardees 25', to: '/30under30/awardees-25', date: 'Jan 2025' }], socials: { linkedin: '#' } },
  { slug: 'saad-mirza', name: 'Saad Mirza', role: 'Awardee', org: '30Under30 2026', likes: 312, views: 4871, image: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80', bio: 'Saad Mirza is a 2026 30Under30 awardee, having scaled his fintech startup to 1 million users in 18 months.', appearances: [{ event: '30Under30 Awardees 26', to: '/30under30/awardees-26', date: 'Jan 2026' }], socials: { linkedin: '#', twitter: '#' } },
  // Growth Summit
  { slug: 'kamran-ashraf', name: 'Kamran Ashraf', role: 'Keynote Speaker', org: 'Growth Summit', likes: 198, views: 3541, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80', bio: 'Kamran Ashraf is a growth marketing expert who has helped 50+ Pakistani startups scale their user acquisition.', appearances: [{ event: 'Growth Summit 05', to: '/growth-summit/05', date: 'Mar 2026' }, { event: 'Growth Summit 04', to: '/growth-summit/04', date: 'Sep 2025' }], socials: { linkedin: '#', twitter: '#' } },
  { slug: 'zaheer-hussain', name: 'Zaheer Hussain', role: 'Speaker', org: 'Growth Summit', likes: 156, views: 2876, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80', bio: 'Zaheer Hussain is a product growth specialist who has scaled SaaS products from 0 to 1 million users.', appearances: [{ event: 'Growth Summit 03', to: '/growth-summit/03', date: 'Mar 2025' }], socials: { linkedin: '#' } },
];

// ---- CPC EDITIONS ----
export const cpcEditions = [
  {
    slug: 'cpc-2024', year: '2024', title: 'Connected Pakistan Conference 2024',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    date: 'December 10, 2024', dateShort: 'Dec 10, 2024', time: '9:00 AM',
    location: 'Islamabad Serena Hotel', category: 'Conference', tier: 'Premium', isPaid: true,
    views: 28654, likes: 1243, organizer: 'Connected Pakistan',
    bio: 'The flagship Connected Pakistan Conference returned for its 4th edition, bringing together over 2000 of Pakistan\'s brightest entrepreneurs, investors, and innovators.',
    description: '<h2>CPC 2024: The Summit That Defined Pakistan\'s Tech Future</h2><p>Connected Pakistan Conference 2024 was the biggest edition yet, featuring over 80 speakers, 2000+ attendees, and a record-breaking pitch competition with PKR 10 million in prizes.</p><ul><li>80+ world-class speakers from 15 countries</li><li>2000+ attendees representing 300+ companies</li><li>PKR 10M startup pitch competition</li><li>15 workshops across 3 parallel tracks</li><li>Exclusive investor dinner for 100 attendees</li></ul>',
    speakers: [
      { slug: 'imran-baig', name: 'Imran Baig', role: 'Founder & CEO', org: 'Systems Ltd', likes: 267, views: 4832, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
      { slug: 'sara-naseem', name: 'Sara Naseem', role: 'Co-founder', org: 'Abhi Finance', likes: 295, views: 4918, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
      { slug: 'fatima-malik', name: 'Fatima Malik', role: 'COO', org: 'Daraz', likes: 211, views: 3102, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80' },
      { slug: 'sadia-noor', name: 'Sadia Noor', role: 'MD', org: 'Engro Digital', likes: 198, views: 3567, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    ],
    attendees: [
      { slug: 'ahmed-khan', name: 'Ahmed Khan', role: 'Founder', org: 'TechPak', likes: 145, views: 2341, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80' },
      { slug: 'bilal-ahmed', name: 'Bilal Ahmed', role: 'Investor', org: 'Pakistan Angels', likes: 88, views: 1654, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80' },
    ],
    accordionItems: [
      { title: 'Event Schedule', body: 'Day 1: Opening Keynotes & Workshops\nDay 2: Pitch Competition & Networking\nDay 3: Closing Ceremony & Gala Dinner' },
      { title: 'Venue Information', body: 'Islamabad Serena Hotel, Khayaban-e-Suhrawardy, Islamabad\nConference Halls A, B & C\nCapacity: 2000 attendees' },
    ],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/',  },
  },
  {
    slug: 'cpc-2023', year: '2023', title: 'Connected Pakistan Conference 2023',
    heroImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80',
    date: 'November 15, 2023', dateShort: 'Nov 15, 2023', time: '9:00 AM',
    location: 'Lahore Expo Centre', category: 'Conference', tier: 'Premium', isPaid: true,
    views: 22341, likes: 987, organizer: 'Connected Pakistan',
    bio: 'CPC 2023 brought together 1500 of Pakistan\'s top entrepreneurs and investors at the Lahore Expo Centre for two days of inspiration and connection.',
    description: '<h2>CPC 2023: Lahore\'s Biggest Innovation Summit</h2><p>Connected Pakistan Conference 2023 moved to Lahore for the first time, hosting 1500 attendees and 60 speakers at the iconic Lahore Expo Centre.</p>',
    speakers: [
      { slug: 'sadia-noor', name: 'Sadia Noor', role: 'MD', org: 'Engro Digital', likes: 198, views: 3567, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
      { slug: 'omar-qureshi', name: 'Omar Qureshi', role: 'Partner', org: 'McKinsey PK', likes: 176, views: 3102, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    ],
    attendees: [{ slug: 'zara-ali', name: 'Zara Ali', role: 'CEO', org: 'GreenTech PK', likes: 132, views: 2108, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }],
    accordionItems: [{ title: 'Event Highlights', body: '60+ speakers across 2 days\n1500 attendees\nPitch competition with PKR 5M prize pool\nPost-event networking dinner' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
  },
  {
    slug: 'cpc-2022', year: '2022', title: 'Connected Pakistan Conference 2022',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    date: 'October 20, 2022', dateShort: 'Oct 20, 2022', time: '9:00 AM',
    location: 'PC Hotel Karachi', category: 'Conference', tier: 'Standard', isPaid: true,
    views: 18923, likes: 743, organizer: 'Connected Pakistan',
    bio: 'CPC 2022 marked the post-pandemic return of Pakistan\'s premier business conference, attracting 1200 attendees to Karachi.',
    description: '<h2>CPC 2022: Pakistan\'s Comeback Conference</h2><p>After the pandemic, Connected Pakistan Conference 2022 was a triumphant return, bringing 1200 leaders together in Karachi.</p>',
    speakers: [
      { slug: 'omar-qureshi', name: 'Omar Qureshi', role: 'Partner', org: 'McKinsey PK', likes: 176, views: 3102, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { slug: 'amina-khan', name: 'Amina Khan', role: 'Country Head', org: 'IFC Pakistan', likes: 231, views: 4021, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    ],
    attendees: [{ slug: 'usman-malik', name: 'Usman Malik', role: 'CTO', org: 'FinPakistan', likes: 98, views: 1876, image: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80' }],
    accordionItems: [{ title: 'Event Highlights', body: '40+ speakers\n1200 attendees\nKarachi\'s first major post-pandemic summit' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/'  },
  },
  {
    slug: 'cpc-2021', year: '2021', title: 'Connected Pakistan Conference 2021',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    date: 'September 5, 2021', dateShort: 'Sep 5, 2021', time: '9:00 AM',
    location: 'Virtual & Islamabad', category: 'Conference', tier: 'Standard', isPaid: false,
    views: 45231, likes: 2341, organizer: 'Connected Pakistan',
    bio: 'CPC 2021 was a hybrid event combining an in-person gathering in Islamabad with a massive virtual audience of 45,000 online viewers.',
    description: '<h2>CPC 2021: Going Hybrid</h2><p>For the first time, Connected Pakistan Conference went hybrid, combining in-person attendance with a global online audience.</p>',
    speakers: [
      { slug: 'amina-khan', name: 'Amina Khan', role: 'Country Head', org: 'IFC Pakistan', likes: 231, views: 4021, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    ],
    attendees: [{ slug: 'hassan-raza', name: 'Hassan Raza', role: 'Founder', org: 'AgriPak', likes: 76, views: 1432, image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&q=80' }],
    accordionItems: [{ title: 'Event Format', body: 'Hybrid event\nIn-person: 500 attendees in Islamabad\nOnline: 45,000+ virtual attendees\n30+ speakers (in-person + virtual)' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
  },
];

// ---- INNOVENTURE EDITIONS ----
export const innoventureEditions = [
  {
    slug: '26', edition: 26, title: 'Innoventure Club 26',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
    date: 'Friday, Sep 18, 2026', dateShort: 'Sep 18, 2026', time: '12:00 PM',
    location: 'Utror Valley Izmis Meadows', category: 'Events', tier: 'Premium', isPaid: true,
    views: 14537, likes: 728, organizer: 'Connected Pakistan', id: 'ic26',
    eventSlug: 'innoventure-club-26',
    bio: 'The premier mountain entrepreneurship summit returns for its 26th edition in the breathtaking Utror Valley.',
    description: '<h2>Innoventure Club 26 – The Mountain Innovation Summit</h2><p>Join Pakistan\'s most ambitious entrepreneurs, investors, and innovators for four transformative days in Swat Valley.</p>',
    accordionItems: [{ title: 'Schedule', body: 'Day 1: Arrival & Welcome Ceremony\nDay 2: Innovation & Workshops\nDay 3: Venture Capital Day\nDay 4: Closing Ceremony at BaghDheri' }],
    speakers: [
      { slug: 'dr-arif-alvi', name: 'Dr. Arif Alvi', role: 'Former President', org: 'Pakistan', likes: 452, views: 8943, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
      { slug: 'zia-chishti', name: 'Zia Chishti', role: 'CEO', org: 'Afiniti', likes: 380, views: 6721, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { slug: 'rabeel-warraich', name: 'Rabeel Warraich', role: 'Founder & CEO', org: 'Sarmayacar', likes: 341, views: 5832, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
      { slug: 'kalsoom-lakhani', name: 'Kalsoom Lakhani', role: 'Co-founder', org: 'i2i Ventures', likes: 312, views: 5541, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    ],
    attendees: [
      { slug: 'ahmed-khan', name: 'Ahmed Khan', role: 'Founder', org: 'TechPak', likes: 145, views: 2341, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80' },
      { slug: 'fatima-malik', name: 'Fatima Malik', role: 'COO', org: 'Daraz', likes: 211, views: 3102, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80' },
    ],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    specialActivity: { title: 'Buffet Lunch and Closing Ceremony', date: 'Monday, Sep 21, 2026', time: '2:00 PM', location: 'BaghDheri' },
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Innoventure Club 26 – Official Teaser' },
      { id: 'M7lc1UVf-VE', title: 'Pakistan\'s Startup Revolution' },
      { id: 'o_joulYVt9U', title: 'Utror Valley: The Perfect Innovation Retreat' },
    ],
    dateIso: '2026-09-18T12:00:00',
  },
  {
    slug: '25', edition: 25, title: 'Innoventure Club 25',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    date: 'October 5, 2025', dateShort: 'Oct 5, 2025', time: '11:00 AM',
    location: 'Fairy Meadows, Gilgit-Baltistan', category: 'Events', tier: 'Premium', isPaid: true,
    views: 11892, likes: 634, organizer: 'Connected Pakistan', id: 'ic25',
    eventSlug: 'innoventure-club-25',
    bio: 'Innoventure Club 25 was held at the iconic Fairy Meadows with stunning views of Nanga Parbat.',
    description: '<h2>Innoventure Club 25 – Fairy Meadows Summit</h2><p>The 25th edition of Innoventure Club was held at the breathtaking Fairy Meadows, with Nanga Parbat as the backdrop.</p>',
    accordionItems: [{ title: 'Event Highlights', body: 'Location: Fairy Meadows, Gilgit-Baltistan\n500+ attendees\n40+ speakers\nHelicopter transfers available' }],
    speakers: [
      { slug: 'dr-arif-alvi', name: 'Dr. Arif Alvi', role: 'Former President', org: 'Pakistan', likes: 452, views: 8943, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
      { slug: 'rabeel-warraich', name: 'Rabeel Warraich', role: 'Founder & CEO', org: 'Sarmayacar', likes: 341, views: 5832, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    ],
    attendees: [{ slug: 'nadia-sheikh', name: 'Nadia Sheikh', role: 'MD', org: 'Sehat Kahani', likes: 143, views: 2341, image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80' }],
    socialLinks: { facebook: 'https://facebook.asad.shabbir.944/', },
    videos: [{ id: 'M7lc1UVf-VE', title: 'IC25 Highlights Reel' }],
    dateIso: '2025-10-05T11:00:00',
  },
  {
    slug: '24', edition: 24, title: 'Innoventure Club 24',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
    date: 'September 12, 2024', dateShort: 'Sep 12, 2024', time: '10:00 AM',
    location: 'Naltar Valley, Gilgit', category: 'Events', tier: 'Premium', isPaid: true,
    views: 9643, likes: 521, organizer: 'Connected Pakistan', id: 'ic24',
    eventSlug: 'innoventure-club-24',
    bio: 'Innoventure Club 24 was held in the vibrant Naltar Valley, known for its colorful lakes and pine forests.',
    description: '<h2>Innoventure Club 24 – Naltar Valley</h2><p>The 24th edition brought together 400 participants in the stunning Naltar Valley, known for its vibrant blue, green, and orange lakes.</p>',
    accordionItems: [{ title: 'Event Highlights', body: '400 attendees\n35+ speakers\nColorful lakes tour included\nCampfire sessions nightly' }],
    speakers: [
      { slug: 'zia-chishti', name: 'Zia Chishti', role: 'CEO', org: 'Afiniti', likes: 380, views: 6721, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { slug: 'kalsoom-lakhani', name: 'Kalsoom Lakhani', role: 'Co-founder', org: 'i2i Ventures', likes: 312, views: 5541, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    ],
    attendees: [{ slug: 'zara-ali', name: 'Zara Ali', role: 'CEO', org: 'GreenTech PK', likes: 132, views: 2108, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    videos: [{ id: 'aqz-KE-bpKQ', title: 'IC24 – Naltar Valley Highlights' }],
    dateIso: '2024-09-12T10:00:00',
  },
];

// ---- CWC EDITIONS ----
export const cwcEditions = [
  {
    slug: 'cwc24', year: '2024', title: 'Connected Women Conference 2024',
    heroImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80',
    date: 'November 20, 2024', dateShort: 'Nov 20, 2024', time: '9:00 AM',
    location: 'Karachi Marriott Hotel', category: 'Conference', tier: 'Premium', isPaid: true,
    views: 16432, likes: 892, organizer: 'Connected Pakistan',
    bio: 'Connected Women Conference 2024 celebrated Pakistan\'s most inspiring women leaders and entrepreneurs.',
    description: '<h2>CWC 2024: Empowering Pakistan\'s Women Leaders</h2><p>The 2024 edition of Connected Women Conference brought together 1000+ women leaders for a day of inspiration, networking, and empowerment.</p>',
    speakers: [
      { slug: 'sara-naseem', name: 'Sara Naseem', role: 'Co-founder', org: 'Abhi Finance', likes: 295, views: 4918, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
      { slug: 'kalsoom-lakhani', name: 'Kalsoom Lakhani', role: 'Co-founder', org: 'i2i Ventures', likes: 312, views: 5541, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
      { slug: 'zara-ali', name: 'Zara Ali', role: 'CEO', org: 'GreenTech PK', likes: 132, views: 2108, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    ],
    attendees: [
      { slug: 'ayesha-siddiqui', name: 'Ayesha Siddiqui', role: 'Head of Product', org: 'Rozgaar', likes: 167, views: 2654, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
      { slug: 'fatima-malik', name: 'Fatima Malik', role: 'COO', org: 'Daraz', likes: 211, views: 3102, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80' },
      { slug: 'nadia-sheikh', name: 'Nadia Sheikh', role: 'MD', org: 'Sehat Kahani', likes: 143, views: 2341, image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80' },
      { slug: 'hina-baig', name: 'Hina Baig', role: 'Awardee', org: '30Under30 2025', likes: 289, views: 4321, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    ],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/n', },
  },
  {
    slug: 'cwc22', year: '2022', title: 'Connected Women Conference 2022',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
    date: 'March 8, 2022', dateShort: 'Mar 8, 2022', time: '9:00 AM',
    location: 'Lahore PC Hotel', category: 'Conference', tier: 'Standard', isPaid: false,
    views: 12543, likes: 678, organizer: 'Connected Pakistan',
    bio: 'CWC 2022 on International Women\'s Day brought together 600 women leaders from across Pakistan.',
    description: '<h2>CWC 2022: Women Changing Pakistan</h2><p>On International Women\'s Day, Connected Women Conference 2022 honored Pakistan\'s most impactful women across business, tech, and social impact.</p>',
    speakers: [
      { slug: 'amina-khan', name: 'Amina Khan', role: 'Country Head', org: 'IFC Pakistan', likes: 231, views: 4021, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
      { slug: 'sadia-noor', name: 'Sadia Noor', role: 'MD', org: 'Engro Digital', likes: 198, views: 3567, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    ],
    attendees: [
      { slug: 'rabia-qasim', name: 'Rabia Qasim', role: 'Member', org: 'KX Pakistan', likes: 67, views: 1245, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    ],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/',  },
  },
];

// ---- KX DATA ----
export const kxData = {
  chapters: [
    { slug: 'lahore', name: 'KX Lahore', city: 'Lahore', members: 450, founded: '2019', description: 'The Lahore chapter of Knowledge Exchange Pakistan, hosting monthly meetups for entrepreneurs and professionals.' },
    { slug: 'karachi', name: 'KX Karachi', city: 'Karachi', members: 380, founded: '2020', description: 'The Karachi chapter fostering knowledge sharing and networking among Pakistan\'s business community.' },
    { slug: 'islamabad', name: 'KX Islamabad', city: 'Islamabad', members: 290, founded: '2021', description: 'The capital chapter connecting government, tech, and business professionals.' },
  ],
  members: [
    { slug: 'tariq-mehmood', name: 'Tariq Mehmood', role: 'Chapter Lead', org: 'KX Lahore', likes: 89, views: 1632, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { slug: 'rabia-qasim', name: 'Rabia Qasim', role: 'Member', org: 'KX Pakistan', likes: 67, views: 1245, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    { slug: 'danish-ali', name: 'Danish Ali', role: 'Member', org: 'KX Pakistan', likes: 54, views: 987, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { slug: 'ahmed-khan', name: 'Ahmed Khan', role: 'Member', org: 'KX Pakistan', likes: 78, views: 1432, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80' },
    { slug: 'usman-malik', name: 'Usman Malik', role: 'Member', org: 'KX Pakistan', likes: 61, views: 1123, image: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80' },
    { slug: 'zara-ali', name: 'Zara Ali', role: 'Member', org: 'KX Pakistan', likes: 92, views: 1654, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    { slug: 'bilal-ahmed', name: 'Bilal Ahmed', role: 'Member', org: 'KX Pakistan', likes: 45, views: 876, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80' },
    { slug: 'hassan-raza', name: 'Hassan Raza', role: 'Member', org: 'KX Pakistan', likes: 38, views: 765, image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&q=80' },
  ],
  lahoreEvents: [
    { title: 'KX Lahore Monthly Meetup #24', date: 'May 2026', description: 'Monthly networking for Lahore entrepreneurs', speakers: ['tariq-mehmood', 'rabia-qasim'] },
    { title: 'AI & Automation Workshop', date: 'April 2026', description: 'Hands-on workshop on AI tools for businesses' },
    { title: 'Startup Pitch Night', date: 'March 2026', description: 'Monthly pitch competition for early-stage startups' },
  ],
};

// ---- 30 UNDER 30 ----
export const thirtyUnderThirty = {
  awardees25: [
    { slug: 'ali-hassan-raza', name: 'Ali Hassan Raza', role: 'Awardee', org: '30Under30 2025', likes: 345, views: 5432, image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80' },
    { slug: 'hina-baig', name: 'Hina Baig', role: 'Awardee', org: '30Under30 2025', likes: 289, views: 4321, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    { slug: 'zara-ali', name: 'Zara Ali', role: 'CEO & Awardee', org: '30Under30 2025', likes: 132, views: 2108, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    { slug: 'ahmed-khan', name: 'Ahmed Khan', role: 'Founder & Awardee', org: '30Under30 2025', likes: 145, views: 2341, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80' },
    { slug: 'hassan-raza', name: 'Hassan Raza', role: 'Founder & Awardee', org: '30Under30 2025', likes: 76, views: 1432, image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&q=80' },
    { slug: 'ayesha-siddiqui', name: 'Ayesha Siddiqui', role: 'Head of Product & Awardee', org: '30Under30 2025', likes: 167, views: 2654, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  ],
  awardees26: [
    { slug: 'saad-mirza', name: 'Saad Mirza', role: 'Awardee', org: '30Under30 2026', likes: 312, views: 4871, image: 'https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=400&q=80' },
    { slug: 'danish-ali', name: 'Danish Ali', role: 'Awardee', org: '30Under30 2026', likes: 54, views: 987, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { slug: 'rabia-qasim', name: 'Rabia Qasim', role: 'Awardee', org: '30Under30 2026', likes: 67, views: 1245, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    { slug: 'bilal-ahmed', name: 'Bilal Ahmed', role: 'Awardee', org: '30Under30 2026', likes: 88, views: 1654, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80' },
  ],
  speakers: [
    { slug: 'kalsoom-lakhani', name: 'Kalsoom Lakhani', role: 'Keynote Speaker', org: 'i2i Ventures', likes: 312, views: 5541, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    { slug: 'rabeel-warraich', name: 'Rabeel Warraich', role: 'Speaker', org: 'Sarmayacar', likes: 341, views: 5832, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { slug: 'sara-naseem', name: 'Sara Naseem', role: 'Speaker', org: 'Abhi Finance', likes: 295, views: 4918, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  ],
  premium: [
    { slug: 'dr-arif-alvi', name: 'Dr. Arif Alvi', role: 'Premium Member', org: 'Pakistan', likes: 452, views: 8943, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { slug: 'zia-chishti', name: 'Zia Chishti', role: 'Premium Member', org: 'Afiniti', likes: 380, views: 6721, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  ],
};

// ---- GROWTH SUMMIT ----
export const growthSummit = [
  {
    season: '05', title: 'Growth Summit Season 5',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    date: 'March 15, 2026', dateShort: 'Mar 15, 2026', time: '9:00 AM',
    location: 'Karachi Pearl Continental', category: 'Summit', tier: 'Premium', isPaid: true,
    views: 18432, likes: 912, organizer: 'Connected Pakistan',
    bio: 'Growth Summit Season 5 focuses on scaling Pakistani startups to global markets.',
    description: '<h2>Growth Summit S5: Going Global</h2><p>Season 5 of Growth Summit brings together Pakistan\'s fastest-growing companies and the mentors who can help them scale globally.</p>',
    speakers: [
      { slug: 'rabeel-warraich', name: 'Rabeel Warraich', role: 'Founder & CEO', org: 'Sarmayacar', likes: 341, views: 5832, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
      { slug: 'kamran-ashraf', name: 'Kamran Ashraf', role: 'Growth Expert', org: 'Growth Summit', likes: 198, views: 3541, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80' },
    ],
    accordionItems: [{ title: 'Summit Format', body: 'Full day event\n500+ attendees\n20 speakers\nNetworking lunch included' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    dateIso: '2026-03-15T09:00:00',
  },
  {
    season: '04', title: 'Growth Summit Season 4',
    heroImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80',
    date: 'September 20, 2025', dateShort: 'Sep 20, 2025', time: '9:00 AM',
    location: 'Lahore Expo Centre', category: 'Summit', tier: 'Premium', isPaid: true,
    views: 14231, likes: 745, organizer: 'Connected Pakistan',
    bio: 'Growth Summit Season 4 in Lahore explored the intersection of technology and traditional industries.',
    description: '<h2>Growth Summit S4: Tech Meets Tradition</h2><p>Season 4 examined how Pakistani traditional industries like textiles, agriculture, and retail are being disrupted by technology.</p>',
    speakers: [
      { slug: 'kamran-ashraf', name: 'Kamran Ashraf', role: 'Growth Expert', org: 'Growth Summit', likes: 198, views: 3541, image: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&q=80' },
      { slug: 'nadia-sheikh', name: 'Nadia Sheikh', role: 'MD', org: 'Sehat Kahani', likes: 143, views: 2341, image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80' },
    ],
    accordionItems: [{ title: 'Season 4 Highlights', body: '400 attendees\n16 speakers\nLahore Expo Centre\nPanel on agri-tech disruption' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    dateIso: '2025-09-20T09:00:00',
  },
  {
    season: '03', title: 'Growth Summit Season 3',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    date: 'March 10, 2025', dateShort: 'Mar 10, 2025', time: '9:00 AM',
    location: 'Islamabad Marriott', category: 'Summit', tier: 'Standard', isPaid: true,
    views: 10876, likes: 612, organizer: 'Connected Pakistan',
    bio: 'Growth Summit Season 3 focused on the future of work and remote teams in Pakistan.',
    description: '<h2>Growth Summit S3: Future of Work</h2><p>Season 3 brought together 300 attendees to discuss how Pakistani companies are adapting to remote work, global teams, and the gig economy.</p>',
    speakers: [{ slug: 'zaheer-hussain', name: 'Zaheer Hussain', role: 'Speaker', org: 'Growth Summit', likes: 156, views: 2876, image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=400&q=80' }],
    accordionItems: [{ title: 'Season 3 Format', body: '300 attendees\n12 speakers\nIslamabad Marriott\nWorkshop: Building Remote Teams' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    dateIso: '2025-03-10T09:00:00',
  },
  {
    season: '02', title: 'Growth Summit Season 2',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
    date: 'October 5, 2024', dateShort: 'Oct 5, 2024', time: '9:00 AM',
    location: 'Karachi Arts Council', category: 'Summit', tier: 'Standard', isPaid: false,
    views: 8654, likes: 487, organizer: 'Connected Pakistan',
    bio: 'Growth Summit Season 2 was a free event focused on early-stage startup growth strategies.',
    description: '<h2>Growth Summit S2: Foundations of Growth</h2><p>Season 2 was an accessible, free summit for early-stage entrepreneurs learning the fundamentals of startup growth.</p>',
    speakers: [{ slug: 'ali-mukhtar', name: 'Ali Mukhtar', role: 'Partner', org: 'Lakson Ventures', likes: 201, views: 3897, image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80' }],
    accordionItems: [{ title: 'Season 2 Details', body: '200 attendees\n8 speakers\nFree admission\nKarachi Arts Council' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    dateIso: '2024-10-05T09:00:00',
  },
  {
    season: '01', title: 'Growth Summit Season 1',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    date: 'April 15, 2024', dateShort: 'Apr 15, 2024', time: '10:00 AM',
    location: 'Lahore Tech Hub', category: 'Summit', tier: 'Standard', isPaid: false,
    views: 6231, likes: 341, organizer: 'Connected Pakistan',
    bio: 'The inaugural Growth Summit brought together 150 founders in Lahore to kick off Pakistan\'s growth marketing movement.',
    description: '<h2>Growth Summit S1: The Beginning</h2><p>The first-ever Growth Summit was an intimate gathering of 150 founders in Lahore, focused on growth hacking and distribution strategies.</p>',
    speakers: [{ slug: 'maeen-siddiqui', name: 'Maeen Siddiqui', role: 'Managing Partner', org: 'PTVF', likes: 189, views: 3241, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' }],
    accordionItems: [{ title: 'Season 1 Details', body: '150 attendees\n6 speakers\nFree admission\nLahore Tech Hub' }],
    socialLinks: { facebook: 'https://facebook.com/asad.shabbir.944/', },
    dateIso: '2024-04-15T10:00:00',
  },
];

// ---- SPONSOR LOGOS ----
export const sponsorLogos = {
  top: [
    { name: 'Telenor', placeholder: 'Telenor' },
    { name: 'Jazz', placeholder: 'Jazz' },
    { name: 'HBL', placeholder: 'HBL' },
    { name: 'Packages', placeholder: 'Packages' },
    { name: 'Daraz', placeholder: 'Daraz' },
    { name: 'Careem', placeholder: 'Careem' },
    { name: 'Google PK', placeholder: 'Google PK' },
    { name: 'Microsoft', placeholder: 'Microsoft' },
    { name: 'AWS', placeholder: 'AWS' },
    { name: 'Meta', placeholder: 'Meta' },
    { name: 'PTCL', placeholder: 'PTCL' },
    { name: 'Meezan Bank', placeholder: 'Meezan Bank' },
    { name: 'UBL', placeholder: 'UBL' },
    { name: 'MCB', placeholder: 'MCB' },
  ],
  bottom: [
    { name: 'SECP', placeholder: 'SECP' },
    { name: 'SMEDA', placeholder: 'SMEDA' },
    { name: 'P@SHA', placeholder: 'P@SHA' },
    { name: 'LUMS', placeholder: 'LUMS' },
    { name: 'IBA', placeholder: 'IBA' },
    { name: 'NUST', placeholder: 'NUST' },
    { name: 'i2i Ventures', placeholder: 'i2i Ventures' },
    { name: 'Sarmayacar', placeholder: 'Sarmayacar' },
    { name: 'GEO', placeholder: 'GEO' },
    { name: 'ARY', placeholder: 'ARY' },
    { name: 'Dawn', placeholder: 'Dawn' },
    { name: 'The News', placeholder: 'The News' },
  ],
};
