const replace = require('replace-in-file');
const { webAppConf } = require("./firebase-web-config.json");

async function firebaseWebConfig() {
  const options = {
    files: './firebase-web-config.json',
    from: [
      new RegExp(webAppConf.apiKey),
      new RegExp(webAppConf.authDomain),
      new RegExp(webAppConf.databaseURL),
      new RegExp(webAppConf.projectId),
      new RegExp(webAppConf.storageBucket),
      new RegExp(webAppConf.messagingSenderId),
      new RegExp(webAppConf.appId)
    ],
    to: [
      process.env['prod-apiKey'],
      process.env['prod-authDomain'],
      process.env['prod-databaseURL'],
      process.env['prod-projectId'],
      process.env['prod-storageBucket'],
      process.env['prod-messagingSenderId'],
      process.env['prod-appId']
    ]
  };
  try {
    const results = await replace(options);
    // eslint-disable-next-line no-console
    console.log('#prepare-prod-build.js.firebaseWebConfig(): Replacement results: ', results);
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('#prepare-prod-build.js.firebaseWebConfig(): Error occurred:', error);
  }
}

async function firebaseRC() {
  const options = {
    files: './.firebaserc',
    from: [
      new RegExp(webAppConf.projectId)
    ],
    to: [
      process.env['prod-projectId']
    ]
  };
  try {
    const results = await replace(options);
    // eslint-disable-next-line no-console
    console.log('#prepare-prod-build.js.firebaseRC(): Replacement results: ', results);
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('#prepare-prod-build.js.firebaseRC(): Error occurred:', error);
  }
}

firebaseWebConfig();
firebaseRC();