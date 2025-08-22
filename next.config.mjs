const nextConfig = (phase = '') => {
  if (phase === 'phase-development-server') {
    console.log('development session ;)')
  }
  if (phase === 'phase-production-build') {
    console.log('production build ;)')
  }

  const nextConfigOptions = {
    reactStrictMode: true,
    // distDir: 'build',
    turbopack: {
      rules: {
        // Rule for SVG as React Component
        '*.react.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // images: {
    //   localPatterns: [
    //     {
    //       pathname: '/images/**',
    //       search: '',
    //     },
    //   ],
    // },
  }

  return nextConfigOptions
}

export default nextConfig;
