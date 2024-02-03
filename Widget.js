##########################################################
  
  Islamic Quotes Widget v1.0 
  Developed by: Maqbul Yusuf
  Email: maqbul.yusuf@sky.com
  Date: 11/10/21
  Compatible with iOS (scriptable app)
     
  Please do NOT remove or modify this header
     
  To check for updates or to leave feedback, tap on widget
  ##########################################################
*/







let url = "https://mis-productions.co.uk/apps/api/quotes/islamic.json";
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
let req = new Request ('https://wallpaperaccess.com/download/islamic-design-44540')
let image = await req.loadImage()
widget.backgroundImage = image
image.opacity =1  
  
let speechmarksOpen='“' 
let speechmarksClose='”'

widget.addSpacer(-10)

quotetxt = widget.addText(speechmarksOpen + quote + speechmarksClose);
quotetxt.font = Font.systemFont(17);
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
    
 let docsSymbol = SFSymbol.named("arrow.triangle.turn.up.right.circle.fill")
 let docsElement = footerStack.addImage(docsSymbol.image)    
    docsElement.imageSize = new Size(14, 25)
    docsElement.tintColor = Color.white()
    docsElement.imageOpacity = 0.5
docsElement.url=`whatsapp://send?text=&phone=${reftext}
`

docsElement.url=`mailto:maqbul@sky.com?subject=quote&body=+quotetxt`
    
     
widget.setPadding(5, 10, -24, 10)
 

if(!config.runsInWidget){
widget.presentMedium()

}

 
Script.setWidget(widget)
Script.complete()

module.exports = {
  main
} 
