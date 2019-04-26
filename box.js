export default class Box {
  constructor() {
    this.team;
    this.count = 0;
  }
  get filled() {
    return !!(this.team);
  }
  incrementCount() {
      this.count++
  }
};
