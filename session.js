//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFtQlhEMTBzNmswNlhrdkVKdGZBMDc3N05tTG1LUFhZbnpWc0xzNHduWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjAzcmxyaVpHYTh5UU8xZlExckJHcHg1WksxcEROZkdhTjk3L0drUlFuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTGlNRWdlMlNRWlhoRE9BbkxVajA0TWZkQnNRUElUZmYwR3ZGUVRaSTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWc1Z3RDRSRzhYQXZseTdIdm1DS05OazY0M0R0TzJMZG1mUktZT0JSZG5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNYUhsQ2FFZHBGMHIvbXFHSnk3MlJZZVpQRHlQWmM2Wm1yMGFMWEpQbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg3ZjNubXdyRjF1VEpoeU5mSDNHR0E2QWl4T3RXUkNIYnB4b0FEZDNjazg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pkbXdqMHNUNUsrM1ZQdDNzVlJWckQwYStpd01NQlpCbmQybzBhOEgzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEM3K3FKUEl5K29Qdmk1WkNRb3FPMjFEUElHRW9POTdSMjFvUCtVakUzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1WSENFa3lmT3RGUGEyQlZ3NXBUeElTSEJJOHdaelg5aXZtanNQTHpRMnFaZGtxUWJTdzdtMnlrN2swSnE5Z3IwUWdQeFQvRXlEMnVkOWFZb2dqaWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiIwSVJ3NWJqMnVXT1ZhOEg2WHliZkNVN1dWK3BPclBLYVBjTVNaRk1nODlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1eklhQkkyM1NiU0ZHN21nV0JLbWZBIiwicGhvbmVJZCI6IjI1YWRhYjJiLWE0NzAtNGU0ZS04ZDhkLTcyOTM0NzM2OTY0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUWNHeGhUdXVtRFYxUUpHL0xNTDBCK2RmMDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR25DTkNrVFZ0TnNzc0pGUDhDdmlodkFBalFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJKSjFTOERHIiwibWUiOnsiaWQiOiI5NDc4NDM0MDYxNDo1NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYW51dGgiLCJsaWQiOiI1NjQ4Nzk5NzEzMzAxNzo1NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056TmhNUUJFTURKeU1JR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldyUkpnOTVQOFAybHAyamtrcysvMm9nanBRdmdYREF0MktNVE1uYjNBbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRXVGlURlhlenJuZnExVFJCOUx1RTBNL3BaNmtLeEZ5d3VQVE11U0hJd0VkWTZtVFdnL21OejhQYW9zNDVSSEJsN0wzN3VNUkRZSEVaeDRxVmJLRkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzdkF0WVJRYjY4SlQrTjlraEVzTUM2TDF2TGV0NHYxZmExQzVCckdGazBYU1prT1Vsc2JvRFRnbFdWZTFQcmFueWJBZHN5RHNxZzYyNTVkcjAxYlJndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0MzQwNjE0OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZxMFNZUGVUL0Q5cGFkbzVKTFB2OXFJSTZVTDRGd3dMZGlqRXpKMjl3SnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lDdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDIxMzgzOSwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0784340614",
  PASSWORD: 
    process.env.PASSWORD || "dj123123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
