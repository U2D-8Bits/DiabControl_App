-- CREATE DATABASE IF NOT EXISTS `medsyncdb`;
SELECT 'CREATE DATABASE medsyncdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'medsyncdb')\gexec