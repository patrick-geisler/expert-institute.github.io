(this["webpackJsonpexpert-institute.github.io"]=this["webpackJsonpexpert-institute.github.io"]||[]).push([[0],{23:function(t,e,n){t.exports=n(35)},28:function(t,e,n){},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),c=n(12),a=n.n(c),o=(n(28),n(29),n(8)),s=n(5),l={cocktails:[],isDataFetching:!1,filteredList:[],drinkList:[]},u="ingredient",f="glass",d=function(t){return{type:"IS_DATA_FETCHING",bool:t}},h=function(){return function(t){return t(d(!0)),fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){return t.json()}),(function(t){return console.log("Failed to fetch Random Drink",t)})).then((function(e){return t(function(t){return{type:"RECEIVE_RANDOM_COCKTAIL",cocktails:t}}(e))})).then((function(){t(d(!1))}))}},p=function(t){var e;return t===u?e="https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list":t===f?e="https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list":console.log("OOOOPS"),function(t){return t(d(!0)),fetch(e).then((function(t){return t.json()}),(function(t){return console.log("Failed to fetch ingredient List",t)})).then((function(e){t(function(t){return{type:"RECEIVE_FILTERED_LIST",filteredList:t}}(e))})).then((function(){t(d(!1))}))}},E=function(t,e){var n;return t===u?n="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(e):t===f?n="https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=".concat(e):console.log("OOOOPS"),function(t){return t(d(!0)),fetch(n).then((function(t){return t.json()}),(function(t){return console.log("Failed to fetch ingredient List",t)})).then((function(e){t(function(t){return{type:"RECEIVE_DRINK_LIST",drinkList:t}}(e))})).then((function(){t(d(!1))}))}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RECEIVE_RANDOM_COCKTAIL":return Object.assign({},t,{cocktails:e.cocktails});case"RECEIVE_FILTERED_LIST":return Object.assign({},t,{filteredList:e.filteredList});case"RECEIVE_DRINK_LIST":return Object.assign({},t,{drinkList:e.drinkList});case"IS_DATA_FETCHING":return Object.assign({},t,{isDataFetching:e.bool});default:return t}},g=n(7),b=n(9),k=Object(o.b)((function(t){return{drinkList:t.drinkList}}),(function(t){return Object(s.b)({dispatchGetdrinksByFilter:E},t)}))((function(t){var e=t.listType,n=t.dispatchGetdrinksByFilter,c=t.drinkList,a=t.match.params.drinksList;Object(i.useEffect)((function(){n(e,a)}),[n,a,e]),console.log(c);var o=c.drinks?c.drinks:["Loading"];return r.a.createElement("div",null,r.a.createElement("img",{src:o[0].strDrinkThumb,alt:"eff"}),o[0].strDrink)})),L=Object(o.b)((function(t){return{filteredList:t.filteredList}}),(function(t){return Object(s.b)({dispatchGetFilteredList:p},t)}))((function(t){var e=t.listType,n=t.filteredList,c=t.dispatchGetFilteredList,a=t.match;Object(i.useEffect)((function(){c(e)}),[c,e]);var o=n.drinks?n.drinks:["Loading"];return r.a.createElement("div",null,o[0]&&o.map((function(t,e){var n=t.strIngredient1||t.strGlass;return r.a.createElement("div",{key:e},r.a.createElement(g.b,{to:"".concat(a.url,"/").concat(n)},n))})),r.a.createElement(b.a,{path:"".concat(a.path,"/:drinksList"),render:function(t){return r.a.createElement(k,Object.assign({listType:e},t))}}))})),O=function(){return r.a.createElement(b.a,null,r.a.createElement(g.b,{to:"filteredIngredient"}," Filter By Ingredient "),r.a.createElement(g.b,{to:"filteredGlass"}," Filter By Glass "))},v=Object(o.b)((function(t){return{cocktails:t.cocktails}}),(function(t){return Object(s.b)({dispatchGetCocktails:h},t)}))((function(t){var e=t.cocktails,n=t.dispatchGetCocktails;Object(i.useEffect)((function(){n()}),[n]);var c=e.drinks?e.drinks[0].strDrinkThumb:"Loading";return console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:O}),r.a.createElement(b.a,{path:"/filteredIngredient",render:function(t){return r.a.createElement(L,Object.assign({listType:u},t))}}),r.a.createElement(b.a,{path:"/filteredGlass",render:function(t){return r.a.createElement(L,Object.assign({listType:f},t))}})),r.a.createElement("img",{src:c,alt:"eff"}))})),j=function(t){var e=t.store;return r.a.createElement(o.a,{store:e},r.a.createElement(g.a,null,r.a.createElement(v,null)))},I=n(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(s.c)(m,Object(s.a)(I.a));a.a.render(r.a.createElement(j,{store:w}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.96ca58c6.chunk.js.map