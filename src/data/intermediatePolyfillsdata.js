export const intermediatePolyfills = {
    array: [
      {
        question: "Implement Array.prototype.reduce",
        answer: `
  Array.prototype.myReduce = function(callback, initialValue){
    let acc = initialValue !== undefined ? initialValue : this[0];
    let start = initialValue !== undefined ? 0 : 1;
  
    for(let i = start; i < this.length; i++){
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
        `,
      },
      {
        question: "Implement Array.prototype.flat",
        answer: `
  Array.prototype.myFlat = function(depth = 1){
    let result = [];
    this.forEach((item) => {
      if(Array.isArray(item) && depth > 0){
        result.push(...item.myFlat(depth - 1));
      } else {
        result.push(item);
      }
    });
    return result;
  };
        `,
      },
    ],
    string: [
      {
        question: "Implement String.prototype.trim",
        answer: `
  String.prototype.myTrim = function(){
    return this.replace(/^\\s+|\\s+$/g, "");
  };
        `,
      },
    ],
  };