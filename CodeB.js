var n_Fil = 5;
var n_Col = 5;
var matriz = new Array(n_Fil);
var matrizX = new Array(n_Fil);
var i = 0;
var j = 0;
var indexi = 0;
var indexj = 0;

function crearM(){
    for (i = 0; i < n_Fil; i++){
        matriz[i]=new Array(n_Col);
        matrizX[i]= new Array(n_Col);
    }
}

function rellenar1(){
    matriz[0][0]="0";
    matriz[0][1]="0";
    matriz[0][2]="0";
    matriz[0][3]="0";
    matriz[0][4]="0";
    matriz[1][0]="0";
    matriz[1][1]="0";
    matriz[1][2]="1";
    matriz[1][3]="0";
    matriz[1][4]="0";
    matriz[2][0]="0";
    matriz[2][1]="0";
    matriz[2][2]="1";
    matriz[2][3]="0";
    matriz[2][4]="0";
    matriz[3][0]="0";
    matriz[3][1]="0";
    matriz[3][2]="1";
    matriz[3][3]="0";
    matriz[3][4]="0";
    matriz[4][0]="0";
    matriz[4][1]="0";
    matriz[4][2]="0";
    matriz[4][3]="0";
    matriz[4][4]="0";
}

/*function rellena(){
    for(i = 0; i < n_Fil; i++){
        for(j = 0; j < n_Col; j++){
            matriz[i][j] = 0;
        }
    }
}*/

function imprimir(){
    for ( i=0; i<n_Fil; i++)	{
        for ( j=0; j <matriz[i].length; j++)	{
        }
        console.log( matriz[i] + " ");
    }
    console.log("__________");
}

function copiar (origen, destino) {
    for ( i = 0; i < n_Fil; i++) {
         for ( j = 0; j < n_Col; j++) {
              destino[i][j] = origen[i][j];
         }
    }
}

function algoritmo(){
    for ( i = 0; i < n_Fil; i++) {
        for ( j = 0; j < n_Col; j++) {
            var casillas_on = 0;

            if ( (i-1>0) && (j-1>0) && (matriz[i-1][j-1]==1) ) {    casillas_on++;  }
            if ( (j-1>0) && (matriz[i][j-1]==1) ) {     casillas_on++;  }
            if ( (i+1<n_Fil) && (j-1>0)&& matriz[i+1][j-1]==1 ) {   casillas_on++;  }
            if ( (i-1>0) && (matriz[i-1][j]==1) ) {     casillas_on++;  }
            if ( (i+1<n_Fil) && (matriz[i+1][j]==1) ) {     casillas_on++;  }
            if ( (i-1>0) && (j+1<n_Col) && (matriz[i-1][j+1]==1) ) {    casillas_on++;  }
            if ( (j+1<n_Col) && (matriz[i][j+1]==1) ) {     casillas_on++;  }
            if ( (i+1<n_Fil) && (j+1<n_Col) && (matriz[i+1][j+1]==1) ) {    casillas_on++;  }

            // Condiciones de vida.
            if ( (matriz[i][j]==1 && casillas_on==2)|| (matriz[i][j]==1 && casillas_on==3) ){
                    matrizX[i][j]=1;        // sigue viva
            }else if(matriz[i][j]==0 && casillas_on==3){
                    matrizX[i][j]=1;        //nace
            }else{
                matrizX[i][j]=0;            // muere o permanece muerta
            }
        }
    }
    copiar (matrizX, matriz);
    imprimir();
}

function correr(){  algoritmo(matriz,matrizX);  }
crearM()
rellenar1()
