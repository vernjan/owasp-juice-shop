# Level 4

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