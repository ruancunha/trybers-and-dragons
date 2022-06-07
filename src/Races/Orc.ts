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

  static createdRacesInstances(): number {
    return this._orcCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
