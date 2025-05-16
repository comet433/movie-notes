const express = require('express');
const router = express.Router();
const db = require('../db/db');

// 首页展示 + 搜索 + 排序
router.get('/', async (req, res) => {
  const sort = req.query.sort || 'date';
  const search = req.query.search || '';
  let orderBy = sort === 'rating' ? 'rating DESC' : 'date_watched DESC';

  try {
    let queryText = 'SELECT * FROM movies';
    let values = [];

    if (search.trim() !== '') {
      queryText += ' WHERE LOWER(title) LIKE $1';
      values.push(`%${search.toLowerCase()}%`);
    }

    queryText += ` ORDER BY ${orderBy}`;
    const result = await db.query(queryText, values);
    res.render('index', { movies: result.rows, search });
  } catch (err) {
    console.error(err);
    res.send('Error fetching movies from database');
  }
});

module.exports = router;
