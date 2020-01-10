// Creating our User model
//Set it as export because we will need it required on the server
  module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [6,128]
        }
      },
      phone: {
        type: DataTypes.STRING,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5,100]
        }
      },
      profileImage: {
        type: DataTypes.STRING,
      },
      // location: {
      //   type: DataTypes.STRING,
      // }
    });
  
    User.associate = function(models) {
      // Associating a user with product
      // When a user is deleted, also delete any associated product(s)
      // simply adds ON DELETE CASCADE rule to your database which specifies 
      // that the child data gets deleted when the parent data is deleted
      User.hasMany(models.Product, {
        onDelete: "cascade"
      });
    };

    return User;
  };
 
