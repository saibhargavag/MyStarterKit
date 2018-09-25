//The following line disables error produced in eslint for not using cs variable anywhere.This statement applies to entire file.
/* eslint-disable no-unused-vars */
import numeral from 'numeral';
import cs  from "./index.css";

const coursevalue=numeral(1000).format('$0,0.00');
//The following comment disables warning produced from using console.log statement.
//this statement applies to only one line since you mentioned line
console.log(`I would pay ${coursevalue}   for this awesome course!!`); // eslint-disable-line no-console
