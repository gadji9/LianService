<template>
    <div>
        <div class="container">
            <div class="row row-1">
                <div class="col-sm-12 col-lg-7 d-lg-flex justify-content-lg-center">
                    <h2>Почему <span>выгодно</span> обратиться к нам</h2>
                </div>        
            </div>
                    <div class="row">
                        <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                <img src="../assets/kalendar.jpg" alt="img">
                                <h3 >Ежедневно</h3>
                            </div>
                            <div class="contentofblock">
                                <p>Мы работаем без выходных, семь дней  в неделю, а также в праздничные дни.</p>
                            </div>
                       </div>
                       <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                <img src="../assets/home.jpg" alt="img">
                                <h3 >На дому</h3>
                            </div>
                            <div class="contentofblock">
                            <p>В большинстве случаев, в сложных ситуациях, техника не транспортируется в мастерскую.</p>
                            </div>
                       </div>
                       <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                <img src="../assets/charge.jpg" alt="img">
                                <h3 >Выгодно</h3>
                            </div>
                            <div class="contentofblock">
                            <p>Наши цены доступны абсолютно каждому и являются самыми лучшими в городе.</p>
                            </div>
                       </div>
                       <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                <img id="user_img" src="../assets/user.png" alt="img">
                                <h3 >Профессионально</h3>
                            </div>
                            <div class="contentofblock">
                                <p>У нас работают сертифицированные специалисты с опытом работы более 5 лет.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                <img  src="../assets/plane.jpg" alt="img">
                                <h3 >Быстро</h3>
                            </div>
                            <div class="contentofblock">
                                <p>Мастер приедет в день обращения, а все неполадки будут устранены в максимально сжатые сроки.</p>
                            </div>
                        </div>

                        
                        <div class="col-lg-4 col-6">
                            <div class="headerofblock">
                                    <img src="../assets/blank.jpg" alt="img">
                                    <h3 >Гарантия</h3>
                            </div>
                            <div class="contentofblock">
                                <p>На все виды работ выдаётся гарантия до 12 месяцев в зависимости от степени сложности поломки.</p>
                            </div>
                        </div>
                </div>
                <div class="row row-1">
                    <div class="col-sm-12 hz col-lg-8 d-lg-flex justify-content-lg-center">
                        <h2> Наши <span>услуги</span> </h2>
                    </div>
                </div>
                <div class="justify-content-lg-around row">
                    <div class="selcet-services row col-sm-10 col-lg-12 d-flex justify-content-around">
                        <div v-for="(path, index) in paths" :key=index class="col-6 col-lg-3 services_item mt-5 d-flex flex-column align-items-center">
                            <div>
                                <img :src=path.path :class="path.class" alt="">
                            </div>
                            <div :class="[styles,path.item_class, tablichki]">
                                    <h2 id="toGrowFont-size">{{path.text1}} <br> {{path.text2}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mtop">
                    <div class="aboutText mt-5 col-lg-7 col-sm-11" style="font-size:16px">
                        <h2>О компании</h2>
                        <p>Мы, Лиан-Сервис - молодая компания на рынке Махачкалы, но уже показывающая отличные результаты в сфере обслуживания. Основной нашей целью является облегчение и решение бытовых проблем для экономии вашего времени, денег и энергии.<br> <br>

Наши принципы это: Качество обслуживание Скорость Надёжность Мы дорожим своей репутацией и всегда делаем работу на качество и результат. Нам важно чтобы каждый клиент остался довольным нашим сервисом. Таким образом мы ставим высокую планку уровня сервиса, которым можно будет гордиться.<br> <br>

Наши цены соответствуют заявленным, но всё же зависят от конкретного случая, модели холодильника и степени сложности поломки. Точную стоимость Вам озвучит дежурный мастер по телефону.<br> <br>

Мы на 100% уверены в качестве своих услуг и компетентности персонала - после ремонта Вы получаете официальную гарантию на срок до 12 месяцев, в зависимости от типа поломки, а также клиентскую поддержку по всем интересующим вопросам!</p>
                    </div>
                    <div  class="d-none d-lg-block col-lg-5">
                        <img id="XXLImage" src="../assets/XXL.jpg" alt="">
                    </div>
                </div>
                    <div class="row row-1 ">
                    <div class="col-sm-12 col-lg-8 d-lg-flex justify-content-center">
                        <center><h2>Обслуживаем все районы <span>Махачкалы</span></h2></center>
                    </div>
                </div>
                <div class="row ">
                <div class="col-lg-7 col-12 map_col">
                    <iframe id="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A458a25aea3f9cb97482b267b7681d2f7ab5e9c3ee2f73d9725bfdaf54c668a1c&amp;source=constructor" width="655" height="468" frameborder="0"></iframe>
                </div>   
                    <div class="quality_box col-lg-5 col-sm-12">
                        <div class="quality_item">
                            <div class="items_circle">
                                <img src="../assets/Ring.png" alt="asdasd">
                            </div>
                            <div class="items_text">
                                <p>Точную стоимость вы узнаете, позвонив нам по телефону:</p> <h3>+7 (989) 449-88-47</h3>
                            </div>
                        </div>
                        <div class="quality_item">
                             <div class="items_circle">
                                <img src="../assets/Achieved.png">
                             </div>
                             <div class="items_text">
                                <p>Мы даем гарантию, что цена, которая была озвучена после диагностики, не изменится</p>
                            </div>
                        </div>
                        <div class="quality_item">
                            <div class="items_circle">
                                <img src="../assets/charge.webp" alt="">
                            </div>
                            <div class="items_text">
                                <p>Наши цены доступны каждому</p>
                            </div>
                        </div>
                        <div class=" button_box d-none d-lg-flex justify-content-center">
                            <button @click="ToEmit()"  class="btn-lg btn-warning font-weight-bold">Заказать звонок</button>
                        </div>
                    </div>
                    <div class=" button_box d-sm-flex d-lg-none justify-content-center col-sm-12">
                            <button @click="ToEmit()" class="btn font-weight-bold btn-warning">Заказать звонок</button>
                        </div>
                </div>
                

        </div>

    </div>
</template>

<script>
import waterWarmer from "../assets/WaterWarmer.png"
import Fridge from "../assets/fridge.webp"
import Plita from "../assets/gas_stove_PNG16.png"
import Washer from "../assets/warmer.webp"

    export default {
        data(){
            return{
                paths:[{path:Washer, class:"washer",item_class:"washer_item-text", text1:"Ремонт", text2:"стиральных машин"},{path:Fridge,class:"fridge", item_class:"fridge_item-text", text1:"Ремонт", text2:"холодильников"},{path:Plita, class:"plita", item_class:"plita_item-text", text1:"Ремонт",text2:"газовых плит"},{path:waterWarmer,class:"water-warmer", item_class:"warmer_item-text", text1:"Ремонт", text2:" водонагревателей"}],
                styles:"tablichka bg-warning d-flex justify-content-center",
                tablichki:"tablichki"
            }
        },
        methods:{
            ToEmit(){
                this.$emit('accepted')
            }
        }
        
    }
</script>

<style>
.hz{
    margin-bottom:-50px;
}
*{
    font-family: 'EXO', sans-serif;
}
@media screen and (max-width:768px){
.map_col{
    overflow:hidden;
}
#map{
    width:100%;
}
.services_item{
    margin-bottom:35px !important;
}
.tablichki{
    display:flex;
    text-align:center;
    border-radius:10px;
    width:195px;
    height:55px;
    top:90%;
    position:absolute;
}
.tablichki h2{
    font-size:20px;
 
}
.water-warmer{
width:240px;
}
.plita{
    width:180px;
    z-index:-1;
}

.button_box{
    width:100%;
    margin-top:20px;
}
.button_box button{
    width:70%;
}
.quality_box{
    display:flex;
    align-items:space-between;
}
.items_text{
    font-size:14px;
    line-height:25px;
    margin-left:13px;

}
.items_text h3{
    font-size:20px;
    font-weight:bold;
    color:rgb(23,162,184);
    margin-top:-15px;
}
.quality_item{
    display:flex;
    height:135px;
    flex-direction:column;
    width:50%;
}
.quality_item:nth-child(3n+0) {
    display:none;
}
.items_circle{
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:60px;
    max-height:60px;
    min-height:60px;
    min-width:60px;

    background-color:rgb(23,162,184);

    border-radius:50%;

}
.items_circle img{
    max-width:30px;
    max-height:30px;
    
    display:inline-box;
}
.row-1{
    margin: 40px 0 20px 0;
    justify-content:center;
}
.col-sm-12 h2{
    font-size:25px;
    font-weight:bold;
    

}
.col-sm-12 {
    display:flex;
    justify-content:center;

}

.col-sm-12 span{
    color:rgb(23,162,184);

}
.col-6{
    margin:0 0 15px 0 !important;
}
#user_img{
    width:42px;
}
.headerofblock{
    justify-content: flex-start;
}
.headerofblock h3{
    font-weight:bold;
    font-size:24px;
}
.contentofblock p{
    font-size:14px;
}
}
@media screen and (min-width: 1000px){
.rounded-0{
    overflow:hidden;
}
.tablichki{
    display:flex;
    text-align:center;
    align-items:center;
    border-radius:10px;
    width:225px;
    height:55px;
    top:90%;
    position:absolute;
}
.tablichki h2{
    font-size:20px;
 
}
.water-warmer{
width:240px;
}
.plita{
    width:180px;
    z-index:-1;
}
tr{
    padding:0 !important;
    height:10px !important;
}
.quality_box{
    display:flex;
    flex-direction:column;
}
.items_text{
    margin-left:30px;
    font-size:19px;
    line-height:25px;
}
.items_text h3{
    font-size:30px;
    font-weight:bold;
    color:rgb(23,162,184);
    margin-top:-15px;
}
.quality_item{
    display:flex;
    height:135px;
}
.items_circle{
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:75px;
    max-height:75px;
    min-height:75px;
    min-width:75px;

    background-color:rgb(23,162,184);

    border-radius:50%;

}
.items_circle img{
    max-width:45px;
    max-height:45px;
    
    display:inline-box;
}

.table{
}
.table-box{
}
.row-1{
    margin: 40px 0 0 0;
    justify-content:center;
}
.row-1 .col-lg-7{
    margin: 20px 0 30px 0;
}
.row-1 span{
    color:rgb(23,162,184);
}
.col-4{
    margin-top:20px !important;
}
.col-lg-8 h2{
    margin-top:65px ;
    margin-bottom:50px;
}
#user_img{
    width:42px;
}
.headerofblock{
    display:flex;
    justify-content: flex-start;
}
.headerofblock h3{
    margin-left:10px;
    font-size:30px;
}
.contentofblock p{
    font-size:17px;
}
#XXLImage{
    width:570px;
    transform:translate(-6%,0)
}
.container{
    overflow:hidden
}
.mtop{
    margin-top:120px;
}
}

</style>