export default function returnHowManyArguments(...args) {
  return args.length;
}

console.log(returnHowManyArguments('I', 'am', 'a', 'badass'));
