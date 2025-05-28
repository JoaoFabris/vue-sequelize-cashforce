module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define('Offer', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tariff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adValorem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      float: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iof: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      paymentStatusProvider: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, {
      tableName: 'offers',
      timestamps: true,
    });
  
    Offer.associate = (models) => {
      Offer.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
      Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
    };
  
    return Offer;
  };