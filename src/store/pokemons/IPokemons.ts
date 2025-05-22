
export interface IPokemonDecscription{
  name: string;
  url: string;
}

export interface IPokemonResp{
  currentPokemonList: {
    count: number,
    next: string |null,
    previous: string | null,
    results: IPokemonDecscription[],
  },
  currentPage: number,
  pageLimit: number,
  isloading: boolean,
  error: string,
}

export type TExtendedDescription = IPokemonDecscription & {
  isAdded: boolean
};
