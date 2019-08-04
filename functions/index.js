const functions = require('firebase-functions');
const { expressServer } = require('./__sapper__/build/server/server');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.ssr = functions.https.onRequest(expressServer);
