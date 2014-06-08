/*jshint multistr:true */
var text = "The cat in cradle and the silver spoon. Little boy blue and the  man on the moon. When you comin' home Josh, Josh  I don't know when, but we'll  get together then son. You know we'll have a good time then."
var myName = "Josh"
var myNameSplit = myName.split("");
var hits = []
var namePresent=0
for (i=0;i<text.length;i++) 
    {
        if (text[i]=="J") 
            {
            for (j=i;j<(myName.length + i);j++) 
                {
                hits.push(text[j])
                //console.log(hits)
                //console.log(myNameSplit)
                }
            }
            if (_.isEqual(hits,myNameSplit)===true)
                {
                    console.log(hits)
                    namePresent=1;
                    break;
                }
    }
if (namePresent===0) {
    console.log("Name was not found.")
}
