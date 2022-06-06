import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addMage();
  }

  private static addMage() {
    this._mageCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._mageCount;
  }
}

export default Mage;
