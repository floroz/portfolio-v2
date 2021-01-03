const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  env: {
    NEXT_EMAIL_JS: process.env.NEXT_EMAIL_JS,
    NEXT_EMAIL_TEMPLATE: process.env.NEXT_EMAIL_TEMPLATE,
    NEXT_EMAIL_USERID: process.env.NEXT_EMAIL_USERID,
  },
});
