import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const MainHeader = () => {
  return (
    <main className="headerSection">
      <section className="headerTitle">
        <h2>메추리알</h2>
      </section>
      <section style={{position:'relative'}}>
        <input className="headerSearch" type="text" placeholder="레시피 검색" />
        <IoSearchSharp className="headerSearchIcon"/>
      </section>
      <button className="headerChatIcon">
        <IoChatbubbleEllipsesOutline/>
      </button>
    </main>
  );
};

export default MainHeader;
