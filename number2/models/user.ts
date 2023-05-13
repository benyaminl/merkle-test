import { Database } from "../connection";
import { DataTypes, Model } from 'sequelize';

export class User extends Model {
    declare id: number;
    declare username: string;
    declare password: string;    
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: Database.connection(),
    tableName: "users"
});
