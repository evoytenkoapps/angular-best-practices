export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
  constructor(public animal: string) {}
}

export class ResetAnimals {
  static readonly type = '[Zoo] Reset Animal';
  constructor() {}
}
