import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = readFileSync('./thumbnail.jpg')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6287753812675,
title: '「 NGAPAIN NGE TAG ❔ 」',
body: wm,
sourceUrl: 'https://bit.ly/3eggcxd', thumbnail: await( await fetch(pp)).buffer()
 //Kalo mau ada pp dari sender/pengirimnya
 //Kalo mau ringan pake global.thumb                                                                                                              

                                                                                                               
handler.command = ['woke']       

export default handler             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          //thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
