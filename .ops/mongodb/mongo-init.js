db.auth('gword_user', 'gword_pass')

db = db.getSiblingDB('gword')
db.createUser({
   user: "gword_user",
   pwd: 'gword_pass',
   roles: [{ role: "readWrite", db: "gword" }]
})

db.niv_books.insertMany(
   [
      { position: 1, abbr: ['gn', 'ge', 'gen'], name: 'Genesis', chapters: 50 },
      { position: 2, abbr: ['ex', 'exod'], name: 'Exodus', chapters: 40 },
      { position: 3, abbr: ['lv', 'le', 'lev'], name: 'Leviticus', chapters: 27 },
      { position: 4, abbr: ['nm', 'nu', 'nb', 'num'], name: 'Numbers', chapters: 36 },
      { position: 5, abbr: ['dt', 'de', 'deut'], name: 'Deuteronomy', chapters: 34 },
      { position: 6, abbr: ['jos', 'jsh', 'josh'], name: 'Joshua', chapters: 24 },
      { position: 7, abbr: ['jg', 'jdg', 'judg', 'jdgs'], name: 'Judges', chapters: 21 },
      { position: 8, abbr: ['ru', 'rth'], name: 'Ruth', chapters: 4 },
      { position: 9, abbr: ['1 sa', '1 s', '1 sm', '1 sam'], name: '1 Samuel', chapters: 31 },
      { position: 10, abbr: ['2 sa', '2 s', '2 sm', '2 sam'], name: '2 Samuel', chapters: 24 },
      { position: 11, abbr: ['1 k', '1 ki', '1 kin', '1 kgs'], name: '1 Kings', chapters: 22 },
      { position: 12, abbr: ['2 k', '2 ki', '2 kin', '2 kgs'], name: '2 Kings', chapters: 25 },
      { position: 13, abbr: ['1 ch', '1 chr'], name: '1 Chronicles', chapters: 29 },
      { position: 14, abbr: ['2 ch', '2 chr'], name: '2 Chronicles', chapters: 36 },
      { position: 15, abbr: ['ez', 'ezr'], name: 'Ezra', chapters: 10 },
      { position: 16, abbr: ['ne', 'neh'], name: 'Nehemiah', chapters: 13 },
      { position: 17, abbr: ['es', 'est', 'esth'], name: 'Esther', chapters: 10 },
      { position: 18, abbr: ['jb'], name: 'Job', chapters: 42 },
      { position: 19, abbr: ['ps', 'psa', 'psm', 'pslm', 'psalm'], name: 'Psalms', chapters: 150 },
      { position: 20, abbr: ['pr', 'prv', 'pro', 'prov'], name: 'Proverbs', chapters: 31 },
      { position: 21, abbr: ['ec', 'ecc', 'eccle', 'eccles'], name: 'Ecclesiastes', chapters: 12 },
      { position: 22, abbr: ['song'], name: 'Song of Solomon', chapters: 8 },
      { position: 23, abbr: ['is', 'isa'], name: 'Isaiah', chapters: 66 },
      { position: 24, abbr: ['jr', 'je', 'jer'], name: 'Jeremiah', chapters: 52 },
      { position: 25, abbr: ['la', 'lam'], name: 'Lamentations', chapters: 5 },
      { position: 26, abbr: ['eze', 'ezk', 'ezek'], name: 'Ezekiel', chapters: 48 },
      { position: 27, abbr: ['dn', 'da', 'dan'], name: 'Daniel', chapters: 12 },
      { position: 28, abbr: ['ho', 'hos'], name: 'Hosea', chapters: 14 },
      { position: 29, abbr: ['jl'], name: 'Joel', chapters: 3 },
      { position: 30, abbr: ['am'], name: 'Amos', chapters: 9 },
      { position: 31, abbr: ['ob', 'obad'], name: 'Obadiah', chapters: 1 },
      { position: 32, abbr: ['jon', 'jnh'], name: 'Jonah', chapters: 4 },
      { position: 33, abbr: ['mc', 'mic'], name: 'Micah', chapters: 7 },
      { position: 34, abbr: ['na', 'nah'], name: 'Nahum', chapters: 3 },
      { position: 35, abbr: ['hab'], name: 'Habakkuk', chapters: 3 },
      { position: 36, abbr: ['zp', 'zep', 'zeph'], name: 'Zephaniah', chapters: 3 },
      { position: 37, abbr: ['hg', 'hag'], name: 'Haggai', chapters: 2 },
      { position: 38, abbr: ['zc', 'zec', 'zech'], name: 'Zechariah', chapters: 14 },
      { position: 39, abbr: ['ml', 'mal'], name: 'Malachi', chapters: 4 },
      { position: 40, abbr: ['mt', 'matt'], name: 'Matthew', chapters: 28 },
      { position: 41, abbr: ['mk', 'mrk'], name: 'Mark', chapters: 16 },
      { position: 42, abbr: ['lk', 'luk'], name: 'Luke', chapters: 24 },
      { position: 43, abbr: ['jn', 'jhn'], name: 'John', chapters: 21 },
      { position: 44, abbr: ['ac'], name: 'Acts', chapters: 28 },
      { position: 45, abbr: ['ro', 'rm', 'rom'], name: 'Romans', chapters: 16 },
      { position: 46, abbr: ['1 co', '1 cor'], name: '1 Corinthians', chapters: 16 },
      { position: 47, abbr: ['2 co', '2 cor'], name: '2 Corinthians', chapters: 13 },
      { position: 48, abbr: ['ga', 'gal'], name: 'Galatians', chapters: 6 },
      { position: 49, abbr: ['eph', 'ephes'], name: 'Ephesians', chapters: 6 },
      { position: 50, abbr: ['pp', 'php', 'phil'], name: 'Philippians', chapters: 4 },
      { position: 51, abbr: ['col'], name: 'Colossians', chapters: 4 },
      { position: 52, abbr: ['1 th', '1 thes', '1 thess'], name: '1 Thessalonians', chapters: 5 },
      { position: 53, abbr: ['2 th', '2 thes', '2 thess'], name: '2 Thessalonians', chapters: 3 },
      { position: 54, abbr: ['1 ti', '1 tim'], name: '1 Timothy', chapters: 6 },
      { position: 55, abbr: ['2 ti', '2 tim'], name: '2 Timothy', chapters: 4 },
      { position: 56, abbr: ['ti', 'tit'], name: 'Titus', chapters: 3 },
      { position: 57, abbr: ['pm', 'phm', 'philem'], name: 'Philemon', chapters: 1 },
      { position: 58, abbr: ['heb'], name: 'Hebrews', chapters: 13 },
      { position: 59, abbr: ['jm', 'jas'], name: 'James', chapters: 5 },
      { position: 60, abbr: ['1 p', '1 pt', '1 pe', '1 pet'], name: '1 Peter', chapters: 5 },
      { position: 61, abbr: ['2 p', '2 pt', '2 pe', '2 pet'], name: '2 Peter', chapters: 3 },
      { position: 62, abbr: ['1 j', '1 jn', '1 jhn'], name: '1 John', chapters: 5 },
      { position: 63, abbr: ['2 j', '2 jn', '2 jhn'], name: '2 John', chapters: 1 },
      { position: 64, abbr: ['3 j', '3 jn', '3 jhn'], name: '3 John', chapters: 1 },
      { position: 65, abbr: ['jd', 'jud'], name: 'Jude', chapters: 1 },
      { position: 66, abbr: ['rev'], name: 'Revelation', chapters: 22 }
   ],
)

db.niv_gn.insertMany(
   [
      {
         chapter: 1,
         verses: 31,
         text: {
            verse1: 'In the beginning God created the heavens and the earth.',
            verse2: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
            // ...
         }
      },
      {
         chapter: 2,
         verses: 25,
         text: {
            verse1: 'Thus the heavens and the earth were completed in all their vast array.',
            verse2: ' By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.',
            // ...
         }
      },
      // { ... }
   ]
)

// ToDo: Check index creation
db.niv_gn.createIndex({ '$**': 'text' })

// Abbreviations taken from:
// https://www.aresearchguide.com/bibleabb.html
