const name = {
    fullName: {
      ten: 'Minh Duck'
    }
  }
  let reName = JSON.parse(JSON.stringify(name))
  reName.fullName.ten = 'Minh Đức'
  console.log(reName.fullName.ten) 
  console.log(name.fullName.ten) 