const products = require('../../database/models').products;
const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

   postall: async (params) => {
      let posts = products.create({
         name: params.name,
         description: params.description,
         price: params.price,
         stock: params.stock
      })
      return await posts
   },

   getall: async (queries) => {
      let opt = {}
      if (Object.keys(queries).length) {
         opt = {
            where: {
               [Op.or]: {
                  id: queries.id,
                  name: { [Op.like]: `%${queries.name}%` },
                  description: { [Op.like]: `%${queries.description}%` },
                  price: { [Op.like]: `%${queries.price}%` },
                  stock: { [Op.like]: `%${queries.stock}%` },
               }
            }
         }
      }
      return await products.findAll(opt)
   },

   putall: async (coba, id) => {
      let puts = products.update({
         name: coba.name,
         description: coba.description,
         price: coba.price,
         stock: coba.stock
      }, { where: { id: { [Op.eq]: id } } })
      return await puts
   },

   delete: async (id) => {
      products.destroy({where:{id:id}})
   }
};