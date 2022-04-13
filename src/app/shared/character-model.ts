export type Attributes = {
  strength: number,
  dexterity: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  constitution: number,
}


export interface Character {
  name: string
  class: string
  level: number
  background: string
  race:string
  alignment: string
  attributes: Attributes
}
