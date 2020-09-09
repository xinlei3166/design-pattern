const guangdongCity = {
  shenzhen: 11,
  guangzhou: 12
}

const getGuangdongCity = function() {
  return [
    {
      name: 'shenzhen',
      id: 11
    }, {
      name: 'guangzhou',
      id: 12
    }
  ]
}

const render = function(fn) {
  console.log('开始渲染广东省地图')
  console.log(JSON.stringify(fn()))
}

const addressAdapter = function(oldAddressfn) {
  const address = {},
    oldAddress = oldAddressfn()
  for (const c of oldAddress) {
    address[c.name] = c.id
  }
  return function() {
    return address
  }
}

render(addressAdapter(getGuangdongCity))
