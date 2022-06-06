import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addDwarf();
  }

  private static addDwarf() {
    this._dwarfCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static get dwarfCount() {
    return this._dwarfCount;
  }

  static createdRacesInstances(): number {
    return this._dwarfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
