export const beginnerPolyfills = {
    array: [
      {
        question: "Implement Array.prototype.map",
        answer: `
  Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
      result.push(callback(this[i], i, this));
    }
    return result;
  };
        `,
      },
      {
        question: "Implement Array.prototype.filter",
        answer: `
  Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)){
        result.push(this[i]);
      }
    }
    return result;
  };
        `,
      },
      {
        question: "Implement Array.prototype.forEach",
        answer: `
  Array.prototype.myForEach = function(callback){
    for(let i = 0; i < this.length; i++){
      callback(this[i], i, this);
    }
  };
        `,
      },
      {
        question: "Implement Array.prototype.includes",
        answer: `
  Array.prototype.myIncludes = function(value){
    for(let i = 0; i < this.length; i++){
      if(this[i] === value) return true;
    }
    return false;
  };
        `,
      },
      {
        question: "Implement Array.prototype.indexOf",
        answer: `
  Array.prototype.myIndexOf = function(value){
    for(let i = 0; i < this.length; i++){
      if(this[i] === value) return i;
    }
    return -1;
  };
        `,
      },
    ],
    string: [
      {
        question: "Implement String.prototype.charAt",
        answer: `
  String.prototype.myCharAt = function(index){
    return this[index] || "";
  };
        `,
      },
      {
        question: "Implement String.prototype.includes",
        answer: `
  String.prototype.myIncludes = function(substr){
    return this.indexOf(substr) !== -1;
  };
        `,
      },
    ],
  };