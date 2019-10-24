'use strict';

const colors = require('ansi-colors');
const helpMsgContent = require('./help-message-content.js');

const helpMessageText = () => {
	return `
	
	${colors.blueBright('Bash Alias Creator')}
	${colors.gray.dim('(And Auto Updating)')}
	
 ${colors.yellow('Usage')}
 
    ${colors.greenBright('$')} ${colors.greenBright('bash-alias-creator')} [input]

	${colors.yellow('Options')}
	
	  -i | --interactive  Interactive creation mode
		
	  -f | --foo          Lorem ipsum [Default: false]
	  -b | --bar          Something else

	${colors.yellow('Examples')}
	
	  ${colors.greenBright('$')} bash-alias-creator
	  
	    ${colors.greenBright.bgBlack('  unicorns & rainbows  ')}
	  
	  ${colors.greenBright('$')} bash-alias-creator ponies
	  
	    ${colors.greenBright.bgBlack('  ponies & rainbows  ')}


	`;};

module.exports = () => {
	return helpMessageText();
};
