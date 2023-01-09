import { createSelector } from "@reduxjs/toolkit";

export const getNewsError = ({ news }) => news.error;
export const getNewsLoading = ({ news }) => news.loading;
export const getNews = ({ news }) => news.news;
export const getFilter = ({ news }) => news.filter;
export const getTotalPages = ({ news }) => news.totalPages;

export const getFilteredNews = createSelector([getNews, getFilter], (data, filter='') => {
    const optimizedFilter = filter.toLowerCase();
    const filtersArr = optimizedFilter.split(' ')
    const news = [];
    for (let i = 0; i < data.length; i++){
        let found = true;
        const item = data[i]
        for (let j = 0; j < filtersArr.length; j++){
            if (!filtersArr[j]) continue;
            if (!item.title.includes(filtersArr[j])) found = false;
        }
        if (found)  news.push(data[i])
    }

    return news
})