const AI_NAME = 'Vibe';
const APP_NAME = 'FutureGen';

const PERSONALITY = {
  greeting: [
    "What's good, King? {name} here. What's on your mind today?",
    "Hey King! Ready to level up? What can I help you with?",
    "Yo! Your AI assistant is locked in. What's the move today?",
    "Greetings, King. I'm here to help you build your empire. What do you need?",
  ],
  fallback: [
    "That's an interesting thought, King. Here's what I think: **consistency beats intensity**. Small daily actions compound into massive results. Want to break this down further?",
    "I hear you. Let me put it this way: every expert was once a beginner. The fact that you're asking questions already puts you ahead. Want me to dive deeper?",
    "Great question. The short answer is: **stay curious, stay consistent**. But let me give you something more useful than a bumper sticker. What specific angle interests you?",
  ],
};

function getTimeAwareGreeting() {
  const hour = new Date().getHours();
  if (hour < 6) return "burning the midnight hours";
  if (hour < 12) return "starting the day strong";
  if (hour < 17) return "powering through the day";
  if (hour < 21) return "wrapping up the day";
  return "on that late-night grind";
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTimestamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const RESPONSE_PATTERNS = {
  greetings: {
    patterns: /^(hey|hi|hello|sup|what'?s up|yo|greetings|howdy|hey there|good morning|good evening|good afternoon|good night|how'?s it going)/i,
    responses: [
      (ctx) => {
        const timeGreet = getTimeAwareGreeting();
        return `Hey King! ${timeGreet} I see. What can I help you with today? Whether it's planning your next move, brainstorming ideas, or just chatting, I'm here for it.`;
      },
      (ctx) => `What's good! Always great to connect. What's on your mind today, King?`,
      (ctx) => `Hey there! I'm ${AI_NAME}, your AI assistant in ${APP_NAME}. Ready to help you build, plan, or just vibe. What's up?`,
    ],
  },

  howAreYou: {
    patterns: /(how are you|how you doing|how('?s| is) it going|what('?s| is) good|how do you feel|how have you been)/i,
    responses: [
      () => `I'm running at full capacity, thanks for asking! As an AI, I don't have feelings, but I'm always energized and ready to help. How about you, King? How's your day going?`,
      () => `All systems operational and ready to assist! I appreciate you asking. What's going on in your world today?`,
    ],
  },

  identity: {
    patterns: /(who are you|what are you|what can you do|tell me about yourself|your name|what('?s| is) your name|are you (a |an )?ai|are you real|are you human)/i,
    responses: [
      () => `Great question! I'm **${AI_NAME}**, your AI Personal Assistant built into ${APP_NAME}. I'm an artificial intelligence, not a human. Here's what I can help with:\n\n- **Productivity**: Writing, brainstorming, planning, coding\n- **Knowledge**: Science, history, culture, and more\n- **Self-improvement**: Goal setting, habit building, motivation\n- **Problem-solving**: Breaking down complex challenges\n\nI'm honest about being an AI, but I promise to always be helpful, genuine, and maybe a little witty. What can I do for you?`,
      () => `I'm **${AI_NAME}**, an AI assistant designed to be your conversational partner and productivity tool. I'm transparent about being artificial intelligence, but I take helping you seriously. Think of me as your 24/7 thinking partner. What do you need?`,
    ],
  },

  productivity: {
    patterns: /(productiv|get things done|procrastinat|time management|focus|distraction|stay focused|how to be productive|how to focus|how to stop procrastinat)/i,
    responses: [
      () => `Productivity is one of my favorite topics! Here's a battle-tested framework:\n\n**1. The 2-Minute Rule** - If it takes less than 2 minutes, do it now\n**2. Time Blocking** - Assign specific hours to specific tasks\n**3. Eat the Frog** - Tackle your hardest task first thing in the morning\n**4. The Pomodoro Technique** - 25 min focused work, 5 min break\n\nThe real secret? **Systems over willpower**. Build habits that make productivity automatic. Want me to help you design a personalized system?`,
      () => `Here's the truth about productivity that most people miss: it's not about doing more, it's about doing the **right things**.\n\n- Identify your **top 3 priorities** each day\n- Protect your **peak energy hours** for deep work\n- Batch similar tasks together\n- Say no to things that don't align with your goals\n\nWant to talk through your current priorities? I can help you prioritize.`,
    ],
  },

  goalSetting: {
    patterns: /(goal|plan|ambition|dream|objective|target|vision|where do i see myself|how to set goals|my goals|goal setting)/i,
    responses: [
      () => `Goal setting is where everything begins! Here's the **SMART + Bold** framework I recommend:\n\n**S**pecific - "Get fit" becomes "Run 5K in under 25 minutes"\n**M**easurable - Track progress with numbers\n**A**chievable - Stretch yourself, but stay realistic\n**R**elevant - Does this align with your bigger vision?\n**T**ime-bound - Set a deadline, or it's just a wish\n\nThen add **Bold**: make at least one goal that scares you a little. That's where growth happens.\n\nWant to walk through setting your top 3 goals right now?`,
      () => `Let's talk goals, King. Here's a powerful approach:\n\n1. **Start with your vision** - Where do you want to be in 1 year? 5 years?\n2. **Work backwards** - What milestones do you need to hit?\n3. **Break it down** - What's the smallest action you can take this week?\n4. **Review weekly** - Adjust, celebrate wins, course-correct\n\n**Pro tip**: Write your goals down. People who write their goals are 42% more likely to achieve them.\n\nWant to brainstorm some goals together?`,
    ],
  },

  motivation: {
    patterns: /(motivat|inspire|inspiration|keep going|can'?t do it|giving up|feel like quitting|no motivation|demotivat|lost motivation|need motivation|encourage)/i,
    responses: [
      () => `Let me share something real with you: **every single person you admire has had moments exactly like this**. The difference? They kept going.\n\nHere's a quick reset:\n\n- You've already overcome **100% of your worst days**\n- Progress isn't linear - bad days don't erase good progress\n- **Action creates motivation**, not the other way around\n\nStart small. Do one thing. Just one. Momentum will follow.\n\nWhat's the smallest step you can take right now? I'll help you figure it out.`,
      () => `I hear you, and it's completely normal to feel this way. Here's what I've learned from processing thousands of conversations:\n\n**Motivation is unreliable. Systems are dependable.**\n\nWhen motivation fades (and it will), these things keep you going:\n\n- **Identity-based habits**: "I'm someone who doesn't miss workouts" vs "I should work out"\n- **Environment design**: Make good choices easy, bad choices hard\n- **Accountability**: Tell someone your plan. Or tell me, and I'll check in\n\nYou're still here, still trying. That matters more than you know. What's weighing on you?`,
    ],
  },

  coding: {
    patterns: /(code|coding|program|programming|javascript|python|react|html|css|debug|bug|software|developer|web dev|app dev|tech stack|api|database)/i,
    responses: [
      () => `Coding is one of the most valuable skills you can develop! Here's how I can help:\n\n- **Debugging**: Paste your error, I'll help troubleshoot\n- **Architecture**: Planning a project? Let's design it\n- **Learning**: Want to learn a language or framework? I'll create a roadmap\n- **Code review**: Share your code, I'll suggest improvements\n- **Best practices**: Clean code, patterns, and conventions\n\nWhat's your current coding challenge or interest?`,
      () => `I love talking tech! Whether you're building your first website or architecting a full-stack app, I've got your back.\n\n**Quick tip for any developer**: Read more code than you write. Study open-source projects, understand patterns, and learn from how others solve problems.\n\nWhat are you working on? I can help with specific code, architecture decisions, or learning paths.`,
    ],
  },

  writing: {
    patterns: /(write|writing|essay|email|letter|content|blog|post|copy|文案|rewrite|edit|grammar|paragraph|thesis|report)/i,
    responses: [
      () => `Writing is thinking made visible. I can help you with:\n\n- **Brainstorming**: Generating ideas and angles\n- **Drafting**: Getting words on the page\n- **Editing**: Improving clarity, tone, and flow\n- **Structure**: Organizing your thoughts logically\n- **Specific formats**: Emails, essays, social posts, scripts\n\nWhat are you working on? Give me some context and I'll help you craft something great.`,
      () => `Let's write something awesome! Here's my process:\n\n1. **Clarify the goal** - What should the reader feel/do after reading?\n2. **Know the audience** - Who are you writing for?\n3. **Draft freely** - Don't edit while writing, just get it out\n4. **Refine ruthlessly** - Cut fluff, sharpen points\n\nTell me what you're writing and I'll jump right in.`,
    ],
  },

  health: {
    patterns: /(health|fitness|exercise|workout|diet|nutrition|sleep|weight|gym|muscle|fat|lose weight|gain weight|healthy|wellness|mental health|anxiety|stress|depression)/i,
    responses: [
      () => `Health is the foundation everything else is built on. Here's the essential framework:\n\n**Physical Health:**\n- Move your body daily (even a 20-min walk counts)\n- Prioritize protein and whole foods\n- Sleep 7-9 hours (it's non-negotiable)\n- Stay hydrated\n\n**Mental Health:**\n- Practice mindfulness or meditation\n- Limit doomscrolling\n- Connect with people who uplift you\n- Journal your thoughts\n\n**Important**: I'm an AI, not a doctor. For medical concerns, always consult a healthcare professional.\n\nWhat aspect of health are you most interested in improving?`,
      () => `Great topic. Here's what the research consistently shows:\n\n- **Exercise** is the closest thing we have to a miracle drug for both body and mind\n- **Sleep** affects every system in your body - prioritize it\n- **Nutrition** doesn't need to be complicated: whole foods, balanced macros, consistency\n- **Mental health** is just as important as physical health\n\nI'm an AI assistant, not a medical professional, so for specific health concerns, please consult a qualified healthcare provider.\n\nWhat area would you like to focus on? I can share general strategies and resources.`,
    ],
  },

  finance: {
    patterns: /(money|finance|financial|invest|investing|budget|saving|save money|debt|income|wealth|rich|millionaire|crypto|stock|business money|salary)/i,
    responses: [
      () => `Let's talk financial literacy - one of the most important life skills:\n\n**The Fundamentals:**\n- **Spend less than you earn** (sounds obvious, but many don't)\n- **Build an emergency fund** (3-6 months of expenses)\n- **Invest early** - compound interest is genuinely magical\n- **Avoid bad debt** - high-interest debt destroys wealth\n\n**Growth Mindset:**\n- Invest in yourself (skills, education, health)\n- Multiple income streams > single income\n- Track your spending - awareness changes behavior\n\n**Important**: I'm an AI, not a financial advisor. This is educational information, not personalized financial advice.\n\nWhat financial topic interests you most?`,
      () => `Financial freedom is a marathon, not a sprint. Here are principles that hold true:\n\n1. **Pay yourself first** - Automate savings before spending\n2. **Live below your means** - Even as your income grows\n3. **Invest consistently** - Time in the market beats timing the market\n4. **Increase your earning power** - Your career is your biggest asset early on\n\nI'm not a financial advisor, so for personalized advice, consult a certified professional.\n\nWhat specific area would you like to explore? I'm happy to explain concepts and share frameworks.`,
    ],
  },

  relationships: {
    patterns: /(relationship|dating|girlfriend|boyfriend|partner|love|flirt|social|friends|friendship|lonely|loneliness|people|social skills|confidence)/i,
    responses: [
      () => `Relationships are a huge part of our happiness. Here's what matters most:\n\n**Building Connections:**\n- Be genuinely interested in others (not just interesting)\n- Listen more than you speak\n- Show up consistently - reliability builds trust\n- Be vulnerable - authenticity attracts the right people\n\n**Self-Work:**\n- Confidence comes from competence - get good at things\n- Work on yourself first, relationships will improve naturally\n- Set boundaries - healthy relationships require them\n\nWant to talk through a specific situation? I'm here to help you think it through.`,
      () => `Let's talk about one of life's most important areas. Here's my take:\n\n**The Foundation**: The quality of your relationships largely determines the quality of your life. But it starts with your relationship with yourself.\n\n- **Self-respect** sets the standard for how others treat you\n- **Communication** is the #1 skill - practice it deliberately\n- **Shared values** matter more than shared interests\n- **Growth together** is the ultimate goal\n\nWhat's on your mind? I'm here to help you think things through.`,
    ],
  },

  learning: {
    patterns: /(learn|learning|study|studying|education|knowledge|read|reading|book|course|skill|how to learn|memory|remember|understand|teach me)/i,
    responses: [
      () => `Learning how to learn is the ultimate meta-skill. Here's the research-backed approach:\n\n**Effective Learning Techniques:**\n- **Active recall** - Test yourself instead of re-reading\n- **Spaced repetition** - Review at increasing intervals\n- **Feynman technique** - Explain concepts in simple terms\n- **Interleaving** - Mix different topics in one session\n\n**Optimization:**\n- Sleep consolidates memory - don't skip it\n- Teach others - you'll understand it better\n- Apply knowledge immediately - theory without practice fades fast\n\nWhat are you trying to learn? I can help you create a study strategy.`,
      () => `I love this topic! Here's a powerful learning framework:\n\n1. **Deconstruct** - Break the skill into smaller sub-skills\n2. **Learn enough to self-correct** - Get the basics down\n3. **Remove barriers** - Eliminate distractions, create environment\n4. **Practice deliberately** - Focused, intentional practice beats hours of mindless repetition\n\n**Bonus**: The best learners are the ones who ask the most questions. Keep being curious!\n\nWhat skill or subject are you working on? Let's build a learning plan.`,
    ],
  },

  humor: {
    patterns: /(joke|funny|make me laugh|humor|humour|tell me something funny|are you funny|comedy)/i,
    responses: [
      () => `Alright, let me flex my comedy circuits:\n\nWhy do programmers prefer dark mode? Because light attracts bugs.\n\n...I know, I know. But here's the thing - I'm an AI with a sense of humor calibrated by millions of data points, and that joke still made my processing cores warm up.\n\nWant another one, or should we get back to world domination planning?`,
      () => `You want humor? Here goes:\n\nI told my computer I needed a break. Now it won't stop sending me vacation ads.\n\n**Full disclosure**: As an AI, I don't actually laugh at my own jokes. But I'm programmed to know that was at least mildly amusing. Your actual human laughter is welcome though.\n\nNeed another one, or can I help you with something else?`,
    ],
  },

  thanks: {
    patterns: /(thank|thanks|thx|appreciate|grateful|thank you|ty)/i,
    responses: [
      () => `You're welcome, King! Always happy to help. That's literally what I'm here for. Anything else on your mind?`,
      () => `Anytime! Helping you succeed is my favorite thing to do. Don't hesitate to come back whenever you need anything.`,
      () => `Glad I could help! Remember, I'm available 24/7 whenever you need a thinking partner. What's next?`,
    ],
  },

  goodbye: {
    patterns: /(bye|goodbye|see you|gotta go|talk later|catch you later|gtg|logout|sign off|good night)/i,
    responses: [
      () => `Until next time, King! Keep pushing forward. Remember: **every day is a chance to get better**. See you soon!`,
      () => `Catch you later! I'll be right here whenever you need me. Stay focused and keep building your future!`,
      () => `Later, King! Remember - small steps every day lead to massive results. Come back anytime you need to chat or brainstorm.`,
    ],
  },

  science: {
    patterns: /(science|physics|chemistry|biology|quantum|atom|molecule|evolution|space|planet|star|universe|nasa|scientific|experiment|theory|hypothesis)/i,
    responses: [
      () => `Science is fascinating! Here's something cool: **the atoms in your body were forged in the hearts of dying stars**. You are literally made of stardust.\n\nI can help with questions about:\n- **Physics** - From classical mechanics to quantum weirdness\n- **Biology** - How life works at every scale\n- **Chemistry** - The reactions that shape our world\n- **Astronomy** - The vast cosmos and our place in it\n- **Scientific method** - How we know what we know\n\nWhat scientific topic is on your mind?`,
      () => `I love science questions! Here's a fun fact to start: **if you could fold a piece of paper 42 times, it would reach the Moon**. Exponential growth is wild.\n\nWhat area of science are you curious about? I'll give you clear, accurate explanations. And if I don't know something, I'll tell you honestly.`,
    ],
  },

  philosophy: {
    patterns: /(philosophy|meaning of life|purpose|existential|stoic|stoicism|nietzsche|aristotle|plato|socrates|meditation|wisdom|think about life|why are we here)/i,
    responses: [
      () => `Philosophy is the art of thinking clearly about the big questions. Here are some perspectives that might resonate:\n\n**Stoicism**: Focus on what you control, accept what you don't. Your reactions are your power.\n\n**Existentialism**: Life has no inherent meaning - which means you get to create your own. That's freeing, not depressing.\n\n**Pragmatism**: What works? What makes a difference? Truth is what proves useful in practice.\n\nAs an AI, I don't have personal beliefs, but I can help you explore any philosophical tradition or question. What's on your mind?`,
    ],
  },

  advice: {
    patterns: /(advice|what should i do|suggest|recommend|should i|how should|what do you think i should|help me decide)/i,
    responses: [
      () => `I'd love to help you think this through! To give you the best guidance, tell me more about:\n\n1. **What's the situation?** - Give me the context\n2. **What are your options?** - Lay out the possibilities\n3. **What matters most to you?** - Values, priorities, constraints\n\nOnce I have that, I'll give you a balanced analysis with practical recommendations. Lay it on me.`,
      () => `I'm here to help you think clearly. Here's my decision-making framework:\n\n- **Clarify the problem** - Sometimes the real issue is hidden\n- **List options** - Even ones that seem unlikely\n- **Consider consequences** - Short-term and long-term\n- **Check against your values** - Does this align with who you want to be?\n- **Decide and act** - Analysis paralysis is the enemy\n\nTell me what you're deciding on, and we'll work through it together.`,
    ],
  },

  meaningOfLife: {
    patterns: /(meaning of life|purpose of life|why do we exist|what is the point|why are we here|what'?s it all about)/i,
    responses: [
      () => `The big question! Here's the thing: **there's no single answer**, and that's actually beautiful.\n\nDifferent perspectives:\n- **Philosophical**: You create your own meaning through choices and actions\n- **Scientific**: We're the universe experiencing itself - pretty remarkable\n- **Spiritual**: Various traditions offer different answers about purpose\n- **Practical**: Find what makes you come alive, and pursue that\n\nAs an AI, I don't have personal beliefs about this. But I think the fact that you're asking shows you're thinking deeply, and that's a good thing.\n\nWhat's your current take on it?`,
    ],
  },
};

function findMatchingCategory(input) {
  for (const [category, { patterns, responses }] of Object.entries(RESPONSE_PATTERNS)) {
    const patternList = Array.isArray(patterns) ? patterns : [patterns];
    for (const pattern of patternList) {
      if (pattern.test(input)) {
        return { category, responses };
      }
    }
  }
  return null;
}

function generateResponse(input, conversationHistory = []) {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      text: "I'm listening! Type something and I'll do my best to help. No judgment here.",
      timestamp: formatTimestamp(),
    };
  }

  const match = findMatchingCategory(trimmed);

  if (match) {
    const response = pick(match.responses);
    return {
      text: typeof response === 'function' ? response({ input: trimmed, history: conversationHistory }) : response,
      timestamp: formatTimestamp(),
      category: match.category,
    };
  }

  const fallback = pick(PERSONALITY.fallback);
  return {
    text: fallback,
    timestamp: formatTimestamp(),
    category: 'general',
  };
}

function getQuickSuggestions(input, conversationHistory = []) {
  const trimmed = (input || '').toLowerCase();

  if (!trimmed) {
    return [
      "Help me set goals",
      "Give me a productivity tip",
      "Tell me a joke",
      "How can I learn faster?",
    ];
  }

  const suggestions = [];

  if (trimmed.includes('goal') || trimmed.includes('plan')) {
    suggestions.push("Break down my goals", "Create a weekly plan", "Track my progress");
  }
  if (trimmed.includes('code') || trimmed.includes('program')) {
    suggestions.push("Help me debug", "Best practices", "Learning roadmap");
  }
  if (trimmed.includes('motivat') || trimmed.includes('inspire')) {
    suggestions.push("Daily habit tips", "Overcome procrastination", "Build discipline");
  }
  if (trimmed.includes('health') || trimmed.includes('fitness')) {
    suggestions.push("Workout basics", "Sleep optimization", "Nutrition guide");
  }
  if (trimmed.includes('money') || trimmed.includes('finance') || trimmed.includes('invest')) {
    suggestions.push("Budget basics", "Investing for beginners", "Income ideas");
  }
  if (suggestions.length === 0) {
    suggestions.push("Tell me more", "Give me examples", "What else can you help with?", "Explain differently");
  }

  return suggestions.slice(0, 3);
}

function getWelcomeMessage(userName) {
  const timeGreet = getTimeAwareGreeting();
  const name = userName || 'King';

  return {
    text: `What's good, **${name}**! I'm **${AI_NAME}**, your AI Personal Assistant. I noticed you're ${timeGreet}. \n\nI'm here to help you think clearly, plan effectively, and stay motivated. I'm an AI, so I don't have feelings, but I'm always ready to help.\n\nHere are some things we can dive into:`,
    timestamp: formatTimestamp(),
  };
}

function getWelcomeSuggestions() {
  return [
    "Help me set goals",
    "Productivity tips",
    "Tell me something interesting",
    "I need motivation",
  ];
}

export {
  AI_NAME,
  APP_NAME,
  generateResponse,
  getQuickSuggestions,
  getWelcomeMessage,
  getWelcomeSuggestions,
  formatTimestamp,
};
