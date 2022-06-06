import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addHalfling();
  }

  private static addHalfling() {
    this._halflingCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static get halflingCount() {
    return this._halflingCount;
  }

  static createdRacesInstances(): number {
    return this._halflingCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
