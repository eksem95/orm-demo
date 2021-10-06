const router = require('express').Router();
const { Category, Product } = require('../../models');
const { beforeDestroy, beforeBulkDestroy } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll();
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne(
    {
      category_name: req.body.category_name,
    },
    {
    where: {
      id: req.params.id,
    }
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(
    {
      id: req.body.id,
      category_name: req.body.category_name,
    }
  )
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where:{
      id: req.params.id,
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
