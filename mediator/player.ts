import { IPlayer, IPlayerDirector } from './interfaces'
import PlayerDirector from './player-director'

class Player implements IPlayer {
  name: string
  teamColor: string
  enemy: IPlayer = null
  state: string = 'alive'
  playerDirector: IPlayerDirector

  constructor(name: string, teamColor: string, playerDirector: IPlayerDirector) {
    this.name = name
    this.teamColor = teamColor
    this.playerDirector = playerDirector
  }

  win() {
    console.log(this.name + ' won ')
  }

  lose() {
    console.log(this.name + ' lost')
  }

  die() {
    this.state = 'dead'
    this.playerDirector.receiveMessage('playerDead', this) // 给中介者发送消息，玩家死亡
  }

  remove() {
    this.playerDirector.receiveMessage('removePlayer', this) // 给中介者发送消息，移除一个玩家
  }

  changeTeam(color: string) {
    this.playerDirector.receiveMessage('changeTeam', this, color) // 给中介者发送消息，玩家换队
  }
}

const playerFactory = function(name: string, teamColor: string) {
  const playerDirector = new PlayerDirector()
  const newPlayer = new Player(name, teamColor, playerDirector) // 创造一个新的玩家对象
  playerDirector.receiveMessage('addPlayer', newPlayer) // 给中介者发送消息，新增玩家
  return newPlayer
}

// 红队：
const player1 = playerFactory('皮蛋', 'red'),
  player2 = playerFactory('小乖', 'red'),
  player3 = playerFactory('宝宝', 'red'),
  player4 = playerFactory('小强', 'red')
// 蓝队：
const player5 = playerFactory('黑妞', 'blue'),
  player6 = playerFactory('葱头', 'blue'),
  player7 = playerFactory('胖墩', 'blue'),
  player8 = playerFactory('海盗', 'blue')
player1.remove()
player2.remove()
player3.die()
player4.die()
