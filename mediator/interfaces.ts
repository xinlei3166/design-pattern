export interface IPlayer {
  name: string,
  teamColor: string,
  enemy: IPlayer,
  state: string,

  win(): void,

  lose(): void,

  die(): void
}

export type Action = 'addPlayer' | 'removePlayer' | 'changeTeam' | 'playerDead' | 'reciveMessage'

export interface IPlayerDirector {
  players: object,

  addPlayer(player: IPlayer): void,

  removePlayer(player: IPlayer): void,

  changeTeam(player: IPlayer, teamColor: string): void,

  playerDead(player: IPlayer): void,

  receiveMessage(action: Action, ...args): void
}

