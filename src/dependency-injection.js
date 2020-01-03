// incorrect code

class Post {
  errorLogger = new ErrorLogger();
  createPost(db, postMessage) {
    try {
      db.Add(postMessage);
    } catch (err) {
      this.errorLogger.log(err);
    }
  }
}

// correct way of writting code

class Post {
  errorLogger;
  constructor(injectedErrorLogger) {
    this.errorLogger = injectedErrorLogger;
  }
  createPost(db, postMessage) {
    try {
      db.Add(postMessage);
    } catch (err) {
      this.errorLogger.log(err);
    }
  }
}
