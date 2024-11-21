// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;
/*
##########################################################
  
01/02/23 - Added offline csupport with reditt code, shows a quote as opposed to red error!

* offline support 
* whatsapp share fixed no more email share!
* icon for share changed
* speechmark added to bg
* github shell
* upload to server 
* shared msg formatted


  Islamic Quotes Widget v1.1
  Developed by: Maqbul Yusuf
  Email: maqbul.yusuf@sky.com


  Release Date: 11/10/21
  Compatible with iOS (scriptable app)
     
  Please do NOT remove or modify this header
     
  To check for updates or to leave feedback, tap on widget
  ##########################################################
*/



async function main() {

let localFm = FileManager.local()
let cachePath = localFm.documentsDirectory()
let data;
let usingCachedData = false;
let cache = localFm.joinPath(cachePath, "lastread")

try {
  log('online')
  let url = ("https://mis-productions.co.uk/apps/api/quotes/islamic.json")
  localFm.writeString(cache, url)

//let url = "https://mis-productions.co.uk/apps/api/quotes/islamic.json";
let r = new Request(url)
let quoteData = await r.loadJSON()

let getquote=(quoteData[Math.floor(Math.random()*50)]);
//get specific objects from file

let quote=getquote.Quote;
let trans=getquote.Trans;
let ref=getquote.Ref;

 
console.log("Total: " + quoteData.length)
 

//set and run widget
let widget = new ListWidget()
let req = new Request ('https://mis-productions.co.uk/apps/widgets_ios/quotes_trans_left.jpg')
let image = await req.loadImage()
widget.backgroundImage = image
image.opacity =1  
  
let speechmarksOpen='“' 
let speechmarksClose='”'

widget.addSpacer(-10)

quotetxt = widget.addText(speechmarksOpen + quote + speechmarksClose);
quotetxt.font = Font.systemFont(17)
quotetxt.centerAlignText();
quotetxt.textColor= new Color("#ffffff") 

//ref text
reftext = widget.addText("\n"+ref);
reftext.font =Font.lightMonospacedSystemFont(13)
reftext.centerAlignText();
reftext.textColor=new Color('#ccc');

    let footerStack = widget.addStack()
    let linkStack = footerStack.addStack()
    let linkElement = linkStack.addText("")
    linkElement.font = Font.mediumSystemFont(13)
    linkElement.textColor = Color.gray()
     
    footerStack.addSpacer(285)
    
 let docsSymbol = SFSymbol.named("arrowshape.turn.up.forward")
 let docsElement = footerStack.addImage(docsSymbol.image)    
    docsElement.imageSize = new Size(20,30)
    docsElement.tintColor = Color.white()
    docsElement.imageOpacity = 0.6
    docsElement.url=`whatsapp://send?text=${"''"+quote+"''"+ "\n\n📖\n"+ref}

`
    
     
widget.setPadding(5, 10, -24, 10)
 


if(!config.runsInWidget){
widget.presentMedium()

}

 
Script.setWidget(widget)
Script.complete()


} 




catch(e) {
  console.log("Offline mode")
   data = localFm.readString(cache);
    usingCachedData = true


let widget = new ListWidget();
widget.backgroundColor = new Color("2b1700")
widget.textColor=new Color('#fff');
//widget.addText(`using}`)
//widget.addText(`"One who recites 10 Duroods in the morning and evening shall receive my intercession on judgement day"`).centerAlignText()

var hadith="'One who recites 10 Duroods in the morning and evening shall receive my intercession on judgement day'"

hadith = widget.addText(hadith);
hadith.font =Font.systemFont(17);
hadith.centerAlignText();
hadith.textColor=new Color('#fff');



var reference="[Narration:Abdu Darda]"

reference = widget.addText("\n"+reference);
reference.font =Font.lightMonospacedSystemFont(13)
reference.centerAlignText();
reference.textColor=new Color('#ccc');



//widget.textColor= new Color("#ffffff") 
//widget.addText(`offline txt`)


Script.setWidget(widget)
Script.complete()
widget.presentMedium()
}
  
}

module.exports = {
  main
} 

  


