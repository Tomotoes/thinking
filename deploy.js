const child_process = require('child_process')

const exec = command =>
  new Promise((resolve, reject) => {
    child_process.exec(command, (err, stout, stderr) => {
      if (err) {
        reject(err)
      }
      resolve(stout)
    })
  })

const currentDate = new Date().toJSON().slice(0, 10)

const cmd = [
  'git add -A',
  `git commit -am'Daily update: add the output on ${currentDate}'`,
  'git push -f origin master'
].join(' && ')

exec(cmd).then(data => {
  console.log(data)
}).catch(error => {
  console.error(error)
})
