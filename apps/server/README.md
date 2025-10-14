<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">Nien Su Viet API</p>

## Description

API for Nien Su Viet

## Database design

```mermaid
erDiagram
    User }o--|| Role : "has"
    User ||--o{ KeyToken : "has"
    User ||--o{ HistoricalEvent : "creates"
    User ||--o{ EventEdit : "edits"
    User ||--o{ BlogAuthor : "authors"

    Role ||--o{ Grant : "has"

    Grant }o--|| Resource : "grants_access_to"

    HistoricalEvent ||--o{ EventEdit : "has_edits"
    HistoricalEvent }o--o{ EventPeriod : "categorized_in"

    BlogPost ||--o{ BlogAuthor : "has_authors"

    User {
        uuid id PK
        varchar username UK
        varchar email UK
        varchar firstName
        varchar lastName
        varchar slug UK
        varchar password
        varchar salt
        varchar avatar
        varchar address
        date birthdate
        varchar msisdn
        enum sex
        enum status
        uuid roleId FK
        timestamp createdAt
        timestamp updatedAt
    }

    Role {
        uuid id PK
        varchar name UK
        varchar slug UK
        enum status
        text description
    }

    Resource {
        uuid id PK
        varchar name UK
        varchar slug UK
        text description
    }

    Grant {
        uuid id PK
        uuid roleId FK
        uuid resourceId FK
        varchar action
        varchar attribute
    }

    KeyToken {
        uuid id PK
        varchar browserId
        text publicKey
        text privateKey
        text[] refreshTokensUsed
        text refreshToken
        uuid userId FK
        timestamp createdAt
        timestamp updatedAt
    }

    OTP {
        uuid id PK
        varchar token UK
        varchar email
        enum status
        timestamp expiresAt
        timestamp createdAt
        timestamp updatedAt
    }

    ApiKey {
        uuid id PK
        varchar key UK
        boolean status
        enum[] permissions
        timestamp createdAt
        timestamp updatedAt
    }

    HistoricalEvent {
        uuid id PK
        smallint fromDay
        smallint fromMonth
        smallint fromYear
        smallint toDay
        smallint toMonth
        smallint toYear
        text content
        uuid authorId FK
        timestamp createdAt
        timestamp updatedAt
    }

    EventEdit {
        uuid id PK
        uuid eventId FK
        uuid editorId FK
        timestamp editedAt
        text prevContent
        text newContent
        smallint prevFromDay
        smallint prevFromMonth
        smallint prevFromYear
        smallint prevToDay
        smallint prevToMonth
        smallint prevToYear
        smallint newFromDay
        smallint newFromMonth
        smallint newFromYear
        smallint newToDay
        smallint newToMonth
        smallint newToYear
    }

    EventPeriod {
        uuid id PK
        smallint fromDay
        smallint fromMonth
        smallint fromYear
        smallint toDay
        smallint toMonth
        smallint toYear
        varchar name UK
        varchar slug UK
        text description
    }

    BlogPost {
        uuid id PK
        varchar title
        varchar slug UK
        text content
        timestamp createdAt
        timestamp updatedAt
    }

    BlogAuthor {
        uuid authorId FK,PK
        uuid postId FK,PK
        timestamp createdAt
    }
```

## Project setup

```bash
$ pnpm install
$ pnpm prisma generate
$ pnpm setup:resource
$ pnpm setup:role
```

## Stay in touch

- Author - [PhanhotboY](https://twitter.com/phanhotboy)
- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
