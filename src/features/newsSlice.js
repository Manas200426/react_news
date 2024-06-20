import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '75b665e934264809a7b44d8f1ae3da2f';
const TOP_HEADLINES_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const EVERYTHING_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

export const fetchTopHeadlines = createAsyncThunk('news/fetchTopHeadlines', async ({ page }) => {
  const response = await axios.get(`${TOP_HEADLINES_URL}&page=${page}&pageSize=6`);
  return response.data.articles;
});

export const fetchArticlesByCategory = createAsyncThunk('news/fetchArticlesByCategory', async ({ category, page }) => {
  const response = await axios.get(`${TOP_HEADLINES_URL}&category=${category}&page=${page}&pageSize=6`);
  return response.data.articles;
});

export const fetchArticlesByKeyword = createAsyncThunk('news/fetchArticlesByKeyword', async ({ keyword, page }) => {
  const response = await axios.get(`${EVERYTHING_URL}&q=${keyword}&page=${page}&pageSize=100`); // Fetch more articles to filter later
  const filteredArticles = response.data.articles.filter(article => article.title.toLowerCase().includes(keyword.toLowerCase()));
  const paginatedArticles = filteredArticles.slice((page - 1) * 6, page * 6); // Pagination logic
  return paginatedArticles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: '',
    keyword: '',
    page: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.keyword = ''; // Reset keyword when category is set
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
      state.category = ''; // Reset category when keyword is set
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTopHeadlines.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticlesByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArticlesByKeyword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticlesByKeyword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticlesByKeyword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setKeyword, setPage } = newsSlice.actions;

export default newsSlice.reducer;
