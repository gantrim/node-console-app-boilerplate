"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// credit to: https://codingsans.com/blog/node-config-best-practices for config file structure
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const development = {
    appName: "Node Console Boilerplate - Dev"
};

const staging = {
    appName: "Node Console Boilerplate - Staging"
};

const production = {
    appName: "Node Console Boilerplate - Production"
};

const allConfigs = {
    development,
    staging,
    production
};

const config = allConfigs[env];
const test = "sdfdsf";

exports.default = allConfigs[env];