//incorrect Code

class User {
  CreatePost(db, postMessage, file) {
    try {
      db.add(postMessage);
    } catch (err) {
      db.logError(err);
      file.write(err);
    }
  }
}

// Correct way of writting

class User {
  errorHandeler = new ErrorHandeler();
  CreatePost(db, file, postMessage) {
    try {
      db.add(postMessage);
    } catch (err) {
      ErrorHandeler.logError(db, file, err);
    }
  }
}

class ErrorHandeler {
  logError(db, file, err) {
    db.logError(err);
    file.write(err);
  }
}
