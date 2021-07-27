const env = {
    database: 'd4d1e9v90ut59c',
    username: 'isebdkznsgyvpq',
    password: '7bc3bd07978f6803e0cdd13b416d9e333948a2a65aedce4a4743e48a2f47c8cd',
    host: 'ec2-3-231-194-96.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;