import styled from "styled-components"

export const MainPostsComments = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
padding-top: 10vh;


.header{
position: absolute;
left: 0%;
right: 0%;
top: 4.07%;
bottom: 91.3%;
background: #EDEDED;
}

.LogoPequena{
margin-left: 46vw;
}

.BotaoLogout{
margin-left: 84vw;
margin-bottom: 19vh;  
}


.InputComment{
font-size: 18px;
box-sizing: border-box;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #EDEDED;
border: 1px solid #D5D8DE;
border-radius: 4px;
margin-top: 4vh;
height: 16vh;
width: 88vw;
padding-left: 2vw;

}



.BotaoResponder{
width: 350px;
height: 70px;
left: 29px;
top: 587px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 12px;
border: none;
margin-top: 1vh;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
cursor: pointer;
}

.Barra{
margin-top: 3vh;
margin-bottom: 3.5vh;
width: 350px;
}

.NomeCriador{
font-size: 12px;
font-family: IBM Plex Sans;
}

.Content{
font-size: 18px;
font-family: IBM Plex Sans;
}

.BarraInferior{
margin-top: 10vh;
margin-bottom: 2vh;
}

.scrool{
overflow-y: scroll;
}

.img{
height: 14px;
width: 14px;
}

.imgContador{
height: 14px;
width: 15px; 
}

.like{
margin-left: 1vw;
margin-top: 6vh;  
}

.BotaoDislike{
margin-left: 1vw;
margin-top: 6vh;
font-size: 14px;
}

.BotaoComentar{
margin-left: 4vw;
margin-top: 6vh;
font-size: 14px;
}



`


export const CardComments = styled.div`
box-sizing: border-box; 
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;  
width: 88vw;
height: 20vh;   
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
margin-top: 1vh;

`

export const CardPost = styled.div`
box-sizing: border-box; 
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;  
width: 88vw;
height: 20vh;   
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
margin-top: 1vh;
`

export const Botoes = styled.div`
display: flex;
margin-top: 5vh;








`