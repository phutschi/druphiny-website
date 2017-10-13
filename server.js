const { createServer } = require( 'http' );
const { parse } = require( 'url' );
const next = require( 'next' );
const Raven = require( 'raven' );
require( 'dotenv' ).config();

const port = parseInt( process.env.PORT, 10 ) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const handle = app.getRequestHandler();

Raven.config( process.env.SENTRY_URL ).install();

app.prepare().then( () => {
  createServer( ( req, res ) => {
    const parsedUrl = parse( req.url, true );

    handle( req, res, parsedUrl );
  } ).listen( 3000, err => {
    if ( err ) throw err;
    console.log( `> Running on http://localhost:${port}` );
  } );
} );
