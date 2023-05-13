# Merkle Innovation Test

## Number 1

The code is in folder `number1/index.ts`. To run please install `ts-node`.
```
# if globbaly
cd number1/
npm install -g ts-node
# OR locally
cd number1/
npm install
```

then run using `ts-node number1/index.ts`. Example :
```
[ben@TP-X220 number1]$ node_modules/.bin/ts-node number1/index.ts 
1 2 3 4 5 
2 4 6 8 10 
3 6 9 12 15 
4 8 12 16 20 
5 10 15 20 25 
```

NOTE: This is using ts to node, so it need external module. So that's why we need to install ts-node

## Number 2

### Database Structure 
To do the migration, there are a file in `number2/models/migration.ts`, please run this before, so it will add the table to the db by `ts-node number2/models/migration.ts`. If this process isn't done first, the sql will throw exception, and the app will exit by itself (it's a ts/javascript, we need container to handle this :/)

## Database Connection
Please copy paste `number2/env.example` to `number2/.env`, and change the config to appropriate value on your local database auth credential. 

### How to run ?

The code is in folder `number2/index.ts`. To run please use `ts-node` and do `npm install first`
```
# if globbaly
cd number1/
npm install -g ts-node
# OR locally
cd number1/
npm install
```

then run using `ts-node number2/index.ts`. Example :
```
[ben@TP-X220 number2]$ npm start

> express-todo-api@1.0.0 start
> nodemon index.ts

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node index.ts`

```

NOTE: The jwt isn't done yet, I'm sorry, also the authentication isn't implemented yet. It should just display the data without login.

### Code Time Tracking

This is the wakatime of the code track https://wakatime.com/@benlimanto/projects/rbfyvgbmgt?start=2023-05-07&end=2023-05-13, You can go to that page, and see the code that I edit, and how much time I need to do that. I hope this provide insight to the code checker. 

### How to show page?

Go to `http://localhost:3000/`, You will have url to input, galley, and simple admin (view and delete)

# Footnote

This code partially stolen from my other code at https://github.com/benyaminl/express-todo-api
Most of the code are my own thinking, adapting from ASP.NET Core