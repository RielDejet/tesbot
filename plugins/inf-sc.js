let handler = async m => m.reply(`
            📮Base: Nurotumo
            🌱sc ori: arietube
            🖍️Bantu Rapihin: Rielganzz
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler