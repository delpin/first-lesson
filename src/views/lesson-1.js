import './lesson-1.css';
function Lesson1() {
    return (
        <div className="root">
            <img src="//yastatic.net/q/logoaas/v2/Яндекс.svg?size=25&amp;color=000"></img>

            <h2>Как сделать Яндекс главным по поиску</h2>

            {
            /* 
            --------------------------------------------------
            Создаем вложенность div:section 
            будет индивидуальная стилизация через div>section:nth-child
            --------------------------------------------------
            */
            }
            <div>
                <section>
                    <span>Установить расширение</span>
                </section>

                <section>
                    <span>Устанавливая программу, вы принимаете условия Лицензионного соглашения</span>
                </section> 

                {
                /* 
                -----------------------------------------------------------
                Создаем вложенность section:section 
                будет общая стилизация через section>section
                будет индивидуальная стилизация через section>section>div:nth-child
                -----------------------------------------------------------
                */
                }
                <section>   
                    { 
                    /* Section 1*/
                    }                
                    <section>
                        {/* div 1*/}
                        <div>
                            <img  src="https://avatars.mds.yandex.net/get-lpc/1531919/6a1c901a-ee13-46af-9bb6-08d8e6360e0a/width_360" width="580" height="400"></img>
                        </div>

                        {/* div 2*/}
                        <div>
                            <h4>Установите расширение из&nbsp;Google Chrome Store</h4>
                        </div>   
                    </section>

                    { 
                    /* Section 2*/
                    }    
                    <section>
                        {/* div 1*/}
                        <div>
                            <img  src="https://avatars.mds.yandex.net/get-lpc/1531919/f4b4d03e-934b-4b11-b9de-e2d4e649578f/width_360" width="580" height="400"></img>
                        </div>

                        {/* div 2*/}
                        <div>
                            <h4>Активируйте его, нажав на&nbsp;иконку у адресной строки</h4>
                        </div>    
                    </section>                    

                    { 
                    /* Section 3*/
                    }    
                    <section>
                        {/* div 1*/}
                        <div>
                            <img  src="https://avatars.mds.yandex.net/get-lpc/1520633/3ed38931-24c1-49ed-931e-912985601262/width_360" width="580" height="400"></img>
                        </div>

                        {/* div 2*/}
                        <div>
                            <h4>Спрашивайте у Яндекса на&nbsp;стартовой и в адресной строке</h4>
                        </div>    
                    </section>
                </section>

                <section>                    
                    <div>© 2020 Яндекс</div>
                </section> 
            </div> 

             
                              
        </div>
    );
}

export default Lesson1;