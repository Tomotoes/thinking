const fs = require('fs')
const path = require('path')

const baseDir = './docs/'
const output = baseDir + '_sidebar.md'
const INDENT = '  '

const getFilteredFileList = dir => {
  const fileList = fs.readdirSync(dir)
    .map(p => ({ path: path.join(dir, p), title: Number.parseInt(p) }))
    .filter(p => fs.statSync(p.path).isDirectory() && /\d+/.test(p.title))

  fileList.sort((a, b) => b.title - a.title)

  return fileList
}

const generateSidebarData = baseDir => {
  let md = ''

  const yearList = getFilteredFileList(baseDir)
  if (!yearList.length) { return }

  yearList.forEach(year => {
    const monthList = getFilteredFileList(year.path)
    if (!monthList.length) { return }

    md += `* ${year.title}\n`

    monthList.forEach(month => {
      md += `${INDENT}* ${month.title}\n`

      const dayList = fs.readdirSync(month.path)
        .map(p => ({ path: path.join(month.path, p), title: Number.parseInt(p) }))
        .filter(p => !fs.statSync(p.path).isDirectory() && p.path.endsWith('.md') && /\d+/.test(p.title))

      dayList.sort((a, b) => b.title - a.title)
      if (!dayList.length) { return }

      dayList.forEach(day => {
        const url = `${year.title}/${month.title}/${day.title}`
        md += `${INDENT.repeat(2)}* [${day.title}](${url})\n`
      })
    })
  })

  return md
}

const data = generateSidebarData(baseDir)

fs.writeFileSync(output, data)
