const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");



Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

// I want to put it above, but I'm worried it'll get mad and not order right like the other models... Why can't things just be AN
Comment.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

module.exports = { Comment, Post, User, };
