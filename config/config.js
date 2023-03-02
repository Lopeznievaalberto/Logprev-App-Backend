module.exports = {

    SECRET: process.env.AUTH_SECRET || "Mongodb123.", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10,
    PORT : process.env.PORT,
    //conn_str : process.env.conn_str
};