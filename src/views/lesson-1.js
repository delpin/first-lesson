import "./lesson-1.css";
function Lesson1() {
  return (
    <div className="root">
      <div name="header">
        <span>Яндекс</span>
      </div>
      <div name="content">
        <div name="content_level-1">
          <span>Как сделать Яндекс главным по поиску</span>
        </div>
        <div name="content_level-2">
          <section>
            <div>
              <div name="content_button-link">
                <button>
                  <span>Установить расширение</span>
                </button>
              </div>
              <div name="content_button-desc">
                <span>Устанавливая программу, вы принимаете условия </span>
                <a href="localhost"> Лицензионного соглашения</a>
              </div>
            </div>
          </section>
        </div>

        <div name="content_level-3">
          <section name="intsr">
            <div>
              <section name="instr_step-1">
                <div name="instr-img" />

                <label> Установите расширение из Google Chrome Store</label>
              </section>
              <section name="instr_step-2">
                <div name="instr-img"></div>

                <label>
                  {" "}
                  Активируйте его, нажав на иконку у адресной строки
                </label>
              </section>
              <section name="instr_step-3">
                <div name="instr-img"></div>

                <label>
                  {" "}
                  Спрашивайте у Яндекса на стартовой и в адресной строке
                </label>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div name="footer">
        <label>© 2020 Яндекс</label>
      </div>
    </div>
  );
}

export default Lesson1;
