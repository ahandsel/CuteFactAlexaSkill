/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * Cute Facts
 * If prompted, Cute Fact Skill will return a cute fact 
 * Code based on tutorials on https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Cute Facts';
const GET_FACT_MESSAGE = "Did you know? : ";
const HELP_MESSAGE = 'You can say tell me a cute fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Sea otters hold hands when they sleep to keep from drifting apart.',
    'Squirrels plant thousands of new trees each year simply by forgetting where they put their acorns.',
    'When playing with female puppies, male puppies will often let them win, even if they have a physical advantage.',
    'Turtles can breathe through their butts.',
    'Cows have best friends.',
    'Gentoo penguins propose to their lifemates with a pebble.',
    'Macaques in Japan use coins to buy vending machine snacks.',
    'Norway knighted a penguin.',
    'Rats laugh when tickled.',
    'Sweden has a rabbit show-jumping competition called Kaninhoppning.',
    'Pigs’ orgasms last for 30 minutes.',
    'Dolphins have names for each other.',
    'Puffins mate for life. They make their homes on cliff sides and set aside room for their toilet.',
    'Oysters can change gender depending on which is best for mating.',
    'Japanese Macaques make snowballs for fun.',
    'The closest relatives to the elephant shrew are actually elephants, not shrews.',
    'A cat version of the corgi exits: the munchkin cat.',
    'Seahorses mate for life, and when they travel they hold each others’ tails.',
    'Before chicks hatch, they can communicate with each other and their mother through a system of sounds.',
    'Butterflies taste with their feet.',
    'Squirrels will adopt other squirrels babies if they are abandoned.',
    'A group of kittens is called a kindle.',
    'A group of hedgehogs is called a prickle.',
    'A group of flamingos is called a flamboyance.',
    'A group of pugs is called a grumble.',
    'Otters has a little pouch on their body where it can keep its favorite rock.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);//radom number
        const randomFact = factArr[factIndex];//find a fact @Radmon number
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};