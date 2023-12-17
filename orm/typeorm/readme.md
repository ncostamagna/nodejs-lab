# Site
https://github.com/typeorm/typeorm

# Setup

```
npm init -y
npm install typescript ts-node @types/node --save-dev 

npx tsc --init 
npm install typeorm reflect-metadata --save

npm install sqlite3 --save

```

We need to add those properties in our tsconfig.json

```
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

# Migration

affter creating a scheme, we execute the migrate:
```
npx typeorm init --name MyProject --database sqlite
```

```
MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options
```

# Run 

we need to add the entity (in this case Photo) in 'src/data-source.ts'
```
npx ts-node index.ts
```