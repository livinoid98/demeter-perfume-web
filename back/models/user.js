module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        userId:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(40),
            allowNull:false,
        },
        phone:{
            type:DataTypes.STRING(40),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING(40),
            allowNull:false,
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci',
    });

    return User;
};