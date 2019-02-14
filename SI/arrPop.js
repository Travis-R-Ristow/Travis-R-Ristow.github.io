function arrPop(arr, index){
  for(var i = index; i < arr.length; i++){
    var temp;
    if(arr[i] != arr[arr.length-1]){
      temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
    }else{
      arr.pop();
    }
  }
}
