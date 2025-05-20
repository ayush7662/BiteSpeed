# Bitespeed Identity Reconciliation

A backend service to identify and consolidate contact information (email/phone). It handles linking logic between primary and secondary contacts.

## Tech Stack

* Node.js, Express, TypeScript
* PostgreSQL (Neon), Prisma
* Deployed on Render

## Getting Started

### Prerequisites

* Node.js ≥ 20
* npm ≥ 10
* PostgreSQL (local or Neon)

### Installation

```bash
git clone https://github.com/ayush7662/BiteSpeed.git
cd BiteSpeed
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
PORT=3000
```

### Database Setup

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

### Running Locally

```bash
npm run start
```

Server: [http://localhost:3000](http://localhost:3000)

## API Endpoint

POST `/identify`

### Request

```json
{
  "email": "string | null",
  "phoneNumber": "string | null"
}
```

### Response

```json
{
  "contact": {
    "primaryContatctId": number,
    "emails": string[],
    "phoneNumbers": string[],
    "secondaryContactIds": number[]
  }
}
```

### Example

New:

```json
{
  "email": "lorraine@hillvalley.edu",
  "phoneNumber": "123456"
}
```

## Deployment

Deployed on Render: [https://bitespeed-wl6u.onrender.com/identify](https://bitespeed-wl6u.onrender.com/identify)

## License

This project is licensed under the MIT License.
