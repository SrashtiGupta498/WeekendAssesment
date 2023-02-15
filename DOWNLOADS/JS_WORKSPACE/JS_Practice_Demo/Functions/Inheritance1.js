var mammal = function(spec)
{
    var that ={};
    that.get_name= function()
    {
        return spec.name;
    };
    that.says = function(){
        return spec.saying||'';
    };
    return that;
};
var my_mamal =  mammal({
    name:'HERB'
});
console.log(mammal.that());