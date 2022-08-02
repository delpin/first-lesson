import "./lesson-1.css";
function Lesson1() {
  return (
    <div className="root">
      <div name="header">
        <span>Яндекс</span>
      </div>
      <div name="head">
        <div name="head-1">
          <span>Как сделать Яндекс главным по поиску</span>
        </div>
        <div name="head-2">
          <section>
            <div>
              <div name="Button1">
                <button>
                  <span>Установить расширение</span>
                </button>
              </div>
              <div name="Notification">
                <span>Устанавливая программу, вы принимаете условия Лицензионного соглашения</span>
              </div>
            </div>
          </section>
        </div>

        <div name="centre">
          <section name="intsr">
            <div>
              <section name="fst-image">
                <div name="instr-img" />
                <p> Установите расширение из Google Chrome Store</p>
              </section>
              <section name="scnd-image">
                <div name="instr-img"></div>
                <p>Активируйте его, нажав на иконку у адресной строки</p>
              </section>
              <section name="last-image">
                <div name="instr-img"></div>
                <p>Спрашивайте у Яндекса на стартовой и в адресной строке</p>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div name="end-page">
        <p>© 2020 Яндекс</p>
      </div>
    </div>
  );
}

export default Lesson1;
