interface IChain {
  fn: Function
  successor: IChain,
  setNextSuccessor(successor: IChain): IChain,
  passRequest(): void
  next(): void
}

class Chain implements IChain {
  fn: Function
  successor: IChain = null

  constructor(fn: Function) {
    this.fn = fn
  }

  setNextSuccessor(successor: IChain) {
    return this.successor = successor
  }

  passRequest(...args) {
    const ret = this.fn.apply(this, args)
    if (ret === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, args)
    }
    return ret
  }

  next(...args) {
    return this.successor && this.successor.passRequest.apply( this.successor, args );
  }
}


const order500 = function(orderType: number, pay: boolean, stock: number) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购，得到100 优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const order200 = function(orderType: number, pay: boolean, stock: number) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购，得到50 优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const orderNormal = function(orderType: number, pay: boolean, stock: number) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)
chainOrder500.setNextSuccessor( chainOrder200 )
chainOrder200.setNextSuccessor( chainOrderNormal )
chainOrder500.passRequest( 1, true, 500 ) // 输出：500 元定金预购，得到100 优惠券
chainOrder500.passRequest( 2, true, 500 ) // 输出：200 元定金预购，得到50 优惠券
chainOrder500.passRequest( 3, true, 500 ) // 输出：普通购买，无优惠券
chainOrder500.passRequest( 1, false, 0 ) // 输出：手机库存不足
