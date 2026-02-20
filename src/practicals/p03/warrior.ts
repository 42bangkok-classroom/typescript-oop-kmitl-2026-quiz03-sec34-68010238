import { Character } from "./character";

export class Warrior extends Character {
  // TODO: implement class properties, constructor with super(...), and methods
  private weapon: string;

  constructor(name: string, weapon: string, health: number) {
    super(name, health);
    this.weapon = weapon;
  }
  public getWeapon(): string {
    return this.weapon;
  }
  public receiveDamage(damage: number): void {
    const reducedDamage = damage * 0.9;
    this.health -= reducedDamage;
  }
}
