class Stack {
    constructor() {
      this.st = [];
    }
  
    push(element) {
      this.st.push(element);
    }
  
    pop() {
      this.st.pop();
    }
  
    peek() {
      return this.st[this.st.length - 1];
    }
  
    searchElement(element) {
      for (let i = 0; this.st.length; i++) {
        if (element == this.st[i]) {
          return i;
        }
      }
      return -1;
    }
  }
  
  const l1 = new Stack(1);
  
  let openArr = ["[", "{", "("];
  let closeArr = ["]", "}", ")"];
  
  let br = "{[]}{}{()()}{{}}";
  
  let bolVal = console.log(closeArr.includes("{"));
  let bolCorrect = true;
  
  for (let i = 0; i < br.length; i++) {
    
    if (openArr.includes(br[i])) {
      l1.push(br[i]);
    } else {
     
      let ind=closeArr.indexOf(br[i])
      if (l1.peek() == openArr[ind]) {
        
        l1.pop();
      } else {
        bolCorrect = false;
        //break;
      }
    }
  }
  
  console.log("bolCorrect" + bolCorrect);