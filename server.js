const c = console.log,
  app = require('./app');

app.listen(app.get('port'), () =>
  c(`Iniciando APU RESful en el puerto ${app.get('port')}`)
);

c(
  '***** VARIABLES DE ENTORNO *****\n',
  process.env.NODE_ENV,
  '\n',
  process.env.urlDB,
  '\n',
  process.env.PORT,
  '\n***** VARIABLES DE ENTORNO *****'
);
