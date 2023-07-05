function generateUUID() {
  var uuid = '';
  var characters = 'abcdef0123456789';
  var sections = [8, 4, 4, 4, 12];

  for (var i = 0; i < sections.length; i++) {
    for (var j = 0; j < sections[i]; j++) {
      uuid += characters[Math.floor(Math.random() * characters.length)];
    }
    if (i < sections.length - 1) {
      uuid += '-';
    }
  }

  return uuid;
}

module.exports = generateUUID;
