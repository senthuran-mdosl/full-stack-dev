module.exports = {
    googleClientID: '867853211930-4e8rmfdeuhkrcain8j6006golsgu1ap3.apps.googleusercontent.com',
    googleClientSecret: 'fdMV07zwwVgnoJ-1Swzfgs26',
    mongoURI: 'mongodb+srv://mongoemaily:WAoatb2QoopKgSXh@emaily.8kriw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    cookieKey: 'abcdefgh'
};

if (process.env.NODE_ENV === 'production'){
    // we are in production
    module.exports = require('./prod');
} else {
    // in dev
    module.exports = require('./dev');
}