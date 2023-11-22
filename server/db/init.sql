-- create database if not exists MedSyncDB;
SELECT 'CREATE DATABASE MedSyncDB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'MedSyncDB')\gexec
