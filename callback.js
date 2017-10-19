// https://www.webpackbin.com/bins/-KwodVbQEgsAqhUiUk6N
const [a,b,c] = [5,6,7];console.time('AllTime');console.time('a');void setTimeout(()=>(console.timeEnd('a')||console.time('b')||setTimeout(()=>(console.timeEnd('b')||console.time('c')||setTimeout(()=>(console.timeEnd('c')||console.timeEnd('AllTime')),c*1000)),b*1000)),a*1000);
