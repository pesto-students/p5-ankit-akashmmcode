pairdiff = (a,b)	=>{
    for(let i=0; i<a.length;i++){
      if(a.includes(b+a[i])){
        return 1;
      }
    }
    return 0;
  }


  console.log(pairdiff([5, 10, 3, 2, 50, 80],78));