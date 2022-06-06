import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addRanger();
  }

  private static addRanger() {
    this._rangerCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._rangerCount;
  }
}

export default Ranger;
