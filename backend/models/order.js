module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'orderNfId' // Especifica o nome exato da coluna no banco
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'orderNumber'
    },
    orderPath: {
      type: DataTypes.STRING,
      field: 'orderPath'
    },
    orderFileName: {
      type: DataTypes.STRING,
      field: 'orderFileName'
    },
    orderOriginalName: {
      type: DataTypes.STRING,
      field: 'orderOriginalName'
    },
    emissionDate: {
      type: DataTypes.STRING,
      field: 'emissionDate'
    },
    pdfFile: {
      type: DataTypes.STRING,
      field: 'pdfFile'
    },
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'emitedTo'
    },
    nNf: {
      type: DataTypes.STRING,
      field: 'nNf'
    },
    CTE: {
      type: DataTypes.STRING,
      field: 'CTE'
    },
    value: {
      type: DataTypes.STRING,
      field: 'value'
    },
    orderStatusBuyer: {
      type: DataTypes.STRING,
      defaultValue: '0',
      field: 'orderStatusBuyer'
    },
    orderStatusProvider: {
      type: DataTypes.STRING,
      defaultValue: '0',
      field: 'orderStatusProvider'
    },
    deliveryReceipt: {
      type: DataTypes.STRING,
      field: 'deliveryReceipt'
    },
    cargoPackingList: {
      type: DataTypes.STRING,
      field: 'cargoPackingList'
    },
    deliveryCtrc: {
      type: DataTypes.STRING,
      field: 'deliveryCtrc'
    },
  }, {
    tableName: 'orders',
    timestamps: true,
    underscored: false,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
  };

  return Order;
};