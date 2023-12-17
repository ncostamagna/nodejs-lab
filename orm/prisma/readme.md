# Site
https://www.prisma.io/docs/getting-started

# Setup

```
npm init -y
npm install typescript ts-node @types/node --save-dev 

npx tsc --init 
npm install prisma --save-dev 

// install provider
npx prisma init --datasource-provider sqlite 
```

# Migration

affter creating a scheme, we execute the migrate:
```
npx prisma migrate dev --name init
```

# Run 

```
npx ts-node script.ts
```

# Prisma studio

We can use a prisma studio to display the data in our databases

```
npx prisma studio 
```