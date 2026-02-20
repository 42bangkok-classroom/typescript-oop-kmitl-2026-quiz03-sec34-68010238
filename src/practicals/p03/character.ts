export class Character {
    protected name: string;
  protected health: number = 100;

  constructor(name: string, health?: number){
    this.name = name;
    if (health !== undefined){
      this.health = health;
    }
  }
  public getName(): string{
    return this.name;
  }
  public getHealth(): number{
    return this.health;
  }
  public receiveDamage(damage: number): void{
    const currentHealth = this.health
    this.health = currentHealth - damage

    if (this.health < 0){
      this.health = 0;
    }
  }
}