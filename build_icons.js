/* eslint-disable no-console */
const colors = require('colors/safe');
const fs = require('fs');

const fontawesome = require('@fortawesome/fontawesome-svg-core');
const faAt = require('@fortawesome/free-solid-svg-icons/faAt').faAt;
const faComments = require('@fortawesome/free-solid-svg-icons/faComments').faComments;
const faDiscord = require('@fortawesome/free-brands-svg-icons/faDiscord').faDiscord;
const faDiscourse = require('@fortawesome/free-brands-svg-icons/faDiscourse').faDiscourse;
const faFacebook = require('@fortawesome/free-brands-svg-icons/faFacebook').faFacebook;
const faGithub = require('@fortawesome/free-brands-svg-icons/faGithub').faGithub;
const faKeyboard = require('@fortawesome/free-solid-svg-icons/faKeyboard').faKeyboard;
const faLink = require('@fortawesome/free-solid-svg-icons/faLink').faLink;
const faMeetup = require('@fortawesome/free-brands-svg-icons/faMeetup').faMeetup;
const faReddit = require('@fortawesome/free-brands-svg-icons/faReddit').faReddit;
const faSlack = require('@fortawesome/free-brands-svg-icons/faSlack').faSlack;
const faTelegram = require('@fortawesome/free-brands-svg-icons/faTelegram').faTelegram;
const faTwitter = require('@fortawesome/free-brands-svg-icons/faTwitter').faTwitter;
const faUsers = require('@fortawesome/free-solid-svg-icons/faUsers').faUsers;
const faYoutube = require('@fortawesome/free-brands-svg-icons/faYoutube').faYoutube;

buildAll();

function buildAll() {
    var iconMap = {
        discord: faDiscord,
        discourse: faDiscourse,
        facebook: faFacebook,
        forum: faComments,
        github: faGithub,
        group: faUsers,
        irc: faKeyboard,
        mailinglist: faAt,
        matrix: faComments,
        meetup: faMeetup,
        reddit: faReddit,
        slack: faSlack,
        telegram: faTelegram,
        twitter: faTwitter,
        url: faLink,
        youtube: faYoutube
    };

    console.log('building icons');
    console.time(colors.green('icons built'));

    for (var key in iconMap) {
        var val = iconMap[key];
        var file = 'dist/img/' + key + '.svg';
        console.log(colors.yellow(file));
        fs.writeFileSync(file, fontawesome.icon(val).html);
    }

    console.timeEnd(colors.green('icons built'));
}
