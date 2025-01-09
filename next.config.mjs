/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocL4wB5DCd2rwnOSTYwSzl3kngQTcEJjPKbNSRAvd76YXv-8Fw=s96-c",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images?q=tbn:ANd9GcQMDiFokl-_2J0JdWWrRB_BKyCV45vZzhMxiw&s",
      },
      {
        protocol: "https",
        hostname: "edtiyvwjdmwmruamkpzr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/redbud-product-images/**",
      },
    ],
    // unoptimized: true, //we need to set this before build so that Next Image API doent cos issues in static files.
  },
  // output: "export",
};

export default nextConfig;
