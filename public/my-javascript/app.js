// for fore

const allQuotes = [
  {
    id: 1,
    author: `albert einstein`,
    quote: `the only way to escape the corruptible effect of praise is to go on working. - (1 corinthians 15:58, esv)`,
  },
  {
    id: 2,
    author: ` maya angelou`,
    quote: `i've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - (1 corinthians 13:13, esv)`,
  },
  {
    id: 3,
    author: `vincent van gogh`,
    quote: `normality is a paved road: it's comfortable to walk, but no flowers grow on it. - (romans 12:2, esv)`,
  },
  {
    id: 4,
    author: `confucius`,
    quote: `our greatest glory is not in never falling, but in rising every time we fall. - (philippians 4:13, esv)`,
  },
  {
    id: 5,
    author: ` albert einstein,
quote: the only way to escape the corruptible effect of praise is to go on working. - (1 corinthians 15:58, esv)`,
  },
  {
    id: 6,
    author: `martin luther king jr.`,
    quote: `the time is always right to do what is right. - (galatians 6:9, esv)`,
  },
  {
    id: 7,
    author: `mahatma gandhi`,
    quote: `the future depends on what you do today. - (james 2:17, esv)`,
  },
  {
    id: 8,
    author: `aristotle`,
    quote: `we are what we repeatedly do. excellence, then, is not an act, but a habit. - (philippians 4:8, esv)`,
  },
  {
    id: 9,
    author: `walt disney`,
    quote: `if you can dream it, you can do it. - (ephesians 3:20, esv)`,
  },
  {
    id: 10,
    author: `oscar wilde`,
    quote: `we are all in the gutter, but some of us are looking at the stars. - (philippians 4:8, esv)`,
  },
  {
    id: 11,
    author: `bruce lee`,
    quote: `empty your mind, be formless. shapeless, like water. if you put water into a cup, it becomes the cup. you put water into a bottle and it becomes the bottle. you put it in a teapot, it becomes the teapot. now, water can flow or it can crash. be water, my friend. - (romans 12:2, esv)`,
  },
  {
    id: 12,
    author: `steve jobs`,
    quote: `your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. and the only way to do great work is to love what you do. if you haven't found it yet, keep looking. don't settle. as with all matters of the heart, you'll know when you find it. - (colossians 3:23-24, esv)`,
  },
  {
    id: 13,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 14,
    author: `eleanor roosevelt`,
    quote: `no one can make you feel inferior without your consent. - (1 samuel 16:7, esv)`,
  },
  {
    id: 15,
    author: `albert einstein`,
    quote: `the true sign of intelligence is not knowledge but imagination. - (proverbs 2:6, esv)`,
  },
  {
    id: 16,
    author: `mahatma gandhi`,
    quote: `an eye for an eye only ends up making the whole world blind. - (matthew 5:38-39, esv)`,
  },
  {
    id: 17,
    author: `helen keller`,
    quote: `optimism is the faith that leads to achievement. nothing can be done without hope and confidence. - (romans 15:13, esv)`,
  },
  {
    id: 18,
    author: `albert einstein`,
    quote: `strive not to be a success, but rather to be of value. - (philippians 2:3-4, esv)`,
  },
  {
    id: 19,
    author: `nelson mandela`,
    quote: `education is the most powerful weapon which you can use to change the world. - (proverbs 18:15, esv)`,
  },
  {
    id: 20,
    author: `aristotle`,
    quote: `we are what we repeatedly do. excellence, then, is not an act, but a habit. - (philippians 4:8, esv)`,
  },
  {
    id: 21,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 22,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world, Most people exist, that is all.colosians 3:17`,
  },

  {
    id: 23,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 24,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 25,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 26,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 27,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 28,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 29,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 30,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 31,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 32,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 33,
    author: `walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 34,
    author: `marcus aurelius`,
    quote: `the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 35,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 36,
    author: `leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 37,
    author: `bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 38,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 39,
    author: `maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 40,
    author: `lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 41,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 42,
    author: ` anne frank`,
    quote: `how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 43,
    author: ` mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 44,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 45,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 46,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world`,
  },
  {
    id: 47,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 48,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 49,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 50,
    author: ` socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 51,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 52,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 53,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 54,
    author: ` albert einstein`,
    quote: ` there are only two ways to live your life`,
  },
  {
    id: 55,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 56,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 57,
    author: `walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 58,
    author: ` marcus aurelius`,
    quote: ` the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 59,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 60,
    author: ` leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 61,
    author: ` bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 62,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 63,
    author: `maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 64,
    author: ` lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 65,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 66,
    author: `anne frank`,
    quote: `how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 67,
    author: ` mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 68,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 69,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 70,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world Most people exist, that is all." (Micah 6:8)`,
  },
  {
    id: 71,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 72,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 73,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 74,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 75,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 76,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 77,
    author: `lao tzu`,
    quote: ` the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 78,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 79,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 80,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 81,
    author: ` walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 82,
    author: ` marcus aurelius`,
    quote: `the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 83,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 84,
    author: `leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 85,
    author: `bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 86,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 87,
    author: ` maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 88,
    author: ` lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 89,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 90,
    author: `anne frank`,
    quote: ` how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 91,
    author: `mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 92,
    author: ` confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 93,
    author: ` maya angelou`,
    quote: ` if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 94,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world Most people exist, that is all." (Micah 6:8)`,
  },
  {
    id: 95,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 96,
    author: ` albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 97,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 98,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 99,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 100,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 101,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 102,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 103,
    author: `johann wolfgang von goethe`,
    quote: `whatever you can do or dream you can, begin it. boldness has genius, power, and magic in it. - (Psalm 37:23, ESV)`,
  },
  {
    id: 104,
    author: 'Ralph Waldo Emerson',
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 105,
    author: 'Marie Curie',
    quote:
      'One never notices what has been done; one can only see what remains to be done. - (Philippians 3:14, ESV)',
  },
  {
    id: 106,
    author: 'Nelson Mandela',
    quote:
      'Education is the most powerful weapon which you can use to change the world. - (Proverbs 22:6, ESV)',
  },
  {
    id: 107,
    author: 'Albert Einstein',
    quote:
      'Strive not to be a success, but rather to be of value. - (Matthew 6:33, ESV)',
  },
  {
    id: 108,
    author: 'Leonardo da Vinci',
    quote:
      'Study the science of art. Study the art of science. Learn how to see. Realize that everything connects to everything else. - (Romans 11:33, ESV)',
  },
  {
    id: 109,
    author: 'C.S. Lewis',
    quote:
      "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one. - (Proverbs 18:24, ESV)",
  },
  {
    id: 110,
    author: 'Maya Angelou',
    quote:
      'Success is liking yourself, liking what you do, and liking how you do it. - (Galatians 5:22-23, ESV)',
  },
  {
    id: 111,
    author: 'Helen Keller',
    quote:
      'What I once was is what I am no more. What I shall become is what I am now creating. - (2 Corinthians 5:17, ESV)',
  },
  {
    id: 112,
    author: 'Desmond Tutu',
    quote:
      'If you are neutral in situations of injustice, you have chosen the side of the oppressor. - (Proverbs 31:8-9, ESV)',
  },
  {
    id: 113,
    author: 'Mother Teresa',
    quote:
      'I am not called to succeed, I am called to be faithful. - (1 Corinthians 4:2, ESV)',
  },
  {
    id: 114,
    author: 'Viktor Frankl',
    quote:
      "Everything can be taken from a man but one thing: the last of the human freedoms - to choose one's attitude in any given set of circumstances. - (James 1:2-4, ESV)",
  },
  {
    id: 115,
    author: 'Martin Luther King Jr.',
    quote:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. - (Romans 12:21, ESV)',
  },
  {
    id: 116,
    author: 'John Wesley',
    quote:
      'Do all the good you can, By all the means you can, In all the places you can, At all the times you can, To all the people you can, As long as ever you can. - (Galatians 6:10, ESV)',
  },
  {
    id: 117,
    author: 'Charles Dickens',
    quote: `"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we`,
  },
  {
    id: 118,
    author: 'William Shakespeare',
    quote: 'Love all, trust a few, do wrong to none. - (Romans 12:9, ESV)',
  },
  {
    id: 119,
    author: 'Emily Dickinson',
    quote: 'Forever is composed of nows. - (2 Corinthians 6:2, ESV)',
  },
  {
    id: 120,
    author: 'Mark Twain',
    quote:
      'The secret of getting ahead is getting started. - (Philippians 4:13, ESV)',
  },
  {
    id: 121,
    author: 'Oscar Wilde',
    quote:
      'Be yourself; everyone else is already taken. - (Galatians 6:4, ESV)',
  },
  {
    id: 122,
    author: 'Friedrich Nietzsche',
    quote:
      'That which does not kill us makes us stronger. - (1 Peter 5:10, ESV)',
  },
  {
    id: 123,
    author: 'William Blake',
    quote:
      'To see a World in a Grain of Sand, And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand, And Eternity in an hour. - (Matthew 6:26, ESV)',
  },
  {
    id: 124,
    author: 'Søren Kierkegaard',
    quote: 'Anxiety is the dizziness of freedom. - (2 Corinthians 3:17, ESV)',
  },
  {
    id: 125,
    author: 'Augustine of Hippo',
    quote:
      'Our hearts are restless until they rest in you. - (Psalm 42:1, ESV)',
  },
  {
    id: 126,
    author: 'Francis of Assisi',
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - (Luke 18:27, ESV)",
  },
  {
    id: 127,
    author: 'Johann Wolfgang von Goethe',
    quote:
      'Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. - (Psalm 37:23, ESV)',
  },
  {
    id: 128,
    author: 'Frederick Douglass',
    quote:
      'Without struggles, there would be no progress. - (James 1:2-4, ESV)',
  },
  {
    id: 129,
    author: 'Helen Keller',
    quote:
      'Life is either a daring adventure or nothing at all. - (Proverbs 4:13, ESV)',
  },
  {
    id: 130,
    author: 'G.K. Chesterton',
    quote:
      'The Bible calls it faith; the world calls it optimism. - (Hebrews 11:1, ESV)',
  },
  {
    id: 131,
    author: 'Dorothy Day',
    quote:
      "Don't call for a man to carry you, carry yourself. - (Galatians 6:5, ESV)",
  },
  {
    id: 132,
    author: 'C.S. Lewis',
    quote:
      'Courage is not simply the absence of fear; it is the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - (Proverbs 28:1, ESV)',
  },
  {
    id: 133,
    author: 'Billy Graham',
    quote:
      'The greatest thing in the world is not so much where we are, but in what direction we are moving. - (Proverbs 4:18, ESV)',
  },
  {
    id: 134,
    author: 'John Calvin',
    quote:
      'Where the word of a king is, there is power. - (Proverbs 16:10, ESV)',
  },
  {
    id: 135,
    author: 'Charles Spurgeon',
    quote:
      'I would rather trust the Bible than the best philosopher. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 136,
    author: 'C.S. Lewis',
    quote:
      'God allows us to experience the lowest depths of disappointment so that we may rise up with the greatest strength of faith. - (Romans 8:28, ESV)',
  },
  {
    id: 137,
    author: 'Dietrich Bonhoeffer',
    quote:
      'Silence in the face of evil is itself evil: God will not hold us guiltless. - (Proverbs 31:8-9, ESV)',
  },
  {
    id: 138,
    author: 'Fyodor Dostoevsky',
    quote:
      'The man who has never looked into the abyss cannot write a novel. - (Psalm 86:13, ESV)',
  },

  {
    id: 123,
    author: 'William Blake',
    quote:
      'To see a World in a Grain of Sand, And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand, And Eternity in an hour. - (Matthew 6:26, ESV)',
  },
  {
    id: 124,
    author: 'Søren Kierkegaard',
    quote: 'Anxiety is the dizziness of freedom. - (2 Corinthians 3:17, ESV)',
  },
  {
    id: 125,
    author: 'Augustine of Hippo',
    quote:
      'Our hearts are restless until they rest in you. - (Psalm 42:1, ESV)',
  },
  {
    id: 126,
    author: 'Francis of Assisi',
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - (Luke 18:27, ESV)",
  },
  {
    id: 127,
    author: 'Johann Wolfgang von Goethe',
    quote:
      'Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. - (Psalm 37:23, ESV)',
  },
  {
    id: 128,
    author: 'Frederick Douglass',
    quote:
      'Without struggles, there would be no progress. - (James 1:2-4, ESV)',
  },
  {
    id: 129,
    author: 'Helen Keller',
    quote:
      'Life is either a daring adventure or nothing at all. - (Proverbs 4:13, ESV)',
  },
  {
    id: 130,
    author: 'G.K. Chesterton',
    quote:
      'The Bible calls it faith; the world calls it optimism. - (Hebrews 11:1, ESV)',
  },
  {
    id: 131,
    author: 'Dorothy Day',
    quote:
      "Don't call for a man to carry you, carry yourself. - (Galatians 6:5, ESV)",
  },
  {
    id: 132,
    author: 'C.S. Lewis',
    quote:
      'Courage is not simply the absence of fear; it is the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - (Proverbs 28:1, ESV)',
  },
  {
    id: 133,
    author: 'Billy Graham',
    quote:
      'The greatest thing in the world is not so much where we are, but in what direction we are moving. - (Proverbs 4:18, ESV)',
  },
  {
    id: 134,
    author: 'John Calvin',
    quote:
      'Where the word of a king is, there is power. - (Proverbs 16:10, ESV)',
  },
  {
    id: 135,
    author: 'Charles Spurgeon',
    quote:
      'I would rather trust the Bible than the best philosopher. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 136,
    author: 'C.S. Lewis',
    quote:
      'God allows us to experience the lowest depths of disappointment so that we may rise up with the greatest strength of faith. - (Romans 8:28, ESV)',
  },
  {
    id: 137,
    author: 'Dietrich Bonhoeffer',
    quote:
      'Silence in the face of evil is itself evil: God will not hold us guiltless. - (Proverbs 31:8-9, ESV)',
  },
  {
    id: 138,
    author: 'Fyodor Dostoevsky',
    quote:
      'The man who has never looked into the abyss cannot write a novel. - (Psalm 86:13, ESV)',
  },
  {
    id: 139,
    author: 'William Blake',
    quote:
      'To see a World in a Grain of Sand, And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand, And Eternity in an hour. - (Matthew 6:26, ESV)',
  },
  {
    id: 140,
    author: 'Søren Kierkegaard',
    quote: 'Anxiety is the dizziness of freedom. - (2 Corinthians 3:17, ESV)',
  },
  {
    id: 141,
    author: 'Augustine of Hippo',
    quote:
      'Our hearts are restless until they rest in you. - (Psalm 42:1, ESV)',
  },
  {
    id: 142,
    author: 'Francis of Assisi',
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - (Luke 18:27, ESV)",
  },
  {
    id: 143,
    author: 'Johann Wolfgang von Goethe',
    quote:
      'Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. - (Psalm 37:23, ESV)',
  },
  {
    id: 144,
    author: 'Frederick Douglass',
    quote:
      'Without struggles, there would be no progress. - (James 1:2-4, ESV)',
  },
  {
    id: 145,
    author: 'Helen Keller',
    quote:
      'Life is either a daring adventure or nothing at all. - (Proverbs 4:13, ESV)',
  },
  {
    id: 146,
    author: 'G.K. Chesterton',
    quote:
      'The Bible calls it faith; the world calls it optimism. - (Hebrews 11:1, ESV)',
  },
  {
    id: 147,
    author: 'Dorothy Day',
    quote:
      "Don't call for a man to carry you, carry yourself. - (Galatians 6:5, ESV)",
  },
  {
    id: 148,
    author: 'C.S. Lewis',
    quote:
      'Courage is not simply the absence of fear; it is the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - (Proverbs 28:1, ESV)',
  },
  {
    id: 149,
    author: 'Billy Graham',
    quote:
      'The greatest thing in the world is not so much where we are, but in what direction we are moving. - (Proverbs 4:18, ESV)',
  },
  {
    id: 150,
    author: 'John Calvin',
    quote:
      'Where the word of a king is, there is power. - (Proverbs 16:10, ESV)',
  },
  {
    id: 151,
    author: 'Charles Spurgeon',
    quote:
      'I would rather trust the Bible than the best philosopher. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 152,
    author: 'C.S. Lewis',
    quote:
      'God allows us to experience the lowest depths of disappointment so that we may rise up with the greatest strength of faith. - (Romans 8:28, ESV)',
  },
  {
    id: 153,
    author: 'Dietrich Bonhoeffer',
    quote:
      'Silence in the face of evil is itself evil: God will not hold us guiltless. - (Proverbs 31:8-9, ESV)',
  },
  {
    id: 154,
    author: 'Fyodor Dostoevsky',
    quote:
      'The man who has never looked into the abyss cannot write a novel. - (Psalm 86:13, ESV)',
  },
  {
    id: 155,
    author: 'J.R.R. Tolkien',
    quote:
      'Even the smallest person can change the course of the future. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 156,
    author: 'C.S. Lewis',
    quote: 'We read to know we are not alone. - (Ecclesiastes 4:9-10, ESV)',
  },
  {
    id: 157,
    author: 'Jane Austen',
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. - (Genesis 2:18, ESV)',
  },
  {
    id: 158,
    author: 'Harper Lee',
    quote:
      'You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it. - (Proverbs 18:15, ESV)',
  },
  {
    id: 159,
    author: 'George Orwell',
    quote:
      'In a time of deceit telling the truth is a revolutionary act. - (Proverbs 12:22, ESV)',
  },
  {
    id: 160,
    author: 'Margaret Atwood',
    quote:
      "I'm afraid of men. I'm afraid of women. I'm afraid of children. I'm afraid of everyone. - (Psalm 23:4, ESV)",
  },
  {
    id: 161,
    author: 'F. Scott Fitzgerald',
    quote:
      'So we beat on, boats against the current, borne back ceaselessly into the past. - (Ecclesiastes 1:4, ESV)',
  },
  {
    id: 162,
    author: 'Ernest Hemingway',
    quote:
      'The world breaks everyone, and afterward, some are strong at the broken places. - (Romans 5:3-4, ESV)',
  },
  {
    id: 163,
    author: 'J.K. Rowling',
    quote:
      'It is our choices, Harry, that show what we truly are, far more than our abilities. - (Romans 2:13, ESV)',
  },
  {
    id: 164,
    author: 'Dr. Seuss',
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. - (Galatians 5:1, ESV)",
  },
  {
    id: 165,
    author: 'Maya Angelou',
    quote:
      'Success is liking yourself, liking what you do, and liking how you do it. - (Galatians 5:22-23, ESV)',
  },
  {
    id: 166,
    author: 'Steve Jobs',
    quote: 'Stay hungry, stay foolish. - (Proverbs 3:5-6, ESV)',
  },
  {
    id: 167,
    author: 'Oprah Winfrey',
    quote:
      'You get in life what you have the courage to ask for. - (Matthew 7:7, ESV)',
  },
  {
    id: 168,
    author: 'Nelson Mandela',
    quote: 'A winner is a dreamer who never gives up. - (Proverbs 24:16, ESV)',
  },
  {
    id: 169,
    author: 'Albert Einstein',
    quote:
      'The important thing is not to stop questioning. Curiosity has its own reason for existing. - (Proverbs 18:15, ESV)',
  },
  {
    id: 170,
    author: 'Stephen Hawking',
    quote:
      'Intelligence is the ability to adapt to change. - (Romans 12:2, ESV)',
  },
  {
    id: 171,
    author: 'Marie Curie',
    quote:
      'One never notices what has been done; one can only see what remains to be done. - (Philippians 3:14, ESV)',
  },
  {
    id: 172,
    author: 'Leonardo da Vinci',
    quote:
      'Study the science of art. Study the art of science. Learn how to see. Realize that everything connects to everything else. - (Romans 11:33, ESV)',
  },
  {
    id: 173,
    author: 'Aristotle',
    quote:
      'There is no wealth like knowledge, and no poverty like ignorance. - (Proverbs 8:11, ESV)',
  },
  {
    id: 174,
    author: 'Plato',
    quote: 'Knowledge is the beginning of happiness. - (Proverbs 3:13, ESV)',
  },
  {
    id: 178,
    author: 'Confucus',
    quote: 'When anger rises, think of the consequences. - (Ecclesiastes 7:9, KJV)',
  },
];
const heroImage = document.querySelectorAll('.hero');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const newquote = document.querySelector('.newquote');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('click', moveRight);
function moveRight() {
  currentItem = (currentItem + 1) % allQuotes.length; // Wrap around to the beginning
  const item = allQuotes[currentItem];
  author.textContent = item.author;
  quote.textContent = item.quote;
}

function moveLeft() {
  currentItem = (currentItem - 1 + allQuotes.length) % allQuotes.length;
  const item = allQuotes[currentItem];
  author.textContent = item.author;
  quote.textContent = item.quote;
}

left.addEventListener('click', moveLeft);

let currentItem = 0;
function randomquote() {
  const item = allQuotes[currentItem];
  author.textContent = item.author;
  quote.textContent = item.quote;
  currentItem = Math.floor(Math.random() * allQuotes.length);
  quote.classList.remove('quoteAnimation'); // Remove old animation
  void quote.offsetWidth; // Force reflow (optional, for some browsers)
  quote.classList.add('quoteAnimation'); // Readd animation class
}
newquote.addEventListener('click', randomquote);

// toggle functionality
const toggleBtn = document.querySelector('.toggle_btn');
const dropdown = document.querySelector('.dropdown_menu');
const breakpoint = 768;

// Add click event listener to the toggle button
toggleBtn.addEventListener('click', function () {
  dropdown.classList.toggle('active'); // Toggle the 'active' class on the dropdown
});

// Handle screen resizing
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove('active');
  }
}

// Call the handleResize function on window resize and load
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

// for relationship container

const quote2 = document.querySelector('.quote2');
const author2 = document.querySelector('.author2');
const newquote2 = document.querySelector('.newquote2');

const relationshipQuotes = [
  {
    id: 1,
    author2: `Oscar Wilde`,
    quote2: `Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. - (1 Corinthians 13:13, ESV)`,
  },
  {
    id: 2,
    author2: `Maya Angelou`,
    quote2: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - (1 Corinthians 13:13, ESV)`,
  },
  {
    id: 3,
    author2: `Mother Teresa`,
    quote2: `Spread love everywhere you go. Let no one ever come to you without leaving happier. - (1 John 4:7, ESV)`,
  },
  {
    id: 4,
    author2: `C.S. Lewis`,
    quote2: `To love at all is to be vulnerable. - (1 Corinthians 13:4-8, ESV)`,
  },
  {
    id: 5,
    author2: `Martin Luther King Jr.`,
    quote2: `I have decided to stick with love. Hate is too great a burden to bear. - (1 John 4:20, ESV)`,
  },
  {
    id: 6,
    author2: `Rumi`,
    quote2: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - (Song of Solomon 2:16, ESV)`,
  },
  {
    id: 7,
    author2: `Leo Tolstoy`,
    quote2: `All, everything that I understand, I only understand because I love. - (1 John 4:8, ESV)`,
  },
  {
    id: 8,
    author2: `Albert Einstein`,
    quote2: `Gravitation is not responsible for people falling in love. - (1 John 4:18, ESV)`,
  },
  {
    id: 9,
    author2: `William Shakespeare`,
    quote2: `Love all, trust a few, do wrong to none. - (1 Corinthians 13:7, ESV)`,
  },
  {
    id: 10,
    author2: `Anne Frank`,
    quote2: `Parents can only give good advice or put them on the right paths, but the final forming of a person's character lies in their own hands. - (Proverbs 22:6, ESV)`,
  },
  {
    id: 11,
    author2: `Helen Keller`,
    quote2: `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - (1 Corinthians 13:13, ESV)`,
  },
  {
    id: 12,
    author2: `Ralph Waldo Emerson`,
    quote2: `The only way to have a friend is to be one. - (Proverbs 18:24, ESV)`,
  },
  {
    id: 13,
    author2: `Henry David Thoreau`,
    quote2: `There is no remedy for love but to love more. - (1 Corinthians 16:14, ESV)`,
  },
  {
    id: 14,
    author2: `Vincent Van Gogh`,
    quote2: `Love many things, for therein lies the true strength, and whosoever loves much performs much and can accomplish much, and what is done in love is done well. - (1 Corinthians 16:14, ESV)`,
  },
  {
    id: 15,
    author2: `Friedrich Nietzsche`,
    quote2: `It is not a lack of love, but a lack of friendship that makes unhappy marriages. - (Proverbs 18:22, ESV)`,
  },
  {
    id: 16,
    author2: `Emily Dickinson`,
    quote2: `That it will never come again is what makes life so sweet. - (1 Corinthians 13:7, ESV)`,
  },
  {
    id: 17,
    author2: `Walt Whitman`,
    quote2: `Keep your face always toward the sunshine - and shadows will fall behind you. - (Matthew 5:16, ESV)`,
  },
  {
    id: 18,
    author2: `Ralph Waldo Emerson`,
    quote2: `The only way to have a friend is to be one. - (Proverbs 18:24, ESV)`,
  },
  {
    id: 19,
    author2: `Henry David Thoreau`,
    quote2: `There is no remedy for love but to love more. - (1 Corinthians 16:14, ESV)`,
  },
  {
    id: 20,
    author2: `Vincent Van Gogh`,
    quote2: `Love many things, for therein lies the true strength, and whosoever loves much performs much and can accomplish much, and what is done in love is done well. - (1 Corinthians 16:14, ESV)`,
  },
  {
    id: 21,
    author2: `Friedrich Nietzsche`,
    quote2: `It is not a lack of love, but a lack of friendship that makes unhappy marriages. - (Proverbs 18:22, ESV)`,
  },
  {
    id: 22,
    author2: `Emily Dickinson`,
    quote2: `That it will never come again is what makes life so sweet. - (1 Corinthians 13:7, ESV)`,
  },
  {
    id: 23,
    author2: `Walt Whitman`,
    quote2: `Keep your face always toward the sunshine - and shadows will fall behind you. - (Matthew 5:16, ESV)`,
  },
  {
    id: 24,
    author2: `Robert Frost`,
    quote2: `In three words I can sum up everything I've learned about life: it goes on. - (1 Corinthians 13:4, ESV)`,
  },
  {
    id: 25,
    author2: `Johann Wolfgang von Goethe`,
    quote2: `One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words. - (Proverbs 18:21, ESV)`,
  },
  {
    id: 26,
    author2: `Winston Churchill`,
    quote2: `Success is not final, failure is not fatal: It is the courage to continue that counts. - (1 Corinthians 13:4-8, ESV)`,
  },
  {
    id: 27,
    author2: `Virginia Woolf`,
    quote2: `Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind. - (Galatians 5:1, ESV)`,
  },
  {
    id: 28,
    author2: `Charles Dickens`,
    quote2: `We forge the chains we wear in life. - (Galatians 6:7, ESV)`,
  },
  {
    id: 29,
    author2: `J.K. Rowling`,
    quote2: `It does not do to dwell on dreams and forget to live. - (Proverbs 19:21, ESV)`,
  },
  {
    id: 30,
    author2: `J.R.R. Tolkien`,
    quote2: `Not all those who wander are lost. - (Jeremiah 29:11, ESV)`,
  },
  {
    id: 31,
    author2: `Ernest Hemingway`,
    quote2: `Courage is grace under pressure. - (Joshua 1:9, ESV)`,
  },
  {
    id: 32,
    author2: 'Maya Angelou',
    quote2:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    id: 33,
    author2: 'Leo Tolstoy',
    quote2:
      'All, everything that I understand, I only understand because I love.',
  },
  {
    id: 34,
    author2: 'Aristotle',
    quote2: 'Love is composed of a single soul inhabiting two bodies.',
  },
  {
    id: 35,
    author2: 'Friedrich Nietzsche',
    quote2:
      'It is not a lack of love, but a lack of friendship that makes unhappy marriages.',
  },
  {
    id: 36,
    author2: 'Rumi',
    quote2:
      'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
  },
  {
    id: 37,
    author2: 'Antoine de Saint-Exupéry',
    quote2:
      'Love does not consist in gazing at each other, but in looking outward together in the same direction.',
  },
  {
    id: 38,
    author2: 'Paulo Coelho',
    quote2:
      'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.',
  },
  {
    id: 39,
    author2: 'Audrey Hepburn',
    quote2: 'The best thing to hold onto in life is each other.',
  },
  {
    id: 40,
    author2: 'Victor Hugo',
    quote2:
      'The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.',
  },
  {
    id: 41,
    author2: 'Lao Tzu',
    quote2:
      'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
  },
  {
    id: 42,
    author2: 'Helen Keller',
    quote2:
      'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
  },
  {
    id: 43,
    author2: 'Mother Teresa',
    quote2:
      'I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.',
  },
  {
    id: 44,
    author2: 'Martin Luther King Jr.',
    quote2:
      'I have decided to stick with love. Hate is too great a burden to bear.',
  },
  {
    id: 45,
    author2: 'Bob Marley',
    quote2:
      'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',
  },
  {
    id: 46,
    author2: 'Albert Einstein',
    quote2: 'Gravitation is not responsible for people falling in love.',
  },
  {
    id: 47,
    author2: 'William Shakespeare',
    quote2: 'The course of true love never did run smooth.',
  },
  {
    id: 48,
    author2: 'Jane Austen',
    quote2: 'There is no charm equal to tenderness of heart.',
  },
  {
    id: 49,
    author2: 'Pablo Neruda',
    quote2:
      'I love you as certain dark things are to be loved, in secret, between the shadow and the soul.',
  },
];
let currentRElationship = 0;

function relationshipFunction() {
  item2 = relationshipQuotes[currentRElationship];
  author2.textContent = item2.author2;
  quote2.textContent = item2.quote2;
  currentRElationship = Math.floor(Math.random() * relationshipQuotes.length);
  quote2.classList.remove('quoteAnimation'); // Remove old animation
  void quote2.offsetWidth; // Force reflow (optional, for some browsers)
  quote2.classList.add('quoteAnimation'); // Readd animation class
}

newquote2.addEventListener('click', relationshipFunction);
//  for mindset
const mindsetQuotes = [
  {
    id: 1,
    author3: 'Oscar Wilde',
    quote3:
      'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
  },
  {
    id: 2,
    author3: 'Walt Disney',
    quote3: 'The way to get started is to quit talking and begin doing.',
  },
  {
    id: 3,
    author3: 'Winston Churchill',
    quote3:
      'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
  },
  {
    id: 4,
    author3: 'Helen Keller',
    quote3:
      'The only thing worse than being blind is having sight but no vision.',
  },
  {
    id: 5,
    author3: 'Nelson Mandela',
    quote3:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  },
  {
    id: 6,
    author3: 'Albert Einstein',
    quote3: 'In the middle of difficulty lies opportunity.',
  },
  {
    id: 7,
    author3: 'Maya Angelou',
    quote3:
      'You may not control all the events that happen to you, but you can decide not to be reduced by them.',
  },
  {
    id: 8,
    author3: 'Mahatma Gandhi',
    quote3:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
  },
  {
    id: 9,
    author3: 'Martin Luther King Jr.',
    quote3:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
  },
  {
    id: 10,
    author3: 'Mark Twain',
    quote3: 'The secret of getting ahead is getting started.',
  },
  {
    id: 11,
    author3: 'Steve Jobs',
    quote3:
      'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.',
  },
  {
    id: 12,
    author3: 'Eleanor Roosevelt',
    quote3:
      'The future belongs to those who believe in the beauty of their dreams.',
  },
  {
    id: 13,
    author3: 'Abraham Lincoln',
    quote3:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    id: 14,
    author3: 'Mother Teresa',
    quote3:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
  },
  {
    id: 15,
    author3: 'Franklin D. Roosevelt',
    quote3:
      'When you reach the end of your rope, tie a knot in it and hang on.',
  },
  {
    id: 16,
    author3: 'Margaret Mead',
    quote3:
      'Never doubt that a small group of thoughtful, committed citizens can change the world.',
  },
  {
    id: 17,
    author3: 'Albert Einstein',
    quote3: 'Strive not to be a success, but rather to be of value.',
  },
  {
    id: 18,
    author3: 'John Lennon',
    quote3: "Life is what happens when you're busy making other plans.",
  },
  {
    id: 19,
    author3: 'Benjamin Franklin',
    quote3:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  },
  {
    id: 20,
    author3: 'Aristotle',
    quote3:
      'It is during our darkest moments that we must focus to see the light.',
  },
  {
    id: 21,
    author3: 'Ralph Waldo Emerson',
    quote3:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
  },
  {
    id: 22,
    author3: 'Anne Frank',
    quote3: 'Whoever is happy will make others happy too.',
  },
  {
    id: 23,
    author3: 'Helen Keller',
    quote3: 'Alone we can do so little; together we can do so much.',
  },
  {
    id: 24,
    author3: 'Dalai Lama',
    quote3:
      'Happiness is not something ready made. It comes from your own actions.',
  },
  {
    id: 25,
    author3: 'George Bernard Shaw',
    quote3:
      "Life isn't about finding yourself. Life is about creating yourself.",
  },
  {
    id: 26,
    author3: 'Buddha',
    quote3: 'What we think, we become.',
  },
  {
    id: 27,
    author3: 'Confucius',
    quote3: 'It does not matter how slowly you go as long as you do not stop.',
  },
  {
    id: 28,
    author3: 'Aesop',
    quote3: 'No act of kindness, no matter how small, is ever wasted.',
  },
  {
    id: 29,
    author3: 'Vincent Van Gogh',
    quote3: 'I dream my painting and I paint my dream.',
  },
  {
    id: 30,
    author3: 'Thomas A. Edison',
    quote3: "I have not failed. I've just found 10,000 ways that won't work.",
  },
];
const quote3 = document.querySelector('.quote3');
const author3 = document.querySelector('.author3');
const newquote3 = document.querySelector('.newquote3');

currentMindset = 0;
function mindsetFunction() {
  item3 = mindsetQuotes[currentMindset];
  author3.textContent = item3.author3;
  quote3.textContent = item3.quote3;
  currentMindset = Math.floor(Math.random() * mindsetQuotes.length);
  quote3.classList.remove('quoteAnimation'); // Remove old animation
  void quote3.offsetWidth; // Force reflow (optional, for some browsers)
  quote3.classList.add('quoteAnimation'); // Readd animation class
}
newquote3.addEventListener('click', mindsetFunction);

// creativity quotes
const quote4 = document.querySelector('.quote4');
const author4 = document.querySelector('.author4');
const newquote4 = document.querySelector('.newquote4');

const creativityQuotes = [
  {
    id: 1,
    author4: 'Steve Jobs',
    quote4: 'Innovation distinguishes between a leader and a follower.',
  },
  {
    id: 2,
    author4: 'Albert Einstein',
    quote4: 'Imagination is more important than knowledge.',
  },
  {
    id: 3,
    author4: 'Henry Ford',
    quote4:
      'If I had asked people what they wanted, they would have said faster horses.',
  },
  {
    id: 4,
    author4: 'Richard Branson',
    quote4:
      "You don't learn to walk by following rules. You learn by doing, and by falling over.",
  },
  {
    id: 5,
    author4: 'Elon Musk',
    quote4:
      'When something is important enough, you do it even if the odds are not in your favor.',
  },
  {
    id: 6,
    author4: 'Walt Disney',
    quote4: 'The way to get started is to quit talking and begin doing.',
  },
  {
    id: 7,
    author4: 'Mark Zuckerberg',
    quote4:
      "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
  },
  {
    id: 8,
    author4: 'Jeff Bezos',
    quote4:
      "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
  },
  {
    id: 9,
    author4: 'Bill Gates',
    quote4:
      "It's fine to celebrate success but it is more important to heed the lessons of failure.",
  },
  {
    id: 10,
    author4: 'Oprah Winfrey',
    quote4: 'Turn your wounds into wisdom.',
  },
  {
    id: 11,
    author4: 'Warren Buffett',
    quote4: "Risk comes from not knowing what you're doing.",
  },
  {
    id: 12,
    author4: 'Larry Page',
    quote4: 'Always deliver more than expected.',
  },
  {
    id: 13,
    author4: 'Howard Schultz',
    quote4:
      'Risk more than others think is safe. Dream more than others think is practical.',
  },
  {
    id: 14,
    author4: 'Jack Ma',
    quote4:
      'You should learn from your competitor, but never copy. Copy and you die.',
  },
  {
    id: 15,
    author4: 'Marissa Mayer',
    quote4:
      "I always did something I was a little not ready to do. I think that's how you grow.",
  },
  {
    id: 16,
    author4: 'Indra Nooyi',
    quote4:
      "Just because you are CEO, don't think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization.",
  },
  {
    id: 17,
    author4: 'Satya Nadella',
    quote4:
      'Our industry does not respect tradition - it only respects innovation.',
  },
  {
    id: 18,
    author4: 'Sundar Pichai',
    quote4:
      'A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right.',
  },
  {
    id: 19,
    author4: 'Tim Cook',
    quote4: 'Let your joy be in your journey - not in some distant goal.',
  },
  {
    id: 20,
    author4: 'Sheryl Sandberg',
    quote4:
      'Trying to do it all and expecting that it all can be done exactly right is a recipe for disappointment. Perfection is the enemy.',
  },
];
currentCreativity = 0;
function creativityFunction() {
  item4 = creativityQuotes[currentCreativity];
  author4.textContent = item4.author4;
  quote4.textContent = item4.quote4;
  currentCreativity = Math.floor(Math.random() * creativityQuotes.length);
  quote4.classList.remove('quoteAnimation'); // Remove old animation
  void quote4.offsetWidth; // Force reflow (optional, for some browsers)
  quote4.classList.add('quoteAnimation'); // Readd animation class
}
newquote4.addEventListener('click', creativityFunction);

// for success
const quote5 = document.querySelector('.quote5');
const author5 = document.querySelector('.author5');
const newquote5 = document.querySelector('.newquote5');

const successQuotes = [
  {
    id: 1,
    author5: 'Steve Jobs',
    quote5: 'Innovation distinguishes between a leader and a follower.',
  },
  {
    id: 2,
    author5: 'Albert Einstein',
    quote5: 'Imagination is more important than knowledge.',
  },
  {
    id: 3,
    author5: 'Henry Ford',
    quote5:
      'If I had asked people what they wanted, they would have said faster horses.',
  },
  {
    id: 4,
    author5: 'Richard Branson',
    quote5:
      "You don't learn to walk by following rules. You learn by doing, and by falling over.",
  },
  {
    id: 5,
    author5: 'Elon Musk',
    quote5:
      'When something is important enough, you do it even if the odds are not in your favor.',
  },
  {
    id: 6,
    author5: 'Walt Disney',
    quote5: 'The way to get started is to quit talking and begin doing.',
  },
  {
    id: 7,
    author5: 'Mark Zuckerberg',
    quote:
      "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
  },
  {
    id: 8,
    author5: 'Jeff Bezos',
    quote5:
      "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
  },
  {
    id: 9,
    author5: 'Bill Gates',
    quote5:
      "It's fine to celebrate success but it is more important to heed the lessons of failure.",
  },
  {
    id: 10,
    author5: 'Oprah Winfrey',
    quote5: 'Turn your wounds into wisdom.',
  },
  {
    id: 11,
    author5: 'Warren Buffett',
    quote5: "Risk comes from not knowing what you're doing.",
  },
  {
    id: 12,
    author5: 'Larry Page',
    quote5: 'Always deliver more than expected.',
  },
  {
    id: 13,
    author5: 'Howard Schultz',
    quote5:
      'Risk more than others think is safe. Dream more than others think is practical.',
  },
  {
    id: 14,
    author5: 'Jack Ma',
    quote5:
      'You should learn from your competitor, but never copy. Copy and you die.',
  },
  {
    id: 15,
    author5: 'Marissa Mayer',
    quote5:
      "I always did something I was a little not ready to do. I think that's how you grow.",
  },
  {
    id: 16,
    author5: 'Indra Nooyi',
    quote5:
      "Just because you are CEO, don't think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization.",
  },
  {
    id: 17,
    author5: 'Satya Nadella',
    quote5:
      'Our industry does not respect tradition - it only respects innovation.',
  },
  {
    id: 18,
    author5: 'Sundar Pichai',
    quote5:
      'A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right.',
  },
  {
    id: 19,
    author5: 'Tim Cook',
    quote5: 'Let your joy be in your journey - not in some distant goal.',
  },
  {
    id: 20,
    author5: 'Sheryl Sandberg',
    quote5:
      'Trying to do it all and expecting that it all can be done exactly right is a recipe for disappointment. Perfection is the enemy.',
  },
];
currentSuccess = 0;
function successFunction() {
  item5 = successQuotes[currentSuccess];
  author5.textContent = item5.author5;
  quote5.textContent = item5.quote5;
  currentSuccess = Math.floor(Math.random() * successQuotes.length);
  quote5.classList.remove('quoteAnimation'); // Remove old animation
  void quote5.offsetWidth; // Force reflow (optional, for some browsers)
  quote5.classList.add('quoteAnimation'); // Readd animation class
}
newquote5.addEventListener('click', successFunction);

// for video hero speed
window.addEventListener('load', function () {
  const video = document.getElementById('heroVideo');
  video.playbackRate = 0.8; // Set desired speed here, e.g., 0.5 for half speed
});

// for entance animation
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Generate a random transform effect to slide into the center
        const randomEffect = getRandomEffect();
        entry.target.style.transform = randomEffect; // Apply random transform
        entry.target.classList.add('visible'); // Trigger fade in
      } else {
        entry.target.classList.remove('visible'); // Remove visible class when out of view
        entry.target.style.transform = ''; // Reset transform
      }
    });
  });

  // Select all elements with the class 'content'
  const contentElements = document.querySelectorAll('.content');

  // Observe each content element
  contentElements.forEach(function (content) {
    observer.observe(content);
  });

  // Function to get a random effect for sliding to the center
  function getRandomEffect() {
    const effects = [
      'translateX(-30px)', // Slide in from left
      'translateX30px)', // Slide in from right
      'translateY(-30px)', // Slide in from top
      'translateY(30px)', // Slide in from bottom
      'scale(1.1)',
    ];
    // Return a random effect
    return effects[Math.floor(Math.random() * effects.length)];
  }
});
