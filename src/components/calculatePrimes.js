import React, { useState, useMemo } from "react";

function calculatePrimes(limit) {
  console.log(`limit: ${limit}에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    console.log("소수 연산 종료");
  }
  return primes;
}

export default function PrimeCalculator(props) {
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);

  /*  const primes = calculatePrimes(limit); */
  const primes = useMemo(() => calculatePrimes(limit), [limit]);
  //useMemo : 두번째 인자 limit값이 바뀔때만 첫번째 함수를 실행시켜
  // count변경시 랜더링될때 계산함수가 다시 실행되는것을 막는다. => 성능최적화
  // 시간이 조금 걸린다 하는 부분에 사용하면 된다.
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={addCount}>카운트 증기</button>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수 : {primes.join(", ")}</p>
    </div>
  );
}
