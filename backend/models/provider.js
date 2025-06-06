module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      responsibleMobile: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      bank: DataTypes.STRING,
      bankAgency: DataTypes.STRING,
      account: DataTypes.STRING,
      documents: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      tableName: 'providers',
      timestamps: true,
      underscored: false,
    });
  
    Provider.associate = (models) => {
      Provider.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
      Provider.hasMany(models.Order, { foreignKey: 'providerId', as: 'orders' });
    };
  
    return Provider;
  };