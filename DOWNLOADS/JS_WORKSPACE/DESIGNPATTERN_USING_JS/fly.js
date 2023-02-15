
class fly extends spider{
    constructor(name , category)
    {
      super(name);
      this.categories= category;
  
    }
  
    show()
    {
      return this.present()+'IT is a' +this.categories;
    }
  }
  let bird = new fly("Eagle","Living things");
  console.log(bird.show());