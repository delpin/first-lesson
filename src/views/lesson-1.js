import './lesson-1.css';
function Lesson1() {
    return (
        <div className="root">
            <div name="header">
                <div name="header_text"><span><a href ="localhost" title="Яндекс">Яндекс</a></span></div>
            </div>
            <div name="content">
                <div name = "content_level-1">
                    <section>
                        <div>
                            <div><h1>Как сделать Яндекс главным по поиску</h1></div>
                            <div name="content_button-link">
                                <span>
                                    <label>Установить расширение</label>
                                </span>                                
                            </div>
                        </div>
                    </section>
                </div>
                <div name = "content_level-2">
                    <div name="content_button-desc">
                        <span>Устанавливая программу, вы принимаете условия </span>
                        <a href="localhost">Лицензионного соглашения</a>
                    </div>
                </div>
                <div name = "content_level-3">
                    <section name= "intsr">
                        <div>
                            <section name="instr_step-1">
                                <div name="instr-img"><img alt="img1" src="https://avatars.mds.yandex.net/get-lpc/1531919/6a1c901a-ee13-46af-9bb6-08d8e6360e0a/width_360"></img></div>
                                <div name="instr-desc"><label>Установите расширение из Google Chrome Store</label></div>
                            </section>
                            <section name="instr_step-2">
                                <div name="instr-img"><img alt="img2" src="https://avatars.mds.yandex.net/get-lpc/1531919/f4b4d03e-934b-4b11-b9de-e2d4e649578f/width_360"></img></div>
                                <div name="instr-desc"><label>Активируйте его, нажав на иконку у адресной строки</label></div>
                            </section>
                            <section name="instr_step-3">
                                <div name="instr-img"><img alt="img2" src="https://avatars.mds.yandex.net/get-lpc/1520633/3ed38931-24c1-49ed-931e-912985601262/width_360"></img></div>
                                <div name="instr-desc"><label>Спрашивайте у Яндекса на стартовой и в адресной строке</label></div>
                            </section>
                        </div>
                    </section>
                </div>                
            </div>
            <div name="footer">
                <div name="footer_text"><span><a href ="localhost" title="Яндекс">© 2020 Яндекс</a></span></div>
            </div>
        </div>
    );
}

export default Lesson1;