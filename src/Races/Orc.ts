import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addOrc();
  }

  private static addOrc() {
    this._orcCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static get orcCount() {
    return this._orcCount;
  }

  static createdRacesInstances(): number {
    return this._orcCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
