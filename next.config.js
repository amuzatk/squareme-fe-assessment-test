module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};


// module.exports = {
//     async redirects() {
//       // Remove the existing redirect for the root URL
//       return [];
//     },
//     images: {
//       domains: ['i.pravatar.cc'],
//     },
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//       });
  
//       return config;
//     },
//   };
  
  
  
  
  
  // module.exports = {
  //     images: {
  //       domains: ['i.pravatar.cc'],
  //     },
  //     webpack(config) {
  //       config.module.rules.push({
  //         test: /\.svg$/,
  //         use: ["@svgr/webpack"],
  //       });
    
  //       return config;
  //     },
  //   };