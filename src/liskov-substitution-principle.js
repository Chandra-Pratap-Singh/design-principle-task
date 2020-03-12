// incorrect code
class Post {
  createPost(db, postMessage) {
    db.Add(postMessage);
  }
}

class MentionPost extends Post {
  createMentionPost(db, postMessage) {
    user = postMessage.parseUser();
    db.notifyUser(user);
    db.overrideExistingMention(user, postMessage);
    super.createPost(db, postMessage);
  }
}

// correct way of wriiting

class Post {
  createPost(db, postMessage) {
    db.Add(postMessage);
  }
}

class MentionPost extends Post {
  createPost(db, postMessage) {
    this.notifyUser(user);
    this.overrideExistingMention(user, postMessage);
    super.createPost(db, postMessage);
  }

  notifyUser(user) {
    db.notifyUser(user);
  }

  overrideExistingMention(user, postMessage) {
    db.overrideExistingMention(user, postMessage);
  }
}
