export default function Home() {
  return (
    <main style={{ padding: '0 0.5rem', width: '375px', border: '1px solid #999999', margin: '0 auto' }}>
      <section>
        <input type="text" placeholder="레시피 검색"/>
      </section>
      <div>
        <button>장보러가기</button>
        <button>냉장고</button>
      </div>
    </main>
  );
}
