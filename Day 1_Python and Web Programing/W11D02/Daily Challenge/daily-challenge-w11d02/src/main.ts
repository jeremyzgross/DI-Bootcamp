const validateUnionTypes = (value: any, allowedTypes: string[]) :boolean=>{
  if (typeof value === typeof allowedTypes){
    return false
  }else{
    return true
  }
}

console.log(validateUnionTypes (true, ["1"])); //true
console.log(validateUnionTypes (["2"], ["1","3"])); //false

