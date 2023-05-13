import { Database } from "../connection";
import { DataTypes, Model } from 'sequelize';

export class AppToken extends Model {
    declare id: number;
    declare appName: string;
    declare secret: string;    
}

AppToken.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    appName: {
        type: DataTypes.STRING,
    },
    secret: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: Database.connection(),
    tableName: "app_token"
});
