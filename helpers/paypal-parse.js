const createHtmlDom = require('htmldom'),
      fs=require('fs')

let $ = createHtmlDom(fs.readFileSync('/dev/stdin').toString())

const rows = $('table tr')
for(const row of rows){
    const tds = $(row).find('td')
    if(tds.length != 2) continue
    const h = $(tds[0]).html()
    if(h.includes('notify.paypal.com')){
        let ips = $(tds[1]).html()
        ips = ips.replace(/<br>/g, "\n")
        ips = ips.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9](?:\/[0-9]+)?/g)
        console.log(ips.join("\n"))
    }
}