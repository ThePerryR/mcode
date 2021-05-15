const lessons = [
  {
    title: 'Introduction',
    lessons: [
      {
        type: 'title-paragraph',
        title: 'Welcome to morsecode.guru',
        paragraph: `This application is designed to teach you to send and receive morse code quickly 
      using interactive exercises. Morse code is a way to communicate with limited technology. It 
      uses a pattern short and long signals. These signals can be anything from sound sent over 
      radio waves to a flashlight turning on and off. In these lessons we'll use a the virtual 
      radio on the left. You can either click the red button or press the space bar. Try 
      experimenting and click "continue" when you're ready to begin.`
      },
      {
        type: 'paragraph',
        paragraph: `As mentioned before, morse code is broken into long and short signals. A short signal 
      is represented with ".", the long signal is "-". The letter "E" is one short signal, and "T" 
      is one long signal. However, most letters require a combination of these signals such as "A" 
      which is one short signal followed by one long signal, or ".-". Now try sending both "." and 
      "-" with the radio on the left. The short signal is a very quick click. Once you're ready, 
      click "continue".`
      },
      {
        type: 'send-code',
        message: `Now try sending the letter "E". This is just "." which is a very short signal. 
      Watch the video below if you're having issues.`,
        video: 'https://www.loom.com/embed/aafb071bee604c32bfdc5d00be7348bb',
        answer: 'E'
      },
      {
        type: 'send-code',
        message: 'Great! Now try sending the letter "T" which is one long signal.',
        answer: 'T'
      },
      {
        type: 'send-code',
        message: `Well done. Try sending "E" three times. Be sure to wait for the message to fully 
      send before trying to send another letter.`,
        answer: 'E',
        count: 3
      },
      {
        type: 'send-code',
        message: `Try sending "T" three times.`,
        answer: 'T',
        count: 3
      },
      {
        type: 'send-code',
        message: `Now try sending "EE" 3 times. If you wait too long between letters they will become 
      separate words. If you go too quickly, it will be a different letter.`,
        answer: 'EE',
        count: 3
      },
      {
        type: 'send-code',
        message: `Now send "TT" 3 times.`,
        answer: 'TT',
        count: 3
      },
      {
        type: 'send-code',
        message: `Let's make it a bit harder. Try sending "ET"`,
        answer: 'ET',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "TTT"`,
        answer: 'TTT',
        count: 4
      },
      {
        type: 'send-code',
        message: `Send "TTEE"`,
        answer: 'TTEE',
        count: 2
      },
      {
        type: 'paragraph',
        paragraph: `Great job! I think you understand the difference between short and long signals. 
      We're now going to learn how to send other letters and start building words.`
      }
    ]
  },
  {
    title: 'ABCs',
    lessons: [
      {
        type: 'send-code',
        message: `Start with "A". This is one short signal followed by one long signal, or ".-"`,
        answer: 'A'
      },
      {
        type: 'send-code',
        message: `Try sending "B" which is one long and 3 shorts or "-..."`,
        answer: 'B'
      },
      {
        type: 'send-code',
        message: `Finally try "C". This is a little harder than the others. It long-short-long-short 
      or "-.-."`,
        answer: 'C'
      },
      {
        type: 'send-code',
        message: `Great, now send "A" 5 times. Remember, it's ".-"`,
        answer: 'A',
        count: 5
      },
      {
        type: 'send-code',
        message: `Now send "B", as a reminder it's "-..."`,
        answer: 'B',
        count: 5
      },
      {
        type: 'send-code',
        message: `Send "C". It's "-.-."`,
        answer: 'C',
        count: 5
      },
      {
        type: 'send-code',
        message: `Send "E"`,
        answer: 'E',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "T"`,
        answer: 'T',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "AA"`,
        answer: 'AA',
        count: 4
      },
      {
        type: 'send-code',
        message: `Send "BB"`,
        answer: 'BB',
        count: 4
      },
      {
        type: 'send-code',
        message: `Send "CC"`,
        answer: 'CC',
        count: 4
      },
      {
        type: 'send-code',
        message: `Send "ET"`,
        answer: 'ET',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "AB"`,
        answer: 'AB',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "AB"`,
        answer: 'AB',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "CA"`,
        answer: 'CA',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "BC"`,
        answer: 'BC',
        count: 3
      },
      {
        type: 'send-code',
        message: `Send "CAT"`,
        answer: 'CAT',
        count: 4
      },
      {
        type: 'send-code',
        message: `Send "CCCC"`,
        answer: 'CCCC'
      }
    ]
  }
]
export default lessons
