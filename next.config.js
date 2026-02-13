/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withPayload } from "@payloadcms/next/withPayload";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: '0c54tlbmo0.ufs.sh'
              },
              {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
              },
              {
                protocol: 'https',
                hostname: 'picsum.photos'
              }
        ]
    }
};

export default withPayload(config);
