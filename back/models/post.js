module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post',{
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        content:{
            type:DataTypes.STRING(360),
            allowNull:false,
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci',
    });

    return Post;
};