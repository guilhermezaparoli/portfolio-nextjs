import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, {dev}) {
        if(!dev){
            config.devtoll = false;
        }
        return config
    }
}

export default withNextIntl(nextConfig)
