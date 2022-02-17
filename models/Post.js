const mongoose = require('mongoose');

const Poste = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Post = mongoose.model('Post', Poste);

module.exports = Post;
