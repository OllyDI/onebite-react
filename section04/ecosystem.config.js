module.exports = {
  apps: [
    {
      name: "my-react-dev",
      script: "npm",
      args: ["run", "dev"],
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "my-react-prod",
      script: "serve",
      args: ["-s", "dist", "-l", "5173"],
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};