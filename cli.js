#!/usr/bin/env node
'use strict';
const coloredHelpMessage = require('./lib/utils/help-message.js');
const meow = require('meow');
const bashAliasCreator = require('.');

// const cli = meow(coloredHelpMessage);
const cli = meow(coloredHelpMessage());

console.log(bashAliasCreator(cli.input[0] || 'unicorns'));
