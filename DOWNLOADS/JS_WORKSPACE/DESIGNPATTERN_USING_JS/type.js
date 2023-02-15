class ReptilePartFactory {
    constructor(type, props) {
      if(type === "tail")
        return new TailFactory(props);
      if(type === "torso")
        return new TorsoFactory(props);
      if(type === "head")
        return new HeadFactory(props);
    }
  };