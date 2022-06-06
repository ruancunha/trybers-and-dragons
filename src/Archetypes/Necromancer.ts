import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addNecromancer();
  }

  private static addNecromancer() {
    this._necromancerCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._necromancerCount;
  }
}

export default Necromancer;
