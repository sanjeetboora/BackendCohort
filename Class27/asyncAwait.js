

async function fun(){
    const fetchPromise = await fetch('https://www.boredapi.com/api/activity');

  console.log("before");
  console.log(fetchPromise);
  console.log("after");
}

fun();