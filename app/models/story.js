var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
  name: String,
  friendName: String,
  intro: String,
  middle: String,
  climax: String,
  ending: String,
  email: String
});

var Story = mongoose.model('Story', StorySchema);

module.exports = mongoose.model('Story', StorySchema);
