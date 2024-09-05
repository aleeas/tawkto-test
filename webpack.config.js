"use strict";

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const dataObj = require("./data/data.json");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.svg$/,
        use: "url-loader", // or 'url-loader'
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    before: function (app, server, compiler) {
      app.get("/api/categories", function (req, res) {
        res.json(dataObj.categories);
      });

      app.get("/api/articles", function (req, res) {
        res.json(dataObj.articles);
      });

      app.get("/api/article/*", function (req, res) {
        let articles = {};
        const articleId = req.params["0"];

        for (let index = 0; index < dataObj.articles.length; index++) {
          if (dataObj.articles[index].id === articleId) {
            articles = dataObj.articles[index];
            break;
          }
        }
        res.json(articles);
      });

      app.get("/api/category/*", function (req, res) {
        let categories = {};
        const categoryId = req.params["0"];

        for (let index = 0; index < dataObj.categories.length; index++) {
          if (dataObj.categories[index].id === categoryId) {
            categories = dataObj.categories[index];
            break;
          }
        }
        res.json(categories);
      });

      app.get("/api/author/*", function (req, res) {
        let author = {};
        const authorId = req.params["0"];

        for (let index = 0; index < dataObj.authors.length; index++) {
          if (dataObj.authors[index].id === authorId) {
            author = dataObj.authors[index];
            break;
          }
        }
        res.json(author);
      });

      app.get("/api/search/:query?", function (req, res) {
        const searchQuery = req.params.query ? req.params.query.toLowerCase() : "";

        // If the query is null, undefined, or an empty string, return all categories
        if (!searchQuery) {
          return res.json(dataObj.categories);
        }

        // Filter categories based on the query
        const filteredCategories = dataObj.categories.filter((category) =>
          category.title.toLowerCase().includes(searchQuery)
        );

        res.json(filteredCategories); // Return the filtered results
      });
    },
  },
};
