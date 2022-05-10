module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_test'),
      user: env('DATABASE_USERNAME', 'uzr_strapitst'),
      password: env('DATABASE_PASSWORD', 'dOspESxKrCDvjHs6'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
