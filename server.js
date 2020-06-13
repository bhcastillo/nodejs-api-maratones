const c = console.log,
  app = require('./app'),
  db = require('./models/db');

app.listen(app.get('port'), () =>
  c(`Iniciando APU RESful en el puerto ${app.get('port')}`)
);
// process.stdout.write('\033c');
c(
  '***** VARIABLES DE ENTORNO *****\n',
  process.env.NODE_ENV,
  '\n',
  process.env.urlDB,
  '\n',
  process.env.PORT,
  '\n***** VARIABLES DE ENTORNO *****'
);
