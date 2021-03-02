/*Library*/
function RemoveAccents(str) {
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
        if ((x = accents.indexOf(str[i])) != -1) {
            str[i] = accentsOut[x];
        }
    }
    return str.join('');
}
/**/
/**/
path = location.href;
index = path.indexOf('https://simple.ripley.com.pe/minisitios/');
//index = path.indexOf('');
if (index > -1) {
    //console.log("entro al evnto");
    const enlace = document.querySelectorAll('.rclandinAct a');
    let atrib = "";
    let title = document.title;
    let content = "";
    /*Site Promotion*/
    let attr_sp;
    /**/
    /*cm_mmc*/
    let CM_MMC;
    /**/
    for (let i = 0; i < enlace.length; i++) {
        /*Tracking Google Analytics*/
        enlace[i].addEventListener("click", function(e) {
            atrib = this.getAttribute('data-send-url');
            url = this.getAttribute('href');
            content = atrib + '_' + url;
            if (atrib != "" && atrib != null) {
                ga('send', 'event', 'Landing pages', title, content);
            }
        });
        /**/
        /*Trancking Digital Analytics*/
        atrib = enlace[i].getAttribute('data-send-url');
        url = enlace[i].getAttribute('href');
        content = atrib + '_' + url;
        if (atrib != "" && atrib != null) {
            attr_sp = document.createAttribute("manual_cm_sp");
            attr_sp.value = ("Landing_pages-_-" + title.replace(/\s/g, "") + "-_-" + content.replace(/\s/g, ""));
            enlace[i].setAttributeNode(attr_sp);
            /*Tracking cm_mmc*/
            content = atrib + '_' + url.replace('https://simple.ripley.com.pe/', '');
            if (url.indexOf("?") == -1) {
                CM_MMC = "?cm_mmc=ripley.com.pe-_-Landing_pages-_-" + RemoveAccents(title.replace(/\s/g, "")) + "-_-" + content.replace(/\s/g, "");
            } else {
                CM_MMC = "&cm_mmc=ripley.com.pe-_-Landing_pages-_-" + RemoveAccents(title.replace(/\s/g, "")) + "-_-" + content.replace(/\s/g, "");
            }
            enlace[i].setAttribute("href", url + CM_MMC);
            /**/
        }
        /**/
    }
}

/**/
