process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'dev') {
  process.env.URL_DB = 'mongodb://127.0.0.1:27017/maratones';
} else {
  process.env.URL_DB =
    'mongodb+srv://bhcastillo:edteam@cluster0-qlnk6.mongodb.net/bcmaratones?retryWrites=true&w=majority';
}
