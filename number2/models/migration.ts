import { AppToken } from "./apptoken";
import { Guestbook } from "./guestbook";
import { User } from "./user";
import bcrypt from "bcrypt";

// Migrate the Table
User.sync();
AppToken.sync();
Guestbook.sync();

// Seed the Data
const seed = async () => 
{
    let admin = User.build({
        username: "admin",
        password: await bcrypt.hash("admin", 10)
    });

    admin.save();

    let app = AppToken.build({
        appName: "web",
        secret: "secretABC"
    });

    app.save();
}

seed();