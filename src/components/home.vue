<template>
    <div>
    <form   ref="allform" class=" allform" @submit="SendEmail"  method="GET" action="#">
        <transition name="fade">
            <div v-if="contopen" v-click-outside="onClickOutside" :class="[frombox,isshadow]">
            <div>
                <p id="conttext">Здравствуйте, оставьте Ваш телефон! Мастер перезвонит в течение 5 минут и рассчитает точную стоимость ремонта!</p>        
            </div>
                <div class="contactnbox">
                    <the-mask   ref="maskform" value=" " id="message" name="message" class="form form-control-lg form-control" placeholder="+7 (999)999-99-99" :mask="['+7(###)-###-##-##',]" />
                    <button  type="submit" class="font-weight-bold btn btn-info btn-lg fw-bold clr-1" style="margin-top:10px">Жду звонка</button>                    
                </div>
            </div>
        </transition>
        </form>
        <div  class="px-0 headerContent">
        
            <div  class="px-0,container-fluid">
                <div v-if="mobile===false"  class="rowbox row">
                    <div class="linecolor mx-0">
                        <div class="textbox">
                            <div>
                                <h1  id="pomosh">
                                        <p>Ремонт бытовой техники</p> на дому в Махачкале
                                </h1>
                            </div>
                            <div class="mline_item-2">
                            <div>97% поломок исправляем в день Вашего</div> <div>обращения и даём гарантию до 12 месяцев</div>
                            </div>
                        </div>
                        <div class="contactbox" style="">
                            <div class="nomer">
                                <strong style="color:white" class="nomertext">+7 (989) 449-88-47</strong><p id="ezhednevno">Работаем ежедневно с 8:00 до 20:00</p>
                            </div>
                            <div class="zayavkabox">
                                <button  @click="OpenCont()" class="font-weight-bold btn btn-info btn-lg" style="width:300px; height:60px">Оставить заявку</button>                    
                            </div>
                        </div>
                    </div>
                    <img class="wonder mx-0" src="../assets/billionphotos1641695min.png" alt="">
                    <div class="picture mx-0 p-0">
                        <img class="GKuhnya" src="../assets/golubaya-kukhnya_5f6d7b823245b.jpg" alt="">
                    </div>
                </div>
                <div class="nopad" v-else>
                    <div class="mlinecolor">
                        <div>
                            <h1 id="mremont">
                                <p>Ремонт бытовой техники<p/> <p>на дому в Махачкале</p>
                            </h1>
                            
                        </div>

                        <p class="mline_item-2">
                            97% поломок исправляем в день Вашего <br/>обращения и даём гарантию до 12 месяцев
                        </p>
                        <div class="m_mline_item-3">
                            <div class="mnomer">
                                <strong class="mnomertext">+7 (989) 449-88-47</strong><p id="ezhednevno">Работаем ежедневно с 8:00 до 20:00</p>
                            </div>
                        </div>
                        
                        <div class="empty">
                        
                        </div>
                    </div>
                    <div id="buttonandwonder">
                            <img class="mwonder mx-0" src="../assets/billionphotos1641695min.png" alt="">
                            <div class="mzayavkabox">
                                    <button @click="OpenCont()" class="mbutton font-weight-bold btn btn-primary btn-lg" style="width:250px; height:55px">Оставить заявку</button>                    
                            </div>
                        </div>
                    <div class="mpicturebox mx-0 my-0 ">
                        <img id="mGkuhnya" src="../assets/golubaya-kukhnya_5f6d7b823245b.jpg" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
    <center @accepted="OpenCont()"/>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

import center from './center'
import vClickOutside from 'v-click-outside'
import '@/assets/css/homecomp.css'

    export default {
        components:{
            center
        },
        directives: {
            clickOutside: vClickOutside.directive
        },
        data(){
            return{
                frombox:'frombox',
                cf:'container-fluid',
                px:'px',
                contopen:false,
                isdisabled: true,
                may: false,
                mobile: false,
                number: '',
                isshadow:'some'
            }
        },
        methods:{
            retZ(){
                
            },
            onClickOutside () {
                // if(this.may){
                //     this.opacityp = 0;
                // this.isdisabled=true;
                // }
                // console.log('was')
                // this.ToUnMay();
                this.contopen=false;
            },
            OpenCont(){
                this.contopen=true;
                this.isshadow='darking'
                console.log('asdasd')
                
            },
            SendEmail(e){
                e.preventDefault();
                emailjs.sendForm('service_nym5ovo','template_b1ndc7d',e.target,'user_fB1X7i0mBgLzjZ5hOqVgS')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    window.location.reload()
                    }, function(error) {
                    console.log('FAILED...', error);
                    })
                // if(this.number.length != 10){
                //     console.log('net')
                // }
                // else{
                // console.log('da')
                // }
                    
            }
        },
        created(){

            if(document.documentElement.clientWidth <= 768){
                this.mobile = true
            } 
            window.addEventListener('resize' , () => {
            if(document.documentElement.clientWidth <= 768){
                this.mobile = true
                console.log(this.mobile)
            } 
            else{
                console.log(this.mobile)
                
                this.mobile = false
            }
            })
        }
        
    }
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.headerContent{
    overflow:hidden;
}
.darking {
  box-shadow: 0 0 0 1000px rgba(0, 0, 0,0.4);
}
@media screen and (max-width: 768px){
#mremont{
    margin-top:20px;
}
.m_mline_item-3{
    display:flex;
    justify-content:flex-start;
    width:60%;
    height:170px;
}
.mline_item-2{
    flex-basis: 130px;
    font-weight:100 !important;
    font-size:16px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
}
.empty{
    min-width:350px;
min-height:100px;
}
.headerContent{
max-height:530px;
}
#buttonandwonder{
    display:flex;
    position:absolute;
    min-width:500px;
    justify-content:space-between;
    top:50%;
    left:50%;
    transform:translate(-50%,0);
    z-index:5;
    padding:0;
}   .mbutton{
        position:absolute;
        top:25%;
        left:28%;
        background-color:rgb(51,100,205) !important;
    }       .mwonder{
                width:200px;
                top:85%;
            }

#conttext{
    font-size: 19px;
}

.frombox{
    position:fixed;
        z-index: 100;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    border-radius:12px;
    width:400px;
    height:300px;
    background-color:white;
    padding:10px;
    display:flex;
    z-index:6;
    justify-content:space-around;
    flex-direction:column;
text-align:center;

}
.mnomer{
    background-color: rgb(17, 17, 17);
    border-radius: 8px;
    color: white;
    opacity: 0.8;
    width:100%;
    max-height:70px;
    

}
.mnomertext{
    font-size:20px;
}
.mpicturebox{
border:none;
padding:0;
margin:0;
max-width:505px;
}
#mremont{
display:flex;
flex-direction:column;
align-items:center;

line-height:10px;
font-size:25px;
}
.mlinecolor{
    border-radius:12px;
    display:flex;
    text-align:center;
    align-items:center;
    flex-direction:column;
justify-content:space-around;
color:white;
z-index:5;
padding:0;
margin:0;
position:absolute;
left:50%;
transform:translate(-50%,0);
height: 530px;
width:100%;
background-color: rgba(48,53,58,0.7);
}
#mGkuhnya{
transform:translate(-33%,0);
width:1000px;
}
.nopad{
position:relative;
border:none;
margin:0;
padding:0;
width:100%;
}
.mpicutebox{
    padding:0;
}


}



body{
    font-family: "Futura PT Book";  
    line-height:10px;
}
@font-face {
font-family: "Futura PT Book";  
src: url('../assets/futura-pt-book.ttf') format("truetype"); 
font-style: normal; 
font-weight: bold;
 }
 #conttext{
-moz-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
 }


</style>