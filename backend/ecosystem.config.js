module.exports = {
  apps : [{
    name: "sub-server", // 应用程序的名称
    script: "node", // 要执行的脚本
    args: "/opt/src/Sub-Store-Pro/backend/dist/sub-store.min.js", // 脚本的参数
    instances: 1, // 启动的实例数量
    autorestart: true, // 是否自动重启
    watch: false, // 是否监视文件变化
    max_memory_restart: "1G", // 内存超过多少时重启
    env: {
      NODE_ENV: "production", // 环境变量
    }
  }]
};


