class PostError extends Error {
    constructor(message, redirectURL, status) {
        super(message);
        this.redirectURL = redirectURL;
        this.status = status;
    }

    getMessage() {
        return this.Message;
    }
    getRedirectURL() {
        return this.redirectURL;
    }
    getStatus() {
        return this.status;
    }
}

module.exports = PostError;