const users = require('../../database/models').users;
const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Chance = require('chance');
const chance = new Chance();

module.exports = {

   postall: async (params) => {
      let posts = users.create({
         username: params.username,
         firstname: params.firstname,
         lastname: params.lastname,
         password: params.password,
         token: chance.string({ length: 50 }),
         email: params.email,
         address: params.address,
         phone: params.phone
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
                  username: { [Op.like]: `%${queries.name}%` },
                  firstname: { [Op.like]: `%${queries.first}%` },
                  lastname: { [Op.like]: `%${queries.last}%` },
                  email: { [Op.like]: `%${queries.email}%` },
                  address: { [Op.like]: `%${queries.address}%` },
                  phone: queries.phone,
                  role: queries.role
               }
            }
         }
      }
      return await users.findAll(opt)
   },

   putall: async (coba, id) => {
      let puts = users.update({
         username: coba.username,
         firstname: coba.firstname,
         lastname: coba.lastname,
         password: coba.password,
         email: coba.email,
         address: coba.address,
         phone: coba.phone
      }, { where: { id: { [Op.eq]: id } } })
      return await puts
   },

   delete: async (id) => {
      users.destroy({ where: { id: id } })
   },

   login: async (queries) => {
      // console.log(queries)
      let opt = {
         where: {
            username: { [Op.eq]: queries.username },
            password: { [Op.eq]: queries.password }
         }
      }
      return await users.find(opt)
   }
};