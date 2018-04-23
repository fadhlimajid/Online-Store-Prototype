const orders = require('../../database/models').orders;
const Sequelize = require('sequelize');
const products = require('../../database/models').products;
const axios = require('axios');
const ord_d = require('../../database/models').orders_detail;
const http = require('http');

console.log(typeof orders)

class Orders {
   constructor(Op) {
      this.Op = Op;
   }

   async postAll(params) {
      let post = orders.create({
         users_id: params.users_id,
      })
      const id = await post

      await params.data.map(x => {
         ord_d.create({
            users_id: params.users_id,
            orders_id: id.id,
            products_id: x.id,
            quantity: x.quantity
         })
      })

      const pay_details = {
         "transaction_details": {
            order_id: id.id,
            gross_amount: parseInt(params.total)
         }
      }

      const options = {
         headers: {
            Authorization: "Basic U0ItTWlkLXNlcnZlci1yZUI1WVJVRlVpWGgyc2VHM1J1RXpTTEo6",
            Accept: "application/json",
            "Content-Type": "application/json"
         }
      }

      const abc = axios.post('https://app.sandbox.midtrans.com/snap/v1/transactions', pay_details, options).then(response => {
         return response.data
      }).catch(err => {
         console.error(err)
      })

      await params.data.map(x => {
         products.update({
            stock: x.stock
         }, { where: { id: x.id } })
      })
      return await abc
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
      await orders.findAll(opt)
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
