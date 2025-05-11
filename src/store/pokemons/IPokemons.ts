interface NamedAPIResource {
    name: string;
    url: string;
}
  
interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}
  
interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
}
  
interface HeldItem {
    item: NamedAPIResource;
    version_details: {
      rarity: number;
      version: NamedAPIResource;
    }[];
}
  
interface Move {
    move: NamedAPIResource;
    version_group_details: {
      level_learned_at: number;
      version_group: NamedAPIResource;
      move_learn_method: NamedAPIResource;
    }[];
}
  
interface SpriteSet {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}
  
interface OtherSprites {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
}
  
interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}
  
interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}
  
interface PastType {
    generation: NamedAPIResource;
    types: PokemonType[];
}
  
export interface IPokemons {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: SpriteSet & {
    other: OtherSprites;
    versions: {
      [generation: string]: {
        [version: string]: Partial<SpriteSet>;
      };
    };
  };
  stats: Stat[];
  types: PokemonType[];
  past_types: PastType[];
}

export interface IPokemonResp{
  currentPokemonList: {
    count: number,
    next: string |null,
    previous: string | null,
    results: IPokemons[] | [],
  },
  currentPage: number,
  pageLimit: number,
  isloading: boolean,
  error: string,
}
