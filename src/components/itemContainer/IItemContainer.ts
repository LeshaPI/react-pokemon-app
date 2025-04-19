interface IMock { 
  name: string; 
  id: number;
}

export interface IItemContainer {
    mockList: Array<IMock>;
}
