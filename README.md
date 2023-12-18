<!doctype html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="site pour nourriture à manger.">
        <meta name="robots" content="index">
        <meta name="author" content="FAMILU STORE">
        <meta name="keywords" content="familu, store, familu-store, boutique,">
        <title>FAMILU STORE</title>
        <style>
            #soif{
                background-color: brown;
            }
            #soif:hover{
                background-color: black;
            }
            body{
                display: flexbox;
                background-color: cyan;
                text-align: center;
            }
             #dejeuner{
             background-color: blue;
            }
            #grignoter{
                background-color: chocolate;
            }
            #grignoter:hover{
                background-color: black;
            }
            #manger{
                background-color: indigo;
            }
            #manger:hover{
                background-color: black;
            }
            #propreté{
                background-color: rgb(50, 93, 7);
            }
            #propreté:hover{
                background-color: black;
            }
            #dejeuner{
                background-color: blue;
            }
            #dejeuner:hover{
                background-color: black;
            }
            #h1{
                color: darkgreen;
                text-align: center;
                font-size: 70px;
            }
            button{
                width: 90%;
                height: 100px;
                text-align: center;
                background-color: brown;
                color: aliceblue;
                font-size: 180%;
                border: transparent;
                border-radius: 10px;
            }
            #blanc,#noir {
                background-color: black;
            }
            #blanc:hover{
                background-color: cyan;
            }
            #noir:hover {
                background-color: navy;
            }
        </style>
        
        <script src="index.js"></script>
    </head>
    <BODY>
        <form action="">
            <input type="search">
            <input type="submit" name="" id="">
        </form>
       <P style="text-align: end;border-radius: 50px;" > <button class="g" id="noir" style="width: 10%; height: 10%;" onclick="hello()">nuit</button> 
        <button class="g" id="blanc"  style="width: 10%; height: 10%;" onclick="hello() ">jour</button></P>
        <h1 id="h1">BIENVENUE CHEZ FAMILU STORE</h1>
       <p> <a href="J'ai soif.html"><button id="soif">VOUS AVEZ SOIF? ALORS CLIQUEZ ICI</button></a> <br></p>
        <p><a href="je veux dejuner.html"><BUtton id="dejeuner">VOUS VOULEZ PETIT DEJEUNER? ALORS CLIQUEZ ICI</BUtton></a> <br></p>
        <p><a href="je veux grignoter.html"><BUTton id="grignoter">VOUS VOULEZ GRIGNOTE? ALORS CLIQUEZ ICI</BUTton></a> <br></p>
        <p><a href="je veux manger.html"><BUtton id="manger">VOUS VOULEZ MANGER? ALORS CLIQUEZ ICI</BUtton></a> <br></p> 
        <p><a href="je veux faire la proprete.html"><button id="propreté">VOUS VOULEZ FAIRE LA PROPRETE? ALORS CLIQUEZ ICI</button></a> <br></p>
    </BODY>
</html
