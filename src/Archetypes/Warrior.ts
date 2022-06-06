import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriorCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addWarrior();
  }

  private static addWarrior() {
    this._warriorCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._warriorCount;
  }
}

export default Warrior;
