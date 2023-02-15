var myMammal ={
    name:"Herb the Mammal" ,
    get_name :function()
    {
        return this.name;
    },
    saying :"Hello",
    says: function()
    {
        return this.saying||'';
    }
};
console.log(myMammal.get_name());
console.log(myMammal.says());
/////////
var myCat = Object.beget(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
 var i, s = '';
 for (i = 0; i < n; i += 1) {
 if (s) {
 s += '-';
 }
 s += 'r';
 }
 return s;
};
myCat.get_name = function ( ) {
 return this.says + ' ' + this.name + ' ' + this.says;
};

console.log(myCat.purr);