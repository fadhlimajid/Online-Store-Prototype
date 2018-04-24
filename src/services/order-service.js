const orders = require('../../database/models').orders;
const Sequelize = require('sequelize');
const products = require('../../database/models').products;
const axios = require('axios');
const ord_d = require('../../database/models').orders_detail;
const http = require('http');
const nodemailer = require('nodemailer');


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
         nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
               host: 'smtp.mailtrap.io',
               port: 2525,
               secure: false, // true for 465, false for other ports
               auth: {
                  user: `10d26a1130a324`, // generated ethereal user
                  pass: `53804ef841ea69`  // generated ethereal password
               }
            });
            transporter.sendMail({
               from: 'noreply@uwawstore.com',
               to: '0fda59b80b-06b3bf@inbox.mailtrap.io',
               subject: 'Message title',
               text: `Plaintext version of the message ${response.data.redirect_url}`,
               html: `<p>Thank you for buying from Uwaw Store, please follow the payment link below: <br> <a href=${response.data.redirect_url}>${response.data.redirect_url}</a></p>`
            }).then(info => {
               console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
            });
         });
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
