#!/usr/bin/env node
'use strict';

const { randomInt } = require('./math');

module.exports.roll = (diceNotaion) => {

  let [rollCount, sides] = diceNotaion.split("d");
  let diceTotal = 0;

  for (let i = 0; i < rollCount; i++) {
    diceTotal += randomInt(1, sides);
  }
  return diceTotal;
};
 
module.exports.toDiceNotation = ({count, sides}) => `${count}d${sides}`;