const orders = require('../../database/models').orders;
const Sequelize = require('sequelize');


console.log(typeof orders)

class Orders {
   constructor(Op) {
      this.Op = Op;
   }

   async postAll(params) {
      let posts = orders.create({
         id: params.id,
         users_id: params.users_id,
         orders_details_id: params.orders_details_id,
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
                  orders_details_id: { [this.Op.like]: `%${queries.orders_details_id}%` },
               }
            }
         }
      }
      return await orders.findAll(opt)
   }

   async putAll(coba, id) {
      let puts = orders.update({
         users_id: coba.users_id,
         orders_details_id: coba.orders_details_id,
      }, { where: { id: { [this.Op.eq]: id } } })
      return await puts
   }

   async delete(id) {
      orders.destroy({ where: { id: id } })
   }

}


module.exports = Orders;
