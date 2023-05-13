import { Database } from "../connection";
import { DataTypes, Model } from 'sequelize';

export class Guestbook extends Model {
    declare id: number;
    declare name: string;
    declare address: string;
    declare phone: string;
    declare note: string;
}

Guestbook.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    note: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: Database.connection(),
    tableName: "guestbook"
});
