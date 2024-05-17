const { body } = require('express-validator');

module.exports = [
  body('title').notEmpty().withMessage('Preencha o campo título.'),
  body('summary').notEmpty().withMessage('Preencha o campo resumo.'),
  body('description').notEmpty().withMessage('Preecha o campo descrição.'),
  body('author').notEmpty().withMessage('Preencha o campo autor.'),
  body('date_notice').notEmpty().isDate({ format: 'YYYY-MM-DD' }).withMessage('Preencha o campo data da notícia. Informe uma data.'),
];