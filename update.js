const fs = require('fs')
const path = require('path')

const generateArchivesData = (baseDir, initialValue, INDENT = '  ') => {
  let md = initialValue

  const getFilteredFileList = dir => {
    const fileList = fs.readdirSync(dir)
      .map(p => ({ path: path.join(dir, p), title: Number.parseInt(p) }))
      .filter(p => fs.statSync(p.path).isDirectory() && /\d+/.test(p.title))

    fileList.sort((a, b) => b.title - a.title)

    return fileList
  }

  const yearList = getFilteredFileList(baseDir)
  if (!yearList.length) { return }

  yearList.forEach(year => {
    const monthList = getFilteredFileList(year.path)
    if (!monthList.length) { return }

    md += `${INDENT}* ${year.title}\n`

    monthList.forEach(month => {
      md += `${INDENT.repeat(2)}* ${month.title}\n`

      const dayList = fs.readdirSync(month.path)
        .map(p => ({ path: path.join(month.path, p), title: p, date: Number.parseInt(p) }))
        .filter(p => !fs.statSync(p.path).isDirectory() && p.path.endsWith('.md') && /^\d+(\-\d+)?\.md$/.test(p.title))

      dayList.sort((a, b) => b.date - a.date)
      if (!dayList.length) { return }

      dayList.forEach(day => {
        const url = `Archives/${year.title}/${month.title}/${day.title}`
        md += `${INDENT.repeat(3)}* [${day.title.replace('.md', '')}](${url})\n`
      })
    })

  })

  return md
}

const generateTagsData = (baseDir, initialValue, INDENT = '  ') => {
  let md = initialValue

  const tagList = fs.readdirSync(baseDir)
    .map(p => ({ path: path.join(baseDir, p), title: p }))
    .filter(p => fs.statSync(p.path).isDirectory())

  if (!tagList.length) { return }

  tagList.forEach(tag => {
    const fileList = fs.readdirSync(tag.path)
      .map(p => ({ path: path.join(tag.path, p), title: p.replace('.md', '') }))
      .filter(p => !fs.statSync(p.path).isDirectory() && !p.title.startsWith('.~'))

    if (!fileList.length) { return }

    md += `${INDENT}* ${tag.title}\n`

    fileList.forEach(file => {
      const url = `Tags/${tag.title}/${file.title}`
      md += `${INDENT.repeat(2)}* [${file.title}](${url})\n`
    })
  })

  return md
}

const getSidebarData = () => {
  const tagsData = generateTagsData('./docs/Tags/', '* Tags\n')
  const archivesData = generateArchivesData('./docs/Archives/', '* Archives\n')
  return archivesData + tagsData
}

const output = 'docs/_sidebar.md'

const data = getSidebarData()

fs.writeFileSync(output, data)
