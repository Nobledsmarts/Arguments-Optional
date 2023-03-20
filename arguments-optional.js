function addTogether() {
  let args = [...arguments];

  if(!args.every(e => Number.isInteger(e))) return undefined;

  if(args.length > 1) return args.reduce((sum, e) => sum + e);

  return (arg2) => Number.isInteger(arg2) ? args[0] + arg2 : undefined;
}

console.log(addTogether(2,3));
