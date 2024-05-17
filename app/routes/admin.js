const { body, validationResult } = require('express-validator');

module.exports = (app) => {
  app.get('/notice/add', (req, res) => {
    res.render('admin/add_notice');
  });

  app.post(
    '/notice/save',
    body('title').notEmpty(),
    (req, res) => {
      const validate = validationResult(req);
      var data = req.body;

      if(!validate.isEmpty()) {
        // return res.status(400).json({ 
        //   statusCode: 400,
        //   message: 'Bad request',
        //   errors: validate.array(),
        // });
        return res.send({ errors: validate.array() });
      }    
    
      const connection = app.config.database();
      const noticeDao = new app.app.models.notice_dao(connection);
    
      noticeDao.create(data, (error, results) => {
        if(error) throw error;
        res.redirect('/notices');
      });
  });
}