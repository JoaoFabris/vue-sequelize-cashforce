const { Order, Buyer, Provider, Cnpj, User } = require('../models');

const statusMap = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado'
];

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'provider' },
        { model: Cnpj, as: 'cnpj' },
        { model: User, as: 'user' }
      ],
    });
    
    const formattedOrders = orders.map(order => {
      const orderData = order.get({ plain: true });
      const statusIndex = parseInt(orderData.orderStatusBuyer, 10);
      
      return {
        ...orderData,
        statusText: statusMap[statusIndex] || 'Status desconhecido'
      };
    });
    
    return res.status(200).json(formattedOrders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id, {
      include: [
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'provider' },
        { model: Cnpj, as: 'cnpj' },
        { model: User, as: 'user' }
      ],
    });
    
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    
    const orderData = order.get({ plain: true });
    const statusIndex = parseInt(orderData.orderStatusBuyer, 10);
    
    const formattedOrder = {
      ...orderData,
      statusText: statusMap[statusIndex] || 'Status desconhecido'
    };
    
    return res.status(200).json(formattedOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

module.exports = {
  getOrders,
  getOrderById,
};