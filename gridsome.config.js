// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
       //tailwindConfig: './some/file/js',
       //purgeConfig: {},
       //presetEnvConfig: {},
       shouldPurge: true,
       shouldImport: true,
       shouldTimeTravel: true,
      },
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/admin/index.js` 
      }
    }
  ]
};
