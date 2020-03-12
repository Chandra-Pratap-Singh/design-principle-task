//  Incorrect Code

class Post {
  CreatePost(db, postMessage) {
    if (postMessage.startsWith("#")) db.AddAsTag(postMessage);
    else db.Add(postMessage);
  }
}

// Correct way of writting Code

class Post {
  CreatePost(db, postMessage) {
    db.Add(postMessage);
  }
}

class TagPost extends Post {
  CreatePost(db, postMessage) {
    db.Add(postMessage);
  }
}
