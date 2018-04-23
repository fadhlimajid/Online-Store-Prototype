const ord_d = require('../../database/models').orders_detail;
const Sequelize = require('sequelize');
const orderService = require('../services/order-service');

class OrdersDetails {
   constructor(Op) {
      this.Op = Op;
   }

   async postAll(params) {
      let posts = ord_d.create({
         users_id: params.users_id,
         orders_id: params.orders_id,
         products_id: params.products_id,
         quantity: params.quantity
      })
      return await posts
   }

   async getAll(queries) {
      let opt = {}
      if (Object.keys(queries).length) {
         opt = {
            where: {
               [this.Op.or]: {
                  id: queries.id,
                  users_id: { [this.Op.like]: `%${queries.users_id}%` },
                  orders_id: { [this.Op.like]: `%${queries.orders_id}%` },
                  products_id: { [this.Op.like]: `%${queries.products_id}%` }
               }
            }
         }
      }
      return await ord_d.findAll(opt)
   }

   // async putAll(coba, id) {
   //    let puts = ord_d.update({
   //       users_id: coba.users_id,
   //       orders_details_id: coba.orders_details_id,
   //    }, { where: { id: { [this.Op.eq]: id } } })
   //    return await puts
   // }

   // async delete(id) {
   //    ord_d.destroy({ where: { id: id } })
   // }

}


module.exports = OrdersDetails;
