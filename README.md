jquery.phoneblink
=================

Make Phone Numbers Blink.

You know how you really love it when phone numbers blink on a webpage? Don't you
really want to stop and call that phone number? Don't you wish you could
easily make all the phone numbers on your website blink?

**Well now you can!**

### How To ###

```
$(".phone").phoneblink();
```

Don't have time to be bothered with figuring out what selectors contain your phone numbers? Do it up!


```
$("body").phoneblink();
```

It's just that simple! And it even works in browsers that foolishly do not support the `<blink>` tag!

### In Action ###

http://jsfiddle.net/joshpauljohnson/p7ZPJ/4/

### Supported Phone Number Formats ###

* 555-555-1212
* 1-555-555-1212
* (555) 555-1212
* 1-800-DRUIDIA

### Known Issues ###

_Doesn't check for previous blink tags_ so subsequent calls
(or phone numbers that smartly already had `<blink>` tags) will
result in nested blink tags. But what the heck, just gives more blinking.

_Probably doesn't support international phone numbers_ as well as
phone numbers without area codes or formatting out of the norm.