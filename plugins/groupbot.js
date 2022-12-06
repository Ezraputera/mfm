let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `Join Grup Official RullBOT*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › Group RullBOT official', description: "Group Utama RullBOT", rowId:".gcbot"},
        {title: '🎐 › Owner', description: "Creator RullBOT >ω<", rowId:".owner"},
        {title: '🧿 › Info RullBOT', description: "Info RullBOT >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk RullBOT ≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler