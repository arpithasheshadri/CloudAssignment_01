import sequelize  from "../index.js";

export const checkConnection = async () => {
    return await sequelize.authenticate();
}