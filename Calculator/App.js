import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {


constructor(){
  super( )
  this.state={
    resultText: "",
    calculationText: "",
  }
  this.operations = ["C",'+', '-', '*', '/'];
}
calculateResult(){
  const text = this.state.resultText
  console.log(text)
  eval(text)
  this.setState({
    calculationText: eval(text)
  })
}
buttonPressed(text){
console.log(text)



if(text == '='){
  return this.validate() && this.calculateResult()
}
this.setState({
  resultText: this.state.resultText+text
})
}
validate(){
  const text = this.state.resultText
  switch(text.slice(-1)){
   // case'.':
    case'+':
    case'-':
    case'*':
    case'/':
      return false
   

    case'.':{
       let text = this.state.resultText.split('')
    // text.split
    text.pop()
    this.setState({
      resultText: text.join('')
    })
    
    }
  }
  return true
}

operate(operation){
 
  switch(operation){
    
    case "C":{
    let text = this.state.resultText.split('')
    // text.split
    text.pop()
    this.setState({
      resultText: text.join('')
    })
    
  }
  break
  case '+':{
     const lastChar = this.state.resultText.split('').pop()
     if(this.operations.indexOf(lastChar) > 0){return}
    if(this.state.text==""){return}
    this.setState({
      resultText: this.state.resultText + operation
    })
  }
  break
   case '-':{
     const lastChar = this.state.resultText.split('').pop()
     if(this.operations.indexOf(lastChar) > 0){return}
    if(this.state.text==""){return}
    this.setState({
      resultText: this.state.resultText + operation
    })
  }
  break
   case '*':{
     const lastChar = this.state.resultText.split('').pop()
     if(this.operations.indexOf(lastChar) > 0){return}
    if(this.state.text==""){return}
    this.setState({
      resultText: this.state.resultText + operation
    })
  }
  break
   case '/':{
     const lastChar = this.state.resultText.split('').pop()
     if(this.operations.indexOf(lastChar) > 0){return}
    if(this.state.text==""){return}
    this.setState({
      resultText: this.state.resultText + operation
    })
  }
}
}


  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    
    let ops = [];
    for (let i = 0; i < this.operations.length; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn} onPress={() =>this.operate(this.operations[i])}>
          <Text style={(styles.btntext, styles.white)}>{this.operations[i]}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}> {this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  calculationText: {
    fontSize: 20,
    color: 'black',
  },
  resultText: {
    fontSize: 30,
    color: 'Black',
  },
  btntext: {
    fontSize: 35,
    color:"white",
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  white: {
    color: 'white',
    fontSize:25,
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#636363',
  },
});
