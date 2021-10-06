module.exports = function(sequelize, dataTypes){
    let alias = "user";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        pass:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        phone:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        avatar:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rol:{
            type: dataTypes.TINYINT(2),
            allowNull: false
        }
    }
    let config = {
        tableName: "users", 
        timestamps: true
    }

    const user = sequelize.define(alias, cols, config)

    Product.associate = models => {
        user.belongsToMany(models.product, {
            as: "user",
            through: "products_has_users",
            foreignKey:"users_id",
            otherKey:"products_id",
            timestamps: false
       
        })
    }

    return user
}