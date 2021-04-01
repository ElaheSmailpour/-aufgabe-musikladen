
const express = require('express');
//const path = require('path');


const createError = require('http-errors')



const orderRouter = require('./routes/orders');


const app = express();

const verbindeDB = require("./mongo-db");
verbindeDB();




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



//app.use(express.static(path.join(__dirname, 'public')));



app.use('/orders', orderRouter);


app.get('*', (req,res, next) =>{
  // Fehler werfen: 
  let fehler = new Error('Diesen Pfad gibt es nicht')
  fehler.statusCode = 404;
  // FEHLER EXTRA: wir können fehler-Objekte auch mit dem Paket http-errors erstellen:
  const fehlerKurz = createError(404, 'Diesen Pfad gibt es nicht')

  // weitergeben an nächster Middleware
  next(fehlerKurz)
})


// usere Fehler middle ware: 
app.use((error, req,res,next) => {
  // fehlermeldung auf der Console ausgeben:
  console.log('Unser FehlerMiddleware', error);
  // fehlermedlung senden:
  // status im header setzen:
  res.status(error.statusCode)
  // // wir senden ein Error objekt zurück zum Frontend
  res.send({
    error: {
      status: error.statusCode,
      mitteilung: error.message 
    }
  })

})

module.exports = app;
