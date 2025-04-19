interface IMock { 
  name: string; 
  id: number;
}

export interface IItemsContainer {
    mockList: Array<IMock>;
}
