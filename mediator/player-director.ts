import { IPlayer, IPlayerDirector, Action } from './interfaces'

type Players = {
  [key: string]: IPlayer[]
}

class PlayerDirector implements IPlayerDirector {
  players: Players = {}
  private static instance: PlayerDirector

  constructor() {
    return this.getInstance()
  }

  private getInstance() {
    if (!PlayerDirector.instance) {
      PlayerDirector.instance = this
    }
    return PlayerDirector.instance
  }

  addPlayer(player: IPlayer) {
    const teamColor = player.teamColor
    this.players[teamColor] = this.players[teamColor] || []
    this.players[teamColor].push(player)
  }

  removePlayer(player: IPlayer) {
    const teamColor = player.teamColor,
      teamPlayers = this.players[teamColor] || []
    for (let i = teamPlayers.length - 1; i >= 0; i--) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1)
      }
    }
  }

  changeTeam(player: IPlayer, teamColor) {
    this.removePlayer(player)
    player.teamColor = teamColor
    this.addPlayer(player)
  }

  playerDead(player: IPlayer) {
    let teamColor = player.teamColor,
      teamPlayers = this.players[teamColor]
    let all_dead = true
    for (const player of teamPlayers) {
      if (player.state !== 'dead') {
        all_dead = false
        break
      }
    }
    if (all_dead === true) {
      for (const player of teamPlayers) {
        player.lose()
      }
      for (const color in this.players) {
        if (color !== teamColor) {
          teamPlayers = this.players[color]
          for (const player of teamPlayers) {
            player.win()
          }
        }
      }
    }
  };

  receiveMessage(action: Action, ...args) {
    this[action].apply(this, args)
  };
}

export default PlayerDirector
