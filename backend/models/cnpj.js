module.exports = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      companyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'cnpjs',
      timestamps: true,
      underscored: false,
    });
  
    Cnpj.associate = (models) => {
      Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId', as: 'buyers' });
      Cnpj.hasMany(models.Provider, { foreignKey: 'cnpjId', as: 'providers' });
      Cnpj.hasMany(models.Sponsor, { foreignKey: 'cnpjId', as: 'sponsors' });
      Cnpj.hasMany(models.Order, { foreignKey: 'cnpjId', as: 'orders' });
    };
  
    return Cnpj;
  };