import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Window 2.2
import "CodeB.js" as Logic

Window {
    visible: true
    width: 300; height: 200; color: "black"
    Timer {
        id: secuencia
        interval: 1000;  running: false; repeat: true
        onTriggered:  {     Logic.correr()  }
    }

    Button{
        x:113; y:70
        text: "Run"
        onClicked: {    secuencia.running = true  }
    }

    Button{
        x:113; y:100
        text: "Stop"
        onClicked: {    secuencia.running = false  }
    }
}//FIN Window
