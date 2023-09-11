module.exports = {
  apps : [{
    name: "Sub-Store-Server", // 应用程序的名称
    script: "npm", // 要执行的脚本
    args: "run server", // 脚本的参数
    instances: 1, // 启动的实例数量
    autorestart: true, // 是否自动重启
    watch: false, // 是否监视文件变化
    max_memory_restart: "1G", // 内存超过多少时重启
    env: {
      NODE_ENV: "production", // 环境变量
    }
  }]
};

