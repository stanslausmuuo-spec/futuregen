export const USER = {
  name: 'King Stan',
  rank: 'Rising Star',
  progress: 45,
  isVerified: false,
};

export const ACHIEVEMENTS = [
  { id: '1', title: 'Streak Maker', icons: ['Calendar', 'Zap'], toast: 'Streak: 5 Days!' },
  { id: '2', title: 'Curious Mind', icons: ['Brain', 'Search'], toast: 'Knowledge +10' },
  { id: '3', title: 'Thought Leader', icons: ['MessageCircle', 'Star'], toast: 'Points: 450' },
  { id: '4', title: 'Global Explorer', icons: ['Globe', 'Compass'], toast: 'Exploring...' },
];

export const MODULES = [
  {
    id: '1', title: 'Motivational Quotes', desc: 'Famous quotes & visionary insights for peak performance.',
    icon: 'Lightbulb', gradient: 'linear-gradient(135deg, #3f51b5, #9c27b0)', premium: false, action: 'toast',
  },
  {
    id: '2', title: 'Business Ideas', desc: 'Deep startup ideas, curated market trends, and strategic plans.',
    icon: 'Briefcase', gradient: 'linear-gradient(135deg, #795548, #263238)', premium: true, action: 'toast', iconLock: true,
  },
  {
    id: '3', title: 'Psychology / IQ', desc: 'Advanced mental growth, cognitive boosts, and understanding success patterns.',
    icon: 'Brain', gradient: 'linear-gradient(135deg, #e91e63, #880e4f)', premium: true, action: 'toast', iconLock: true,
  },
  {
    id: '4', title: 'Bible', desc: 'Verses, context, and spiritual wisdom for daily life.',
    icon: 'Book', gradient: 'linear-gradient(135deg, #2e7d32, #1b5e20)', premium: false, action: 'bible',
  },
  {
    id: '5', title: 'Global Insight / World View', desc: 'World events, cultures, and global thinking trends.',
    icon: 'Globe', gradient: 'linear-gradient(135deg, #006064, #004d40)', premium: false, action: 'toast',
  },
  {
    id: '6', title: 'Love & Flirt', desc: 'Business & flirt pre-visis.',
    icon: 'Heart', gradient: 'linear-gradient(135deg, #ff4081, #c2185b)', premium: true, action: 'toast', iconLock: true, titleIcon: 'Key',
  },
];

export const COMMUNITY_POSTS = [
  {
    id: '1', author: 'User A', initial: 'A', bg: '#2196f3',
    content: '\u201CWhat quote inspired you most today?\u201D', replies: 5,
  },
  {
    id: '2', author: 'User B', initial: 'B', bg: '#4caf50',
    content: '\u201CHow do I find a business mentor?\u201D', replies: 12,
  },
  {
    id: '3', author: 'User C', initial: 'C', bg: '#ff9800',
    content: '\u201CTips for improving emotional intelligence.\u201D', replies: 61,
  },
];

export const GROUPS = {
  public: [
    { id: '1', name: 'Startup Builders', icon: 'Rocket', members: '1.2k', type: 'Public' },
    { id: '2', name: 'Mental Mastery', icon: 'Brain', members: '850', type: 'Public' },
  ],
  private: [],
};

export const EXPLORE_GROUPS = [
  { id: '3', name: 'AI Innovators', icon: 'Sparkles', members: '2.4k', type: 'Public', desc: 'Exploring the future of AI and machine learning.' },
  { id: '4', name: 'Crypto Circle', icon: 'Zap', members: '1.8k', type: 'Public', desc: 'Discussions on blockchain, DeFi, and Web3.' },
  { id: '5', name: 'Design Masters', icon: 'Star', members: '3.1k', type: 'Public', desc: 'UI/UX, graphic design, and creative inspiration.' },
  { id: '6', name: 'Fitness Freaks', icon: 'Zap', members: '5.6k', type: 'Public', desc: 'Workout tips, nutrition, and wellness challenges.' },
  { id: '7', name: 'Book Club', icon: 'Book', members: '920', type: 'Public', desc: 'Monthly reads, author deep dives, and literary debates.' },
  { id: '8', name: 'Music Producers', icon: 'Smile', members: '1.5k', type: 'Public', desc: 'Beat-making, mixing tips, and gear reviews.' },
];

export const VERSES = [
  { text: 'For I know the plans I have for you,\u201d declares the Lord, \u201cplans to prosper you and not to harm you, plans to give you hope and a future.', ref: 'Jeremiah 29:11' },
  { text: 'I can do all things through Christ who strengthens me.', ref: 'Philippians 4:13' },
  { text: 'Commit your work to the Lord, and your plans will be established.', ref: 'Proverbs 16:3' },
  { text: 'The Lord is my shepherd; I shall not want.', ref: 'Psalm 23:1' },
  { text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', ref: 'Joshua 1:9' },
  { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', ref: 'Proverbs 3:5-6' },
  { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.', ref: 'Lamentations 3:22-23' },
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6' },
  { text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', ref: 'John 3:16' },
  { text: 'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.', ref: 'Numbers 6:24-25' },
  { text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.', ref: 'Micah 6:8' },
  { text: 'The light shines in the darkness, and the darkness has not overcome it.', ref: 'John 1:5' },
  { text: 'Be completely humble and gentle; be patient, bearing with one another in love.', ref: 'Ephesians 4:2' },
  { text: 'Delight yourself in the Lord, and he will give you the desires of your heart.', ref: 'Psalm 37:4' },
  { text: 'Therefore encourage one another and build each other up, just as in fact you are doing.', ref: '1 Thessalonians 5:11' },
  { text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.', ref: 'Romans 8:28' },
  { text: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!', ref: '2 Corinthians 5:17' },
  { text: 'I lift up my eyes to the mountains \u2014 where does my help come from? My help comes from the Lord, the Maker of heaven and earth.', ref: 'Psalm 121:1-2' },
  { text: 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.', ref: 'Psalm 46:10' },
  { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', ref: 'Matthew 11:28' },
];

export const QUOTES = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: 'Believe you can and you are halfway there.', author: 'Theodore Roosevelt' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
  { text: 'Your time is limited, so do not waste it living someone else\'s life.', author: 'Steve Jobs' },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
  { text: 'You miss 100% of the shots you don\'t take.', author: 'Wayne Gretzky' },
  { text: 'Everything you\'ve ever wanted is on the other side of fear.', author: 'George Addair' },
  { text: 'Hardships often prepare ordinary people for an extraordinary destiny.', author: 'C.S. Lewis' },
  { text: 'The mind is everything. What you think you become.', author: 'Buddha' },
  { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
];

export const BUSINESS_SECTORS = [
  {
    id: 'tech',
    title: 'Tech',
    icon: 'Cpu',
    gradient: 'linear-gradient(135deg, #0d47a1, #1565c0)',
    accent: '#2196f3',
    desc: 'Everything built with code, data, and digital infrastructure. The fastest-scaling sector for new business models.',
    fields: [
      {
        title: 'SaaS (Software as a Service)',
        desc: 'AI-powered productivity tools, niche B2B dashboards, and automation platforms using tiered subscription models.',
      },
      {
        title: 'Cybersecurity',
        desc: 'Data protection, secure cloud architecture, and identity management for growing companies.',
      },
      {
        title: 'FinTech',
        desc: 'Digital wallets, decentralized finance tools, and automated billing/invoice software.',
      },
    ],
  },
  {
    id: 'health',
    title: 'Health',
    icon: 'Heart',
    gradient: 'linear-gradient(135deg, #880e4f, #ad1457)',
    accent: '#e91e63',
    desc: 'Focused on human well-being, longevity, and optimizing medical care. High demand with massive investment.',
    fields: [
      {
        title: 'HealthTech & Telehealth',
        desc: 'Remote patient monitoring, digital clinic management software, and virtual care platforms.',
      },
      {
        title: 'Wellness & Biotech',
        desc: 'Wearable data analytics, personalized nutrition apps, and preventative mental health platforms.',
      },
      {
        title: 'Medical Logistics',
        desc: 'Specialized software for medical billing, compliance automation, and healthcare supply chain tracking.',
      },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce',
    icon: 'ShoppingCart',
    gradient: 'linear-gradient(135deg, #e65100, #ef6c00)',
    accent: '#ff9800',
    desc: 'The movement of money, goods, and services. Traditional business meets modern digital marketplaces.',
    fields: [
      {
        title: 'E-Commerce Infrastructure',
        desc: 'Specialized dropshipping tools, inventory management software, and hyper-targeted digital marketing agencies.',
      },
      {
        title: 'EdTech & Consulting',
        desc: 'Platforms for specialized professional training, automated B2B coaching pipelines, and marketplace platforms for expert advice.',
      },
      {
        title: 'PropTech (Real Estate)',
        desc: 'Smart property management software, automated rent-collection systems, and co-working space management tools.',
      },
    ],
  },
  {
    id: 'ops',
    title: 'Ops',
    icon: 'Truck',
    gradient: 'linear-gradient(135deg, #1a237e, #283593)',
    accent: '#536dfe',
    desc: 'The physical backend of the world — how physical goods are manufactured, stored, and transported.',
    fields: [
      {
        title: 'Supply Chain & Last-Mile Logistics',
        desc: 'Fleet management software, optimized local delivery networks, and smart warehousing solutions.',
      },
      {
        title: 'Green Manufacturing',
        desc: 'Eco-friendly packaging production, sustainable material sourcing, and 3D printing manufacturing hubs.',
      },
      {
        title: 'B2B Automation',
        desc: 'Contract management tools, heavy-equipment asset tracking, and industrial workflow automation software.',
      },
    ],
  },
  {
    id: 'energy',
    title: 'Energy',
    icon: 'Battery',
    gradient: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
    accent: '#4caf50',
    desc: 'The transition to sustainable power and resource management. Heavy investment due to global shifts toward sustainability.',
    fields: [
      {
        title: 'ClimateTech & Renewables',
        desc: 'Residential solar installation management networks, EV charging station infrastructure, and energy grid optimization software.',
      },
      {
        title: 'Smart Infrastructure',
        desc: 'IoT-enabled home energy saving systems and commercial building efficiency tracking.',
      },
      {
        title: 'Circular Economy',
        desc: 'Industrial recycling logistics, waste-to-energy solutions, and tech platforms for trading carbon credits.',
      },
    ],
  },
];

export const STARTUP_TIPS = [
  { title: 'Validate Before You Build', desc: 'Talk to 50 potential customers before writing a single line of code. The biggest startup killers build something nobody wants.' },
  { title: 'Start With a Niche', desc: 'Dominate a small market first, then expand. Going broad too early spreads your resources thin and makes you compete with giants.' },
  { title: 'Build an MVP', desc: 'Launch the simplest version of your product that solves the core problem. Perfectionism is the enemy of progress in early-stage startups.' },
  { title: 'Focus on Traction, Not Perfection', desc: 'Early investors care about growth metrics and user engagement, not how polished your UI is. Ship fast and iterate.' },
  { title: 'Co-Founder Chemistry Matters', desc: 'Choose a co-founder whose skills complement yours, not someone who thinks exactly like you. Disagreement leads to better decisions.' },
  { title: 'Master the Art of Pivoting', desc: 'When the data tells you something isn\'t working, have the courage to change direction. Some of the biggest companies pivoted multiple times.' },
  { title: 'Network Relentlessly', desc: 'Your network is your net worth. Attend events, join accelerators, and reach out to mentors. The best opportunities come through relationships.' },
  { title: 'Keep Burn Rate Low', desc: 'Run lean in the early days. Rent shared offices, use open-source tools, and avoid hiring until you have product-market fit.' },
  { title: 'Listen to Customer Feedback', desc: 'Your early users are your product managers. Build a feedback loop and prioritize features they actually ask for, not what you assume they need.' },
  { title: 'Protect Your Equity', desc: 'Don\'t give away large equity chunks too early. Use vesting schedules and only bring on co-founders and early employees who are fully committed.' },
];

export const PITCH_TIPS = [
  { title: 'The Elevator Pitch', desc: 'Summarize your business in 30 seconds. Start with the problem, present your solution, and end with your ask. Practice until it sounds natural.' },
  { title: 'Tell a Story, Not a Report', desc: 'Investors remember stories, not feature lists. Frame your pitch around a customer journey: the struggle, the discovery, and the transformation.' },
  { title: 'Know Your Numbers Cold', desc: 'TAM, SAM, SOM, unit economics, CAC, LTV, burn rate, runway. If you can\'t recite these from memory, you\'re not ready to pitch.' },
  { title: 'Show Traction Early', desc: 'Put your growth chart on slide 2. Investors care more about what you\'ve already achieved than what you promise to achieve.' },
  { title: 'Keep It Under 10 Slides', desc: 'A tight deck forces clarity. Problem, solution, market, traction, team, financials, ask. Cut everything else.' },
  { title: 'Address Risks Honestly', desc: 'Every investor will look for flaws. If you openly address your biggest risk and how you plan to mitigate it, you build credibility and trust.' },
  { title: 'The Team Slide Matters Most', desc: 'Investors bet on people, not ideas. Highlight why your team has the unique background, expertise, and passion to execute this vision.' },
  { title: 'Practice With Strangers', desc: 'Pitch to people who have never seen your deck. Their honest questions will reveal gaps you didn\'t know existed.' },
  { title: 'End With a Clear Ask', desc: 'Be specific: "We\'re raising $500K for 10% equity to grow our engineering team to 5 and launch in 3 new cities." Vague asks get rejected.' },
  { title: 'Follow Up Within 24 Hours', desc: 'Send a thank-you email with your deck attached. Include a one-liner reminder of the most exciting metric from your meeting.' },
];

export const FUNDING_TIPS = [
  { title: 'Bootstrapping', desc: 'Self-funding keeps full control and forces discipline. It\'s the hardest path but yields the most reward if you succeed.' },
  { title: 'Friends & Family Round', desc: 'The first money often comes from people who believe in you, not your idea. Keep it formal with convertible notes to avoid awkward conversations later.' },
  { title: 'Angel Investors', desc: 'Angel investors typically write checks from $10K to $100K. They invest early and often bring mentorship and network access along with capital.' },
  { title: 'Seed Funds', desc: 'Seed funds like Y Combinator, Techstars, and 500 Startups offer $100K-$500K in exchange for 5-10% equity, plus intensive mentorship programs.' },
  { title: 'Venture Capital (Series A)', desc: 'Series A rounds range from $2M-$15M. VCs look for strong product-market fit, a large addressable market, and a world-class team.' },
  { title: 'Revenue-Based Financing', desc: 'A growing alternative to equity: repay investors with a percentage of monthly revenue. No dilution, but requires consistent revenue streams.' },
  { title: 'Government Grants', desc: 'Many governments offer non-dilutive grants for tech innovation, green energy, and job creation. Free money — don\'t leave it on the table.' },
  { title: 'Crowdfunding', desc: 'Platforms like Kickstarter and Indiegogo let you raise money while validating demand. A successful campaign is also powerful marketing.' },
  { title: 'Strategic Partnerships', desc: 'Large corporations often invest in or partner with startups that complement their ecosystem. Landing a strategic partner can also unlock customers.' },
  { title: 'Know Your Valuation', desc: 'Overvaluing scares away smart investors; undervaluing gives away too much equity. Use comparable companies and revenue multiples to price fairly.' },
];

export const PSYCHOLOGY_FACTS = [
  { title: 'Cognitive Dissonance', desc: 'When beliefs and actions clash, the mind experiences discomfort and works to align them — often by changing the belief.' },
  { title: 'The Spotlight Effect', desc: 'People overestimate how much others notice and remember about them. Most people are too focused on themselves to pay close attention to you.' },
  { title: 'Confirmation Bias', desc: 'The brain favors information that confirms existing beliefs while ignoring contradictory evidence. It\'s why debates rarely change minds.' },
  { title: 'The Halo Effect', desc: 'A single positive trait (like attractiveness) influences how we perceive other traits like intelligence or kindness.' },
  { title: 'Dunning-Kruger Effect', desc: 'Those with low ability at a task overestimate their skill, while experts tend to underestimate theirs.' },
  { title: 'Neuroplasticity', desc: 'The brain can rewire itself throughout life. Learning new skills strengthens neural pathways — use it or lose it.' },
  { title: 'The Zeigarnik Effect', desc: 'People remember interrupted tasks better than completed ones. This is why cliffhangers keep us hooked.' },
  { title: 'Maslow\'s Hierarchy', desc: 'Human needs progress from basic (food, safety) to psychological (belonging, esteem) to self-actualization.' },
  { title: 'The Mere Exposure Effect', desc: 'Simply being exposed to something repeatedly makes us like it more — even if we don\'t consciously recognize it.' },
  { title: 'Locus of Control', desc: 'People with an internal locus believe they control their outcomes; those with an external locus attribute outcomes to fate or others.' },
  { title: 'Serial Position Effect', desc: 'When recalling a list, people remember the first items (primacy) and the last items (recency) better than the middle.' },
  { title: 'The Bystander Effect', desc: 'The more people present during an emergency, the less likely any individual is to help — diffusion of responsibility.' },
  { title: 'Classical Conditioning', desc: 'Pavlov\'s dogs learned to associate a bell with food. This same mechanism drives habits, phobias, and even emotional triggers.' },
  { title: 'The Pygmalion Effect', desc: 'Higher expectations lead to better performance. If a teacher believes a student is gifted, that student often rises to meet it.' },
  { title: 'Ego Depletion', desc: 'Self-control and decision-making draw from a limited mental reservoir. After heavy use, willpower weakens until rest restores it.' },
];

export const INSIGHTS = [
  { title: 'Japan\'s Aging Population', desc: 'With over 28% of its population aged 65+, Japan leads the world in elderly care robotics and universal health insurance innovation.', region: 'Asia' },
  { title: 'The Nordic Model', desc: 'Sweden, Norway, and Denmark combine free-market capitalism with strong welfare systems, resulting in some of the highest living standards globally.', region: 'Europe' },
  { title: 'Africa\'s Tech Leap', desc: 'Kenya\'s M-Pesa revolutionized mobile money in 2007. Today, Africa leads in mobile-first banking, bypassing traditional infrastructure entirely.', region: 'Africa' },
  { title: 'The Amazon Rainforest', desc: 'Spanning 9 countries, the Amazon produces 20% of the world\'s oxygen and is home to 10% of all known species on Earth.', region: 'South America' },
  { title: 'South Korea\'s Education Culture', desc: 'South Korea has one of the highest tertiary education rates in the OECD (over 70%), driven by a cultural emphasis on academic achievement.', region: 'Asia' },
  { title: 'Iceland\'s Renewable Energy', desc: 'Iceland generates nearly 100% of its electricity from renewable sources — 75% hydropower and 25% geothermal.', region: 'Europe' },
  { title: 'India\'s Space Program', desc: 'ISRO put a satellite around Mars on its first attempt for a fraction of the cost of Western missions — one of the most cost-efficient space programs.', region: 'Asia' },
  { title: 'The Netherlands\' Water Management', desc: 'With 26% of its land below sea level, the Netherlands has developed world-leading flood defense systems and water management technology.', region: 'Europe' },
  { title: 'Costa Rica\'s Happiness Index', desc: 'Costa Rica consistently ranks among the top countries on the Happy Planet Index, prioritizing well-being and environmental sustainability over GDP.', region: 'Central America' },
  { title: 'Dubai\'s Smart City Vision', desc: 'Dubai aims to become the world\'s first fully blockchain-powered government by leveraging AI, IoT, and digital identity for all services.', region: 'Middle East' },
  { title: 'The Great Green Wall', desc: 'An African-led initiative to grow an 8,000km wall of trees across the Sahara to combat desertification, restore land, and create jobs.', region: 'Africa' },
  { title: 'Finland\'s Education System', desc: 'Finland has no standardized tests, no school rankings, and minimal homework — yet consistently ranks among the top in global education.', region: 'Europe' },
  { title: 'Chile\'s Astronomical Advantage', desc: 'The Atacama Desert in Chile has some of the clearest skies on Earth, hosting over 70% of the world\'s astronomical observatories.', region: 'South America' },
  { title: 'New Zealand\'s Wellbeing Budget', desc: 'New Zealand was the first country to introduce a Wellbeing Budget, measuring success by citizen wellness rather than just economic growth.', region: 'Oceania' },
  { title: 'Singapore\'s Water Innovation', desc: 'Singapore\'s NEWater technology recycles wastewater into ultra-pure drinking water, meeting up to 40% of the country\'s water demand.', region: 'Asia' },
];

export const LOVE_TIPS = [
  { title: 'Active Listening', desc: 'When your partner speaks, put your phone down, maintain eye contact, and reflect back what you heard. It builds deep trust.' },
  { title: 'The 5 Love Languages', desc: 'People give and receive love differently: Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, and Physical Touch.' },
  { title: 'Compliments That Land', desc: 'Instead of "you look nice," try "I love how your eyes light up when you talk about your passion." Specificity makes it personal.' },
  { title: 'Mirroring Builds Rapport', desc: 'Subtly mirroring someone\'s body language and speech pace creates subconscious comfort and connection during conversation.' },
  { title: 'The Power of Playfulness', desc: 'Couples who laugh together and maintain a sense of play report higher relationship satisfaction and lower stress levels.' },
  { title: 'First Date Chemistry', desc: 'Asking open-ended questions that start with "What" or "How" rather than yes/no questions leads to deeper conversations.' },
  { title: 'Respecting Boundaries', desc: 'Healthy relationships thrive when both partners can say "no" without guilt and "yes" without pressure. Boundaries build safety.' },
  { title: 'The Art of Flirting', desc: 'Light teasing, playful banter, and genuine curiosity create attraction. Overdoing it has the opposite effect — keep it natural.' },
  { title: 'Emotional Availability', desc: 'Being emotionally available means showing up with vulnerability, honesty, and a willingness to be present — even in uncomfortable moments.' },
  { title: 'Texting Etiquette', desc: 'Double-texting is fine in moderation. The real key is matching energy — if they reply with one word, don\'t send paragraphs.' },
  { title: 'Shared Experiences Bond', desc: 'Couples who try new activities together — travel, cooking, dancing — strengthen their bond through shared novelty and growth.' },
  { title: 'The 3-Second Rule', desc: 'When you feel a spark of attraction, act within 3 seconds before overthinking kills it. This applies to both approaching and complimenting.' },
  { title: 'Conflict Resolution', desc: 'Use "I feel" statements instead of "You always" accusations. It reduces defensiveness and opens the door to real repair.' },
  { title: 'Self-Love First', desc: 'The healthiest relationships happen when both people already love themselves. Attraction to wholeness is stronger than attraction to neediness.' },
  { title: 'Reading Body Language', desc: 'Crossed arms, lack of eye contact, and feet pointing away signal discomfort. Open posture and leaning in signal interest.' },
];

export const NOTIFICATIONS = [
  {
    id: '1', type: 'achievement', title: 'Streak Maker',
    message: 'You earned the Streak Maker achievement! 5-day streak active.',
    time: '2m ago', read: false, icon: 'Zap',
  },
  {
    id: '2', type: 'group', title: 'Group Invite',
    message: 'You\'ve been invited to join "Startup Builders" group.',
    time: '15m ago', read: false, icon: 'Users',
  },
  {
    id: '3', type: 'system', title: 'Profile Updated',
    message: 'Your profile information was successfully updated.',
    time: '1h ago', read: false, icon: 'Bell',
  },
  {
    id: '4', type: 'achievement', title: 'Curious Mind',
    message: 'You earned the Curious Mind achievement! Knowledge +10.',
    time: '3h ago', read: true, icon: 'Brain',
  },
  {
    id: '5', type: 'message', title: 'New Message',
    message: 'User B sent you a direct message.',
    time: '5h ago', read: true, icon: 'MessageSquare',
  },
  {
    id: '6', type: 'system', title: 'Welcome to Future Gen',
    message: 'Thank you for joining! Complete your profile to get started.',
    time: '1d ago', read: true, icon: 'Star',
  },
];

export const SETTINGS = [
  { label: 'Favourites', icon: 'Heart', trailing: 'ArrowRight', action: 'favourites' },
  { label: 'Notifications', icon: 'Bell', trailing: 'ArrowRight', action: 'notifications' },
  { label: 'Dark Mode', icon: 'Moon', trailing: null, switch: true, action: 'toggleTheme' },
  { label: 'Privacy Policy', icon: null, trailing: 'ArrowRight' },
  { label: 'Logout', icon: 'LogOut', trailing: null, danger: true, action: 'logout' },
];

export function getAIResponse(input) {
  const text = input.toLowerCase();
  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello King! Ready to conquer the day?';
  }
  if (text.includes('plan') || text.includes('goal')) {
    return 'Success starts with a clear plan. Have you written down your top 3 goals today?';
  }
  return 'That is a powerful thought. Focus on consistency, and greatness will follow.';
}

export const SOCIAL_BUTTONS = [
  { label: 'Apple', icon: 'Apple' },
  { label: 'Google', icon: 'Chrome' },
  { label: 'Facebook', icon: 'Facebook' },
];
