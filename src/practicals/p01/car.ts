export class Car {
  public brand!: string;
  public model!: string;

  public start(): void {
    console.log(this.brand + ' ' + this.model + ' is starting...');
  }
  public accelerate(): void {
    console.log(this.brand + ' ' + this.model + ' is accelerating...');
  }
  public brake(): void {
    console.log(this.brand + ' ' + this.model + ' is braking...');
  }
  public stop(): void {
    console.log(this.brand + ' ' + this.model + ' is stopping...');
  }
}