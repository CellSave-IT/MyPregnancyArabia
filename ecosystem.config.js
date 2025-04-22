module.exports = {
  apps: [
    {
      name: 'my-pregnancy-frontend',
      script: 'serve',
      watch: true,
      ignore_watch: ['node_modules', 'build'],
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 8080,
      },
    },
  ],
}
