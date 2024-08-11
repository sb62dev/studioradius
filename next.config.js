module.exports = {
    images: {
      domains: ['images.ctfassets.net'],
    },
}

/** @type {import('next').NextConfig} */
// next.config.js
const CF_HOSTNAME = process.env.CF_HOSTNAME;
const CONTENTFUL_SPACE_KEY = process.env.CONTENTFUL_SPACE_KEY;
const CF_URL = process.env.CF_URL; 
const nextConfig = {
    async rewrites() {
		return [ 
            {
                source: `/${CONTENTFUL_SPACE_KEY}/:slug*`,
                destination: `${CF_URL}/${CONTENTFUL_SPACE_KEY}/:slug*`            
            },
			{
			    source: '/assets/:slug*',
				destination: `${CF_URL}/${CONTENTFUL_SPACE_KEY}/:slug*`            
			} 
		]
	}, 
    images: {
        domains: [CF_HOSTNAME],   
        remotePatterns: [
            { 
                protocol: "https",
                hostname: CF_HOSTNAME,
                port: "",
                pathname: `/${CONTENTFUL_SPACE_KEY}/:slug*` 
            },
        ],
    }, 
};

module.exports = nextConfig;