/** @type {import('next').NextConfig} */
import path from 'path';

export default {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')], // `process.cwd()` replaces `__dirname` in ES modules
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: {icon: true}}],
        });

        return config;
    },
};