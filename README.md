# indoor-positioning-api

## Run

```bash
# Install Library From NPM
$ npm install
```

## Commit Message Rules
This repository follows [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)
#### Format
`<type>(optional scope): <animation>`
Contoh: `feat(animation): add get list animation endpoint`

#### Type:

Type yang bisa digunakan adalah:

- feat → Kalo ada penambahan/pengurangan codingan
- fix → kalo ada bug fixing
- BREAKING CHANGE → kalo ada perubahan yang signifikan (ubah login flow)
- docs → update documentation (README.md)
- styling → update styling, ga ngubah logic sama sekali (reorder import, benerin whitespace)
- ci → update github workflow
- test → update testing
- perf → fix sesuatu yang bersifat cuma untuk performance issue (derived state, memo)
- chore → perubahan misc seperti update depedencies

#### Optional Scope:

Contoh labeling per page `feat(animation): add get list animation endpoint`

*kalo gaada scopenya, gausa ditulis.


#### Description:

Description harus bisa mendeskripsikan apa yang dikerjakan. Jika ada beberapa hal yang dikerjakan, maka lakukan commit secara bertahap.

- Setelah titik dua, ada spasi. Contoh: `feat: add something`
- Kalo type `fix` langsung sebut aja issuenya apa. Contoh:  `fix: file size limiter not working`
- Gunakan kata imperative, present tense: "change" bukan "changed" atau "changes"
- Gunakan huruf kecil di semua description. Jangan berikan huruf besar di depan kalimat
- Jangan tambahkan titik di akhir description

## Branch Rules
> **IMPORTANT:**  
> - Agar Terintegrasi dengan JIRA maka gunakan format branch seperti contoh dibawah
> - Jika ingin menyelesaikan lebih dari 1 backlog di jira bisa dengan contoh urutan kedua dibawah
> - Gunakan lowercase dan ubah spasi backlog menjadi dash / '-'

- KLIOAPP-xx-lorem-ipsum-dolor-amit
- KLIOAPP-xx-KLIOAPP-yy-KLIOAPP-zz-lorem-ipsum

## Pull Request Rules
> **IMPORTANT:**  
> - Agar Terintegrasi dengan JIRA maka gunakan format penamaan pull request seperti contoh dibawah
> - Jika ingin menyelesaikan lebih dari 1 backlog di jira bisa dengan contoh urutan kedua dibawah
> - Gunakan Squash & Merge dan mengganti commit sesuai aturan conventional commit sesuai di README

- KLIOAPP-xx "lorem ipsum"
- KLIOAPP-xx KLIOAPP-yy KLIOAPP-zz "lorem-ipsum"


## API Documentation

### Login

Logs in a user and returns a JSON Web Token (JWT) for authentication.

**URL:** `/api/user/login`

**Method:** `POST`

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Success Response**

- Status Code : 200 OK

- Content :

  ``` json
  {
    "token": "string"
  }
  ```

**Error Responses:**

- Status Code: 401 Unauthorized

  - **Content:**

  ```
  {
    "message": "Invalid username or password"
  }
  ```

- Status Code: 500 Internal Server Error

  - **Content:**

  ```
  {
    "message": "An error occurred during login"
  }
  ```



### Register

Registers a new user.

**URL:** `/api/register`

**Method:** `POST`

**Request Body:**

```
{
  "username": "string",
  "email": "string",
  "type": "string",
  "password": "string"
}
```

**Success Response:**

- **Status Code:** 201 Created
- **Content:**

```
{
  "message": "Registration successful",
  "user": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "type": "string",
    "password": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

**Error Responses:**

- Status Code:

   400 Bad Request

  - **Content:**

  ```
  {
    "message": "Username or email already exists"
  }
  ```

- Status Code:

   500 Internal Server Error

  - **Content:**

  ```
  {
    "message": "An error occurred during registration"
  }
  ```



### Create a new WAP entry

Registers a new WAP entry.

- **URL**: `/api/waps`

- **Method**: `POST`

- **Headers** :

  - `x-access-token`: Access token for authentication.

- **Request Body** :

  ```
  jsonCopy code{
    "essid": "string",
    "bssid": "string",
    "rssi": "string"
  }
  ```

- **Success Response** :

  - **Status Code**: 200 OK

  - **Content** :

    ```
    jsonCopy code{
      "_id": "string",
      "essid": "string",
      "bssid": "string",
      "rssi": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
    ```

- **Error Responses** :

  - Status Code : 400 Bad Request

    - **Content**:

    ```
    jsonCopy code{
      "message": "Essid cannot be empty!"
    }
    ```

  - Status Code: 500 Internal Server Error

    - **Content**:

    ```
    jsonCopy code{
      "message": "Some Error Occurred while creating the Schema"
    }
    ```

### Retrieve all WAP entries

Retrieves all WAP entries from the database.

- **URL**: `/api/waps`
- **Method**: `GET`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Response** :
  - Success: Returns an array of all WAP entries.
  - Error: Returns an error message.

### Find a WAP entry by ID

Retrieves a single WAP entry by ID.

- **URL**: `/api/waps/:id`
- **Method**: `GET`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Parameters** :
  - `id` (required): ID of the WAP entry.
- **Response** :
  - Success: Returns the WAP entry with the specified ID.
  - Error: Returns an error message.

### Find WAP entries by ESSID

Retrieves WAP entries by ESSID.

- **URL**: `/api/waps/essid/:id`
- **Method**: `GET`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Parameters** :
  - `id` (required): ESSID of the WAP entries to retrieve.
- **Response** :
  - Success: Returns an array of WAP entries with the specified ESSID.
  - Error: Returns an error message.

### Update a WAP entry by ID

Updates a WAP entry by ID.

- **URL**: `/api/waps/:id`

- **Method**: `PUT`

- **Headers** :

  - `x-access-token`: Access token for authentication.

- **Parameters** :

  - `id` (required): ID of the WAP entry to update.

- **Request Body** :

  ```json
  {
    "essid": "string",
    "bssid": "string",
    "rssi": "string"
  }
  ```

- **Response** :

  - Success: Returns the updated WAP entry.
  - Error: Returns an error message.

### Delete WAP entries by ESSID

Deletes WAP entries by ESSID.

- **URL**: `/api/waps/essid/:essid`
- **Method**: `DELETE`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Parameters** :
  - `essid` (required): ESSID of the WAP entries to delete.
- **Response** :
  - Success: Returns a success message.
  - Error: Returns an error message.

### Delete all WAP entries

Deletes all WAP entries from the database.

- **URL**: `/api/waps`
- **Method**: `DELETE`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Response** :
  - Success: Returns a success message.
  - Error: Returns an error message.

### Find all published WAP entries

Retrieves all published WAP entries.

- **URL**: `/api/waps/published`
- **Method**: `GET`
- **Headers** :
  - `x-access-token`: Access token for authentication.
- **Response** :
  - Success: Returns an array of published WAP entries.
  - Error: Returns an error message.

Note: Replace `:id` and `:essid` with the actual ID and ESSID values in the URL.

