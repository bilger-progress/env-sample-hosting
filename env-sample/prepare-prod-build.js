async function firebaseWebConfig() {
  const replace = require('replace-in-file');
  const options = {
    files: './src/firebaseApp.js',
    from: /dev/g,
    to: 'prod',
  };
  try {
    const results = await replace(options)
    // eslint-disable-next-line no-console
    console.log('#prepare-prod-build.js.firebaseWebConfig(): Replacement results: ', results);
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('#prepare-prod-build.js.firebaseWebConfig(): Error occurred:', error);
  }
}

firebaseWebConfig();