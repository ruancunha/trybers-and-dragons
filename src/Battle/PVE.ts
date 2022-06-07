import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  individualFights(monster: SimpleFighter): boolean {
    while (this._character.lifePoints > 0 && monster.lifePoints > 0) {
      this._character.attack(monster);
      monster.attack(this._character);
    }
    return this.player.lifePoints !== -1;
  }

  fight(): number {
    const result = this._monsters
      .every((monster) => this.individualFights(monster));
    return result === true ? 1 : -1;
  }
}

export default PVE;