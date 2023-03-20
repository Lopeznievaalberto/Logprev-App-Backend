
module.exports = {

    SECRET: process.env.AUTH_SECRET || "Mongodb123.", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10,
    PORT : process.env.PORT || 5600,
    URL : process.env.URL || 'mongodb+srv://Alberto:Mongodb123.@cluster0.wjasvao.mongodb.net/?retryWrites=true&w=majority'
};