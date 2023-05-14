import { Sequelize } from "sequelize"
import { Env } from "./env";

export class Database {
    
    private static conn : Sequelize;

    /**
     * Single Instance Sequelize
     * @returns {Sequelize}
     */
    public static connection() {
        let conf = Env.get();
        
        if (Database.conn == null)
            Database.conn = new Sequelize(conf.DB_NAME, conf.DB_USER, conf.DB_PASSWORD, {
                host: conf.DB_HOST,
                dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
                port: conf.DB_PORT
              });
        
        return Database.conn;
    }
}