-- CREATE DATABASE IF NOT EXISTS `MedSyncDB`;
SELECT 'CREATE DATABASE MedSyncDB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'MedSyncDB')\gexec