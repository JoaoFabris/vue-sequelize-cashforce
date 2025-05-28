module.exports = (sequelize, DataTypes) => {
    const OrderPortion = sequelize.define('OrderPortion', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nDup: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nDup',
      },
      dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'dVenc',
      },
      vDup: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'vDup',
      },
      availableToMarket: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'availableToMarket',
      },
    }, {
      tableName: 'orderportions',
      timestamps: true,
      underscored: false, 
    });
  
    OrderPortion.associate = (models) => {
      OrderPortion.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
    };
  
    return OrderPortion;
  };