function setcookiefirewall(){expiry=new Date();expiry.setTime(expiry.getTime()+(10*1000));document.cookie="access=yes; expires="+expiry.toGMTString();console.log('cookie/access set');}