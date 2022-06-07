import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addHalfling();
  }

  private static addHalfling() {
    this._elfCount += 1;
  }

  static createdRacesInstances(): number {
    return this._elfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
