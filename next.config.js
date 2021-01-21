module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
  env: {
    NEXT_EMAIL_JS: process.env.NEXT_EMAIL_JS,
    NEXT_EMAIL_TEMPLATE: process.env.NEXT_EMAIL_TEMPLATE,
    NEXT_EMAIL_USERID: process.env.NEXT_EMAIL_USERID,
  },
};
