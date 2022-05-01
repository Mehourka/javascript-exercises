const ftoc = function(degree_f) {
const degree_c = (degree_f-32)*5/9;

return Math.round(degree_c*10)/10;
};

const ctof = function(degree_c) {
  const degree_f = degree_c*9/5+32;
  return Math.round(degree_f*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
