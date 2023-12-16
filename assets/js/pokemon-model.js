export class Pokemon {
  constructor(pokeDetail) {
    this.number = pokeDetail.id;
    this.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    this.types = types;
    this.type = type;

    this.photo = pokeDetail.sprites.other.dream_world.front_default;
  }
}
