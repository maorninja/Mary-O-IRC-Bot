"use strict";
// Gives the user a link to the forum

exports.module = function() {
	this.onCommand_forums = function(nick, command) {
		this.channel.say("Here is a link to the forums: http://mariomods.net/board/.");
	};
};
