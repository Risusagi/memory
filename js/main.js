!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.revers='<img src="img/revers.png">',this.index=n,this.avers=t}var n,t,a;return n=e,(t=[{key:"render",value:function(e){return'\n            <div class="card card-'.concat(e,'">\n                ').concat(this.revers,"\n            </div>\n        ")}}])&&r(n.prototype,t),a&&r(n,a),e}();function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.time=n,this.moves=t}var n,t,r;return n=e,(t=[{key:"render",value:function(){document.querySelector(".board").innerHTML='\n            <div class="final-board">\n                <span class="congratulations">\n                    Congratulations!\n                </span>\n                <span class="you-won">\n                    You won!!!\n                </span>\n                <span class="final-statistics">\n                    Time: '.concat(this.time,"\n                    <br>\n                    Moves: ").concat(this.moves,'\n                </span>\n                <button type="button" class="btn btn-outline-info restart-btn">\n                    New game\n                </button>\n            </div>\n        ')}}])&&i(n.prototype,t),r&&i(n,r),e}();function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.pairs=0,this.moves=0,this.time=0,this.minutes=0,this.seconds=0,this.shouldTik=!1}var n,t,r;return n=e,(t=[{key:"renderPairs",value:function(){document.querySelector(".pairs").textContent=this.pairs}},{key:"renderMoves",value:function(){document.querySelector(".moves").textContent=this.moves}},{key:"checkIfWin",value:function(e,n){var t=this;this.pairs===e&&(setTimeout(function(){new s(t.timeToShow(),t.moves).render(),n.restartGame()},800),this.shouldTik=!1)}},{key:"timeToShow",value:function(){return"".concat(this.minutes>9?this.minutes:"0"+this.minutes," : ").concat(this.seconds>9?this.seconds:"0"+this.seconds)}},{key:"timeTik",value:function(){var e=this,n=setInterval(function(){e.shouldTik?(e.time+=1,e.minutes=Math.floor(e.time/60),e.seconds=e.time%60,document.querySelector(".timer").textContent=e.timeToShow()):clearInterval(n)},1e3)}},{key:"render",value:function(e){return'\n            <div class="player-div">\n                <span class="statistics">\n                    Points:\n                    <span class="pairs">'.concat(this.pairs,"</span>\n                     / ").concat(e/2,'\n                    <br>\n                    Moves:\n                    <span class="moves">').concat(this.moves,'</span>\n                </span>\n                <span class="timer">\n                    00 : 00\n                </span>    \n            </div>\n        ')}}])&&o(n.prototype,t),r&&o(n,r),e}();function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cardsQuantity=null,this.cards=[],this.choisenCards=[],this.player=new c}var n,t,r;return n=e,(t=[{key:"createAverses",value:function(){var e,n=[];switch(this.cardsQuantity){case 12:e=6;break;case 24:e=3;break;case 36:e=2}for(var t=Math.floor(Math.random()*e+1),r=0;r<this.cardsQuantity;r++){var a=Math.ceil((r+1)/2)*t;n.push('<img class="avers" src="img/cats-'.concat(a,'.jpg">'))}return n.map(function(e,t){var r=Math.floor(Math.random()*n.length),a=n[r];n[r]=e,n[t]=a}),n}},{key:"renderCards",value:function(){for(var e=this.createAverses(),n=document.querySelector(".cards"),t=0;t<e.length;t++){var r=new a(t,e[t]);this.cards.push(r),n.innerHTML+=r.render(t)}}},{key:"handleCardClick",value:function(e,n){var t=this;if(!e.currentTarget.classList.contains("done")&&!e.currentTarget.classList.contains("clicked")&&this.choisenCards.length<2){e.currentTarget.classList.add("clicked");var r=this.cards[n];if(e.currentTarget.innerHTML=r.avers,this.choisenCards.push(r),2===this.choisenCards.length)if(this.choisenCards[0].avers===this.choisenCards[1].avers){var a=!0,i=!1,s=void 0;try{for(var o,c=function(){var e=o.value,n=document.querySelector(".card-".concat(e.index));setTimeout(function(){n.classList.add("done"),n.innerHTML=""},700),t.choisenCards=[]},u=this.choisenCards[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)c()}catch(e){i=!0,s=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw s}}this.player.pairs+=1,this.player.renderPairs(),this.player.checkIfWin(this.cardsQuantity/2,this)}else setTimeout(function(){var e=!0,n=!1,r=void 0;try{for(var a,i=t.choisenCards[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var s=a.value,o=document.querySelector(".card-".concat(s.index));o.innerHTML=s.revers,o.classList.remove("clicked")}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}t.choisenCards=[],t.player.moves+=1,t.player.renderMoves()},700)}}},{key:"openAvers",value:function(){var e=this;document.querySelectorAll(".card").forEach(function(n,t){return n.addEventListener("click",function(n){return e.handleCardClick(n,t)})})}},{key:"restartGame",value:function(){var e=this;document.querySelector(".restart-btn").addEventListener("click",function(){(new h).render(),e.player.shouldTik=!1,e.player.timeTik()})}},{key:"manageTime",value:function(e){e.currentTarget.innerHTML=this.player.shouldTik?"Play":"Pause",this.player.shouldTik=!this.player.shouldTik,document.querySelector(".cards").style.display=this.player.shouldTik?"":"none",this.player.timeTik()}},{key:"render",value:function(){var e=this;document.querySelector("#root").innerHTML='\n            <div class="board">\n                <h1>Memory game</h1>\n                '.concat(this.player.render(this.cardsQuantity),'\n                <div class="playing-btns">\n                    <button type="button" class="btn btn-outline-info pause-btn">Pause</button>\n                    <button type="button" class="btn btn-outline-info restart-btn">Restart</button>\n               </div>\n               <div class="cards"></div>\n            </div>\n        '),this.renderCards(),this.openAvers(),this.player.timeTik(),this.restartGame(),document.querySelector(".pause-btn").addEventListener("click",function(n){return e.manageTime(n)})}}])&&u(n.prototype,t),r&&u(n,r),e}();function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.levelChoisen=!1,this.boardToRender=new l}var n,t,r;return n=e,(t=[{key:"handleStartClick",value:function(){this.levelChoisen?this.boardToRender.render():alert("Please select one of the levels"),this.boardToRender.player.shouldTik=!0}},{key:"getQuantity",value:function(e){var n="Easy"===e.currentTarget.innerText?12:"Medium"===e.currentTarget.innerText?24:36;this.boardToRender.cardsQuantity=n,this.levelChoisen=this.levelChoisen?this.levelChoisen:!this.levelChoisen}},{key:"render",value:function(){var e=this;document.querySelector("#root").innerHTML='\n            <div class="start-page">\n                <h1>Memory game</h1>\n                \n                <span>Same... but so different</span>\n                <img src="img/logo-img.png">\n                <p>Please select level of hardness</p>\n                <div class="btns">\n                    <button type="button" class="btn btn-outline-info level-btn easy">\n                        Easy\n                    </button>\n                    \n                    \n                    <button type="button" class="btn btn-outline-info level-btn medium">\n                        Medium\n                    </button>\n                    <button type="button" class="btn btn-outline-info level-btn hard">\n                        Hard\n                    </button>\n                </div>\n                \n                <button type="button" class="btn btn-outline-info btn-lg start-btn">\n                    Start\n                </button>\n            </div>    \n        ',document.querySelectorAll(".level-btn").forEach(function(n){return n.addEventListener("click",function(n){return e.getQuantity(n)})}),document.querySelector(".start-btn").addEventListener("click",function(){return e.handleStartClick()})}}])&&d(n.prototype,t),r&&d(n,r),e}();(new h).render()}]);