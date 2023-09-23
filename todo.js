let todo =[];
//let req = prompt('Enter Your request');

while(true){
    let req = prompt('Enter Your request');

    if(req==='list') {
        console.log("showing the data");
        for(let index=0; index<todo.length; index++){
            prompt(index,todo[index]);
        }
    }

    else if (req==='quit'){
        console.log('going back');
        break;

    } else  if (req==='add'){

        while(true){
            
        let task =prompt("enter the task");
        if(task=='back') {
            break;
        }
        todo.push(task);
        console.log(task," ","---_task_adeed---_");
        
        
    }
    }

     else if(req==='delete'){

        let index = prompt("enter index no");

        todo.splice(index,1);
        console.log(todo[index-1],"task",'deleted successfully');

    }else{
        console.log('Invalid Request');
    }
    

   



}
