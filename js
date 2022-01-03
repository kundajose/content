function hackerSpeak(str){
    for (var i=0; i <str.length;i++)
      {
    if (str[i]="a")
       {str[i].replace("a",4)}
    else if (str[i]="e")
        {str[i].replace("e",3)}
    else if (str[i]="i") 

     {str[i].replace("i",1)}
    else if (str[i]="o")
          {str[i].replace("o",0)}
    else if (str[i]="s")
          {str[i].replace("s",5)}
    else {}
        }
    return str
  }