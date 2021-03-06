const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (requ,res) => {
            res.redirect('/surveys');
        }
        );

    app.get('/api/logout', (res,req) => {
        //tried several changes but still internal server error persistent
        req.logout();
        res.redirect('/');
    });

    app.get ('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};