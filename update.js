const fs = require('fs')
const path = require('path')

const generateArchivesData = () => {
  const baseDir = './docs/Archives/'
  const INDENT = '  '

  const getFilteredFileList = dir => {
    const fileList = fs.readdirSync(dir)
      .map(p => ({ path: path.join(dir, p), title: Number.parseInt(p) }))
      .filter(p => fs.statSync(p.path).isDirectory() && /\d+/.test(p.title))

    fileList.sort((a, b) => b.title - a.title)

    return fileList
  }

  let md = '* Archives\n'

  const yearList = getFilteredFileList(baseDir)
  if (!yearList.length) { return }

  yearList.forEach(year => {
    const monthList = getFilteredFileList(year.path)
    if (!monthList.length) { return }

    md += `${INDENT}* ${year.title}\n`

    monthList.forEach(month => {
      md += `${INDENT.repeat(2)}* ${month.title}\n`

      const dayList = fs.readdirSync(month.path)
        .map(p => ({ path: path.join(month.path, p), title: Number.parseInt(p) }))
        .filter(p => !fs.statSync(p.path).isDirectory() && p.path.endsWith('.md') && /\d+/.test(p.title))

      dayList.sort((a, b) => b.title - a.title)
      if (!dayList.length) { return }

      dayList.forEach(day => {
        const url = `Archives/${year.title}/${month.title}/${day.title}`
        md += `${INDENT.repeat(3)}* [${day.title}](${url})\n`
      })
    })

  })

  return md
}

const generateTagsData = () => {
  const baseDir = './docs/Tags/'
  const INDENT = '  '
  let md = '* Tags\n'

  const tagList = fs.readdirSync(baseDir)
    .map(p => ({ path: path.join(baseDir, p), title: p }))
    .filter(p => fs.statSync(p.path).isDirectory())

  if (!tagList.length) { return }

  tagList.forEach(tag => {
    const fileList = fs.readdirSync(tag.path)
      .map(p => ({ path: path.join(tag.path, p), title: p }))
      .filter(p => !fs.statSync(p.path).isDirectory() && !p.title.startsWith('.~'))

    if (!fileList.length) { return }

    md += `${INDENT}* ${tag.title}\n`

    fileList.forEach(file => {
      const url = `Tags/${tag.title}/${file.title.replace('.md', '')}`
      md += `${INDENT.repeat(2)}* [${file.title}](${url})\n`
    })
  })

  return md
}

const generateSidebarData = () => {
  return generateTagsData() + generateArchivesData()
}

const output = 'docs/_sidebar.md'

const data = generateSidebarData()

fs.writeFileSync(output, data)
