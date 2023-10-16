
function NavBar({ clickPrev, clickNext, clickRdm, disabledPrev, disabledNext, disabledRdm }) {
return (
  <div className="pkmnNav">
        <button className="nextBtn" onClick={clickNext} disabled={disabledNext}>
          Next
        </button>
        <button className="prevBtn" onClick={clickPrev} disabled={disabledPrev}>
          Previous
        </button>
        <button className="randBtn" onClick={clickRdm} disabled={disabledRdm}>
          Random
        </button>
        </div>
  );
}


export default NavBar;