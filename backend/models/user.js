module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      cashforceAdm: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, {
      tableName: 'users',
      timestamps: true,
      underscored: false,
    });
  
    User.associate = (models) => {
      User.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
    };
  
    return User;
  };