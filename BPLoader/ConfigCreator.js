import fs from 'node:fs'

const mapLocations = fs.readdirSync("Configs").map(filename => {
  return JSON.parse(fs.readFileSync(`Configs/${filename}`))
}).flat()

const count = Buffer.alloc(4)
count.writeUInt32LE(mapLocations.length)

const out = Buffer.concat([
  await fs.promises.readFile("BPLoaderTemplate.sav"),
  count,
  ...mapLocations.map(mapLocation => {
    const buf = Buffer.from(mapLocation)
    const count = Buffer.alloc(4)
    count.writeUInt32LE(buf.length + 1)
    return [count, buf, Buffer.alloc(1)]
  }).flat(),
  Buffer.from([0x05, 0x00, 0x00, 0x00, 0x4E, 0x6F, 0x6E, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00])
])
fs.mkdirSync(`${process.env.LOCALAPPDATA}\\CodeVein\\Saved\\SaveGames\\mods`, { recursive: true })
await fs.promises.writeFile(`${process.env.LOCALAPPDATA}\\CodeVein\\Saved\\SaveGames\\mods\\BPLoader.sav`, out)